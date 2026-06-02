import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-B0zsUnYj.mjs";
import { P as PropertyCard } from "./PropertyCard-CvsJK9Tz.mjs";
import { p as properties } from "./router-BNfrqGIU.mjs";
import { h as Check } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function RentPage() {
  const [tab, setTab] = reactExports.useState("long");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Lettings", title: "Premium Rental Properties", subtitle: "Considered residences for the way you actually want to live — for a season, a year, or longer.", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1800&q=80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-0 border-b border-border", children: [["long", "Long-Term Lets"], ["short", "Short-Term Lets"]].map(([k, l]) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(k), className: `px-8 py-4 text-sm tracking-[0.22em] uppercase border-b-2 -mb-px transition-colors ${tab === k ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`, children: l }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14", children: properties.filter((p) => p.status === "FOR RENT").map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCard, { p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury grid lg:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80", alt: "", className: "aspect-[4/5] w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Tenant Guide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3", children: "A renting experience to match the residence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "From referencing to inventory and ongoing concierge, every detail is handled by a dedicated lettings manager." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-4", children: ["Photo ID & proof of address", "Three months of bank statements", "Employer or accountant reference", "Previous landlord reference", "Deposit equivalent to 5–10 weeks rent"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 border-b border-border pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18, className: "text-accent mt-0.5" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r })
        ] }, r)) })
      ] })
    ] }) })
  ] });
}
export {
  RentPage as component
};
