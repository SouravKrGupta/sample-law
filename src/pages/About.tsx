import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2, Clock, Shield, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import AboutHero from "../img/hero_1.jpg";
import TeamImg from "../img/blog-2.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      text: "We protect client interests with disciplined advice and honest recommendations.",
    },
    {
      icon: Users,
      title: "Client Focus",
      text: "Every matter is handled with responsiveness, clarity, and practical communication.",
    },
    {
      icon: Award,
      title: "Excellence",
      text: "We bring preparation, experience, and strategic thinking to every engagement.",
    },
    {
      icon: Clock,
      title: "Availability",
      text: "Urgent matters receive quick attention from lawyers who understand the stakes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="About The Firm"
        title="Experienced legal counsel built on trust, preparation, and client confidence."
        description="LawEdge combines strategic legal thinking with calm communication and responsive service for businesses, founders, and private clients."
        image={AboutHero}
      />

      <section className="section-shell bg-white py-20">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <img
              src={TeamImg}
              alt="LawEdge team discussion"
              className="h-[520px] w-full rounded-[32px] object-cover shadow-[0_28px_70px_-38px_rgba(16,32,50,0.45)]"
            />
            <div className="absolute bottom-6 left-6 max-w-[300px] rounded-[22px] bg-white/92 p-5 backdrop-blur">
              <p className="eyebrow text-law-gold">Our Story</p>
              <p className="mt-2 text-xl font-serif font-semibold text-royal-blue">
                Client-first representation shaped by strategy and steady guidance
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-law-gold">Who We Are</p>
            <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
              Legal support that feels both senior and approachable.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              LawEdge was built on the belief that strong legal representation should also
              feel clear, thoughtful, and deeply responsive to client needs. We support
              critical decisions with preparation, strategy, and direct communication.
            </p>
            <div className="mt-8 space-y-5">
              {[
                "Strategic legal planning tailored to your objectives",
                "Clear communication through every stage of the matter",
                "Prepared advocacy for disputes, transactions, and sensitive decisions",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-law-gold" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 bg-royal-blue text-white hover:bg-royal-blue/95">
              <Link to="/attorneys">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#f7f1e7] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="eyebrow text-law-gold">Firm Values</p>
            <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
              The principles behind how we advise and advocate.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="card-3d border-0 bg-white">
                <CardContent className="p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal-blue text-law-gold">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-serif font-semibold text-royal-blue">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{value.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
