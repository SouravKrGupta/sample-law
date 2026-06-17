import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";

import TestimonialHero from "../img/hero_3.jpg";
import TestimonialImage from "../img/user-1.jpg";
import TestimonialImage2 from "../img/user-2.jpg";
import TestimonialImage3 from "../img/user-3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily R.",
      image: TestimonialImage,
      quote:
        "The team was compassionate, responsive, and incredibly knowledgeable. They helped us navigate a difficult situation with confidence.",
    },
    {
      name: "James T.",
      image: TestimonialImage2,
      quote:
        "Professional, strategic, and honest throughout the entire process. I felt fully supported from start to finish.",
    },
    {
      name: "Nadia S.",
      image: TestimonialImage3,
      quote:
        "Their attention to detail and commitment to results made all the difference in our case.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Client Perspective"
        title="What clients say about working with a team that stays strategic and responsive."
        description="Our testimonial page now follows the same visual direction as the homepage, with warmer surfaces, stronger hierarchy, and cleaner cards."
        image={TestimonialHero}
      />

      <section className="section-shell bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="eyebrow text-law-gold">Client Feedback</p>

            <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
              Trusted by clients who value clarity, discretion, and preparation.
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="mt-10 flex justify-end gap-3">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#eadfce] bg-white transition hover:bg-[#f5efe5]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#eadfce] bg-white transition hover:bg-[#f5efe5]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
            {[0, 1, 2].map((offset) => {
              const item =
                testimonials[
                  (activeIndex + offset) % testimonials.length
                ];

              return (
                <Card
                  key={`${item.name}-${offset}`}
                  className="w-full max-w-[360px] overflow-hidden rounded-[28px] border border-[#eadfce] bg-[#fbf8f2] shadow-[0_24px_60px_-44px_rgba(16,32,50,0.35)] transition-all duration-300 hover:-translate-y-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[220px] w-full object-cover"
                  />

                  <CardContent className="p-6">
                    <Quote className="h-5 w-5 text-law-gold" />

                    <p className="mt-4 text-base leading-7 text-slate-700">
                      {item.quote}
                    </p>

                    <div className="mt-5">
                      <h3 className="text-lg font-semibold text-royal-blue">
                        {item.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;