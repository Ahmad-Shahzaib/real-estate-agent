import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a1 as Heart, R as Bed, V as Bath, W as Maximize } from "../_libs/lucide-react.mjs";
function PropertyCard({ p }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/properties/$id",
      params: { id: p.id },
      className: "luxe-card group block overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.image,
              alt: p.name,
              className: "w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.22em] uppercase bg-background/90 text-foreground px-3 py-1.5", children: p.status }),
            p.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.22em] uppercase bg-accent text-accent-foreground px-3 py-1.5", children: p.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-4 right-4 w-9 h-9 grid place-items-center bg-background/90 hover:text-accent", "aria-label": "Save", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 15, strokeWidth: 1.4 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.22em] uppercase text-muted-foreground", children: p.location }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mt-2", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent font-serif text-xl mt-3", children: p.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 mt-5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { size: 14, strokeWidth: 1.4 }),
              p.beds,
              " Bed"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { size: 14, strokeWidth: 1.4 }),
              p.baths,
              " Bath"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize, { size: 14, strokeWidth: 1.4 }),
              p.sqft.toLocaleString(),
              " sqft"
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  PropertyCard as P
};
