import { describe, it, expect } from "vitest";
import { decideAccess } from "@/lib/access";

const admin = { email: "a@b.c", role: "admin" as const };
const user = { email: "u@b.c", role: "user" as const };

describe("decideAccess", () => {
  it("sends anonymous visitors to the login page for recipe pages", () => {
    expect(decideAccess("/recipes/sorghum-jowar-bhakri", null)).toBe("login");
    expect(decideAccess("/", null)).toBe("login");
  });

  it("lets anonymous visitors open the login page and login API", () => {
    expect(decideAccess("/login", null)).toBe("allow");
    expect(decideAccess("/api/login", null)).toBe("allow");
    expect(decideAccess("/api/logout", null)).toBe("allow");
  });

  it("lets signed-in users browse recipes", () => {
    expect(decideAccess("/recipes", user)).toBe("allow");
    expect(decideAccess("/millets/pearl-millet", user)).toBe("allow");
  });

  it("forbids regular users from the admin area", () => {
    expect(decideAccess("/admin", user)).toBe("forbidden");
    expect(decideAccess("/admin/users", user)).toBe("forbidden");
  });

  it("lets admins into the admin area", () => {
    expect(decideAccess("/admin", admin)).toBe("allow");
  });
});
