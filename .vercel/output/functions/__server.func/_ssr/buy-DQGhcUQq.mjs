import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-B0zsUnYj.mjs";
import { P as PropertyCard } from "./PropertyCard-CvsJK9Tz.mjs";
import { p as properties } from "./router-BNfrqGIU.mjs";
import { i as Search, q as FileText, E as Eye, r as Handshake, K as Key, l as Minus, m as Plus } from "../_libs/lucide-react.mjs";
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
const steps = [{
  i: Search,
  t: "Search",
  d: "Define brief, location, and budget with your advisor."
}, {
  i: FileText,
  t: "Consult",
  d: "Receive a curated shortlist, on and off market."
}, {
  i: Eye,
  t: "View",
  d: "Private viewings arranged at your convenience."
}, {
  i: Handshake,
  t: "Offer",
  d: "Negotiation and legal structuring by our private office."
}, {
  i: Key,
  t: "Move In",
  d: "Completion, key handover, and lifestyle handoff."
}];
const faqs = [["What deposit is typically required?", "For prime residential acquisitions, deposits commonly sit between 10–30% of the agreed price, paid at exchange. Off-plan structures vary by jurisdiction."], ["Do you represent off-market opportunities?", "Yes. Approximately 40% of our annual transactions occur quietly, before any public listing."], ["Can you advise on cross-border purchases?", "We work alongside legal and tax counsel in 18 jurisdictions to coordinate seamless international acquisitions."], ["What is the typical timeline?", "From offer accepted to keys handed over, 6–12 weeks is typical for resale; off-plan timelines follow the development schedule."]];
function BuyPage() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Acquisitions", title: "Buy Your Perfect Property", subtitle: "A discreet, considered process designed around the way our clients actually live.", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-gold !text-white !border-white/70 hover:!text-black", children: "Speak to an Advisor" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "The Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3 max-w-xl", children: "Five quiet steps to ownership" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-5 gap-8 mt-14", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-accent font-serif text-3xl", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.i, { size: 26, strokeWidth: 1.3, className: "text-foreground mt-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mt-4", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 leading-relaxed", children: s.d })
      ] }, s.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl mb-10", children: "Featured Properties for Sale" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: properties.filter((p) => p.status === "FOR SALE").slice(0, 6).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCard, { p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=80", alt: "", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/75" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container-luxury text-white text-center max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow !text-[color:var(--gold)]", children: "Free Resource" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-4", children: "The Elara Buyer's Guide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/80", children: "A 48-page private edition on acquiring residences worldwide — from due diligence to discreet completion." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-gold mt-8 !text-white !border-[color:var(--gold)] hover:!text-black", children: "Download Guide" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury py-24 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Common Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl mt-3 mb-10", children: "Buyer FAQs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border border-y border-border", children: faqs.map(([q, a], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "w-full text-left py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xl", children: q }),
          open === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 18, className: "text-accent" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18, className: "text-accent" })
        ] }),
        open === i && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: a })
      ] }, i)) })
    ] })
  ] });
}
export {
  BuyPage as component
};
