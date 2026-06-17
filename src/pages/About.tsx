import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Shield, Clock } from "lucide-react";
import AboutHero from "../img/hero_1.jpg";
import TeamImg from "../img/blog-2.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      text: "We put our clients' best interests first in every decision.",
    },
    {
      icon: Users,
      title: "Client Focus",
      text: "Every case is handled with attention, empathy, and clear communication.",
    },
    {
      icon: Award,
      title: "Excellence",
      text: "We bring experience, precision, and relentless advocacy to each matter.",
    },
    {
      icon: Clock,
      title: "Availability",
      text: "We are responsive and ready to support you when you need us most.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section
        className="section-shell relative overflow-hidden py-32"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,4,34,1) 0%, rgba(27,7,56,1) 60%, rgba(212,174,54,1) 100%)",
        }}
      >
        <img
          src={AboutHero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            Trusted legal advocates committed to protecting your rights and guiding you through life's most important challenges.
          </p>
        </div>
      </section>

      <section className="section-shell py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              LawEdge was founded on the belief that legal representation should be both highly skilled and deeply personal. Our team combines decades of courtroom experience with a compassionate approach to client service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From complex litigation to practical guidance for daily life, we stand beside our clients with clear advice and strong advocacy.
            </p>
            <Button asChild className="mt-6 bg-law-gold text-royal-blue">
              <Link to="/attorneys">Meet Our Team</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-6 h-16 w-16 rounded-2xl bg-law-gold/20 blur-xl" />
            <img
              src={TeamImg}
              alt="Legal team meeting"
              className="image-tilt rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="section-shell py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="card-3d border-0">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-royal-blue flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-law-gold" />
                </div>
                <h3 className="text-xl font-semibold text-royal-blue mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
