import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$2, p as properties } from "./router-CXTQ9XTZ.mjs";
import { P as PropertyCard } from "./PropertyCard-CvsJK9Tz.mjs";
import { N as ChevronLeft, O as ChevronRight, R as Bed, V as Bath, W as Maximize, Z as Calendar, _ as Car, $ as Building, o as Phone, d as Mail, b as MessageCircle } from "../_libs/lucide-react.mjs";
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
function PropertyDetail() {
  const {
    property: p
  } = Route$2.useLoaderData();
  const [idx, setIdx] = reactExports.useState(0);
  const [price, setPrice] = reactExports.useState(p.priceValue > 1e6 ? p.priceValue : 25e5);
  const [down, setDown] = reactExports.useState(20);
  const [rate, setRate] = reactExports.useState(4.5);
  const monthly = reactExports.useMemo(() => {
    const loan = price * (1 - down / 100);
    const r = rate / 100 / 12;
    if (!loan) return 0;
    return loan * r / (1 - Math.pow(1 + r, -300));
  }, [price, down, rate]);
  const similar = properties.filter((x) => x.id !== p.id).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-24 bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/9] max-h-[78vh] w-full overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.gallery[idx], alt: p.name, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIdx((i) => i === 0 ? p.gallery.length - 1 : i - 1), className: "absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-background/90 grid place-items-center hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIdx((i) => (i + 1) % p.gallery.length), className: "absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-background/90 grid place-items-center hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury py-6 grid grid-cols-5 gap-3", children: p.gallery.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIdx(i), className: `aspect-[4/3] overflow-hidden ${idx === i ? "ring-2 ring-accent" : "opacity-70 hover:opacity-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g, alt: "", className: "w-full h-full object-cover" }) }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury py-6 text-xs tracking-[0.2em] uppercase text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
      " · ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/properties", className: "hover:text-accent", children: "Properties" }),
      " · ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: p.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury pb-24 grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.22em] uppercase text-muted-foreground", children: p.location }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-6xl mt-3", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent font-serif text-3xl mt-4", children: p.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-6 mt-10 py-8 border-y border-border", children: [[Bed, "Beds", p.beds], [Bath, "Baths", p.baths], [Maximize, "Sqft", p.sqft.toLocaleString()], [Calendar, "Year", p.year], [Car, "Parking", p.parking], [Building, "Type", p.type]].map(([Icon, l, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, strokeWidth: 1.4, className: "text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.24em] uppercase text-muted-foreground mt-2", children: l }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mt-1", children: v })
        ] }, l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl mt-12", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 text-foreground/85 leading-relaxed space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: p.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Designed by an award-winning studio, every material has been sourced for its provenance and patina. Honed limestone floors, lime-washed walls, and bespoke cabinetry frame a residence that rewards quiet observation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The principal suite occupies its own floor, with a dressing room, freestanding stone bath, and private terrace overlooking the gardens. Staff quarters are positioned discreetly off the service entrance." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl mt-12", children: "Features & Amenities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 mt-6 text-sm", children: ["Infinity Pool", "Private Gym", "24/7 Security", "Wraparound Terrace", "Landscaped Garden", "Triple Garage", "Wine Cellar", "Smart Home", "Underfloor Heating", "Sauna & Spa", "Cinema Room", "Concierge"].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "◆" }),
          a
        ] }, a)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl mt-12", children: "Floor Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 luxe-card p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=1400&q=80", alt: "Floor plan", className: "w-full" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl mt-12", children: "Video Tour" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 aspect-video", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { className: "w-full h-full", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Video tour", allowFullScreen: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl mt-12", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 aspect-[16/9]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { className: "w-full h-full", src: `https://www.google.com/maps?q=${encodeURIComponent(p.location)}&output=embed`, title: "Location" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-28 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80", alt: "", className: "w-16 h-16 object-cover rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Listing Agent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg", children: "Isabella Moreau" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+37799001214", className: "btn-gold !py-3 !px-2 !text-[10px] justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:isabella@elaraestates.com", className: "btn-gold !py-3 !px-2 !text-[10px] justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 12 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/37799001214", className: "btn-gold !py-3 !px-2 !text-[10px] justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 12 }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "luxe-card p-6 space-y-4", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: "Make an Enquiry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Name", className: "w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "Email", className: "w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Phone", className: "w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, placeholder: "Message", className: "w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent resize-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-solid w-full justify-center", children: "Send Inquiry" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: "Mortgage Calculator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "€",
                  price.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 5e5, max: 3e7, step: 1e5, value: price, onChange: (e) => setPrice(+e.target.value), className: "w-full accent-[color:var(--gold)] mt-2" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Down Payment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  down,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 5, max: 70, value: down, onChange: (e) => setDown(+e.target.value), className: "w-full accent-[color:var(--gold)] mt-2" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Interest" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  rate,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 1, max: 10, step: 0.1, value: rate, onChange: (e) => setRate(+e.target.value), className: "w-full accent-[color:var(--gold)] mt-2" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Monthly" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-3xl text-accent mt-1", children: [
                "€",
                Math.round(monthly).toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "luxe-card p-6 space-y-4", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: "Schedule a Viewing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "w-full bg-transparent border-b border-border py-2 focus:outline-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "time", className: "w-full bg-transparent border-b border-border py-2 focus:outline-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Name", className: "w-full bg-transparent border-b border-border py-2 focus:outline-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-gold w-full justify-center", children: "Request Viewing" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl mb-10", children: "Similar Residences" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: similar.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCard, { p: s }, s.id)) })
    ] })
  ] });
}
export {
  PropertyDetail as component
};
