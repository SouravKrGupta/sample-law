import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageHero from "@/components/PageHero";
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
      summary: "Leads complex business disputes and strategic legal planning for leadership teams.",
    },
    {
      name: "Michael Chen",
      role: "Senior Attorney",
      image: Person2,
      specialties: ["Dispute Resolution", "Investigations"],
      summary: "Supports high-pressure matters with careful preparation and decisive communication.",
    },
    {
      name: "Sophia Martinez",
      role: "Partner",
      image: Person3,
      specialties: ["Employment Law", "Private Client"],
      summary: "Advises on sensitive workplace and private-client matters with discretion and clarity.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Our Attorneys"
        title="A legal team built for steady counsel, strategic pressure, and client trust."
        description="Our attorneys combine legal depth with practical judgment, helping clients navigate complex matters with confidence."
        image={AttorneyHero}
      />

      <section className="section-shell bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="eyebrow text-law-gold">Team Profiles</p>
            <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
              Experienced professionals with a client-centered working style.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {attorneys.map((attorney) => (
              <Card key={attorney.name} className="card-3d overflow-hidden border-0 bg-[#fbf8f2]">
                <img src={attorney.image} alt={attorney.name} className="h-80 w-full object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-royal-blue">{attorney.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-law-gold">{attorney.role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{attorney.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {attorney.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-flex items-center rounded-full border border-[#d9cab5] px-3 py-1 text-xs text-slate-600"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#f7f1e7] py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="eyebrow text-law-gold">Need Legal Guidance</p>
          <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
            Speak with an attorney about your legal priorities.
          </h2>
          <Button asChild className="mt-8 bg-royal-blue text-white hover:bg-royal-blue/95">
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Attorneys;
