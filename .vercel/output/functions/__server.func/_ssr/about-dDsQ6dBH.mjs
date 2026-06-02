import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-B0zsUnYj.mjs";
import { b as agents } from "./router-BNfrqGIU.mjs";
import { s as ShieldCheck, t as Sparkles, u as EyeOff, v as Lightbulb, U as Users } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "The House", title: "A private office for extraordinary residences", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury py-24 grid lg:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3 leading-tight", children: "Founded in 2012 around a single conviction." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-5 text-foreground/85 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "That the world's most extraordinary residences deserve representation as considered as their architecture. Elara began as a three-partner practice in Mayfair and has grown, deliberately, into a global private office of fifty advisors across six offices." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We don't run open houses. We don't publish listings the moment we receive them. Instead, we build long, careful relationships with both vendors and clients — and we transact, quietly, on their behalf." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Today we represent residences valued from €2M to €200M+ across Europe, the Americas, and the Middle East." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "", className: "lg:col-span-5 aspect-[4/5] w-full object-cover" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury grid md:grid-cols-2 gap-8", children: [{
      t: "Mission",
      d: "To represent each residence with the discretion, expertise, and craft it deserves — and to deliver outcomes our clients quietly recommend."
    }, {
      t: "Vision",
      d: "To be the private office of choice for collectors of extraordinary homes worldwide."
    }].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: x.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-2xl mt-5 leading-snug", children: x.d })
    ] }, x.t)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Core Values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3", children: "Five quiet principles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-5 gap-6 mt-12", children: [[ShieldCheck, "Integrity"], [Sparkles, "Excellence"], [EyeOff, "Discretion"], [Lightbulb, "Innovation"], [Users, "Client-First"]].map(([Icon, t]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, strokeWidth: 1.3, className: "text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mt-4", children: t })
      ] }, t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "The Team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3 mb-12", children: "Partners & Advisors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-8", children: agents.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.img, alt: a.name, className: "w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mt-5", children: a.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1", children: a.title })
      ] }, a.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Milestones" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl mt-3 mb-12", children: "Timeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8 max-w-3xl", children: [["2012", "Founded in Mayfair, London."], ["2015", "First international transaction — Cap-Ferrat."], ["2018", "Monaco office opens; private office launches."], ["2021", "Dubai and New York representation established."], ["2024", "Crossed €4Bn in lifetime transactions."], ["2026", "Expansion into Tokyo and Singapore."]].map(([y, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[120px_1fr] gap-6 border-b border-border pb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl text-accent", children: y }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/85", children: d })
      ] }, y)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10 eyebrow", children: "Awards & Partners" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-10 items-center opacity-70", children: Array.from({
        length: 6
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl text-center tracking-[0.2em] text-muted-foreground", children: ["FT", "FORBES", "ROBB", "WSJ", "ELLE DECO", "AD"][i] }, i)) })
    ] })
  ] });
}
export {
  AboutPage as component
};
