import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as Route, p as properties } from "./router-CXTQ9XTZ.mjs";
import { P as PropertyCard } from "./PropertyCard-CvsJK9Tz.mjs";
import { o as Phone, d as Mail, b as MessageCircle } from "../_libs/lucide-react.mjs";
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
function AgentDetail() {
  const {
    agent: a
  } = Route.useLoaderData();
  const listings = properties.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-32 pb-16 container-luxury grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.img, alt: a.name, className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl mt-3", children: a.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent mt-3 text-lg", children: a.specialty }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-foreground/85 leading-relaxed max-w-xl", children: [
          "With ",
          a.years,
          " years across the world's most discreet markets, ",
          a.name.split(" ")[0],
          " represents private clients on acquisitions, dispositions, and bespoke property strategies. Languages: English, French, Italian."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${a.phone}`, className: "btn-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14 }),
            a.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${a.email}`, className: "btn-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }),
            "Email"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "btn-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 14 }),
            "WhatsApp"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-6 border-y border-border py-6 mt-10 max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl text-accent", children: a.sold }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1", children: "Sold" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl text-accent", children: a.years }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1", children: "Years" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl text-accent", children: a.rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1", children: "Rating" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl mb-10", children: "Active Listings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: listings.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCard, { p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Client Reviews" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl mt-3 mb-10", children: "What clients say" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent tracking-[0.3em]", children: "★★★★★" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 leading-relaxed", children: [
          '"',
          a.name.split(" ")[0],
          ' found us a residence that simply was not on the market. Considered, calm, and ultimately essential to the outcome."'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mt-4", children: "— Private Client" })
      ] }, i)) })
    ] }) })
  ] });
}
export {
  AgentDetail as component
};
