import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-B0zsUnYj.mjs";
import { P as PropertyCard } from "./PropertyCard-CvsJK9Tz.mjs";
import { p as properties } from "./router-CXTQ9XTZ.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const tabs = [{
  k: "residential",
  l: "Residential",
  d: "Stabilised rental residences in prime metros."
}, {
  k: "commercial",
  l: "Commercial",
  d: "Income-producing assets across office, retail, and logistics."
}, {
  k: "offplan",
  l: "Off-Plan",
  d: "Early-stage acquisitions with capital appreciation potential."
}, {
  k: "holiday",
  l: "Holiday Lets",
  d: "Seasonal residences in trophy leisure markets."
}];
function InvestmentPage() {
  const [tab, setTab] = reactExports.useState("residential");
  const [price, setPrice] = reactExports.useState(25e5);
  const [yieldPct, setYieldPct] = reactExports.useState(5);
  const annual = reactExports.useMemo(() => Math.round(price * yieldPct / 100), [price, yieldPct]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Capital", title: "Invest in Premium Real Estate", subtitle: "Bespoke advisory for clients building global, income-producing property portfolios.", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Strategies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3 mb-10", children: "Four ways we invest" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-b border-border", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t.k), className: `px-6 py-3 text-xs tracking-[0.22em] uppercase border-b-2 -mb-px ${tab === t.k ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`, children: t.l }, t.k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10 items-center mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80", alt: "", className: "aspect-[4/3] w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-3xl", children: tabs.find((t) => t.k === tab).l }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: tabs.find((t) => t.k === tab).d }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-foreground/85 leading-relaxed", children: "Our team underwrites every opportunity end-to-end — from desktop analysis through asset management. Typical hold periods range from 4 to 10 years." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury grid lg:grid-cols-2 gap-14 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "ROI Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl mt-3", children: "Estimate your annual income" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-8 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Purchase Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "€",
              price.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 5e5, max: 2e7, step: 1e5, value: price, onChange: (e) => setPrice(+e.target.value), className: "w-full mt-3 accent-[color:var(--gold)]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Net Rental Yield" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              yieldPct,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 1, max: 12, step: 0.1, value: yieldPct, onChange: (e) => setYieldPct(+e.target.value), className: "w-full mt-3 accent-[color:var(--gold)]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Projected Annual Income" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-5xl text-accent mt-2", children: [
            "€",
            annual.toLocaleString()
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxury py-24 grid sm:grid-cols-3 gap-6", children: [["4.8%", "Avg. Net Yield"], ["+11.2%", "5-Yr Price Growth"], ["94", "Demand Index"]].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-5xl text-accent", children: n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mt-3", children: l })
    ] }, l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl mb-10", children: "Featured Investment Properties" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: properties.slice(0, 3).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCard, { p }, p.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-solid", children: "Speak to an Investment Advisor" }) })
    ] })
  ] });
}
export {
  InvestmentPage as component
};
