import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scale, Shield, Gavel, Briefcase, HeartHandshake, Building2 } from "lucide-react";
import ServiceHero from "../img/hero_2.jpg";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Family Law",
      description: "Support for divorce, child custody, adoption, and domestic matters.",
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Strategic defense for charges ranging from misdemeanors to serious felonies.",
    },
    {
      icon: Gavel,
      title: "Business Law",
      description: "Corporate guidance for contracts, compliance, and business formation.",
    },
    {
      icon: Briefcase,
      title: "Employment Law",
      description: "Protection for workers and employers in workplace disputes and agreements.",
    },
    {
      icon: HeartHandshake,
      title: "Personal Injury",
      description: "Representation for accidents, negligence claims, and recovery support.",
    },
    {
      icon: Building2,
      title: "Estate Planning",
      description: "Wills, trusts, and probate guidance tailored to your goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section
        className="section-shell relative py-32"
        style={{
          background:
            "linear-gradient(90deg, rgba(27,7,56,1) 0%, rgba(16,4,34,1) 60%, rgba(212,174,54,1) 100%)",
        }}
      >
        <img src={ServiceHero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">Comprehensive legal support designed to protect your interests and move your case forward.</p>
        </div>
      </section>

      <section className="section-shell py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-3d border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-royal-blue flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-law-gold" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-royal-blue mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-royal-blue mb-4">Need guidance for your case?</h2>
          <Button asChild className="bg-law-gold text-royal-blue hover:bg-law-gold/90">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
