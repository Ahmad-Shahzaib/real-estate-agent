import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties } from "@/lib/property-data";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "Investment — Elara Estates" },
      { name: "description", content: "Invest in premium real estate — residential, commercial, off-plan, and holiday lets." },
    ],
  }),
  component: InvestmentPage,
});

const tabs = [
  { k: "residential", l: "Residential", d: "Stabilised rental residences in prime metros." },
  { k: "commercial", l: "Commercial", d: "Income-producing assets across office, retail, and logistics." },
  { k: "offplan", l: "Off-Plan", d: "Early-stage acquisitions with capital appreciation potential." },
  { k: "holiday", l: "Holiday Lets", d: "Seasonal residences in trophy leisure markets." },
];

function InvestmentPage() {
  const [tab, setTab] = useState("residential");
  const [price, setPrice] = useState(2_500_000);
  const [yieldPct, setYieldPct] = useState(5);
  const annual = useMemo(() => Math.round(price * yieldPct / 100), [price, yieldPct]);

  return (
    <>
      <PageHero
        eyebrow="Capital"
        title="Invest in Premium Real Estate"
        subtitle="Bespoke advisory for clients building global, income-producing property portfolios."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
      />

      <section className="container-luxury py-24">
        <span className="eyebrow">Strategies</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-10">Four ways we invest</h2>
        <div className="flex flex-wrap gap-2 border-b border-border">
          {tabs.map((t) => (
            <button key={t.k} onClick={() => setTab(t.k)} className={`px-6 py-3 text-xs tracking-[0.22em] uppercase border-b-2 -mb-px ${tab === t.k ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{t.l}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80" alt="" className="aspect-[4/3] w-full object-cover" />
          <div>
            <h3 className="font-serif text-3xl">{tabs.find((t) => t.k === tab)!.l}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{tabs.find((t) => t.k === tab)!.d}</p>
            <p className="mt-4 text-foreground/85 leading-relaxed">Our team underwrites every opportunity end-to-end — from desktop analysis through asset management. Typical hold periods range from 4 to 10 years.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-luxury grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="eyebrow">ROI Calculator</span>
            <h2 className="font-serif text-4xl mt-3">Estimate your annual income</h2>
          </div>
          <div className="luxe-card p-8 space-y-6">
            <div>
              <div className="flex justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground"><span>Purchase Price</span><span>€{price.toLocaleString()}</span></div>
              <input type="range" min={500_000} max={20_000_000} step={100_000} value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full mt-3 accent-[color:var(--gold)]" />
            </div>
            <div>
              <div className="flex justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground"><span>Net Rental Yield</span><span>{yieldPct}%</span></div>
              <input type="range" min={1} max={12} step={0.1} value={yieldPct} onChange={(e) => setYieldPct(+e.target.value)} className="w-full mt-3 accent-[color:var(--gold)]" />
            </div>
            <div className="border-t border-border pt-6">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Projected Annual Income</div>
              <div className="font-serif text-5xl text-accent mt-2">€{annual.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxury py-24 grid sm:grid-cols-3 gap-6">
        {[
          ["4.8%","Avg. Net Yield"],
          ["+11.2%","5-Yr Price Growth"],
          ["94","Demand Index"],
        ].map(([n,l]) => (
          <div key={l} className="luxe-card p-10 text-center">
            <div className="font-serif text-5xl text-accent">{n}</div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-3">{l}</div>
          </div>
        ))}
      </section>

      <section className="container-luxury pb-24">
        <h2 className="font-serif text-4xl mb-10">Featured Investment Properties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.slice(0, 3).map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
        <div className="text-center mt-14">
          <Link to="/contact" className="btn-solid">Speak to an Investment Advisor</Link>
        </div>
      </section>
    </>
  );
}
