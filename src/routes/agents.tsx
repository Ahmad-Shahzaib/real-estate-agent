import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import { agents } from "@/lib/property-data";

export const Route = createFileRoute("/agents")({
  head: () => ({
    meta: [
      { title: "Our Agents — Elara Estates" },
      { name: "description", content: "Meet the senior partners and advisors representing Elara Estates worldwide." },
    ],
  }),
  component: AgentsPage,
});

function AgentsPage() {
  return (
    <>
      <section className="pt-32 pb-16 container-luxury">
        <span className="eyebrow">Our People</span>
        <h1 className="font-serif text-5xl md:text-7xl mt-3 max-w-3xl">Our Expert Team</h1>
        <p className="text-muted-foreground mt-5 max-w-2xl">A small, senior team of advisors with deep expertise in their markets — and a quiet talent for matching homes to the lives they're meant to hold.</p>
      </section>

      <section className="container-luxury pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((a) => (
          <div key={a.id} className="luxe-card group">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={a.img} alt={a.name} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            </div>
            <div className="p-7">
              <h3 className="font-serif text-2xl">{a.name}</h3>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1">{a.title}</div>
              <div className="text-sm text-accent mt-3">{a.specialty}</div>
              <div className="grid grid-cols-3 gap-4 border-y border-border py-5 mt-5 text-center">
                <div><div className="font-serif text-xl">{a.sold}</div><div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">Sold</div></div>
                <div><div className="font-serif text-xl">{a.years}</div><div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">Years</div></div>
                <div><div className="font-serif text-xl">{a.rating}</div><div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">Rating</div></div>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex gap-3 text-muted-foreground">
                  <a href="#" aria-label="ig" className="hover:text-accent"><Instagram size={15}/></a>
                  <a href="#" aria-label="li" className="hover:text-accent"><Linkedin size={15}/></a>
                  <a href={`mailto:${a.email}`} aria-label="email" className="hover:text-accent"><Mail size={15}/></a>
                </div>
                <Link to="/agents/$id" params={{ id: a.id }} className="text-xs tracking-[0.22em] uppercase text-accent hover:underline flex items-center gap-1">
                  View Profile <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
