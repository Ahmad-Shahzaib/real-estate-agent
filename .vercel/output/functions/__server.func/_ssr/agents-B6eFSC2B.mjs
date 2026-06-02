import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as agents } from "./router-BNfrqGIU.mjs";
import { I as Instagram, L as Linkedin, d as Mail, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function AgentsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-32 pb-16 container-luxury", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Our People" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl mt-3 max-w-3xl", children: "Our Expert Team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-5 max-w-2xl", children: "A small, senior team of advisors with deep expertise in their markets — and a quiet talent for matching homes to the lives they're meant to hold." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxury pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: agents.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.img, alt: a.name, className: "w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl", children: a.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-accent mt-3", children: a.specialty }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 border-y border-border py-5 mt-5 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl", children: a.sold }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1", children: "Sold" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl", children: a.years }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1", children: "Years" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl", children: a.rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1", children: "Rating" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "ig", className: "hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 15 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "li", className: "hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 15 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${a.email}`, "aria-label": "email", className: "hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 15 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agents/$id", params: {
            id: a.id
          }, className: "text-xs tracking-[0.22em] uppercase text-accent hover:underline flex items-center gap-1", children: [
            "View Profile ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
          ] })
        ] })
      ] })
    ] }, a.id)) })
  ] });
}
export {
  AgentsPage as component
};
