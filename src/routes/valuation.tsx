import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, LineChart, Mail } from "lucide-react";

export const Route = createFileRoute("/valuation")({
  head: () => ({
    meta: [
      { title: "Property Valuation — Elara Estates" },
      { name: "description", content: "What is your property worth? Request a private, evidence-based valuation." },
    ],
  }),
  component: Valuation,
});

function Valuation() {
  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative container-luxury grid lg:grid-cols-12 gap-12 items-center text-white">
          <div className="lg:col-span-6">
            <span className="eyebrow !text-[color:var(--gold)]">Free Appraisal</span>
            <h1 className="font-serif text-5xl md:text-6xl mt-4">What Is Your Property Worth?</h1>
            <p className="mt-5 text-white/80 max-w-md">A senior advisor will review your residence and return a confidential, evidence-based market valuation within 48 hours.</p>
          </div>
          <form className="lg:col-span-6 bg-background text-foreground p-8 lg:p-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-serif text-2xl">Request a Valuation</h3>
            <input required placeholder="Property Address" className="w-full border-b border-border py-2 bg-transparent focus:outline-none focus:border-accent" />
            <div className="grid grid-cols-2 gap-4">
              <select className="border-b border-border py-2 bg-transparent focus:outline-none">
                <option className="bg-background">Property Type</option>
                <option className="bg-background">Apartment</option>
                <option className="bg-background">Villa</option>
                <option className="bg-background">Penthouse</option>
              </select>
              <select className="border-b border-border py-2 bg-transparent focus:outline-none">
                {[1,2,3,4,5,6].map(n => <option key={n} className="bg-background">{n} Bedrooms</option>)}
              </select>
              <input placeholder="Size (sqft)" className="border-b border-border py-2 bg-transparent focus:outline-none" />
              <select className="border-b border-border py-2 bg-transparent focus:outline-none">
                <option className="bg-background">Condition</option>
                <option className="bg-background">New / Renovated</option>
                <option className="bg-background">Good</option>
                <option className="bg-background">Needs Work</option>
              </select>
            </div>
            <input required placeholder="Name" className="w-full border-b border-border py-2 bg-transparent focus:outline-none" />
            <input required type="email" placeholder="Email" className="w-full border-b border-border py-2 bg-transparent focus:outline-none" />
            <input placeholder="Phone" className="w-full border-b border-border py-2 bg-transparent focus:outline-none" />
            <button className="btn-solid w-full justify-center mt-2">Request Valuation</button>
          </form>
        </div>
      </section>

      <section className="container-luxury py-24">
        <span className="eyebrow">How It Works</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">A considered, three-step appraisal</h2>
        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {[
            [ClipboardList, "Brief", "Submit your residence's details — discreetly."],
            [LineChart, "Analysis", "Senior advisor benchmarks against recent comparables and current market depth."],
            [Mail, "Report", "Receive a written valuation, with rationale, within 48 hours."],
          ].map(([Icon, t, d]: any) => (
            <div key={t} className="border-t border-border pt-6">
              <Icon size={26} strokeWidth={1.3} className="text-accent" />
              <h3 className="font-serif text-2xl mt-4">{t}</h3>
              <p className="text-muted-foreground mt-3">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-luxury grid lg:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80" alt="" className="aspect-[4/3] w-full object-cover" />
          <div>
            <span className="eyebrow">Why Accuracy Matters</span>
            <h2 className="font-serif text-4xl mt-3">A valuation is a strategy, not a number.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">Overpriced residences linger. Underpriced ones leak value. Our advisors balance recent comparables, market depth, and qualitative factors to position your residence for a swift, confident transaction.</p>
            <div className="luxe-card p-7 mt-8">
              <div className="text-accent tracking-[0.3em]">★★★★★</div>
              <p className="mt-3">"Their valuation was accurate to within 1.2% of the eventual sale price. Refreshingly evidence-based."</p>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-3">— Vendor, Belgravia</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
