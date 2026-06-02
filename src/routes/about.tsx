import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Sparkles, EyeOff, Lightbulb, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { agents } from "@/lib/property-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elara Estates" },
      { name: "description", content: "A private office representing extraordinary residences across the world's most coveted markets." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The House"
        title="A private office for extraordinary residences"
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=80"
      />

      <section className="container-luxury py-24 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <span className="eyebrow">Our Story</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">Founded in 2012 around a single conviction.</h2>
          <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
            <p>That the world's most extraordinary residences deserve representation as considered as their architecture. Elara began as a three-partner practice in Mayfair and has grown, deliberately, into a global private office of fifty advisors across six offices.</p>
            <p>We don't run open houses. We don't publish listings the moment we receive them. Instead, we build long, careful relationships with both vendors and clients — and we transact, quietly, on their behalf.</p>
            <p>Today we represent residences valued from €2M to €200M+ across Europe, the Americas, and the Middle East.</p>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80" alt="" className="lg:col-span-5 aspect-[4/5] w-full object-cover" />
      </section>

      <section className="bg-surface py-24">
        <div className="container-luxury grid md:grid-cols-2 gap-8">
          {[
            { t: "Mission", d: "To represent each residence with the discretion, expertise, and craft it deserves — and to deliver outcomes our clients quietly recommend." },
            { t: "Vision", d: "To be the private office of choice for collectors of extraordinary homes worldwide." },
          ].map((x) => (
            <div key={x.t} className="luxe-card p-10">
              <span className="eyebrow">{x.t}</span>
              <p className="font-serif text-2xl mt-5 leading-snug">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxury py-24">
        <span className="eyebrow">Core Values</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">Five quiet principles</h2>
        <div className="grid md:grid-cols-5 gap-6 mt-12">
          {[
            [ShieldCheck,"Integrity"],
            [Sparkles,"Excellence"],
            [EyeOff,"Discretion"],
            [Lightbulb,"Innovation"],
            [Users,"Client-First"],
          ].map(([Icon,t]: any) => (
            <div key={t} className="border-t border-border pt-6">
              <Icon size={26} strokeWidth={1.3} className="text-accent" />
              <h3 className="font-serif text-2xl mt-4">{t}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxury pb-24">
        <span className="eyebrow">The Team</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-12">Partners & Advisors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {agents.map((a) => (
            <div key={a.id} className="group">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={a.img} alt={a.name} className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105" />
              </div>
              <h3 className="font-serif text-2xl mt-5">{a.name}</h3>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1">{a.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-luxury">
          <span className="eyebrow">Milestones</span>
          <h2 className="font-serif text-4xl mt-3 mb-12">Timeline</h2>
          <div className="space-y-8 max-w-3xl">
            {[
              ["2012","Founded in Mayfair, London."],
              ["2015","First international transaction — Cap-Ferrat."],
              ["2018","Monaco office opens; private office launches."],
              ["2021","Dubai and New York representation established."],
              ["2024","Crossed €4Bn in lifetime transactions."],
              ["2026","Expansion into Tokyo and Singapore."],
            ].map(([y,d]) => (
              <div key={y} className="grid grid-cols-[120px_1fr] gap-6 border-b border-border pb-6">
                <div className="font-serif text-2xl text-accent">{y}</div>
                <div className="text-foreground/85">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxury py-20">
        <div className="text-center mb-10 eyebrow">Awards & Partners</div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 items-center opacity-70">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="font-serif text-2xl text-center tracking-[0.2em] text-muted-foreground">
              {["FT","FORBES","ROBB","WSJ","ELLE DECO","AD"][i]}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
