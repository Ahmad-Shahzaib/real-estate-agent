import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/developments")({
  head: () => ({
    meta: [
      { title: "New Developments — Elara Estates" },
      { name: "description", content: "Off-plan and new-build residences in the world's most exclusive emerging addresses." },
    ],
  }),
  component: DevPage,
});

const devs = [
  { name: "The Cascade Residences", location: "Marina Bay, Dubai", type: "Branded Residences", units: 48, completion: "Q4 2026", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1600&q=80" },
  { name: "Villa Solaire Estate", location: "Cap d'Antibes, France", type: "Private Villas (12)", units: 12, completion: "Q2 2027", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80" },
  { name: "Lumière Tower", location: "Tribeca, New York", type: "Loft Penthouses", units: 24, completion: "Q1 2026", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80" },
];

const timeline = [
  { year: "2024", label: "Launch & Reservations" },
  { year: "2025", label: "Foundation & Structure" },
  { year: "2026", label: "Fit-out & Façade" },
  { year: "2027", label: "Handover & Concierge" },
];

function DevPage() {
  return (
    <>
      <PageHero
        eyebrow="Off-Plan"
        title="Off-Plan & New Build Developments"
        subtitle="Early-stage access to the next generation of branded residences and bespoke estates."
        image="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1800&q=80"
      />

      <section className="container-luxury py-24 space-y-24">
        {devs.map((d, i) => (
          <div key={d.name} className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 ? "lg:[&>img]:order-2" : ""}`}>
            <img src={d.img} alt={d.name} className="aspect-[4/3] w-full object-cover" />
            <div>
              <span className="eyebrow">{d.type}</span>
              <h3 className="font-serif text-4xl mt-3">{d.name}</h3>
              <div className="text-muted-foreground mt-2">{d.location}</div>
              <div className="grid grid-cols-2 gap-6 mt-8 border-y border-border py-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Units</div>
                  <div className="font-serif text-2xl mt-1">{d.units}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Completion</div>
                  <div className="font-serif text-2xl mt-1">{d.completion}</div>
                </div>
              </div>
              <button className="btn-gold mt-8">Register Interest <ArrowRight size={14} /></button>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-surface py-24">
        <div className="container-luxury">
          <span className="eyebrow">Why Off-Plan</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 max-w-xl">The quiet advantage of buying early</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              ["Tier-1 Pricing","Reserve units before they reach the open market."],
              ["Bespoke Specification","Influence finishes, layouts, and integrations early."],
              ["Capital Appreciation","Historically, well-chosen off-plan delivers strong uplift on completion."],
            ].map(([t,d]) => (
              <div key={t} className="border-t border-border pt-6">
                <h4 className="font-serif text-2xl">{t}</h4>
                <p className="text-muted-foreground mt-3">{d}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-4xl mt-20 mb-10">Development Timeline</h2>
          <div className="relative grid md:grid-cols-4 gap-6">
            <div className="hidden md:block absolute top-3 left-0 right-0 h-px bg-border" />
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <div className="w-6 h-6 rounded-full bg-accent" />
                <div className="font-serif text-2xl mt-4">{t.year}</div>
                <div className="text-sm text-muted-foreground mt-1">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
