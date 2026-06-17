import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";
import PageHero from "@/components/PageHero";
import BlogHero from "../img/blog-1.jpg";
import Blog1 from "../img/blog-1.jpg";
import Blog2 from "../img/blog-2.jpg";
import Blog3 from "../img/blog-3.jpg";
import Blog4 from "../img/blog-4.jpg";

const Blog = () => {
  const posts = [
    {
      title: "Understanding the legal steps after a workplace dispute",
      date: "June 12, 2026",
      image: Blog1,
      excerpt: "A practical overview of how employers and professionals should prepare when workplace conflict escalates.",
    },
    {
      title: "How to prepare for a business contract review",
      date: "May 28, 2026",
      image: Blog2,
      excerpt: "Key steps to protect your interests before signing commercial agreements or revised terms.",
    },
    {
      title: "What to expect during a contentious legal matter",
      date: "May 10, 2026",
      image: Blog3,
      excerpt: "A clear guide to legal timelines, communication expectations, and preparation habits that help.",
    },
    {
      title: "Estate planning basics for families and founders",
      date: "April 22, 2026",
      image: Blog4,
      excerpt: "Simple planning ideas that can protect family interests, business continuity, and future decisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Legal Insights"
        title="Helpful updates and guidance presented in the same refined style as the homepage."
        description="Our blog and insight pages now use the same structure, spacing, colors, and card language as the rest of the site."
        image={BlogHero}
      />

      <section className="section-shell bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="eyebrow text-law-gold">Thought Leadership</p>
            <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
              Clear updates for clients who want earlier, better-informed decisions.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.title} className="card-3d overflow-hidden border-0 bg-[#fbf8f2]">
                <img src={post.image} alt={post.title} className="h-64 w-full object-cover" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-500">
                    <Newspaper className="h-4 w-4 text-law-gold" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-serif font-semibold text-royal-blue">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
