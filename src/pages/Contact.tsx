import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactHero from "../img/hero_2.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="section-shell relative py-32"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,4,34,1) 0%, rgba(27,7,56,1) 65%, rgba(212,174,54,1) 100%)",
        }}
      >
        <img src={ContactHero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">Tell us about your legal needs. We’ll respond promptly and confidentially.</p>
        </div>
      </section>

      <section className="section-shell py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="card-3d shadow-xl border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-bold text-royal-blue mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <input className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Your Name" />
                <input className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Email Address" />
                <input className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Phone Number" />
                <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 h-40" placeholder="How can we help?" />
                <Button className="bg-law-gold text-royal-blue">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="card-3d shadow-xl border-0 bg-royal-blue text-white">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-2">Contact Information</h3>
                <p className="text-gray-200">We are here to help with your legal concerns.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-law-gold mt-1" />
                  <span>123 Justice Boulevard, Suite 456, Metro City</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-law-gold" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-law-gold" />
                  <span>info@lawedge.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-law-gold mt-1" />
                  <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
