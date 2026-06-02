import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-24">
      <div className="container-luxury py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 24 24" className="text-accent">
              <path d="M3 20V11l9-7 9 7v9" stroke="currentColor" strokeWidth="1.2" fill="none" />
              <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.2" fill="none" />
              <path d="M10 6l2-2 2 2" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
            <span className="font-serif text-lg tracking-[0.3em] uppercase">Elara Estates</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Where Luxury Meets Home. A private office representing extraordinary residences across
            Europe, the Americas, and the Middle East.
          </p>
          <div className="flex items-center gap-4 mt-7 text-muted-foreground">
            {[Instagram, Facebook, Linkedin, MessageCircle, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="hover:text-accent transition-colors">
                <Icon size={16} strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs tracking-[0.28em] uppercase mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[["/properties","Properties"],["/buy","Buy"],["/rent","Rent"],["/developments","New Developments"],["/investment","Investment"]].map(([to,label]) => (
              <li key={to}><Link to={to} className="hover:text-accent">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs tracking-[0.28em] uppercase mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[["/about","About"],["/agents","Agents"],["/services","Services"],["/blog","Journal"],["/faq","FAQ"],["/contact","Contact"]].map(([to,label]) => (
              <li key={to}><Link to={to} className="hover:text-accent">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs tracking-[0.28em] uppercase mb-5">Offices </h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><span className="text-foreground">London</span><br/>14 Berkeley Square, Mayfair W1J · +44 20 7946 0118</li>
            <li><span className="text-foreground">Monaco</span><br/>2 Avenue de Monte-Carlo · +377 99 00 12 14</li>
            <li><span className="text-foreground">Dubai</span><br/>DIFC Gate Village 4 · +971 4 555 0199</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground tracking-wide">
          <span>© {new Date().getFullYear()} Elara Estates. All rights reserved.</span>
          <span>
            Design by{" "}
            <a
              href="https://softsuitetech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Softsuite Technologies .
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
