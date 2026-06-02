import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/buy", label: "Buy" },
  { to: "/rent", label: "Rent" },
  { to: "/developments", label: "New\u00A0Developments" },
  { to: "/about", label: "About" },
  { to: "/agents", label: "Agents" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

function getLogoLabel(searchStr: string) {
  const name = new URLSearchParams(searchStr).get("n")?.trim();

  if (!name) {
    return "Softsuite";
  }

  return name.replace(/[-_]+/g, " ").slice(0, 40);
}

function Logo({ label }: { label: string }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-accent">
        <path d="M3 20V11l9-7 9 7v9" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 6l2-2 2 2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="font-serif text-lg tracking-[0.3em] uppercase">{label}</span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const searchStr = useLocation({ select: (location) => location.searchStr });
  const logoLabel = getLogoLabel(searchStr);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-background/85 backdrop-blur-xl border-b border-border ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-luxury flex items-center justify-between gap-4 xl:gap-4">
        <div className={`${scrolled ? "text-foreground" : "text-foreground"} shrink-0`}>
          <Logo label={logoLabel} />
        </div>

        <nav className="hidden xl:flex flex-1 min-w-0 items-center justify-center gap-3 xl:gap-4 text-[11px] xl:text-[12px] tracking-[0.10em] xl:tracking-[0.10em] uppercase whitespace-nowrap">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="transition-colors hover:text-accent text-foreground/80 whitespace-nowrap"
              style={{ whiteSpace: "nowrap" }}
              activeProps={{ className: "text-accent whitespace-nowrap" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 text-foreground/80 hover:text-accent transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            to="/valuation"
            className="hidden xl:inline-flex btn-gold !py-2 !px-4 !text-[10px] whitespace-nowrap"
            style={{ whiteSpace: "nowrap" }}
          >
            {"List\u00A0Your\u00A0Property"}
          </Link>
          <button
            className="xl:hidden p-2 text-foreground"
            onClick={() => setOpen(true)}
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-background z-50 animate-fade-in">
          <div className="container-luxury flex items-center justify-between py-5">
            <Logo label={logoLabel} />
            <button onClick={() => setOpen(false)} className="p-2" aria-label="Close">
              <X size={22} />
            </button>
          </div>
          <nav className="container-luxury flex flex-col gap-5 mt-10 text-2xl font-serif">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="hover:text-accent transition-colors whitespace-nowrap"
                style={{ whiteSpace: "nowrap" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/valuation"
              onClick={() => setOpen(false)}
              className="btn-gold mt-6 self-start whitespace-nowrap"
              style={{ whiteSpace: "nowrap" }}
            >
              {"List\u00A0Your\u00A0Property"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
