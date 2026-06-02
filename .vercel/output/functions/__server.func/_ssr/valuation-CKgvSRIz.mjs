import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as ClipboardList, c as ChartLine, d as Mail } from "../_libs/lucide-react.mjs";
function Valuation() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80", alt: "", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/65" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container-luxury grid lg:grid-cols-12 gap-12 items-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow !text-[color:var(--gold)]", children: "Free Appraisal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-6xl mt-4", children: "What Is Your Property Worth?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/80 max-w-md", children: "A senior advisor will review your residence and return a confidential, evidence-based market valuation within 48 hours." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "lg:col-span-6 bg-background text-foreground p-8 lg:p-10 space-y-4", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl", children: "Request a Valuation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Property Address", className: "w-full border-b border-border py-2 bg-transparent focus:outline-none focus:border-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "border-b border-border py-2 bg-transparent focus:outline-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Property Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Apartment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Villa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Penthouse" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "border-b border-border py-2 bg-transparent focus:outline-none", children: [1, 2, 3, 4, 5, 6].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { className: "bg-background", children: [
              n,
              " Bedrooms"
            ] }, n)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Size (sqft)", className: "border-b border-border py-2 bg-transparent focus:outline-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "border-b border-border py-2 bg-transparent focus:outline-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Condition" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "New / Renovated" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Good" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Needs Work" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Name", className: "w-full border-b border-border py-2 bg-transparent focus:outline-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "Email", className: "w-full border-b border-border py-2 bg-transparent focus:outline-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Phone", className: "w-full border-b border-border py-2 bg-transparent focus:outline-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-solid w-full justify-center mt-2", children: "Request Valuation" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "How It Works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3", children: "A considered, three-step appraisal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-10 mt-14", children: [[ClipboardList, "Brief", "Submit your residence's details — discreetly."], [ChartLine, "Analysis", "Senior advisor benchmarks against recent comparables and current market depth."], [Mail, "Report", "Receive a written valuation, with rationale, within 48 hours."]].map(([Icon, t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, strokeWidth: 1.3, className: "text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mt-4", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: d })
      ] }, t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80", alt: "", className: "aspect-[4/3] w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Why Accuracy Matters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl mt-3", children: "A valuation is a strategy, not a number." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "Overpriced residences linger. Underpriced ones leak value. Our advisors balance recent comparables, market depth, and qualitative factors to position your residence for a swift, confident transaction." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-7 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent tracking-[0.3em]", children: "★★★★★" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3", children: '"Their valuation was accurate to within 1.2% of the eventual sale price. Refreshingly evidence-based."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mt-3", children: "— Vendor, Belgravia" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Valuation as component
};
