interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

const PageHero = ({ eyebrow, title, description, image }: PageHeroProps) => {
  return (
    <section className="section-shell relative overflow-hidden bg-[#f5efe5]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,137,73,0.18),transparent_42%)]" />
      <div className="container mx-auto px-4 pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10">
            <p className="eyebrow text-law-gold">{eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-serif font-semibold leading-[0.98] text-royal-blue md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {description}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/70 p-3 shadow-[0_30px_80px_-38px_rgba(16,32,50,0.45)] backdrop-blur">
            <img
              src={image}
              alt={title}
              className="h-[420px] w-full rounded-[26px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
