import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, LayoutGrid, List as ListIcon } from "lucide-react";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties } from "@/lib/property-data";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Elara Estates" },
      { name: "description", content: "Browse our curated portfolio of luxury residences across the world's most coveted addresses." },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const [beds, setBeds] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50_000_000);

  const types = ["All", ...Array.from(new Set(properties.map((p) => p.type)))];

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (q && !`${p.name} ${p.location}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (type !== "All" && p.type !== type) return false;
      if (beds && p.beds < beds) return false;
      if (p.priceValue > maxPrice) return false;
      return true;
    });
  }, [q, type, beds, maxPrice]);

  return (
    <>
      <div className="pt-32 pb-10 container-luxury">
        <span className="eyebrow">Portfolio</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-3">All Properties</h1>
        <p className="text-muted-foreground mt-4 max-w-xl">A curated selection of residences for sale and to let across our global markets.</p>
      </div>

      {/* Search bar */}
      <div className="container-luxury">
        <div className="luxe-card p-6 grid md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-4">
            <label className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Location</label>
            <div className="flex items-center mt-2 border-b border-border">
              <Search size={14} className="text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="City, neighbourhood..." className="bg-transparent flex-1 py-2 px-3 focus:outline-none" />
            </div>
          </div>
          <div className="md:col-span-3">
            <label className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Property Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="w-full mt-2 bg-transparent border-b border-border py-2 focus:outline-none">
              {types.map((t) => <option key={t} className="text-foreground bg-background">{t}</option>)}
            </select>
          </div>
          <div className="md:col-span-3">
            <label className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Max Price · €{(maxPrice/1_000_000).toFixed(1)}M</label>
            <input type="range" min={500_000} max={50_000_000} step={500_000} value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} className="w-full mt-3 accent-[color:var(--gold)]" />
          </div>
          <div className="md:col-span-2">
            <label className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Bedrooms</label>
            <select value={beds} onChange={(e) => setBeds(+e.target.value)} className="w-full mt-2 bg-transparent border-b border-border py-2 focus:outline-none">
              {[0,1,2,3,4,5,6].map((n) => <option key={n} value={n} className="text-foreground bg-background">{n === 0 ? "Any" : `${n}+`}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="container-luxury py-10 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">{filtered.length} residences</div>
        <div className="flex border border-border">
          <button onClick={() => setView("grid")} className={`p-2 ${view === "grid" ? "bg-accent text-accent-foreground" : ""}`} aria-label="Grid"><LayoutGrid size={15} /></button>
          <button onClick={() => setView("list")} className={`p-2 ${view === "list" ? "bg-accent text-accent-foreground" : ""}`} aria-label="List"><ListIcon size={15} /></button>
        </div>
      </div>

      <div className="container-luxury pb-24">
        {view === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
        ) : (
          <div className="space-y-6">
            {filtered.map((p) => (
              <a key={p.id} href={`/properties/${p.id}`} className="luxe-card grid md:grid-cols-12 gap-0 overflow-hidden">
                <img src={p.image} alt={p.name} className="md:col-span-5 aspect-[4/3] md:aspect-auto w-full h-full object-cover" />
                <div className="md:col-span-7 p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">{p.location}</div>
                    <h3 className="font-serif text-3xl mt-2">{p.name}</h3>
                    <p className="text-muted-foreground mt-4 leading-relaxed text-sm">{p.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-accent font-serif text-2xl">{p.price}</div>
                    <div className="text-xs text-muted-foreground">{p.beds} bd · {p.baths} ba · {p.sqft.toLocaleString()} sqft</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-16">
          {["‹","1","2","3","›"].map((n, i) => (
            <button key={i} className={`w-10 h-10 border border-border text-sm ${n === "1" ? "bg-accent text-accent-foreground border-accent" : "hover:border-accent"}`}>{n}</button>
          ))}
        </div>
      </div>
    </>
  );
}
