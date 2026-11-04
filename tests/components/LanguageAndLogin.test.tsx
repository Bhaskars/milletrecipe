import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider, LanguageSwitcher } from "@/components/LanguageProvider";
import { RecipeBrowser } from "@/components/RecipeBrowser";
import { LoginForm } from "@/components/LoginForm";
import { RECIPES } from "@/data";

afterEach(() => {
  vi.unstubAllGlobals();
  window.localStorage.clear();
});

describe("language switcher", () => {
  it("starts in English", () => {
    render(
      <LanguageProvider>
        <LanguageSwitcher />
        <RecipeBrowser recipes={RECIPES.slice(0, 3)} />
      </LanguageProvider>,
    );
    expect(screen.getByRole("combobox", { name: "Language" })).toHaveValue("en");
    expect(screen.getByRole("button", { name: "All regions" })).toBeInTheDocument();
  });

  it("switches the interface to Tamil", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <LanguageSwitcher />
        <RecipeBrowser recipes={RECIPES.slice(0, 3)} />
      </LanguageProvider>,
    );
    await user.selectOptions(screen.getByRole("combobox", { name: "Language" }), "ta");
    expect(screen.queryByRole("button", { name: "All regions" })).not.toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "மொழி" })).toHaveValue("ta");
  });
});

describe("login form", () => {
  it("shows an error when the credentials are rejected", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 401 })));
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <LoginForm />
      </LanguageProvider>,
    );
    await user.type(screen.getByLabelText("Email"), "x@example.com");
    await user.type(screen.getByLabelText("Password"), "bad");
    await user.click(screen.getByRole("button", { name: "Log in" }));
    expect(await screen.findByRole("alert")).toHaveTextContent("Invalid email or password.");
  });

  it("posts the typed credentials to the login API", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 401 }));
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <LoginForm />
      </LanguageProvider>,
    );
    await user.type(screen.getByLabelText("Email"), "x@example.com");
    await user.type(screen.getByLabelText("Password"), "pw");
    await user.click(screen.getByRole("button", { name: "Log in" }));
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/login",
      expect.objectContaining({ method: "POST", body: JSON.stringify({ email: "x@example.com", password: "pw" }) }),
    );
  });
});
