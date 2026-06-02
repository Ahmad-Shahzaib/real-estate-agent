import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Key, Calculator, TrendingUp, Scale, Banknote, Sofa, Plane, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Elara Estates" },
      { name: "description", content: "End-to-end property services for collectors of extraordinary residences." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  [Home, "Property Sales", "Discreet representation for vendors and acquirers, on and off market."],
  [Key, "Rental Management", "Letting, tenant care, and full lifecycle property administration."],
  [Calculator, "Property Valuation", "Independent, evidence-based appraisals for sale and refinancing."],
  [TrendingUp, "Investment Advisory", "Portfolio strategy, market entry, and capital allocation."],
  [Scale, "Legal & Documentation", "Coordinated conveyancing across 18 jurisdictions."],
  [Banknote, "Mortgage Assistance", "Bespoke finance with private banking partners."],
  [Sofa, "Interior Design Referrals", "Curated network of award-winning studios and craftspeople."],
  [Plane, "Relocation Services", "Schools, staffing, immigration, and quiet logistics."],
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services for a considered life in property"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80"
      />

      <section className="container-luxury py-24 grid md:grid-cols-2 gap-x-12 gap-y-14">
        {services.map(([Icon, t, d]: any) => (
          <div key={t} className="border-t border-border pt-8">
            <Icon size={32} strokeWidth={1.2} className="text-accent" />
            <h3 className="font-serif text-3xl mt-5">{t}</h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">{d}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-5 text-xs tracking-[0.22em] uppercase text-accent hover:underline">
              Learn More <ArrowRight size={12} />
            </Link>
          </div>
        ))}
      </section>

      <section className="relative py-24 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative container-luxury text-white text-center max-w-2xl">
          <span className="eyebrow !text-[color:var(--gold)]">Bespoke</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Need a custom service? Let's talk.</h2>
          <Link to="/contact" className="btn-gold mt-8 !text-white !border-[color:var(--gold)] hover:!text-black">Start a Conversation</Link>
        </div>
      </section>
    </>
  );
}
