import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-B0zsUnYj.mjs";
import { H as House, K as Key, e as Calculator, T as TrendingUp, f as Scale, B as Banknote, g as Sofa, P as Plane, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const services = [[House, "Property Sales", "Discreet representation for vendors and acquirers, on and off market."], [Key, "Rental Management", "Letting, tenant care, and full lifecycle property administration."], [Calculator, "Property Valuation", "Independent, evidence-based appraisals for sale and refinancing."], [TrendingUp, "Investment Advisory", "Portfolio strategy, market entry, and capital allocation."], [Scale, "Legal & Documentation", "Coordinated conveyancing across 18 jurisdictions."], [Banknote, "Mortgage Assistance", "Bespoke finance with private banking partners."], [Sofa, "Interior Design Referrals", "Curated network of award-winning studios and craftspeople."], [Plane, "Relocation Services", "Schools, staffing, immigration, and quiet logistics."]];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "What We Do", title: "Services for a considered life in property", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxury py-24 grid md:grid-cols-2 gap-x-12 gap-y-14", children: services.map(([Icon, t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 32, strokeWidth: 1.2, className: "text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-3xl mt-5", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 leading-relaxed", children: d }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 mt-5 text-xs tracking-[0.22em] uppercase text-accent hover:underline", children: [
        "Learn More ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
      ] })
    ] }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1800&q=80", alt: "", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/75" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container-luxury text-white text-center max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow !text-[color:var(--gold)]", children: "Bespoke" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-4", children: "Need a custom service? Let's talk." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-gold mt-8 !text-white !border-[color:var(--gold)] hover:!text-black", children: "Start a Conversation" })
      ] })
    ] })
  ] });
}
export {
  ServicesPage as component
};
