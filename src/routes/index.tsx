import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Home, Castle, Briefcase, Hammer, KeyRound, ShieldCheck, BadgeCheck, Headphones, Scale, Quote } from "lucide-react";
import { PropertyCard } from "@/components/site/PropertyCard";
import { CityIllustration } from "@/components/site/CityIllustration";
import { CountUp } from "@/components/site/CountUp";
import { properties, agents, posts, testimonials } from "@/lib/property-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elara Estates — Where Luxury Meets Home" },
      { name: "description", content: "Premium properties, trusted agents, exceptional living. Discover extraordinary residences across the world's most coveted addresses." },
    ],
  }),
  component: Home_,
});

function Home_() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden -mt-px">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-luxury-modern-villa-with-pool-3893/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full container-luxury flex flex-col items-center justify-center text-center text-white">
          <span className="eyebrow !text-[color:var(--gold)] animate-fade-in">Elara Estates</span>
          <h1 className="font-serif text-6xl md:text-8xl mt-6 leading-[1.02] max-w-5xl animate-fade-up">
            Find Your Dream Home
          </h1>
          <p className="mt-6 max-w-2xl text-white/85 text-lg md:text-xl">
            Premium Properties. Trusted Agents. Exceptional Living.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/properties" className="btn-solid !bg-white !text-black !border-white hover:!bg-[color:var(--gold)] hover:!border-[color:var(--gold)] hover:!text-black">
              Browse Properties <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-gold !text-white !border-white/70 hover:!text-black hover:!border-[color:var(--gold)]">
              Book a Consultation
            </Link>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.32em] uppercase text-white/60">
            Scroll
          </div>
        </div>
      </section>

      {/* CITY ILLUSTRATION DIVIDER */}
      <CityIllustration />

      {/* STATS */}
      <section className="container-luxury py-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {[
          { n: 500, s: "+", label: "Properties" },
          { n: 12, s: "+", label: "Years Experience" },
          { n: 98, s: "%", label: "Client Satisfaction" },
          { n: 20, s: "+", label: "Cities Worldwide" },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-serif text-5xl md:text-6xl text-accent">
              <CountUp end={s.n} suffix={s.s} />
            </div>
            <div className="mt-3 text-xs tracking-[0.28em] uppercase text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="container-luxury py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="eyebrow">Featured Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 max-w-xl">
              A selection of extraordinary residences
            </h2>
          </div>
          <Link to="/properties" className="btn-gold">View All <ArrowRight size={14} /></Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 6).map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-luxury pb-24">
        <span className="eyebrow">Property Categories</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-12 max-w-xl">Explore by type</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { name: "Apartments", icon: Building2, img: "photo-1560448204-e02f11c3d0e2" },
            { name: "Villas", icon: Home, img: "photo-1582268611958-ebfd161ef9cf" },
            { name: "Penthouses", icon: Castle, img: "photo-1512917774080-9991f1c4c750" },
            { name: "Commercial", icon: Briefcase, img: "photo-1497366754035-f200968a6e72" },
            { name: "New Developments", icon: Hammer, img: "photo-1449844908441-8829872d2607" },
            { name: "Rentals", icon: KeyRound, img: "photo-1505691938895-1758d7feb511" },
          ].map((c) => (
            <Link
              to="/properties"
              key={c.name}
              className="relative aspect-[3/4] overflow-hidden group block"
            >
              <img
                src={`https://images.unsplash.com/${c.img}?w=600&q=80`}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-white text-center">
                <c.icon size={26} strokeWidth={1.2} className="mb-2 text-[color:var(--gold)]" />
                <div className="text-sm tracking-[0.22em] uppercase">{c.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-surface py-24">
        <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="eyebrow">Why Elara</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">
              Quiet expertise. Discreet representation. Considered results.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              For over a decade, our advisors have represented some of the most extraordinary
              residences in the world — and the clients who call them home.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { i: BadgeCheck, t: "Expert Agents", d: "Senior partners with 10+ years in prime markets." },
                { i: ShieldCheck, t: "Verified Listings", d: "Every residence vetted by our private office." },
                { i: Headphones, t: "24/7 Support", d: "Concierge advisory across every time zone." },
                { i: Scale, t: "Legal Assistance", d: "End-to-end conveyancing and structuring." },
              ].map((f) => (
                <div key={f.t} className="border-t border-border pt-5">
                  <f.i size={22} strokeWidth={1.3} className="text-accent" />
                  <h4 className="font-serif text-xl mt-3">{f.t}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AGENT OF THE MONTH */}
      <section className="container-luxury py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 aspect-[4/5] overflow-hidden">
            <img src={agents[0].img} alt={agents[0].name} className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">Agent of the Month</span>
            <h2 className="font-serif text-5xl mt-3">{agents[0].name}</h2>
            <div className="text-muted-foreground mt-2">{agents[0].title} · {agents[0].specialty}</div>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80 max-w-xl">
              "Our role is not to sell homes. It's to recognise, before anyone else does, the
              residence that will become inseparable from a client's life."
            </p>
            <div className="flex gap-10 mt-10 border-t border-border pt-8">
              <div>
                <div className="font-serif text-3xl text-accent">{agents[0].sold}</div>
                <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground mt-1">Sold</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-accent">{agents[0].years}</div>
                <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground mt-1">Years</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-accent">{agents[0].rating}</div>
                <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground mt-1">Rating</div>
              </div>
            </div>
            <Link to="/agents/$id" params={{ id: agents[0].id }} className="btn-gold mt-10">
              Connect with {agents[0].name.split(" ")[0]}
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface py-24">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Client Voices</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Trusted by collectors of homes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="luxe-card p-8">
                <Quote size={28} className="text-accent" />
                <p className="mt-5 text-foreground/85 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-7 pt-6 border-t border-border">
                  <img src={t.img} alt={t.name} className="w-12 h-12 object-cover rounded-full" />
                  <div>
                    <div className="font-serif text-lg">{t.name}</div>
                    <div className="text-xs text-muted-foreground tracking-wide">{t.role}</div>
                  </div>
                </div>
                <div className="text-accent mt-4 tracking-[0.3em]">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="container-luxury py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="eyebrow">The Journal</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Notes from the market</h2>
          </div>
          <Link to="/blog" className="btn-gold">All Stories <ArrowRight size={14} /></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <Link to="/blog/$id" params={{ id: post.id }} key={post.id} className="luxe-card group block">
              <div className="aspect-[5/3] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-[10px] tracking-[0.28em] uppercase text-accent">{post.category}</span>
                <h3 className="font-serif text-2xl mt-3 leading-snug">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-3">{post.excerpt}</p>
                <div className="text-xs text-muted-foreground mt-5 tracking-wide">{post.date} · {post.readTime}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative py-24 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative container-luxury text-center text-white max-w-2xl">
          <span className="eyebrow !text-[color:var(--gold)]">Private List</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Get Exclusive Property Alerts</h2>
          <p className="mt-4 text-white/75">Off-market opportunities, sent quietly to a small list of clients.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-white/40 text-white placeholder:text-white/50 px-5 py-3 focus:outline-none focus:border-[color:var(--gold)]"
            />
            <button type="submit" className="btn-gold !text-white !border-[color:var(--gold)] hover:!text-black">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
