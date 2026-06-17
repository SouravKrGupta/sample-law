import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scale,
  Shield,
  Gavel,
  Users,
  Award,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import WhoWeAreImg from "../img/blog-1.jpg";
import ProcessImg from "../img/hero_3.jpg";
import Insight1 from "../img/blog-2.jpg";
import Insight2 from "../img/blog-3.jpg";
import Insight3 from "../img/blog-4.jpg";
import Hero1 from "../img/hero-bg.jpg";
import Hero2 from "../img/hero_3.jpg";
import Hero3 from "../img/hero_2.jpg";
import Person1 from "../img/person_1.jpg";
import Person2 from "../img/person_2.jpg";
import Person3 from "../img/person_3.jpg";

const Home = () => {
  const practiceAreas = [
    {
      icon: Scale,
      title: "Family Law",
      description:
        "Divorce, custody, adoption, and family legal matters handled with care and expertise.",
      link: "/services/family-law",
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description:
        "Aggressive defense for criminal charges with a proven track record of success.",
      link: "/services/criminal-defense",
    },
    {
      icon: Gavel,
      title: "Business Law",
      description:
        "Corporate legal services, contracts, and business formation guidance.",
      link: "/services/business-law",
    },
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Cases Won" },
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Emergency Support" },
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      text: "We listen closely, understand your concerns, and map out the legal path ahead.",
    },
    {
      title: "Strategy & Planning",
      text: "Every case is built with a clear strategy tailored to your objectives and timeline.",
    },
    {
      title: "Resolution",
      text: "We advocate aggressively and communicate clearly until your matter is resolved.",
    },
  ];

  const highlights = [
    {
      title: "Personalized legal guidance",
      text: "Every matter is handled with careful attention to your goals, timeline, and priorities.",
    },
    {
      title: "Transparent communication",
      text: "You will always understand your options, risks, and next steps.",
    },
    {
      title: "Dedicated advocacy",
      text: "We combine preparation, strategy, and courtroom confidence to protect your interests.",
    },
  ];

  const testimonials = [
    {
      quote:
        "They were professional, responsive, and truly committed to protecting my interests every step of the way.",
      name: "Sarah M.",
      role: "Family Law Client",
      image: Person1,
    },
    {
      quote:
        "The team explained every option clearly and gave me confidence during a very difficult situation.",
      name: "Daniel R.",
      role: "Business Litigation Client",
      image: Person2,
    },
  ];

  const insights = [
    {
      title: "Understanding the legal steps after a workplace dispute",
      date: "April 14, 2026",
      image: Insight1,
      link: "/blog",
    },
    {
      title: "What to expect during a high-stakes contract negotiation",
      date: "March 27, 2026",
      image: Insight2,
      link: "/blog",
    },
    {
      title: "How to prepare for a successful consultation with a lawyer",
      date: "March 10, 2026",
      image: Insight3,
      link: "/blog",
    },
  ];

  const featuredAttorney = {
    name: "Michael Johnson",
    role: "Senior Partner",
    image: Person3,
    summary:
      "Michael leads complex litigation and dispute resolution matters, helping clients protect what matters most.",
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider
        slides={[Hero1, Hero2, Hero3]}
        title={
          <>
            Justice. <span className="text-law-gold">Integrity.</span> Results.
          </>
        }
        subtitle="LawEdge provides premier legal counsel with unwavering dedication to achieving the best outcomes for our clients."
      />

      {/* Stats Section */}
      <section className="section-shell py-16" style={{ backgroundColor: "#D4AE36" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center float-slow"
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center shadow-lg">
                    <stat.icon className="w-8 h-8 text-law-gold" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-royal-blue mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-shell py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="glass-panel rounded-3xl p-8 md:p-10 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-law-gold">Why Clients Choose Us</p>
              <h2 className="mt-3 text-4xl font-serif font-bold text-royal-blue">
                Trusted counsel for life’s most important decisions
              </h2>
              <div className="mt-8 space-y-5">
                {highlights.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-law-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-royal-blue text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={WhoWeAreImg}
                alt="Law firm team"
                className="image-tilt rounded-3xl shadow-2xl w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 backdrop-blur-md p-5 shadow-lg">
                <p className="text-sm uppercase tracking-[0.3em] text-law-gold">Free Consultation</p>
                <p className="mt-1 text-2xl font-semibold text-royal-blue">Speak with a legal expert today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are Section */}
      <section className="section-shell py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-4xl font-serif font-bold text-royal-blue">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                LawEdge brings together seasoned advocates and a client-first approach to help you move forward with clarity and confidence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need strategic counsel or steadfast representation, our team is committed to protecting your rights and achieving the best possible outcome.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-law-gold hover:bg-law-gold/90 text-royal-blue font-semibold px-8 py-4"
              >
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-6 h-16 w-16 rounded-2xl bg-law-gold/20 blur-xl" />
              <div className="absolute -right-3 bottom-4 h-20 w-20 rounded-full bg-royal-blue/10 blur-xl" />
              <img
                src={WhoWeAreImg}
                alt="Who We Are | LawEdge"
                loading="lazy"
                decoding="async"
                className="image-tilt rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="section-shell py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-serif font-bold text-royal-blue mb-6">
              Our Practice Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive legal services across multiple practice areas, delivering expert counsel tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="card-3d group border-0">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-royal-blue rounded-full flex items-center justify-center group-hover:bg-law-gold transition-colors duration-300">
                      <area.icon className="w-10 h-10 text-law-gold group-hover:text-royal-blue transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-royal-blue mb-4">
                    {area.title}
                  </h3>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-royal-blue hover:bg-royal-blue/90 text-white font-semibold px-8 py-4"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process / Approach Section */}
      <section className="section-shell py-20 bg-[#f8f5ec]">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={ProcessImg}
              alt="Legal consultation team"
              className="image-tilt w-full h-[520px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-royal-blue text-white p-6 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] opacity-80">Trusted Approach</p>
              <p className="mt-2 text-3xl font-bold">98% Client Satisfaction</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">
              A clear path to the best outcome
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From the first consultation to final resolution, our lawyers keep you informed, prepared, and supported throughout every stage.
            </p>
            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-law-gold flex items-center justify-center text-royal-blue font-semibold">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal-blue text-xl mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 bg-law-gold text-royal-blue hover:bg-law-gold/90">
              <Link to="/contact">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Attorney Section */}
      <section className="section-shell py-20 bg-[#f8f5ec]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-law-gold">Meet Our Team</p>
              <h2 className="text-4xl font-serif font-bold text-royal-blue mt-3 mb-5">A team built for results</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our attorneys combine deep legal knowledge with practical strategy to support clients through every challenge.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <img src={featuredAttorney.image} alt={featuredAttorney.name} className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold text-royal-blue text-xl">{featuredAttorney.name}</h3>
                  <p className="text-gray-500">{featuredAttorney.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{featuredAttorney.summary}</p>
              <Button asChild className="bg-royal-blue text-white">
                <Link to="/attorneys">Meet The Full Team</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={ProcessImg}
                alt="Attorney team"
                className="image-tilt rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 right-6 rounded-2xl bg-law-gold text-royal-blue p-5 shadow-xl">
                <p className="text-sm uppercase tracking-[0.2em]">Case Review</p>
                <p className="text-2xl font-bold">24 Hour Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Results Section */}
      <section className="section-shell py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-4">Client Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <Card key={index} className="card-3d border-0 overflow-hidden">
                <CardContent className="p-8 flex flex-col md:flex-row gap-6">
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full object-cover" />
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">“{item.quote}”</p>
                    <h3 className="font-semibold text-royal-blue">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="section-shell py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-royal-blue text-white p-10 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-law-gold/20 to-transparent" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-law-gold">Need Legal Help?</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold">Let’s talk about your case</h2>
              </div>
              <Button asChild size="lg" className="bg-law-gold text-royal-blue hover:bg-law-gold/90">
                <Link to="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="section-shell py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-law-gold">Insights</p>
              <h2 className="text-4xl font-serif font-bold text-royal-blue mt-2">Latest Updates</h2>
            </div>
            <Button asChild variant="outline" className="border-royal-blue text-royal-blue">
              <Link to="/blog">Visit Our Blog</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((item, index) => (
              <Card key={index} className="card-3d border-0 overflow-hidden group">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold text-royal-blue mb-4">{item.title}</h3>
                  <Link to={item.link} className="inline-flex items-center text-law-gold font-medium">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
