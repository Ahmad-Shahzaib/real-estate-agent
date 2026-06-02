import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PropertyCard } from "./PropertyCard-CvsJK9Tz.mjs";
import { p as properties, b as agents, t as testimonials, a as posts } from "./router-CXTQ9XTZ.mjs";
import { A as ArrowRight, w as Building2, H as House, x as Castle, y as Briefcase, z as Hammer, D as KeyRound, G as BadgeCheck, s as ShieldCheck, J as Headphones, f as Scale, Q as Quote } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function CityIllustration() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-border bg-surface py-10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 1440 220",
      className: "w-full h-auto text-foreground/70",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "200", x2: "1440", y2: "200" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 200 L0 160 L40 160 L40 140 L80 140 L80 170 L110 170 L110 120 L130 120 L130 100 L150 100 L150 130 L180 130 L180 90 L210 90 L210 70 L230 70 L230 110 L260 110 L260 145 L290 145 L290 85 L320 85 L320 60 L350 60 L350 100 L380 100 L380 130 L420 130 L420 90 L450 90 L450 50 L480 50 L480 40 L500 40 L500 95 L530 95 L530 120 L560 120 L560 70 L600 70 L600 30 L640 30 L640 80 L680 80 L680 110 L720 110 L720 50 L760 50 L760 80 L800 80 L800 130 L840 130 L840 95 L880 95 L880 60 L920 60 L920 100 L960 100 L960 140 L1000 140 L1000 80 L1040 80 L1040 50 L1080 50 L1080 90 L1120 90 L1120 130 L1160 130 L1160 100 L1200 100 L1200 70 L1240 70 L1240 110 L1280 110 L1280 150 L1320 150 L1320 120 L1360 120 L1360 160 L1400 160 L1400 140 L1440 140 L1440 200 Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M600 70 a40 40 0 0 1 80 0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "500", y1: "40", x2: "500", y2: "10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "500", cy: "8", r: "2" }),
        Array.from({ length: 80 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: 20 + i * 17,
            y: 180 - i % 5 * 8,
            width: "3",
            height: "6",
            fill: "currentColor",
            opacity: "0.4",
            stroke: "none"
          },
          i
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "1180", cy: "60", r: "28", stroke: "var(--gold)", opacity: "0.8" })
      ]
    }
  ) });
}
function CountUp({ end, suffix = "", duration = 1600 }) {
  const [value, setValue] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (t) => {
            const p = Math.min(1, (t - start) / duration);
            setValue(Math.floor(p * end));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    value.toLocaleString(),
    suffix
  ] });
}
function Home_() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen min-h-[680px] w-full overflow-hidden -mt-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("video", { autoPlay: true, muted: true, loop: true, playsInline: true, poster: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80", className: "absolute inset-0 w-full h-full object-cover", children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "https://cdn.coverr.co/videos/coverr-luxury-modern-villa-with-pool-3893/1080p.mp4", type: "video/mp4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/55" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 h-full container-luxury flex flex-col items-center justify-center text-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow !text-[color:var(--gold)] animate-fade-in", children: "Elara Estates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-6xl md:text-8xl mt-6 leading-[1.02] max-w-5xl animate-fade-up", children: "Find Your Dream Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-white/85 text-lg md:text-xl", children: "Premium Properties. Trusted Agents. Exceptional Living." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/properties", className: "btn-solid !bg-white !text-black !border-white hover:!bg-[color:var(--gold)] hover:!border-[color:var(--gold)] hover:!text-black", children: [
            "Browse Properties ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-gold !text-white !border-white/70 hover:!text-black hover:!border-[color:var(--gold)]", children: "Book a Consultation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.32em] uppercase text-white/60", children: "Scroll" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CityIllustration, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxury py-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center", children: [{
      n: 500,
      s: "+",
      label: "Properties"
    }, {
      n: 12,
      s: "+",
      label: "Years Experience"
    }, {
      n: 98,
      s: "%",
      label: "Client Satisfaction"
    }, {
      n: 20,
      s: "+",
      label: "Cities Worldwide"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-5xl md:text-6xl text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { end: s.n, suffix: s.s }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs tracking-[0.28em] uppercase text-muted-foreground", children: s.label })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Featured Portfolio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3 max-w-xl", children: "A selection of extraordinary residences" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/properties", className: "btn-gold", children: [
          "View All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: properties.slice(0, 6).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCard, { p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Property Categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3 mb-12 max-w-xl", children: "Explore by type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3", children: [{
        name: "Apartments",
        icon: Building2,
        img: "photo-1560448204-e02f11c3d0e2"
      }, {
        name: "Villas",
        icon: House,
        img: "photo-1582268611958-ebfd161ef9cf"
      }, {
        name: "Penthouses",
        icon: Castle,
        img: "photo-1512917774080-9991f1c4c750"
      }, {
        name: "Commercial",
        icon: Briefcase,
        img: "photo-1497366754035-f200968a6e72"
      }, {
        name: "New Developments",
        icon: Hammer,
        img: "photo-1449844908441-8829872d2607"
      }, {
        name: "Rentals",
        icon: KeyRound,
        img: "photo-1505691938895-1758d7feb511"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/properties", className: "relative aspect-[3/4] overflow-hidden group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `https://images.unsplash.com/${c.img}?w=600&q=80`, alt: c.name, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-colors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-end p-5 text-white text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { size: 26, strokeWidth: 1.2, className: "mb-2 text-[color:var(--gold)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm tracking-[0.22em] uppercase", children: c.name })
        ] })
      ] }, c.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", alt: "", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Why Elara" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3", children: "Quiet expertise. Discreet representation. Considered results." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "For over a decade, our advisors have represented some of the most extraordinary residences in the world — and the clients who call them home." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6 mt-10", children: [{
          i: BadgeCheck,
          t: "Expert Agents",
          d: "Senior partners with 10+ years in prime markets."
        }, {
          i: ShieldCheck,
          t: "Verified Listings",
          d: "Every residence vetted by our private office."
        }, {
          i: Headphones,
          t: "24/7 Support",
          d: "Concierge advisory across every time zone."
        }, {
          i: Scale,
          t: "Legal Assistance",
          d: "End-to-end conveyancing and structuring."
        }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(f.i, { size: 22, strokeWidth: 1.3, className: "text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-xl mt-3", children: f.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: f.d })
        ] }, f.t)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxury py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: agents[0].img, alt: agents[0].name, className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Agent of the Month" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-5xl mt-3", children: agents[0].name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground mt-2", children: [
          agents[0].title,
          " · ",
          agents[0].specialty
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-relaxed text-foreground/80 max-w-xl", children: `"Our role is not to sell homes. It's to recognise, before anyone else does, the residence that will become inseparable from a client's life."` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-10 mt-10 border-t border-border pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl text-accent", children: agents[0].sold }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.22em] uppercase text-muted-foreground mt-1", children: "Sold" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl text-accent", children: agents[0].years }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.22em] uppercase text-muted-foreground mt-1", children: "Years" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl text-accent", children: agents[0].rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.22em] uppercase text-muted-foreground mt-1", children: "Rating" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agents/$id", params: {
          id: agents[0].id
        }, className: "btn-gold mt-10", children: [
          "Connect with ",
          agents[0].name.split(" ")[0]
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Client Voices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3", children: "Trusted by collectors of homes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { size: 28, className: "text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-foreground/85 leading-relaxed", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-7 pt-6 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, className: "w-12 h-12 object-cover rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground tracking-wide", children: t.role })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent mt-4 tracking-[0.3em]", children: "★★★★★" })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "The Journal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3", children: "Notes from the market" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "btn-gold", children: [
          "All Stories ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: posts.slice(0, 3).map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$id", params: {
        id: post.id
      }, className: "luxe-card group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[5/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.28em] uppercase text-accent", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mt-3 leading-snug", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-5 tracking-wide", children: [
            post.date,
            " · ",
            post.readTime
          ] })
        ] })
      ] }, post.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80", alt: "", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/75" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container-luxury text-center text-white max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow !text-[color:var(--gold)]", children: "Private List" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-4", children: "Get Exclusive Property Alerts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/75", children: "Off-market opportunities, sent quietly to a small list of clients." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "your@email.com", className: "flex-1 bg-transparent border border-white/40 text-white placeholder:text-white/50 px-5 py-3 focus:outline-none focus:border-[color:var(--gold)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn-gold !text-white !border-[color:var(--gold)] hover:!text-black", children: "Subscribe" })
        ] })
      ] })
    ] })
  ] });
}
export {
  Home_ as component
};
