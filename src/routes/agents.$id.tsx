import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { agents, properties } from "@/lib/property-data";
import { PropertyCard } from "@/components/site/PropertyCard";

export const Route = createFileRoute("/agents/$id")({
  loader: ({ params }) => {
    const a = agents.find((x) => x.id === params.id);
    if (!a) throw notFound();
    return { agent: a };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.agent.name ?? "Agent"} — Elara Estates` },
      { name: "description", content: `${loaderData?.agent.title} · ${loaderData?.agent.specialty}` },
    ],
  }),
  notFoundComponent: () => (
    <div className="pt-40 pb-32 container-luxury text-center">
      <h1 className="font-serif text-5xl">Advisor not found</h1>
      <Link to="/agents" className="btn-gold mt-8">All Agents</Link>
    </div>
  ),
  component: AgentDetail,
});

function AgentDetail() {
  const { agent: a } = Route.useLoaderData();
  const listings = properties.slice(0, 3);
  return (
    <>
      <section className="pt-32 pb-16 container-luxury grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 aspect-[4/5] overflow-hidden">
          <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
        </div>
        <div className="lg:col-span-7">
          <span className="eyebrow">{a.title}</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-3">{a.name}</h1>
          <div className="text-accent mt-3 text-lg">{a.specialty}</div>
          <p className="mt-6 text-foreground/85 leading-relaxed max-w-xl">
            With {a.years} years across the world's most discreet markets, {a.name.split(" ")[0]} represents private clients on acquisitions, dispositions, and bespoke property strategies. Languages: English, French, Italian.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={`tel:${a.phone}`} className="btn-gold"><Phone size={14}/>{a.phone}</a>
            <a href={`mailto:${a.email}`} className="btn-gold"><Mail size={14}/>Email</a>
            <a href="#" className="btn-gold"><MessageCircle size={14}/>WhatsApp</a>
          </div>
          <div className="grid grid-cols-3 gap-6 border-y border-border py-6 mt-10 max-w-md">
            <div><div className="font-serif text-3xl text-accent">{a.sold}</div><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1">Sold</div></div>
            <div><div className="font-serif text-3xl text-accent">{a.years}</div><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1">Years</div></div>
            <div><div className="font-serif text-3xl text-accent">{a.rating}</div><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1">Rating</div></div>
          </div>
        </div>
      </section>

      <section className="container-luxury pb-24">
        <h2 className="font-serif text-4xl mb-10">Active Listings</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {listings.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-luxury max-w-3xl">
          <span className="eyebrow">Client Reviews</span>
          <h2 className="font-serif text-4xl mt-3 mb-10">What clients say</h2>
          <div className="space-y-6">
            {[1,2,3].map((i) => (
              <div key={i} className="luxe-card p-7">
                <div className="text-accent tracking-[0.3em]">★★★★★</div>
                <p className="mt-3 leading-relaxed">"{a.name.split(" ")[0]} found us a residence that simply was not on the market. Considered, calm, and ultimately essential to the outcome."</p>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-4">— Private Client</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
