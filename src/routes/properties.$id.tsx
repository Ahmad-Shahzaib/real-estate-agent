import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Bed, Bath, Maximize, Calendar, Car, Building, Phone, Mail, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { properties } from "@/lib/property-data";
import { PropertyCard } from "@/components/site/PropertyCard";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const p = properties.find((x) => x.id === params.id);
    if (!p) throw notFound();
    return { property: p };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.property.name ?? "Property"} — Elara Estates` },
      { name: "description", content: loaderData?.property.description ?? "" },
      { property: "og:image", content: loaderData?.property.image ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="pt-40 pb-32 container-luxury text-center">
      <h1 className="font-serif text-5xl">Residence not found</h1>
      <Link to="/properties" className="btn-gold mt-8">Back to portfolio</Link>
    </div>
  ),
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property: p } = Route.useLoaderData();
  const [idx, setIdx] = useState(0);
  const [price, setPrice] = useState(p.priceValue > 1_000_000 ? p.priceValue : 2_500_000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(4.5);
  const years = 25;

  const monthly = useMemo(() => {
    const loan = price * (1 - down / 100);
    const r = rate / 100 / 12;
    const n = years * 12;
    if (!loan) return 0;
    return (loan * r) / (1 - Math.pow(1 + r, -n));
  }, [price, down, rate]);

  const similar = properties.filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <>
      {/* Gallery */}
      <section className="pt-24 bg-background">
        <div className="relative aspect-[16/9] max-h-[78vh] w-full overflow-hidden">
          <img src={p.gallery[idx]} alt={p.name} className="w-full h-full object-cover" />
          <button onClick={() => setIdx((i) => (i === 0 ? p.gallery.length - 1 : i - 1))} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-background/90 grid place-items-center hover:text-accent"><ChevronLeft /></button>
          <button onClick={() => setIdx((i) => (i + 1) % p.gallery.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-background/90 grid place-items-center hover:text-accent"><ChevronRight /></button>
        </div>
        <div className="container-luxury py-6 grid grid-cols-5 gap-3">
          {p.gallery.map((g: string, i: number) => (
            <button key={i} onClick={() => setIdx(i)} className={`aspect-[4/3] overflow-hidden ${idx === i ? "ring-2 ring-accent" : "opacity-70 hover:opacity-100"}`}>
              <img src={g} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      <div className="container-luxury py-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
        <Link to="/" className="hover:text-accent">Home</Link> · <Link to="/properties" className="hover:text-accent">Properties</Link> · <span className="text-foreground">{p.name}</span>
      </div>

      <section className="container-luxury pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">{p.location}</div>
          <h1 className="font-serif text-5xl md:text-6xl mt-3">{p.name}</h1>
          <div className="text-accent font-serif text-3xl mt-4">{p.price}</div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-10 py-8 border-y border-border">
            {[
              [Bed, "Beds", p.beds],
              [Bath, "Baths", p.baths],
              [Maximize, "Sqft", p.sqft.toLocaleString()],
              [Calendar, "Year", p.year],
              [Car, "Parking", p.parking],
              [Building, "Type", p.type],
            ].map(([Icon, l, v]: any) => (
              <div key={l}>
                <Icon size={18} strokeWidth={1.4} className="text-accent" />
                <div className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground mt-2">{l}</div>
                <div className="font-serif text-lg mt-1">{v}</div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl mt-12">Description</h2>
          <div className="mt-5 text-foreground/85 leading-relaxed space-y-4">
            <p>{p.description}</p>
            <p>Designed by an award-winning studio, every material has been sourced for its provenance and patina. Honed limestone floors, lime-washed walls, and bespoke cabinetry frame a residence that rewards quiet observation.</p>
            <p>The principal suite occupies its own floor, with a dressing room, freestanding stone bath, and private terrace overlooking the gardens. Staff quarters are positioned discreetly off the service entrance.</p>
          </div>

          <h2 className="font-serif text-3xl mt-12">Features & Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 mt-6 text-sm">
            {["Infinity Pool","Private Gym","24/7 Security","Wraparound Terrace","Landscaped Garden","Triple Garage","Wine Cellar","Smart Home","Underfloor Heating","Sauna & Spa","Cinema Room","Concierge"].map((a) => (
              <div key={a} className="flex items-center gap-2 border-b border-border pb-3">
                <span className="text-accent">◆</span>{a}
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl mt-12">Floor Plan</h2>
          <div className="mt-5 luxe-card p-6">
            <img src="https://images.unsplash.com/photo-1574691250077-03a929faece5?w=1400&q=80" alt="Floor plan" className="w-full" />
          </div>

          <h2 className="font-serif text-3xl mt-12">Video Tour</h2>
          <div className="mt-5 aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video tour" allowFullScreen />
          </div>

          <h2 className="font-serif text-3xl mt-12">Location</h2>
          <div className="mt-5 aspect-[16/9]">
            <iframe className="w-full h-full" src={`https://www.google.com/maps?q=${encodeURIComponent(p.location)}&output=embed`} title="Location" />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28 space-y-6">
            <div className="luxe-card p-6">
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" alt="" className="w-16 h-16 object-cover rounded-full" />
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Listing Agent</div>
                  <div className="font-serif text-lg">Isabella Moreau</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-5">
                <a href="tel:+37799001214" className="btn-gold !py-3 !px-2 !text-[10px] justify-center"><Phone size={12} /></a>
                <a href="mailto:isabella@elaraestates.com" className="btn-gold !py-3 !px-2 !text-[10px] justify-center"><Mail size={12} /></a>
                <a href="https://wa.me/37799001214" className="btn-gold !py-3 !px-2 !text-[10px] justify-center"><MessageCircle size={12} /></a>
              </div>
            </div>

            <form className="luxe-card p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-serif text-xl">Make an Enquiry</h3>
              <input required placeholder="Name" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent" />
              <input required type="email" placeholder="Email" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent" />
              <input placeholder="Phone" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent" />
              <textarea rows={4} placeholder="Message" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent resize-none" />
              <button className="btn-solid w-full justify-center">Send Inquiry</button>
            </form>

            <div className="luxe-card p-6">
              <h3 className="font-serif text-xl">Mortgage Calculator</h3>
              <div className="space-y-4 mt-4 text-sm">
                <div>
                  <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground"><span>Price</span><span>€{price.toLocaleString()}</span></div>
                  <input type="range" min={500_000} max={30_000_000} step={100_000} value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full accent-[color:var(--gold)] mt-2" />
                </div>
                <div>
                  <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground"><span>Down Payment</span><span>{down}%</span></div>
                  <input type="range" min={5} max={70} value={down} onChange={(e) => setDown(+e.target.value)} className="w-full accent-[color:var(--gold)] mt-2" />
                </div>
                <div>
                  <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground"><span>Interest</span><span>{rate}%</span></div>
                  <input type="range" min={1} max={10} step={0.1} value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full accent-[color:var(--gold)] mt-2" />
                </div>
                <div className="border-t border-border pt-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Monthly</div>
                  <div className="font-serif text-3xl text-accent mt-1">€{Math.round(monthly).toLocaleString()}</div>
                </div>
              </div>
            </div>

            <form className="luxe-card p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-serif text-xl">Schedule a Viewing</h3>
              <input type="date" className="w-full bg-transparent border-b border-border py-2 focus:outline-none" />
              <input type="time" className="w-full bg-transparent border-b border-border py-2 focus:outline-none" />
              <input placeholder="Name" className="w-full bg-transparent border-b border-border py-2 focus:outline-none" />
              <button className="btn-gold w-full justify-center">Request Viewing</button>
            </form>
          </div>
        </aside>
      </section>

      <section className="container-luxury pb-24">
        <h2 className="font-serif text-4xl mb-10">Similar Residences</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {similar.map((s) => <PropertyCard key={s.id} p={s} />)}
        </div>
      </section>
    </>
  );
}
