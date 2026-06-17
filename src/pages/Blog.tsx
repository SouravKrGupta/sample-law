import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Blog1 from "../img/blog-1.jpg";
import Blog2 from "../img/blog-2.jpg";
import Blog3 from "../img/blog-3.jpg";
import Blog4 from "../img/blog-4.jpg";

const Blog = () => {
  const posts = [
    {
      title: "Understanding Child Custody Decisions",
      date: "June 12, 2026",
      image: Blog1,
      excerpt: "A practical overview of what courts consider when making custody arrangements.",
    },
    {
      title: "How to Prepare for a Business Contract Review",
      date: "May 28, 2026",
      image: Blog2,
      excerpt: "Key steps to protect your interests before signing important business agreements.",
    },
    {
      title: "What to Expect During a Criminal Defense Case",
      date: "May 10, 2026",
      image: Blog3,
      excerpt: "A clear guide to the stages of a criminal defense process and how to stay informed.",
    },
    {
      title: "Estate Planning Basics for Families",
      date: "April 22, 2026",
      image: Blog4,
      excerpt: "Simple strategies to plan ahead for your future and protect your loved ones.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-royal-blue mb-4">Legal Insights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Helpful updates and guidance from our legal team.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden shadow-lg border-0">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <p className="text-sm text-law-gold mb-2">{post.date}</p>
                <h3 className="text-2xl font-serif font-semibold text-royal-blue mb-3">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
