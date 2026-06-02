import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative h-[68vh] min-h-[480px] flex items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
      <div className="container-luxury relative z-10 pb-20 text-white">
        {eyebrow && <span className="eyebrow !text-[color:var(--gold)]">{eyebrow}</span>}
        <h1 className="font-serif text-5xl md:text-7xl max-w-4xl mt-4 leading-[1.05] animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-white/80 text-lg leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
