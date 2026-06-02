import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { posts } from "@/lib/property-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Journal — Elara Estates" },
      { name: "description", content: "Notes from the market: insight on buying, selling, investing, and living well." },
    ],
  }),
  component: BlogPage,
});

const cats = ["All","Market News","Buying Tips","Renting","Investment","Lifestyle"];

function BlogPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? posts : posts.filter((p) => p.category === cat);
  const [feature, ...rest] = filtered;
  return (
    <>
      <section className="pt-32 pb-12 container-luxury">
        <span className="eyebrow">The Journal</span>
        <h1 className="font-serif text-5xl md:text-7xl mt-3">Stories & Insight</h1>
      </section>

      <section className="container-luxury">
        <div className="flex flex-wrap gap-2 border-b border-border">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-5 py-3 text-xs tracking-[0.22em] uppercase border-b-2 -mb-px ${cat === c ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{c}</button>
          ))}
        </div>
      </section>

      {feature && (
        <section className="container-luxury py-14">
          <Link to="/blog/$id" params={{ id: feature.id }} className="grid lg:grid-cols-2 gap-10 luxe-card overflow-hidden group">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.28em] text-accent">{feature.category}</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">{feature.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{feature.excerpt}</p>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-6">{feature.date} · {feature.readTime}</div>
            </div>
          </Link>
        </section>
      )}

      <section className="container-luxury pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((p) => (
          <Link to="/blog/$id" params={{ id: p.id }} key={p.id} className="luxe-card group">
            <div className="aspect-[5/3] overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[0.28em] text-accent">{p.category}</span>
              <h3 className="font-serif text-2xl mt-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-3">{p.excerpt}</p>
              <div className="text-xs text-muted-foreground mt-5">{p.date} · {p.readTime}</div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
