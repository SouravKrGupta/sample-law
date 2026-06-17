import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Building2,
  Gavel,
  HeartHandshake,
  Scale,
  Shield,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceHero from "../img/hero_2.jpg";
import ServiceImage from "../img/blog-1.jpg";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Corporate Advisory",
      description: "Commercial guidance for contracts, governance, structuring, and business decisions.",
    },
    {
      icon: Shield,
      title: "Dispute Resolution",
      description: "Strategic representation in litigation, arbitration, investigations, and contested matters.",
    },
    {
      icon: Gavel,
      title: "Employment Law",
      description: "Support for workplace risk, executive disputes, policy issues, and sensitive reviews.",
    },
    {
      icon: Briefcase,
      title: "Restructuring",
      description: "Advice for distressed matters, creditor issues, recovery planning, and business turnaround.",
    },
    {
      icon: HeartHandshake,
      title: "Private Client Matters",
      description: "Trusted counsel for succession, wealth planning, and reputation-sensitive issues.",
    },
    {
      icon: Building2,
      title: "Real Estate & Projects",
      description: "Support across acquisitions, leasing, development, project risk, and approvals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive legal support designed for complex matters and confident decisions."
        description="Our services are structured to give clients clear legal direction, practical advice, and responsive support across business and private matters."
        image={ServiceHero}
      />

      <section className="section-shell bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative">
              <img
                src={ServiceImage}
                alt="LawEdge services"
                className="h-[520px] w-full rounded-[32px] object-cover shadow-[0_28px_70px_-38px_rgba(16,32,50,0.45)]"
              />
              <div className="absolute bottom-6 left-6 max-w-[300px] rounded-[22px] bg-white/92 p-5 backdrop-blur">
                <p className="eyebrow text-law-gold">Service Focus</p>
                <p className="mt-2 text-xl font-serif font-semibold text-royal-blue">
                  Built to support strategic, time-sensitive, and high-trust legal work
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="rounded-[28px] border border-[#eadfce] bg-[#fcfaf6] p-7 shadow-[0_24px_60px_-44px_rgba(16,32,50,0.35)]"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-royal-blue text-law-gold">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-semibold text-royal-blue">
                          {service.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold tracking-[0.28em] text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#f7f1e7] py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="eyebrow text-law-gold">Need Guidance</p>
          <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
            Discuss your matter with a team that can move quickly.
          </h2>
          <Button asChild className="mt-8 bg-royal-blue text-white hover:bg-royal-blue/95">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
