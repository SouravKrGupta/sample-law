import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-royal-blue mb-4">Testimonials</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">What our clients say about working with LawEdge.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index} className="shadow-lg border-0">
              <CardContent className="p-8 text-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full mx-auto object-cover mb-4" />
                <div className="flex justify-center mb-3 text-law-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">“{item.quote}”</p>
                <h3 className="font-semibold text-royal-blue">{item.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
