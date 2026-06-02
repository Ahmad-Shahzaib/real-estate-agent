import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as posts } from "./router-CXTQ9XTZ.mjs";
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
import "../_libs/lucide-react.mjs";
const cats = ["All", "Market News", "Buying Tips", "Renting", "Investment", "Lifestyle"];
function BlogPage() {
  const [cat, setCat] = reactExports.useState("All");
  const filtered = cat === "All" ? posts : posts.filter((p) => p.category === cat);
  const [feature, ...rest] = filtered;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-32 pb-12 container-luxury", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "The Journal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl mt-3", children: "Stories & Insight" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxury", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-b border-border", children: cats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c), className: `px-5 py-3 text-xs tracking-[0.22em] uppercase border-b-2 -mb-px ${cat === c ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`, children: c }, c)) }) }),
    feature && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxury py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$id", params: {
      id: feature.id
    }, className: "grid lg:grid-cols-2 gap-10 luxe-card overflow-hidden group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: feature.image, alt: feature.title, className: "w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.28em] text-accent", children: feature.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-4 leading-tight", children: feature.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: feature.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mt-6", children: [
          feature.date,
          " · ",
          feature.readTime
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxury pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: rest.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$id", params: {
      id: p.id
    }, className: "luxe-card group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[5/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, className: "w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.28em] text-accent", children: p.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mt-3 leading-snug", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3", children: p.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-5", children: [
          p.date,
          " · ",
          p.readTime
        ] })
      ] })
    ] }, p.id)) })
  ] });
}
export {
  BlogPage as component
};
