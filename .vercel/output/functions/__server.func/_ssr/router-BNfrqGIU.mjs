import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Sun, M as Moon, a as Menu, X, I as Instagram, F as Facebook, L as Linkedin, b as MessageCircle, Y as Youtube } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-DQBkYOvF.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const ThemeContext = reactExports.createContext({
  theme: "light",
  toggle: () => {
  }
});
function ThemeProvider({ children }) {
  const [theme, setTheme] = reactExports.useState("light");
  reactExports.useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("elara-theme");
    const initial = saved ?? "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("elara-theme", next);
      return next;
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value: { theme, toggle }, children });
}
const useTheme = () => reactExports.useContext(ThemeContext);
const NAV = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/buy", label: "Buy" },
  { to: "/rent", label: "Rent" },
  { to: "/developments", label: "New Developments" },
  { to: "/about", label: "About" },
  { to: "/agents", label: "Agents" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" }
];
function Logo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", className: "text-accent", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 20V11l9-7 9 7v9", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 20v-6h6v6", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 6l2-2 2 2", stroke: "currentColor", strokeWidth: "1.2" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-lg tracking-[0.3em] uppercase", children: "Elara" })
  ] });
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { theme, toggle } = useTheme();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border py-3" : "bg-transparent py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: scrolled ? "text-foreground" : "text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden xl:flex items-center gap-7 text-[12px] tracking-[0.18em] uppercase", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              activeOptions: { exact: n.to === "/" },
              className: "transition-colors hover:text-accent text-foreground/80",
              activeProps: { className: "text-accent" },
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: toggle,
                "aria-label": "Toggle theme",
                className: "p-2 text-foreground/80 hover:text-accent transition-colors",
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/valuation", className: "hidden lg:inline-flex btn-gold !py-2 !px-4 !text-[10px]", children: "List Your Property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "xl:hidden p-2 text-foreground",
                onClick: () => setOpen(true),
                "aria-label": "Menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 bg-background z-50 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury flex items-center justify-between py-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "p-2", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container-luxury flex flex-col gap-5 mt-10 text-2xl font-serif", children: [
            NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: n.to,
                onClick: () => setOpen(false),
                className: "hover:text-accent transition-colors",
                children: n.label
              },
              n.to
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/valuation", onClick: () => setOpen(false), className: "btn-gold mt-6 self-start", children: "List Your Property" })
          ] })
        ] })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-surface border-t border-border mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury py-20 grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", className: "text-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 20V11l9-7 9 7v9", stroke: "currentColor", strokeWidth: "1.2", fill: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 20v-6h6v6", stroke: "currentColor", strokeWidth: "1.2", fill: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 6l2-2 2 2", stroke: "currentColor", strokeWidth: "1.2", fill: "none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-lg tracking-[0.3em] uppercase", children: "Elara Estates" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed", children: "Where Luxury Meets Home. A private office representing extraordinary residences across Europe, the Americas, and the Middle East." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 mt-7 text-muted-foreground", children: [Instagram, Facebook, Linkedin, MessageCircle, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "social", className: "hover:text-accent transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16, strokeWidth: 1.4 }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs tracking-[0.28em] uppercase mb-5", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [["/properties", "Properties"], ["/buy", "Buy"], ["/rent", "Rent"], ["/developments", "New Developments"], ["/investment", "Investment"]].map(([to, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "hover:text-accent", children: label }) }, to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs tracking-[0.28em] uppercase mb-5", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [["/about", "About"], ["/agents", "Agents"], ["/services", "Services"], ["/blog", "Journal"], ["/faq", "FAQ"], ["/contact", "Contact"]].map(([to, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "hover:text-accent", children: label }) }, to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs tracking-[0.28em] uppercase mb-5", children: "Offices " }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "London" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "14 Berkeley Square, Mayfair W1J · +44 20 7946 0118"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Monaco" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "2 Avenue de Monte-Carlo · +377 99 00 12 14"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Dubai" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "DIFC Gate Village 4 · +971 4 555 0199"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground tracking-wide", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Elara Estates. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Design by",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://softsuitetech.com/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-accent transition-colors",
            children: "Softsuite Techn."
          }
        )
      ] })
    ] }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=80",
        alt: "",
        className: "absolute inset-0 w-full h-full object-cover opacity-30"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center px-6 max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Error 404" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-6xl mt-4", children: "Oops, this property doesn't exist" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "The page you were looking for has been moved, sold, or never existed in our portfolio." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "btn-solid", children: "Back to Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/properties", className: "btn-gold", children: "Browse Properties" })
      ] })
    ] })
  ] });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Something went wrong on our end. Try refreshing or return home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "btn-solid",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "btn-gold", children: "Go home" })
    ] })
  ] }) });
}
const Route$g = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Elara Estates — Where Luxury Meets Home" },
      { name: "description", content: "Elara Estates is a private office representing extraordinary residences across Europe, the Americas, and the Middle East." },
      { property: "og:title", content: "Elara Estates — Where Luxury Meets Home" },
      { property: "og:description", content: "Elara Estates is a private office representing extraordinary residences across Europe, the Americas, and the Middle East." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Elara Estates — Where Luxury Meets Home" },
      { name: "twitter:description", content: "Elara Estates is a private office representing extraordinary residences across Europe, the Americas, and the Middle East." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1b83a2e8-8a43-4e17-8696-c47584e4c04e/id-preview-22a13c0a--d7bc07a7-53f6-4033-a213-7150a7c66091.lovable.app-1780313673504.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1b83a2e8-8a43-4e17-8696-c47584e4c04e/id-preview-22a13c0a--d7bc07a7-53f6-4033-a213-7150a7c66091.lovable.app-1780313673504.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$g.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$f = () => import("./valuation-CKgvSRIz.mjs");
const Route$f = createFileRoute("/valuation")({
  head: () => ({
    meta: [{
      title: "Property Valuation — Elara Estates"
    }, {
      name: "description",
      content: "What is your property worth? Request a private, evidence-based valuation."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./services-DVmXFKHi.mjs");
const Route$e = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Elara Estates"
    }, {
      name: "description",
      content: "End-to-end property services for collectors of extraordinary residences."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./rent-B5UaLlm3.mjs");
const Route$d = createFileRoute("/rent")({
  head: () => ({
    meta: [{
      title: "Rent — Elara Estates"
    }, {
      name: "description",
      content: "Premium rentals — long and short term — in the world's most desirable markets."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./properties-C-lvO1-e.mjs");
const Route$c = createFileRoute("/properties")({
  head: () => ({
    meta: [{
      title: "Properties — Elara Estates"
    }, {
      name: "description",
      content: "Browse our curated portfolio of luxury residences across the world's most coveted addresses."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./investment-xIIsQwP8.mjs");
const Route$b = createFileRoute("/investment")({
  head: () => ({
    meta: [{
      title: "Investment — Elara Estates"
    }, {
      name: "description",
      content: "Invest in premium real estate — residential, commercial, off-plan, and holiday lets."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./faq-DFYhsgiO.mjs");
const Route$a = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ — Elara Estates"
    }, {
      name: "description",
      content: "Answers to the most common questions on buying, renting, selling, and investing with Elara."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./developments-VPwNGhLv.mjs");
const Route$9 = createFileRoute("/developments")({
  head: () => ({
    meta: [{
      title: "New Developments — Elara Estates"
    }, {
      name: "description",
      content: "Off-plan and new-build residences in the world's most exclusive emerging addresses."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./contact-OfH3662z.mjs");
const Route$8 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Elara Estates"
    }, {
      name: "description",
      content: "Speak privately with one of our senior advisors. Mayfair · Monte Carlo · Dubai."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./buy-DQGhcUQq.mjs");
const Route$7 = createFileRoute("/buy")({
  head: () => ({
    meta: [{
      title: "Buy a Property — Elara Estates"
    }, {
      name: "description",
      content: "An elegant, considered path to acquiring your next residence."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./blog-BEHaXWGO.mjs");
const Route$6 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "The Journal — Elara Estates"
    }, {
      name: "description",
      content: "Notes from the market: insight on buying, selling, investing, and living well."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./agents-B6eFSC2B.mjs");
const Route$5 = createFileRoute("/agents")({
  head: () => ({
    meta: [{
      title: "Our Agents — Elara Estates"
    }, {
      name: "description",
      content: "Meet the senior partners and advisors representing Elara Estates worldwide."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./about-dDsQ6dBH.mjs");
const Route$4 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Elara Estates"
    }, {
      name: "description",
      content: "A private office representing extraordinary residences across the world's most coveted markets."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-DW_GUJks.mjs");
const Route$3 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Elara Estates — Where Luxury Meets Home"
    }, {
      name: "description",
      content: "Premium properties, trusted agents, exceptional living. Discover extraordinary residences across the world's most coveted addresses."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const img = (id) => `https://images.unsplash.com/${id}?w=1600&q=80&auto=format&fit=crop`;
const properties = [
  {
    id: "azure-villa-marbella",
    name: "Villa Azure",
    location: "Marbella, Spain",
    price: "€8,950,000",
    priceValue: 895e4,
    status: "FOR SALE",
    tag: "FEATURED",
    beds: 6,
    baths: 7,
    sqft: 9800,
    type: "Villa",
    year: 2023,
    parking: 4,
    image: img("photo-1600596542815-ffad4c1539a9"),
    gallery: [
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1582268611958-ebfd161ef9cf"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1512917774080-9991f1c4c750")
    ],
    description: "An architectural statement perched above the Mediterranean — Villa Azure pairs minimalist concrete forms with warm travertine floors and floor-to-ceiling glass that frames an infinity pool and uninterrupted sea views."
  },
  {
    id: "skyline-penthouse-dubai",
    name: "Skyline Penthouse",
    location: "Downtown Dubai, UAE",
    price: "€12,400,000",
    priceValue: 124e5,
    status: "FOR SALE",
    tag: "NEW",
    beds: 5,
    baths: 6,
    sqft: 8200,
    type: "Penthouse",
    year: 2024,
    parking: 3,
    image: img("photo-1512917774080-9991f1c4c750"),
    gallery: [
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1486325212027-8081e485255e"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1556909114-f6e7ad7d3136")
    ],
    description: "Two-storey duplex penthouse with a private rooftop terrace, plunge pool, and panoramic views of the Burj Khalifa. Bespoke Italian millwork throughout, with a private elevator from the residence lobby."
  },
  {
    id: "atelier-loft-paris",
    name: "Atelier Loft",
    location: "Le Marais, Paris",
    price: "€4,250,000",
    priceValue: 425e4,
    status: "FOR SALE",
    beds: 3,
    baths: 3,
    sqft: 3100,
    type: "Apartment",
    year: 1890,
    parking: 1,
    image: img("photo-1560448204-e02f11c3d0e2"),
    gallery: [
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1486325212027-8081e485255e"),
      img("photo-1512917774080-9991f1c4c750")
    ],
    description: "A 19th-century Marais atelier reimagined with full-height steel windows, white-oak floors, and a sculptural staircase. Mezzanine library and a private courtyard garden."
  },
  {
    id: "ocean-residence-monaco",
    name: "Ocean Residence",
    location: "Monte Carlo, Monaco",
    price: "€18,750,000",
    priceValue: 1875e4,
    status: "FOR SALE",
    tag: "FEATURED",
    beds: 4,
    baths: 5,
    sqft: 4600,
    type: "Apartment",
    year: 2022,
    parking: 2,
    image: img("photo-1582268611958-ebfd161ef9cf"),
    gallery: [
      img("photo-1582268611958-ebfd161ef9cf"),
      img("photo-1486325212027-8081e485255e"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1512917774080-9991f1c4c750")
    ],
    description: "Direct seafront residence on Avenue Princesse Grace with a 220 sqm wraparound terrace, private spa, and concierge service from one of Monaco's most discreet addresses."
  },
  {
    id: "garden-mansion-london",
    name: "Garden Mansion",
    location: "Notting Hill, London",
    price: "€22,300,000",
    priceValue: 223e5,
    status: "FOR SALE",
    beds: 7,
    baths: 8,
    sqft: 11200,
    type: "Mansion",
    year: 1865,
    parking: 3,
    image: img("photo-1600573472550-8090b5e0745e"),
    gallery: [
      img("photo-1600573472550-8090b5e0745e"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1497366216548-37526070297c")
    ],
    description: "A stucco-fronted Victorian villa overlooking a private garden square, restored over three years with subterranean wellness suite, wine cellar, and staff quarters."
  },
  {
    id: "harbor-suite-newyork",
    name: "Harbor Suite",
    location: "Tribeca, New York",
    price: "€34,500/mo",
    priceValue: 34500,
    status: "FOR RENT",
    tag: "NEW",
    beds: 4,
    baths: 4,
    sqft: 5200,
    type: "Loft",
    year: 2021,
    parking: 2,
    image: img("photo-1486325212027-8081e485255e"),
    gallery: [
      img("photo-1486325212027-8081e485255e"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1556909114-f6e7ad7d3136")
    ],
    description: "Cast-iron landmark conversion with sweeping Hudson River views, double-height ceilings, and an entertainer's kitchen by Boffi."
  },
  {
    id: "villa-celeste-mykonos",
    name: "Villa Celeste",
    location: "Mykonos, Greece",
    price: "€48,000/wk",
    priceValue: 48e3,
    status: "FOR RENT",
    beds: 6,
    baths: 6,
    sqft: 7400,
    type: "Villa",
    year: 2020,
    parking: 4,
    image: img("photo-1613490493576-7fde63acd811"),
    gallery: [
      img("photo-1613490493576-7fde63acd811"),
      img("photo-1582268611958-ebfd161ef9cf"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1497366216548-37526070297c")
    ],
    description: "Cliffside Cycladic estate with three infinity pools cascading toward the Aegean. Full staff, chef, and private RIB transfer included."
  },
  {
    id: "alpine-chalet-gstaad",
    name: "Alpine Chalet",
    location: "Gstaad, Switzerland",
    price: "€14,900,000",
    priceValue: 149e5,
    status: "FOR SALE",
    tag: "OFF-PLAN",
    beds: 5,
    baths: 6,
    sqft: 6800,
    type: "Chalet",
    year: 2025,
    parking: 4,
    image: img("photo-1449844908441-8829872d2607"),
    gallery: [
      img("photo-1449844908441-8829872d2607"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1582268611958-ebfd161ef9cf"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1497366216548-37526070297c")
    ],
    description: "Hand-hewn larch and local stone chalet with ski-in/ski-out access, Nordic spa, cinema, and south-facing terraces."
  },
  {
    id: "pied-a-terre-milan",
    name: "Pied-à-Terre Brera",
    location: "Brera, Milan",
    price: "€18,500/mo",
    priceValue: 18500,
    status: "FOR RENT",
    beds: 2,
    baths: 2,
    sqft: 1900,
    type: "Apartment",
    year: 2019,
    parking: 1,
    image: img("photo-1505691938895-1758d7feb511"),
    gallery: [
      img("photo-1505691938895-1758d7feb511"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1512917774080-9991f1c4c750")
    ],
    description: "Top-floor residence on a quiet Brera courtyard with restored frescoes, Carrara marble baths, and a private rooftop terrace."
  }
];
const agents = [
  { id: "isabella-moreau", name: "Isabella Moreau", title: "Director, Private Office", specialty: "Ultra-Prime Residential", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80", sold: 184, years: 14, rating: 4.9, phone: "+377 99 00 12 14", email: "isabella@elaraestates.com" },
  { id: "alexander-keane", name: "Alexander Keane", title: "Senior Partner, London", specialty: "Prime Central London", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80", sold: 211, years: 17, rating: 4.9, phone: "+44 20 7946 0118", email: "alex@elaraestates.com" },
  { id: "noor-rahimi", name: "Noor Rahimi", title: "Head of MENA", specialty: "Dubai & Riviera", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80", sold: 142, years: 11, rating: 5, phone: "+971 4 555 0199", email: "noor@elaraestates.com" },
  { id: "tomas-lindqvist", name: "Tomas Lindqvist", title: "Investment Advisor", specialty: "Income & Off-Plan", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&q=80", sold: 96, years: 9, rating: 4.8, phone: "+41 22 555 0142", email: "tomas@elaraestates.com" },
  { id: "amara-okafor", name: "Amara Okafor", title: "Lettings Director", specialty: "Short & Long Lets", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80", sold: 312, years: 12, rating: 4.9, phone: "+44 20 7946 0181", email: "amara@elaraestates.com" },
  { id: "ren-takeda", name: "Ren Takeda", title: "Architecture & Design", specialty: "New Developments", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80", sold: 87, years: 8, rating: 4.9, phone: "+81 3 5555 0123", email: "ren@elaraestates.com" }
];
const posts = [
  { id: "monaco-market-2026", title: "Monaco's Prime Market: A 2026 Outlook", category: "Market News", excerpt: "Why limited supply continues to drive double-digit growth in the principality.", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80", date: "May 12, 2026", readTime: "6 min" },
  { id: "buying-off-plan", title: "The Quiet Advantage of Buying Off-Plan", category: "Investment", excerpt: "How early-stage acquisition can unlock pricing tiers reserved for insiders.", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1400&q=80", date: "Apr 28, 2026", readTime: "8 min" },
  { id: "interior-trends", title: "Interior Trends Shaping 2026 Residences", category: "Lifestyle", excerpt: "Warm minimalism, tactile stone, and the return of the library.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80", date: "Apr 14, 2026", readTime: "5 min" },
  { id: "renting-luxury", title: "Renting a Private Villa: What to Expect", category: "Renting", excerpt: "Concierge, staff, and the discreet logistics of seasonal living.", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80", date: "Mar 30, 2026", readTime: "7 min" },
  { id: "buyer-guide", title: "A First-Time Luxury Buyer's Playbook", category: "Buying Tips", excerpt: "From letter of intent to keys — the elegant choreography of a private sale.", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80", date: "Mar 18, 2026", readTime: "9 min" }
];
const testimonials = [
  { name: "Charlotte & James Whitfield", role: "Bought in Notting Hill", quote: "Elara navigated a complex off-market acquisition with the kind of quiet discretion you can rarely find. Exceptional from first call to completion.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Hassan Al-Mansouri", role: "Investor, Dubai", quote: "Their off-plan portfolio access is unmatched. Three acquisitions in two years, each one ahead of market.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Sofia Romano", role: "Rented in Milan", quote: "I asked for a private terrace in Brera within a week. They delivered two perfect options the next morning.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" }
];
const $$splitComponentImporter$2 = () => import("./properties._id-C8svNQmp.mjs");
const $$splitNotFoundComponentImporter$2 = () => import("./properties._id-Bz3nng3v.mjs");
const Route$2 = createFileRoute("/properties/$id")({
  loader: ({
    params
  }) => {
    const p = properties.find((x) => x.id === params.id);
    if (!p) throw notFound();
    return {
      property: p
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.property.name ?? "Property"} — Elara Estates`
    }, {
      name: "description",
      content: loaderData?.property.description ?? ""
    }, {
      property: "og:image",
      content: loaderData?.property.image ?? ""
    }]
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./blog._id-BVCQSxLa.mjs");
const $$splitNotFoundComponentImporter$1 = () => import("./blog._id-XtrwGYI2.mjs");
const Route$1 = createFileRoute("/blog/$id")({
  loader: ({
    params
  }) => {
    const post = posts.find((p) => p.id === params.id);
    if (!post) throw notFound();
    return {
      post
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.post.title ?? "Journal"} — Elara Estates`
    }, {
      name: "description",
      content: loaderData?.post.excerpt ?? ""
    }, {
      property: "og:image",
      content: loaderData?.post.image ?? ""
    }]
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./agents._id-CyjFkdel.mjs");
const $$splitNotFoundComponentImporter = () => import("./agents._id-DC_oy4O1.mjs");
const Route = createFileRoute("/agents/$id")({
  loader: ({
    params
  }) => {
    const a = agents.find((x) => x.id === params.id);
    if (!a) throw notFound();
    return {
      agent: a
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.agent.name ?? "Agent"} — Elara Estates`
    }, {
      name: "description",
      content: `${loaderData?.agent.title} · ${loaderData?.agent.specialty}`
    }]
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ValuationRoute = Route$f.update({
  id: "/valuation",
  path: "/valuation",
  getParentRoute: () => Route$g
});
const ServicesRoute = Route$e.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$g
});
const RentRoute = Route$d.update({
  id: "/rent",
  path: "/rent",
  getParentRoute: () => Route$g
});
const PropertiesRoute = Route$c.update({
  id: "/properties",
  path: "/properties",
  getParentRoute: () => Route$g
});
const InvestmentRoute = Route$b.update({
  id: "/investment",
  path: "/investment",
  getParentRoute: () => Route$g
});
const FaqRoute = Route$a.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$g
});
const DevelopmentsRoute = Route$9.update({
  id: "/developments",
  path: "/developments",
  getParentRoute: () => Route$g
});
const ContactRoute = Route$8.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$g
});
const BuyRoute = Route$7.update({
  id: "/buy",
  path: "/buy",
  getParentRoute: () => Route$g
});
const BlogRoute = Route$6.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$g
});
const AgentsRoute = Route$5.update({
  id: "/agents",
  path: "/agents",
  getParentRoute: () => Route$g
});
const AboutRoute = Route$4.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$g
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$g
});
const PropertiesIdRoute = Route$2.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => PropertiesRoute
});
const BlogIdRoute = Route$1.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => BlogRoute
});
const AgentsIdRoute = Route.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => AgentsRoute
});
const AgentsRouteChildren = {
  AgentsIdRoute
};
const AgentsRouteWithChildren = AgentsRoute._addFileChildren(AgentsRouteChildren);
const BlogRouteChildren = {
  BlogIdRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const PropertiesRouteChildren = {
  PropertiesIdRoute
};
const PropertiesRouteWithChildren = PropertiesRoute._addFileChildren(
  PropertiesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AgentsRoute: AgentsRouteWithChildren,
  BlogRoute: BlogRouteWithChildren,
  BuyRoute,
  ContactRoute,
  DevelopmentsRoute,
  FaqRoute,
  InvestmentRoute,
  PropertiesRoute: PropertiesRouteWithChildren,
  RentRoute,
  ServicesRoute,
  ValuationRoute
};
const routeTree = Route$g._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$2 as R,
  posts as a,
  agents as b,
  Route$1 as c,
  Route as d,
  properties as p,
  router as r,
  testimonials as t
};
