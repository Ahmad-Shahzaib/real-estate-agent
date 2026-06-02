import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties } from "@/lib/property-data";

export const Route = createFileRoute("/rent")({
  head: () => ({
    meta: [
      { title: "Rent — Elara Estates" },
      { name: "description", content: "Premium rentals — long and short term — in the world's most desirable markets." },
    ],
  }),
  component: RentPage,
});

function RentPage() {
  const [tab, setTab] = useState<"long" | "short">("long");
  return (
    <>
      <PageHero
        eyebrow="Lettings"
        title="Premium Rental Properties"
        subtitle="Considered residences for the way you actually want to live — for a season, a year, or longer."
        image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1800&q=80"
      />

      <section className="container-luxury py-20">
        <div className="flex justify-center gap-0 border-b border-border">
          {[["long","Long-Term Lets"],["short","Short-Term Lets"]].map(([k,l]) => (
            <button key={k} onClick={() => setTab(k as any)} className={`px-8 py-4 text-sm tracking-[0.22em] uppercase border-b-2 -mb-px transition-colors ${tab === k ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{l}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {properties.filter((p) => p.status === "FOR RENT").map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-luxury grid lg:grid-cols-2 gap-14 items-center">
          <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80" alt="" className="aspect-[4/5] w-full object-cover" />
          <div>
            <span className="eyebrow">Tenant Guide</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">A renting experience to match the residence</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">From referencing to inventory and ongoing concierge, every detail is handled by a dedicated lettings manager.</p>
            <div className="mt-8 space-y-4">
              {["Photo ID & proof of address","Three months of bank statements","Employer or accountant reference","Previous landlord reference","Deposit equivalent to 5–10 weeks rent"].map((r) => (
                <div key={r} className="flex items-start gap-3 border-b border-border pb-3">
                  <Check size={18} className="text-accent mt-0.5" /> <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
