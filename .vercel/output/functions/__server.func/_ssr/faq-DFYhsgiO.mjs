import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { i as Search, l as Minus, m as Plus } from "../_libs/lucide-react.mjs";
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
const data = {
  Buying: [["What deposit is typically required?", "10–30% of the agreed price is standard, paid at exchange."], ["Do you represent off-market opportunities?", "Yes — around 40% of our annual transactions occur quietly."], ["Can you advise on cross-border purchases?", "We coordinate across 18 jurisdictions with trusted legal and tax counsel."], ["What's the typical timeline?", "6–12 weeks from offer accepted to keys handed over for resale."], ["Do you handle furniture and styling?", "Yes, via our curated interiors and staging partners."], ["Is anonymity possible?", "Acquisitions through SPVs and trusts are routinely structured."], ["What fees do buyers pay?", "Our fee is typically borne by the vendor; we'll disclose any exceptions in writing."], ["Can I purchase remotely?", "Yes — power of attorney and virtual viewings are standard practice."]],
  Renting: [["What documents are required?", "Photo ID, proof of address, bank statements, references."], ["How long is the typical lease?", "12 months minimum on long lets; 1 week minimum on short lets."], ["What deposit is required?", "Typically 5–10 weeks rent."], ["Are pets allowed?", "On a per-property basis; we'll confirm before viewings."], ["Can I extend my lease?", "Most landlords welcome renewals; terms are negotiated 60 days before expiry."], ["Is the property managed?", "We offer full management on most lettings."]],
  Selling: [["How are you different from a high-street agency?", "We are a private office. We don't run open houses or publish indiscriminately."], ["What is your fee?", "Confidentially agreed per mandate. Typically 1.5–2.5% on prime sales."], ["Will my property be marketed publicly?", "Only with your express permission; we begin every mandate off-market."], ["How long does a sale usually take?", "From mandate to completion, 8–16 weeks is typical."], ["What's included in the marketing?", "Editorial photography, film, brochure, private viewings, qualified outreach."], ["Can I work with multiple agents?", "We accept sole and joint sole mandates only — for results, never multiple agency."]],
  Investment: [["What is the minimum ticket size?", "We typically advise from €2M upwards per acquisition."], ["Do you manage assets post-acquisition?", "Yes — full asset management, leasing, and reporting are available."], ["What returns should I expect?", "Net yields of 3–6% in prime metros, with 4–10 year holds targeting double-digit IRRs."], ["Do you co-invest?", "On select mandates, our principals invest alongside clients."], ["Can you advise on financing?", "We work with five private banks and several specialist lenders."]]
};
function FaqPage() {
  const [q, setQ] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState("Buying-0");
  const filtered = reactExports.useMemo(() => {
    const out = {};
    for (const [cat, items] of Object.entries(data)) {
      const f = items.filter(([qq, a]) => `${qq} ${a}`.toLowerCase().includes(q.toLowerCase()));
      if (f.length) out[cat] = f;
    }
    return out;
  }, [q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-32 pb-10 container-luxury", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Frequently Asked" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl mt-3", children: "Questions, answered." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxury pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-4 flex items-center gap-3 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: "text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search FAQs...", className: "bg-transparent flex-1 py-2 focus:outline-none" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxury pb-24 space-y-16", children: Object.entries(filtered).map(([cat, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl border-b border-border pb-4", children: cat }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: items.map(([qq, a], i) => {
        const key = `${cat}-${i}`;
        const isOpen = open === key;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(isOpen ? "" : key), className: "w-full text-left py-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xl", children: qq }),
            isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 18, className: "text-accent" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18, className: "text-accent" })
          ] }),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: a })
        ] }, key);
      }) })
    ] }, cat)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-4xl", children: "Still have questions?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Chat directly with a senior advisor." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-solid mt-8", children: "Speak with Us" })
    ] }) })
  ] });
}
export {
  FaqPage as component
};
