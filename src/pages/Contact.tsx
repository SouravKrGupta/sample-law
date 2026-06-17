import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactHero from "../img/hero_2.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Contact Us"
        title="Tell us about your legal needs in a page that now matches the rest of the site."
        description="We redesigned the contact experience with the same premium visual language as the homepage, making it feel more consistent and confident."
        image={ContactHero}
      />

      <section className="section-shell bg-white py-20">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-[1.02fr_0.98fr]">
          <Card className="card-3d border-0 bg-[#fbf8f2]">
            <CardContent className="p-8 md:p-10">
              <p className="eyebrow text-law-gold">Get In Touch</p>
              <h2 className="mt-3 text-4xl font-serif font-semibold text-royal-blue">
                Start the conversation with a clear, confidential message.
              </h2>
              <form className="mt-8 space-y-4">
                <input
                  className="w-full rounded-2xl border border-[#d9cab5] bg-white px-4 py-3 text-slate-700 outline-none transition-colors focus:border-law-gold"
                  placeholder="Your Name"
                />
                <input
                  className="w-full rounded-2xl border border-[#d9cab5] bg-white px-4 py-3 text-slate-700 outline-none transition-colors focus:border-law-gold"
                  placeholder="Email Address"
                />
                <input
                  className="w-full rounded-2xl border border-[#d9cab5] bg-white px-4 py-3 text-slate-700 outline-none transition-colors focus:border-law-gold"
                  placeholder="Phone Number"
                />
                <textarea
                  className="h-40 w-full rounded-2xl border border-[#d9cab5] bg-white px-4 py-3 text-slate-700 outline-none transition-colors focus:border-law-gold"
                  placeholder="How can we help?"
                />
                <Button className="bg-royal-blue text-white hover:bg-royal-blue/95">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="card-3d border-0 bg-royal-blue text-white">
            <CardContent className="space-y-6 p-8 md:p-10">
              <div>
                <p className="eyebrow text-law-gold/90">Contact Information</p>
                <h3 className="mt-3 text-3xl font-serif font-semibold">We are here to help with your legal concerns.</h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-law-gold" />
                  <span>New Delhi, Mumbai, Bengaluru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-law-gold" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-law-gold" />
                  <span>counsel@lawedge.in</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-law-gold" />
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
