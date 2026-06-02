import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PropertyCard } from "./PropertyCard-CvsJK9Tz.mjs";
import { p as properties } from "./router-CXTQ9XTZ.mjs";
import { i as Search, j as LayoutGrid, k as List } from "../_libs/lucide-react.mjs";
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
function PropertiesPage() {
  const [view, setView] = reactExports.useState("grid");
  const [q, setQ] = reactExports.useState("");
  const [type, setType] = reactExports.useState("All");
  const [beds, setBeds] = reactExports.useState(0);
  const [maxPrice, setMaxPrice] = reactExports.useState(5e7);
  const types = ["All", ...Array.from(new Set(properties.map((p) => p.type)))];
  const filtered = reactExports.useMemo(() => {
    return properties.filter((p) => {
      if (q && !`${p.name} ${p.location}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (type !== "All" && p.type !== type) return false;
      if (beds && p.beds < beds) return false;
      if (p.priceValue > maxPrice) return false;
      return true;
    });
  }, [q, type, beds, maxPrice]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32 pb-10 container-luxury", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Portfolio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-6xl mt-3", children: "All Properties" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-xl", children: "A curated selection of residences for sale and to let across our global markets." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-6 grid md:grid-cols-12 gap-4 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] tracking-[0.28em] uppercase text-muted-foreground", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mt-2 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "City, neighbourhood...", className: "bg-transparent flex-1 py-2 px-3 focus:outline-none" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] tracking-[0.28em] uppercase text-muted-foreground", children: "Property Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: type, onChange: (e) => setType(e.target.value), className: "w-full mt-2 bg-transparent border-b border-border py-2 focus:outline-none", children: types.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "text-foreground bg-background", children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] tracking-[0.28em] uppercase text-muted-foreground", children: [
          "Max Price · €",
          (maxPrice / 1e6).toFixed(1),
          "M"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 5e5, max: 5e7, step: 5e5, value: maxPrice, onChange: (e) => setMaxPrice(+e.target.value), className: "w-full mt-3 accent-[color:var(--gold)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] tracking-[0.28em] uppercase text-muted-foreground", children: "Bedrooms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: beds, onChange: (e) => setBeds(+e.target.value), className: "w-full mt-2 bg-transparent border-b border-border py-2 focus:outline-none", children: [0, 1, 2, 3, 4, 5, 6].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: n, className: "text-foreground bg-background", children: n === 0 ? "Any" : `${n}+` }, n)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury py-10 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
        filtered.length,
        " residences"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("grid"), className: `p-2 ${view === "grid" ? "bg-accent text-accent-foreground" : ""}`, "aria-label": "Grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { size: 15 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("list"), className: `p-2 ${view === "list" ? "bg-accent text-accent-foreground" : ""}`, "aria-label": "List", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { size: 15 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury pb-24", children: [
      view === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCard, { p }, p.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `/properties/${p.id}`, className: "luxe-card grid md:grid-cols-12 gap-0 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, className: "md:col-span-5 aspect-[4/3] md:aspect-auto w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7 p-8 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.22em] uppercase text-muted-foreground", children: p.location }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-3xl mt-2", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 leading-relaxed text-sm", children: p.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent font-serif text-2xl", children: p.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              p.beds,
              " bd · ",
              p.baths,
              " ba · ",
              p.sqft.toLocaleString(),
              " sqft"
            ] })
          ] })
        ] })
      ] }, p.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 mt-16", children: ["‹", "1", "2", "3", "›"].map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `w-10 h-10 border border-border text-sm ${n === "1" ? "bg-accent text-accent-foreground border-accent" : "hover:border-accent"}`, children: n }, i)) })
    ] })
  ] });
}
export {
  PropertiesPage as component
};
