import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { n as MapPin, o as Phone, d as Mail, b as MessageCircle, p as Clock, I as Instagram, L as Linkedin, F as Facebook } from "../_libs/lucide-react.mjs";
const offices = [{
  city: "London",
  addr: "14 Berkeley Square, Mayfair W1J",
  phone: "+44 20 7946 0118"
}, {
  city: "Monaco",
  addr: "2 Avenue de Monte-Carlo",
  phone: "+377 99 00 12 14"
}, {
  city: "Dubai",
  addr: "DIFC Gate Village 4, Level 6",
  phone: "+971 4 555 0199"
}];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-32 pb-12 container-luxury", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl mt-3", children: "Speak with us, privately." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury grid lg:grid-cols-2 gap-12 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-7", children: [
        [[MapPin, "Head Office", "14 Berkeley Square, Mayfair, London W1J"], [Phone, "Phone", "+44 20 7946 0118"], [Mail, "Email", "private@elaraestates.com"], [MessageCircle, "WhatsApp", "+44 7700 900 122"], [Clock, "Office Hours", "Mon–Fri 9:00–19:00 · Sat 10:00–16:00"]].map(([Icon, t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 border-b border-border pb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, strokeWidth: 1.4, className: "text-accent mt-1 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl mt-1", children: d })
          ] })
        ] }, t)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 pt-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "luxe-card p-10 space-y-5", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl", children: "Send a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Name", className: "w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "Email", className: "w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Phone", className: "w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full bg-transparent border-b border-border py-3 focus:outline-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Buying enquiry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Selling enquiry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Rental enquiry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Investment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Press" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, placeholder: "Message", className: "w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent resize-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-solid w-full justify-center", children: "Send Message" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "aspect-[16/7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://www.google.com/maps?q=Mayfair+London&output=embed", className: "w-full h-full", title: "Map" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxury py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Our Offices" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-3 mb-12", children: "Worldwide presence" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: offices.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl", children: o.city }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline mt-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-5", children: o.addr }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${o.phone}`, className: "block mt-3 text-accent", children: o.phone })
      ] }, o.city)) })
    ] })
  ] });
}
export {
  Contact as component
};
