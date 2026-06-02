import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[68vh] min-h-[480px] flex items-end overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: image,
        alt: "",
        className: "absolute inset-0 w-full h-full object-cover animate-slow-zoom"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury relative z-10 pb-20 text-white", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow !text-[color:var(--gold)]", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl max-w-4xl mt-4 leading-[1.05] animate-fade-up", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-white/80 text-lg leading-relaxed", children: subtitle }),
      children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children })
    ] })
  ] });
}
export {
  PageHero as P
};
