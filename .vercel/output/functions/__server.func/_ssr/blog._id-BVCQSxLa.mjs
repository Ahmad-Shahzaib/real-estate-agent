import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as Route$1, a as posts } from "./router-BNfrqGIU.mjs";
import { F as Facebook, L as Linkedin, a0 as Twitter } from "../_libs/lucide-react.mjs";
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
function PostPage() {
  const {
    post
  } = Route$1.useLoaderData();
  const related = posts.filter((p) => p.id !== post.id).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-32 container-luxury max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.28em] text-accent", children: post.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-6xl mt-4 leading-tight", children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80", alt: "", className: "w-9 h-9 rounded-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Isabella Moreau" }),
        " · ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.date }),
        " · ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.readTime })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury max-w-5xl mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.image, alt: post.title, className: "w-full aspect-[16/9] object-cover" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "container-luxury max-w-3xl py-14 prose-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl leading-relaxed text-foreground/85 font-serif", children: post.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 leading-relaxed text-foreground/85", children: "In the quietest corners of the market, the most extraordinary residences change hands without ever appearing in a window. This is the world we operate in — and the one we report from in this edition." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "my-10 border-l-2 border-accent pl-6 font-serif text-2xl leading-snug text-foreground", children: '"The best residences are never sold twice the same way."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed text-foreground/85", children: "Our advisors share what they're seeing across European prime markets — from Mayfair to Monte Carlo — and what to watch as we move through the next quarter. The patterns are consistent: limited supply, deeply qualified buyers, and a continued flight to quality." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80", alt: "", className: "my-10 w-full aspect-[16/9] object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed text-foreground/85", children: "If you'd like a confidential briefing on your market, our private office is available year-round." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-14 pt-8 border-t border-border text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.22em]", children: "Share" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 16 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 16 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { size: 16 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl mb-10", children: "Related Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: related.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$id", params: {
        id: p.id
      }, className: "luxe-card group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[5/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, className: "w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.28em] text-accent", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl mt-3", children: p.title })
        ] })
      ] }, p.id)) })
    ] })
  ] });
}
export {
  PostPage as component
};
