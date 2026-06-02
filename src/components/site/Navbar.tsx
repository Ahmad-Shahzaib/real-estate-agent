import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/buy", label: "Buy" },
  { to: "/rent", label: "Rent" },
  { to: "/developments", label: "New Developments" },
  { to: "/about", label: "About" },
  { to: "/agents", label: "Agents" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-accent">
        <path d="M3 20V11l9-7 9 7v9" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 6l2-2 2 2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="font-serif text-lg tracking-[0.3em] uppercase">Elara</span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-luxury flex items-center justify-between gap-6">
        <div className={scrolled ? "text-foreground" : "text-foreground"}>
          <Logo />
        </div>

        <nav className="hidden xl:flex items-center gap-7 text-[12px] tracking-[0.18em] uppercase">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="transition-colors hover:text-accent text-foreground/80"
              activeProps={{ className: "text-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 text-foreground/80 hover:text-accent transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to="/valuation" className="hidden lg:inline-flex btn-gold !py-2 !px-4 !text-[10px]">
            List Your Property
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
            <Logo />
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
                className="hover:text-accent transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/valuation" onClick={() => setOpen(false)} className="btn-gold mt-6 self-start">
              List Your Property
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
