import { Link } from "@tanstack/react-router";
import { Bed, Bath, Maximize, Heart } from "lucide-react";
import type { Property } from "@/lib/property-data";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <Link
      to="/properties/$id"
      params={{ id: p.id }}
      className="luxe-card group block overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="text-[10px] tracking-[0.22em] uppercase bg-background/90 text-foreground px-3 py-1.5">
            {p.status}
          </span>
          {p.tag && (
            <span className="text-[10px] tracking-[0.22em] uppercase bg-accent text-accent-foreground px-3 py-1.5">
              {p.tag}
            </span>
          )}
        </div>
        <button className="absolute top-4 right-4 w-9 h-9 grid place-items-center bg-background/90 hover:text-accent" aria-label="Save">
          <Heart size={15} strokeWidth={1.4} />
        </button>
      </div>
      <div className="p-6">
        <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">{p.location}</div>
        <h3 className="font-serif text-2xl mt-2">{p.name}</h3>
        <div className="text-accent font-serif text-xl mt-3">{p.price}</div>
        <div className="flex items-center gap-5 mt-5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Bed size={14} strokeWidth={1.4}/>{p.beds} Bed</span>
          <span className="flex items-center gap-1.5"><Bath size={14} strokeWidth={1.4}/>{p.baths} Bath</span>
          <span className="flex items-center gap-1.5"><Maximize size={14} strokeWidth={1.4}/>{p.sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </Link>
  );
}
