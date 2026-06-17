import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AttorneyHero from "../img/hero_2.jpg";
import Person1 from "../img/person_1.jpg";
import Person2 from "../img/person_2.jpg";
import Person3 from "../img/person_3.jpg";

const Attorneys = () => {
  const attorneys = [
    {
      name: "Avery Johnson",
      role: "Managing Partner",
      image: Person1,
      specialties: ["Corporate Law", "Litigation"],
    },
    {
      name: "Michael Chen",
      role: "Senior Attorney",
      image: Person2,
      specialties: ["Criminal Defense", "Appellate Law"],
    },
    {
      name: "Sophia Martinez",
      role: "Family Law Specialist",
      image: Person3,
      specialties: ["Family Law", "Mediation"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section
        className="section-shell relative py-32"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,4,34,1) 0%, rgba(27,7,56,1) 65%, rgba(212,174,54,1) 100%)",
        }}
      >
        <img src={AttorneyHero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Attorneys</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">Experienced professionals dedicated to protecting your rights with confidence and care.</p>
        </div>
      </section>

      <section className="section-shell py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <Card key={index} className="card-3d overflow-hidden border-0">
              <img src={attorney.image} alt={attorney.name} className="w-full h-80 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-royal-blue">{attorney.name}</h3>
                <p className="text-law-gold font-medium mb-3">{attorney.role}</p>
                <div className="flex gap-2 flex-wrap">
                  {attorney.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-1 text-xs text-gray-700"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-royal-blue mb-3">Ready to discuss your case?</h2>
          <p className="text-gray-600 mb-6">Speak with one of our attorneys about your legal needs.</p>
          <Button asChild className="bg-law-gold text-royal-blue">
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Attorneys;
