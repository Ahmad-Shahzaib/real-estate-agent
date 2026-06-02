import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-B0zsUnYj.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
const devs = [{
  name: "The Cascade Residences",
  location: "Marina Bay, Dubai",
  type: "Branded Residences",
  units: 48,
  completion: "Q4 2026",
  img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1600&q=80"
}, {
  name: "Villa Solaire Estate",
  location: "Cap d'Antibes, France",
  type: "Private Villas (12)",
  units: 12,
  completion: "Q2 2027",
  img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80"
}, {
  name: "Lumière Tower",
  location: "Tribeca, New York",
  type: "Loft Penthouses",
  units: 24,
  completion: "Q1 2026",
  img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
}];
const timeline = [{
  year: "2024",
  label: "Launch & Reservations"
}, {
  year: "2025",
  label: "Foundation & Structure"
}, {
  year: "2026",
  label: "Fit-out & Façade"
}, {
  year: "2027",
  label: "Handover & Concierge"
}];
function DevPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Off-Plan", title: "Off-Plan & New Build Developments", subtitle: "Early-stage access to the next generation of branded residences and bespoke estates.", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1800&q=80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxury py-24 space-y-24", children: devs.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid lg:grid-cols-2 gap-14 items-center ${i % 2 ? "lg:[&>img]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, className: "aspect-[4/3] w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: d.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-4xl mt-3", children: d.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground mt-2", children: d.location }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-6 mt-8 border-y border-border py-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Units" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl mt-1", children: d.units })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Completion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl mt-1", children: d.completion })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-gold mt-8", children: [
          "Register Interest ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] })
    ] }, d.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Why Off-Plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3 max-w-xl", children: "The quiet advantage of buying early" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 mt-12", children: [["Tier-1 Pricing", "Reserve units before they reach the open market."], ["Bespoke Specification", "Influence finishes, layouts, and integrations early."], ["Capital Appreciation", "Historically, well-chosen off-plan delivers strong uplift on completion."]].map(([t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-2xl", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: d })
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl mt-20 mb-10", children: "Development Timeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-3 left-0 right-0 h-px bg-border" }),
        timeline.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl mt-4", children: t.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: t.label })
        ] }, t.year))
      ] })
    ] }) })
  ] });
}
export {
  DevPage as component
};
