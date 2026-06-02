import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, FileText, Eye, Handshake, Key, Plus, Minus } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties } from "@/lib/property-data";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy a Property — Elara Estates" },
      { name: "description", content: "An elegant, considered path to acquiring your next residence." },
    ],
  }),
  component: BuyPage,
});

const steps = [
  { i: Search, t: "Search", d: "Define brief, location, and budget with your advisor." },
  { i: FileText, t: "Consult", d: "Receive a curated shortlist, on and off market." },
  { i: Eye, t: "View", d: "Private viewings arranged at your convenience." },
  { i: Handshake, t: "Offer", d: "Negotiation and legal structuring by our private office." },
  { i: Key, t: "Move In", d: "Completion, key handover, and lifestyle handoff." },
];

const faqs = [
  ["What deposit is typically required?", "For prime residential acquisitions, deposits commonly sit between 10–30% of the agreed price, paid at exchange. Off-plan structures vary by jurisdiction."],
  ["Do you represent off-market opportunities?", "Yes. Approximately 40% of our annual transactions occur quietly, before any public listing."],
  ["Can you advise on cross-border purchases?", "We work alongside legal and tax counsel in 18 jurisdictions to coordinate seamless international acquisitions."],
  ["What is the typical timeline?", "From offer accepted to keys handed over, 6–12 weeks is typical for resale; off-plan timelines follow the development schedule."],
];

function BuyPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="Acquisitions"
        title="Buy Your Perfect Property"
        subtitle="A discreet, considered process designed around the way our clients actually live."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
      >
        <Link to="/contact" className="btn-gold !text-white !border-white/70 hover:!text-black">Speak to an Advisor</Link>
      </PageHero>

      <section className="container-luxury py-24">
        <span className="eyebrow">The Process</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 max-w-xl">Five quiet steps to ownership</h2>
        <div className="grid md:grid-cols-5 gap-8 mt-14">
          {steps.map((s, i) => (
            <div key={s.t} className="relative">
              <div className="text-accent font-serif text-3xl">0{i+1}</div>
              <s.i size={26} strokeWidth={1.3} className="text-foreground mt-5" />
              <h3 className="font-serif text-2xl mt-4">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxury pb-24">
        <h2 className="font-serif text-4xl mb-10">Featured Properties for Sale</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.filter((p) => p.status === "FOR SALE").slice(0, 6).map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative container-luxury text-white text-center max-w-2xl">
          <span className="eyebrow !text-[color:var(--gold)]">Free Resource</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">The Elara Buyer's Guide</h2>
          <p className="mt-4 text-white/80">A 48-page private edition on acquiring residences worldwide — from due diligence to discreet completion.</p>
          <button className="btn-gold mt-8 !text-white !border-[color:var(--gold)] hover:!text-black">Download Guide</button>
        </div>
      </section>

      <section className="container-luxury py-24 max-w-3xl">
        <span className="eyebrow">Common Questions</span>
        <h2 className="font-serif text-4xl mt-3 mb-10">Buyer FAQs</h2>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map(([q, a], i) => (
            <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-6">
              <div className="flex items-center justify-between gap-4">
                <span className="font-serif text-xl">{q}</span>
                {open === i ? <Minus size={18} className="text-accent" /> : <Plus size={18} className="text-accent" />}
              </div>
              {open === i && <p className="mt-4 text-muted-foreground leading-relaxed">{a}</p>}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
