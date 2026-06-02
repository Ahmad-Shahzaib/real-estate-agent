import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, Clock, Instagram, Linkedin, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elara Estates" },
      { name: "description", content: "Speak privately with one of our senior advisors. Mayfair · Monte Carlo · Dubai." },
    ],
  }),
  component: Contact,
});

const offices = [
  { city: "London", addr: "14 Berkeley Square, Mayfair W1J", phone: "+44 20 7946 0118" },
  { city: "Monaco", addr: "2 Avenue de Monte-Carlo", phone: "+377 99 00 12 14" },
  { city: "Dubai", addr: "DIFC Gate Village 4, Level 6", phone: "+971 4 555 0199" },
];

function Contact() {
  return (
    <>
      <section className="pt-32 pb-12 container-luxury">
        <span className="eyebrow">Get in Touch</span>
        <h1 className="font-serif text-5xl md:text-7xl mt-3">Speak with us, privately.</h1>
      </section>

      <section className="container-luxury grid lg:grid-cols-2 gap-12 pb-20">
        <div className="space-y-7">
          {[
            [MapPin, "Head Office", "14 Berkeley Square, Mayfair, London W1J"],
            [Phone, "Phone", "+44 20 7946 0118"],
            [Mail, "Email", "private@elaraestates.com"],
            [MessageCircle, "WhatsApp", "+44 7700 900 122"],
            [Clock, "Office Hours", "Mon–Fri 9:00–19:00 · Sat 10:00–16:00"],
          ].map(([Icon, t, d]: any) => (
            <div key={t} className="flex gap-5 border-b border-border pb-5">
              <Icon size={20} strokeWidth={1.4} className="text-accent mt-1 shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{t}</div>
                <div className="font-serif text-xl mt-1">{d}</div>
              </div>
            </div>
          ))}
          <div className="flex gap-4 pt-2 text-muted-foreground">
            <a href="#" className="hover:text-accent"><Instagram size={18} /></a>
            <a href="#" className="hover:text-accent"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-accent"><Facebook size={18} /></a>
          </div>
        </div>

        <form className="luxe-card p-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <h2 className="font-serif text-3xl">Send a Message</h2>
          <input required placeholder="Name" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent" />
          <input required type="email" placeholder="Email" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent" />
          <input placeholder="Phone" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent" />
          <select className="w-full bg-transparent border-b border-border py-3 focus:outline-none">
            <option className="bg-background">Subject</option>
            <option className="bg-background">Buying enquiry</option>
            <option className="bg-background">Selling enquiry</option>
            <option className="bg-background">Rental enquiry</option>
            <option className="bg-background">Investment</option>
            <option className="bg-background">Press</option>
          </select>
          <textarea rows={5} placeholder="Message" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent resize-none" />
          <button className="btn-solid w-full justify-center">Send Message</button>
        </form>
      </section>

      <section className="aspect-[16/7]">
        <iframe src="https://www.google.com/maps?q=Mayfair+London&output=embed" className="w-full h-full" title="Map" />
      </section>

      <section className="container-luxury py-24">
        <span className="eyebrow">Our Offices</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-12">Worldwide presence</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((o) => (
            <div key={o.city} className="luxe-card p-8">
              <div className="font-serif text-3xl">{o.city}</div>
              <div className="hairline mt-4" />
              <p className="text-muted-foreground mt-5">{o.addr}</p>
              <a href={`tel:${o.phone}`} className="block mt-3 text-accent">{o.phone}</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
