import { Link } from "react-router-dom";
import { ArrowRight, Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoLight from "../img/logo-light.webp";

const Footer = () => {
  return (
    <footer className="bg-[#0c1624] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.75fr_0.75fr_0.9fr]">
          <div className="space-y-5">
            <img src={LogoLight} width={190} alt="Logo | LawEdge" />
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Strategic legal advisory for businesses, founders, and private clients navigating
              disputes, transactions, restructuring, and sensitive decisions.
            </p>
            <Button asChild className="bg-law-gold text-royal-blue hover:bg-law-gold/90">
              <Link to="/contact">
                Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-law-gold">Navigate</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Attorneys", path: "/attorneys" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 transition-colors duration-200 hover:text-law-gold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-law-gold">Expertise</h4>
            <ul className="space-y-2">
              {[
                { name: "Corporate Advisory", path: "/services" },
                { name: "Dispute Resolution", path: "/services" },
                { name: "Employment & Leadership Risk", path: "/services" },
                { name: "Real Estate & Projects", path: "/services" },
                { name: "Restructuring & Recovery", path: "/services" },
                { name: "Private Client Counsel", path: "/services" },
              ].map((area) => (
                <li key={area.name}>
                  <Link
                    to={area.path}
                    className="text-slate-300 transition-colors duration-200 hover:text-law-gold"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-law-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-law-gold" />
                <div>
                  <p className="text-slate-300">
                    New Delhi, Mumbai, Bengaluru
                    <br />
                    By appointment for consultations
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneCall className="h-5 w-5 text-law-gold" />
                <p className="text-slate-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-law-gold" />
                <p className="text-slate-300">counsel@lawedge.in</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="mt-1 h-5 w-5 text-law-gold" />
                <div className="text-slate-300">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Priority response for urgent matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-sm text-slate-400">
              Copyright {new Date().getFullYear()} LawEdge. All rights reserved.
            </p>
            <p className="text-sm text-slate-400">
              Strategic counsel for decisive moments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
