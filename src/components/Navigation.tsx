import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Menu, PhoneCall, X } from "lucide-react";
import Logo from "../img/logo.webp";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Attorneys", path: "/attorneys" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location.pathname === path : location.pathname.startsWith(path);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-[#e8e0d3] bg-white/96 shadow-[0_18px_45px_-30px_rgba(16,32,50,0.45)]"
          : "border-transparent bg-white/92 backdrop-blur-xl"
      }`}
    >
      <div className="hidden border-b border-white/10 bg-royal-blue text-white lg:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 text-sm">
          <div className="flex items-center gap-6 text-slate-200">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-law-gold" />
              Multi-city legal support
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-law-gold" />
              counsel@lawedge.in
            </span>
          </div>
          <span className="flex items-center gap-2 text-slate-100">
            <PhoneCall className="h-4 w-4 text-law-gold" />
            +91 98765 43210
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all ${isScrolled ? "py-3" : "py-4"}`}>
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} width={158} alt="Logo | LawEdge" className="h-auto object-contain" />
            <div className="hidden xl:block">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Legal Advisory</p>
              <p className="text-sm font-medium text-royal-blue">Strategic counsel for decisive moments</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-semibold tracking-[0.08em] transition-colors duration-200 ${
                  isActive(item.path)
                    ? "border-b-2 border-law-gold pb-1 text-royal-blue"
                    : "text-slate-600 hover:text-royal-blue"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-xl bg-law-gold px-6 py-2 font-semibold text-royal-blue transition-all duration-200 hover:bg-law-gold/90 hover:shadow-lg"
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-royal-blue"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="mb-4 mt-2 rounded-[28px] border border-[#e7ddcf] bg-white p-5 shadow-[0_20px_60px_-35px_rgba(16,32,50,0.45)] lg:hidden">
            <div className="mb-4 space-y-3 border-b border-[#efe5d7] pb-4 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-law-gold" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-law-gold" />
                counsel@lawedge.in
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-royal-blue"
                      : "text-slate-600 hover:text-royal-blue"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 w-full bg-law-gold font-semibold text-royal-blue hover:bg-law-gold/90"
              >
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
