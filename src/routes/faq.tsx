import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Plus, Minus, Search } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Elara Estates" },
      { name: "description", content: "Answers to the most common questions on buying, renting, selling, and investing with Elara." },
    ],
  }),
  component: FaqPage,
});

const data: Record<string, [string, string][]> = {
  Buying: [
    ["What deposit is typically required?", "10–30% of the agreed price is standard, paid at exchange."],
    ["Do you represent off-market opportunities?", "Yes — around 40% of our annual transactions occur quietly."],
    ["Can you advise on cross-border purchases?", "We coordinate across 18 jurisdictions with trusted legal and tax counsel."],
    ["What's the typical timeline?", "6–12 weeks from offer accepted to keys handed over for resale."],
    ["Do you handle furniture and styling?", "Yes, via our curated interiors and staging partners."],
    ["Is anonymity possible?", "Acquisitions through SPVs and trusts are routinely structured."],
    ["What fees do buyers pay?", "Our fee is typically borne by the vendor; we'll disclose any exceptions in writing."],
    ["Can I purchase remotely?", "Yes — power of attorney and virtual viewings are standard practice."],
  ],
  Renting: [
    ["What documents are required?", "Photo ID, proof of address, bank statements, references."],
    ["How long is the typical lease?", "12 months minimum on long lets; 1 week minimum on short lets."],
    ["What deposit is required?", "Typically 5–10 weeks rent."],
    ["Are pets allowed?", "On a per-property basis; we'll confirm before viewings."],
    ["Can I extend my lease?", "Most landlords welcome renewals; terms are negotiated 60 days before expiry."],
    ["Is the property managed?", "We offer full management on most lettings."],
  ],
  Selling: [
    ["How are you different from a high-street agency?", "We are a private office. We don't run open houses or publish indiscriminately."],
    ["What is your fee?", "Confidentially agreed per mandate. Typically 1.5–2.5% on prime sales."],
    ["Will my property be marketed publicly?", "Only with your express permission; we begin every mandate off-market."],
    ["How long does a sale usually take?", "From mandate to completion, 8–16 weeks is typical."],
    ["What's included in the marketing?", "Editorial photography, film, brochure, private viewings, qualified outreach."],
    ["Can I work with multiple agents?", "We accept sole and joint sole mandates only — for results, never multiple agency."],
  ],
  Investment: [
    ["What is the minimum ticket size?", "We typically advise from €2M upwards per acquisition."],
    ["Do you manage assets post-acquisition?", "Yes — full asset management, leasing, and reporting are available."],
    ["What returns should I expect?", "Net yields of 3–6% in prime metros, with 4–10 year holds targeting double-digit IRRs."],
    ["Do you co-invest?", "On select mandates, our principals invest alongside clients."],
    ["Can you advise on financing?", "We work with five private banks and several specialist lenders."],
  ],
};

function FaqPage() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string>("Buying-0");
  const filtered = useMemo(() => {
    const out: Record<string, [string, string][]> = {};
    for (const [cat, items] of Object.entries(data)) {
      const f = items.filter(([qq, a]) => `${qq} ${a}`.toLowerCase().includes(q.toLowerCase()));
      if (f.length) out[cat] = f;
    }
    return out;
  }, [q]);

  return (
    <>
      <section className="pt-32 pb-10 container-luxury">
        <span className="eyebrow">Frequently Asked</span>
        <h1 className="font-serif text-5xl md:text-7xl mt-3">Questions, answered.</h1>
      </section>

      <section className="container-luxury pb-10">
        <div className="luxe-card p-4 flex items-center gap-3 max-w-2xl">
          <Search size={16} className="text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search FAQs..." className="bg-transparent flex-1 py-2 focus:outline-none" />
        </div>
      </section>

      <section className="container-luxury pb-24 space-y-16">
        {Object.entries(filtered).map(([cat, items]) => (
          <div key={cat}>
            <h2 className="font-serif text-3xl border-b border-border pb-4">{cat}</h2>
            <div className="divide-y divide-border">
              {items.map(([qq, a], i) => {
                const key = `${cat}-${i}`;
                const isOpen = open === key;
                return (
                  <button key={key} onClick={() => setOpen(isOpen ? "" : key)} className="w-full text-left py-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-serif text-xl">{qq}</span>
                      {isOpen ? <Minus size={18} className="text-accent" /> : <Plus size={18} className="text-accent" />}
                    </div>
                    {isOpen && <p className="mt-4 text-muted-foreground leading-relaxed">{a}</p>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-surface py-20">
        <div className="container-luxury text-center max-w-2xl">
          <h3 className="font-serif text-4xl">Still have questions?</h3>
          <p className="mt-3 text-muted-foreground">Chat directly with a senior advisor.</p>
          <Link to="/contact" className="btn-solid mt-8">Speak with Us</Link>
        </div>
      </section>
    </>
  );
}
