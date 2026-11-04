import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand">
          MilletRecipe
        </Link>
        <nav aria-label="Main">
          <Link href="/recipes">All recipes</Link>
        </nav>
      </div>
    </header>
  );
}
