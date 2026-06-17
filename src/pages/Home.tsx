import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gavel,
  Landmark,
  Mail,
  MapPin,
  Newspaper,
  PhoneCall,
  Quote,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import HeroImage from "../img/hero-bg.jpg";
import AboutImage from "../img/blog-1.jpg";
import TeamImage from "../img/hero_3.jpg";
import HeroAltImage from "../img/hero_2.jpg";
import ExpertiseImage from "../img/blog-1.jpg";
import ProcessImage from "../img/hero_3.jpg";
import Insight1 from "../img/blog-2.jpg";
import Insight2 from "../img/blog-3.jpg";
import Insight3 from "../img/blog-4.jpg";
import Person1 from "../img/person_1.jpg";
import Person2 from "../img/person_2.jpg";
import Person3 from "../img/person_3.jpg";

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const expertiseAreas = [
    {
      icon: Landmark,
      title: "Corporate Advisory",
      description:
        "Practical counsel for governance, transactions, contracts, and everyday commercial decisions.",
    },
    {
      icon: Gavel,
      title: "Dispute Resolution",
      description:
        "Focused representation in litigation, arbitration, investigations, and high-stakes negotiations.",
    },
    {
      icon: Building2,
      title: "Real Estate & Projects",
      description:
        "Support across acquisitions, leasing, development, construction, and regulatory approvals.",
    },
    {
      icon: Users,
      title: "Employment & Leadership Risk",
      description:
        "Advice for workplace disputes, executive transitions, policy frameworks, and sensitive reviews.",
    },
    {
      icon: Shield,
      title: "Restructuring & Recovery",
      description:
        "Decisive legal strategy for distressed assets, insolvency matters, creditor actions, and turnaround work.",
    },
    {
      icon: Scale,
      title: "Private Client Counsel",
      description:
        "Trusted guidance for family wealth, succession planning, estate structures, and reputation-sensitive matters.",
    },
  ];

  const proofPoints = [
    { number: "25+", label: "years of combined strategic legal experience" },
    { number: "1,200+", label: "mandates handled across disputes and transactions" },
    { number: "92%", label: "of new instructions come from referrals and repeat clients" },
    { number: "24 hrs", label: "typical response window for urgent consultations" },
  ];

  const heroHighlights = [
    {
      value: "Partner-led",
      label: "Senior legal strategy from the first discussion.",
    },
    {
      value: "Commercial",
      label: "Advice shaped around business pressure, timing, and risk.",
    },
    {
      value: "Responsive",
      label: "Clear communication when reputations and deadlines matter most.",
    },
  ];

  const processSteps = [
    {
      title: "Understand the brief",
      text: "We define the legal issue, commercial pressure points, stakeholders, and timing before taking action.",
    },
    {
      title: "Build the strategy",
      text: "Every matter gets a tailored route forward with risks, leverage, and next steps mapped clearly.",
    },
    {
      title: "Execute with clarity",
      text: "From negotiations to filings and hearings, we stay prepared, responsive, and accountable throughout.",
    },
  ];

  const advantages = [
    {
      title: "Commercially grounded counsel",
      text: "Our recommendations are designed to support business continuity, protect value, and reduce exposure.",
    },
    {
      title: "Transparent communication",
      text: "Clients understand their position, their options, and the logic behind each step we recommend.",
    },
    {
      title: "Prepared advocacy",
      text: "Whether we are negotiating quietly or litigating aggressively, the preparation is rigorous and deliberate.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Their team understood both the legal position and the business pressure around the matter. That changed the quality of every decision we made.",
      name: "Aarav Mehta",
      role: "Managing Director, Manufacturing Client",
      image: Person1,
    },
    {
      quote:
        "Responsive, strategic, and exceptionally well prepared. We never felt like our case was being handled on autopilot.",
      name: "Nisha Kapoor",
      role: "Founder, Technology Client",
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

  const sectors = [
    "Technology",
    "Financial Services",
    "Real Estate",
    "Healthcare",
    "Infrastructure",
    "Founder-led Businesses",
  ];

  const handlePreviousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      <HeroSlider
        slides={[HeroImage, TeamImage, HeroAltImage]}
        title={
          <>
            Strategic Counsel For <span className="text-law-gold">Complex Legal Matters</span>
          </>
        }
        subtitle="LawEdge advises businesses, founders, and private clients across disputes, transactions, employment risk, restructuring, and sensitive strategic matters."
        primaryLabel="Request A Consultation"
        primaryTo="/contact"
        secondaryLabel="Explore Expertise"
        secondaryTo="/services"
      />

      <section className="section-shell relative z-20 -mt-20 px-4 pb-8 md:-mt-24 md:pb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.value}
                className="surface-panel rounded-[28px] border border-white/20 bg-white/88 p-6 shadow-[0_30px_70px_-42px_rgba(16,32,50,0.55)]"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-law-gold">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 rounded-[32px] border border-[#e7ddcf] bg-[#fbf8f2] p-8 shadow-[0_28px_70px_-42px_rgba(16,32,50,0.45)] md:grid-cols-2 xl:grid-cols-4">
            {proofPoints.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/70 p-5">
                <p className="text-4xl font-serif font-semibold text-royal-blue">{item.number}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative">
              <div className="sticky top-32">
                <p className="eyebrow text-law-gold">Core Expertise</p>
                <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
                  Clear practice areas with a proper visual section, not only cards.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Our work spans business-critical disputes, strategic transactions,
                  workplace risk, restructuring matters, and trusted private client counsel.
                </p>
                <div className="relative mt-8 overflow-hidden rounded-[32px] shadow-[0_28px_70px_-40px_rgba(16,32,50,0.45)]">
                  <img
                    src={ExpertiseImage}
                    alt="LawEdge expertise consultation"
                    className="h-[520px] w-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 max-w-[300px] rounded-[22px] bg-white/92 p-5 backdrop-blur">
                    <p className="eyebrow text-law-gold">Practice Coverage</p>
                    <p className="mt-2 text-xl font-serif font-semibold text-royal-blue">
                      Built to guide clients through complex legal decisions with confidence
                    </p>
                  </div>
                </div>
                <Button asChild className="mt-8 bg-law-gold text-royal-blue hover:bg-law-gold/90">
                  <Link to="/services">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-5">
              {expertiseAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="rounded-[28px] border border-[#eadfce] bg-[#fcfaf6] p-7 shadow-[0_24px_60px_-44px_rgba(16,32,50,0.35)]"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-royal-blue text-law-gold">
                        <area.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-semibold text-royal-blue">
                          {area.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                          {area.description}
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative">
              <img
                src={AboutImage}
                alt="LawEdge team meeting with a client"
                className="h-[560px] w-full rounded-[32px] object-cover shadow-[0_28px_70px_-38px_rgba(16,32,50,0.45)]"
              />
              <div className="absolute bottom-6 left-6 max-w-[300px] rounded-[22px] bg-white/92 p-5 backdrop-blur">
                <p className="eyebrow text-law-gold">Client First</p>
                <p className="mt-2 text-xl font-serif font-semibold text-royal-blue">
                  Advice that stays calm, direct, and commercially useful.
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow text-law-gold">About The Firm</p>
              <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
                Senior legal support designed for confidence at every stage.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                LawEdge brings together experienced advocates and practical business judgment.
                We help clients move through disputes, deals, and sensitive decisions with a
                strategy that is disciplined, responsive, and outcome-focused.
              </p>
              <div className="mt-8 space-y-5">
                {advantages.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-law-gold" />
                    <div>
                      <h3 className="text-lg font-semibold text-royal-blue">{item.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="surface-panel rounded-2xl p-5">
                  <p className="eyebrow text-law-gold">Office Reach</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Multi-city support for boards, founders, investors, and private clients.
                  </p>
                </div>
                <div className="surface-panel rounded-2xl p-5">
                  <p className="eyebrow text-law-gold">Sector Familiarity</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Real estate, finance, manufacturing, technology, and high-trust private matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-royal-blue py-14 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow text-law-gold/90">Industries And Focus Sectors</p>
              <h2 className="mt-3 text-3xl font-serif font-semibold">
                Legal advice grounded in the realities of the sectors we serve.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-slate-100"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div className="relative">
              <img
                src={ProcessImage}
                alt="LawEdge case review and legal process"
                className="w-full min-h-[500px] rounded-[32px] object-cover shadow-[0_30px_70px_-42px_rgba(16,32,50,0.5)]"
              />

              <div className="absolute bottom-6 left-6 max-w-[320px] rounded-[24px] bg-[#102032] p-5 text-white shadow-2xl">
                <p className="eyebrow text-law-gold/90">Execution Model</p>
                <p className="mt-2 text-xl font-serif font-semibold">
                  Structured support from first review to final resolution
                </p>
              </div>
            </div>

            <div className="pt-8 lg:pt-0">
              <p className="eyebrow text-law-gold">How We Work</p>
              <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
                A clear process for matters that need speed, precision, and judgment.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Each stage is now shown as a full visual section, closer to the previous homepage
                style where the content and imagery worked together.
              </p>
              <div className="mt-8 space-y-5">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[24px] border border-[#eadfce] bg-[#fcfaf6] p-6"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-law-gold font-semibold text-royal-blue">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-royal-blue">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] bg-[#102032] p-5 text-white">
                  <Clock className="h-6 w-6 text-law-gold" />
                  <h3 className="mt-4 text-xl font-serif font-semibold">Fast attention</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Time-sensitive matters are reviewed quickly by senior lawyers.
                  </p>
                </div>
                <div className="rounded-[24px] bg-[#f7f1e7] p-5">
                  <Shield className="h-6 w-6 text-law-gold" />
                  <h3 className="mt-4 text-xl font-serif font-semibold text-royal-blue">Trusted judgment</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Disciplined preparation, discretion, and strategy-led advice.
                  </p>
                </div>
                <div className="rounded-[24px] bg-[#f7f1e7] p-5">
                  <Users className="h-6 w-6 text-law-gold" />
                  <h3 className="mt-4 text-xl font-serif font-semibold text-royal-blue">Full visibility</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    You always understand the current position and next move.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#f7f1e7] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p className="eyebrow text-law-gold">Leadership Spotlight</p>
              <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
                A team built for boardroom decisions and courtroom pressure.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our lawyers combine rigorous legal thinking with practical communication, helping
                clients make confident decisions in uncertain or high-stakes situations.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={Person3}
                  alt="Senior partner portrait"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-royal-blue">Michael Johnson</h3>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Senior Partner</p>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
                Michael leads complex disputes, negotiations, and strategy-heavy matters for
                businesses and decision-makers who need calm counsel under pressure.
              </p>
              <Button asChild className="mt-8 bg-royal-blue text-white hover:bg-royal-blue/95">
                <Link to="/attorneys">Meet The Team</Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={TeamImage}
                alt="LawEdge attorneys"
                className="h-[520px] w-full rounded-[32px] object-cover shadow-[0_28px_70px_-38px_rgba(16,32,50,0.45)]"
              />
              <div className="absolute bottom-6 right-6 max-w-[300px] rounded-[22px] bg-white/92 p-4 backdrop-blur">
                <p className="eyebrow text-law-gold">Team Strength</p>
                <p className="mt-2 text-lg font-serif font-semibold text-royal-blue">
                  Practical lawyers with boardroom and courtroom confidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="relative">
              <img
                src={AboutImage}
                alt="Client consultation at LawEdge"
                className="h-[520px] w-full rounded-[32px] object-cover shadow-[0_28px_70px_-38px_rgba(16,32,50,0.45)]"
              />
              <div className="absolute bottom-6 left-6 max-w-[300px] rounded-[22px] bg-white/92 p-5 backdrop-blur">
                <p className="eyebrow text-law-gold">Client Perspective</p>
                <p className="mt-2 text-xl font-serif font-semibold text-royal-blue">
                  Trusted by clients who need precision, urgency, and discretion
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="eyebrow text-law-gold">Testimonials</p>
                  <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
                    Strong feedback presented as a complete section, not just cards.
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePreviousTestimonial}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c8b2] bg-white text-royal-blue transition-colors hover:bg-[#fbf8f2]"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextTestimonial}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c8b2] bg-white text-royal-blue transition-colors hover:bg-[#fbf8f2]"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-royal-blue/20 bg-white text-royal-blue hover:bg-[#fbf8f2]"
                  >
                    <Link to="/testimonials">View More Testimonials</Link>
                  </Button>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {testimonials.slice(0, 2).map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="flex gap-4 rounded-[24px] border border-[#e7ddcf] bg-[#fbf8f2] p-5 shadow-[0_20px_50px_-30px_rgba(16,32,50,0.45)]"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-md object-cover flex-shrink-0"
                    />

                    <div>
                      <Quote className="h-4 w-4 text-law-gold" />

                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {testimonial.quote}
                      </p>

                      <div className="mt-3">
                        <h3 className="text-sm font-semibold text-royal-blue">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-law-gold">Thought Leadership</p>
              <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue md:text-5xl">
                Legal insight that helps clients act earlier and more confidently.
              </h2>
            </div>
            <Button asChild className="bg-law-gold text-royal-blue hover:bg-law-gold/90">
              <Link to="/blog">Visit The Blog</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {insights.map((item) => (
              <Card key={item.title} className="card-3d overflow-hidden border-0 bg-[#fbf8f2]">
                <img src={item.image} alt={item.title} className="h-60 w-full object-cover" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-500">
                    <Newspaper className="h-4 w-4 text-law-gold" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-serif font-semibold text-royal-blue">{item.title}</h3>
                  <Link
                    to={item.link}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-royal-blue"
                  >
                    Read Article <ArrowRight className="ml-2 h-4 w-4 text-law-gold" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-royal-blue py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="eyebrow text-law-gold/90">Need Legal Help</p>
              <h2 className="mt-3 text-4xl font-serif font-semibold md:text-5xl">
                Speak with a team that can move quickly and advise with clarity.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Whether you are dealing with an active dispute, a strategic transaction, an
                employment issue, or a sensitive private matter, we are ready to help.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-law-gold px-8 py-6 text-base font-semibold text-royal-blue hover:bg-law-gold/90"
              >
                <Link to="/contact">Book Your Consultation</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <PhoneCall className="h-6 w-6 text-law-gold" />
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-300">Call Us</p>
                <p className="mt-2 text-lg font-semibold">+91 98765 43210</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <Mail className="h-6 w-6 text-law-gold" />
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-300">Email</p>
                <p className="mt-2 text-lg font-semibold">counsel@lawedge.in</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <MapPin className="h-6 w-6 text-law-gold" />
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-300">Office</p>
                <p className="mt-2 text-lg font-semibold">New Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
