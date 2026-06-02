import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { posts } from "@/lib/property-data";

export const Route = createFileRoute("/blog/$id")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.id === params.id);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Journal"} — Elara Estates` },
      { name: "description", content: loaderData?.post.excerpt ?? "" },
      { property: "og:image", content: loaderData?.post.image ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="pt-40 pb-32 container-luxury text-center">
      <h1 className="font-serif text-5xl">Story not found</h1>
      <Link to="/blog" className="btn-gold mt-8">Back to Journal</Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.id !== post.id).slice(0, 3);
  return (
    <>
      <section className="pt-32 container-luxury max-w-4xl">
        <span className="text-[10px] uppercase tracking-[0.28em] text-accent">{post.category}</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-4 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-3 mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" alt="" className="w-9 h-9 rounded-full object-cover" />
          <span>Isabella Moreau</span> · <span>{post.date}</span> · <span>{post.readTime}</span>
        </div>
      </section>

      <div className="container-luxury max-w-5xl mt-10">
        <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover" />
      </div>

      <article className="container-luxury max-w-3xl py-14 prose-luxe">
        <p className="text-xl leading-relaxed text-foreground/85 font-serif">{post.excerpt}</p>
        <p className="mt-6 leading-relaxed text-foreground/85">In the quietest corners of the market, the most extraordinary residences change hands without ever appearing in a window. This is the world we operate in — and the one we report from in this edition.</p>
        <blockquote className="my-10 border-l-2 border-accent pl-6 font-serif text-2xl leading-snug text-foreground">
          "The best residences are never sold twice the same way."
        </blockquote>
        <p className="leading-relaxed text-foreground/85">Our advisors share what they're seeing across European prime markets — from Mayfair to Monte Carlo — and what to watch as we move through the next quarter. The patterns are consistent: limited supply, deeply qualified buyers, and a continued flight to quality.</p>
        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80" alt="" className="my-10 w-full aspect-[16/9] object-cover" />
        <p className="leading-relaxed text-foreground/85">If you'd like a confidential briefing on your market, our private office is available year-round.</p>

        <div className="flex items-center gap-4 mt-14 pt-8 border-t border-border text-muted-foreground">
          <span className="text-xs uppercase tracking-[0.22em]">Share</span>
          <a href="#" className="hover:text-accent"><Facebook size={16} /></a>
          <a href="#" className="hover:text-accent"><Linkedin size={16} /></a>
          <a href="#" className="hover:text-accent"><Twitter size={16} /></a>
        </div>
      </article>

      <section className="container-luxury pb-24">
        <h2 className="font-serif text-4xl mb-10">Related Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {related.map((p) => (
            <Link to="/blog/$id" params={{ id: p.id }} key={p.id} className="luxe-card group">
              <div className="aspect-[5/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.28em] text-accent">{p.category}</span>
                <h3 className="font-serif text-xl mt-3">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
