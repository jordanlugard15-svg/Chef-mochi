/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Utensils, 
  PieChart, 
  Globe, 
  Leaf, 
  ChefHat, 
  Clock, 
  Users, 
  Star, 
  MessageCircle, 
  Phone, 
  Instagram, 
  Mail, 
  MapPin,
  Menu,
  X,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { chefConfig } from "./config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${chefConfig.whatsapp}?text=Hello%20Chef%20Mo%20Chi,%20I'd%20like%20to%20inquire%20about%20your%20services.`;

  const iconMap: any = {
    Utensils: <Utensils className="w-6 h-6" />,
    PieChart: <PieChart className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
    Leaf: <Leaf className="w-6 h-6 text-gold" />,
    ChefHat: <ChefHat className="w-6 h-6 text-gold" />,
    Clock: <Clock className="w-6 h-6 text-gold" />,
    Users: <Users className="w-6 h-6 text-gold" />,
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md border-b py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container px-4 mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className={`text-2xl font-heading font-bold tracking-tighter ${scrolled ? "text-foreground" : "text-white"}`}>
              {chefConfig.name.toUpperCase()}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Menu", "Gallery", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  scrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                {item}
              </a>
            ))}
            <Button asChild className="bg-gold hover:bg-gold-hover text-white rounded-full px-6 transition-all shadow-lg hover:shadow-gold/20">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={scrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {["About", "Menu", "Gallery", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-3xl font-heading"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button asChild size="lg" className="bg-gold hover:bg-gold-hover text-white rounded-full px-10">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp Booking
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={chefConfig.hero.image} 
            alt="Chef Mo Chi Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="text-white border-gold/50 bg-gold/10 mb-6 backdrop-blur-sm">
              Premium Private Chef in Abuja
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight">
              {chefConfig.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-sans">
              {chefConfig.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-white text-lg rounded-full px-8 py-7 shadow-xl shadow-gold/20">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {chefConfig.hero.primaryCTA}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-lg rounded-full px-8 py-7">
                <a href="#menu">{chefConfig.hero.secondaryCTA}</a>
              </Button>
            </div>
            
            <p className="mt-8 text-white/60 italic text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse mr-2" />
              {chefConfig.limitedSlots}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <div className="relative">
                <img 
                  src={chefConfig.about.image} 
                  alt="About Chef Mo Chi" 
                  className="rounded-2xl shadow-2xl z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/5 rounded-2xl -z-0" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-gold/20 rounded-tl-2xl" />
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="flex flex-col gap-6"
            >
              <Badge variant="outline" className="w-fit text-gold border-gold/20 font-sans tracking-widest uppercase">
                Est. 2026
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                {chefConfig.about.title}
              </h2>
              <Separator className="w-20 bg-gold h-1" />
              <p className="text-lg text-foreground/70 leading-relaxed font-sans italic">
                "{chefConfig.about.content}"
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex -space-x-3 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" className="inline-block h-10 w-10 rounded-full ring-2 ring-white" alt="Client" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="inline-block h-10 w-10 rounded-full ring-2 ring-white" alt="Client" />
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" className="inline-block h-10 w-10 rounded-full ring-2 ring-white" alt="Client" />
                </div>
                <p className="text-sm text-foreground/60 font-sans">
                  Trusted by <span className="font-bold text-foreground">50+ clients</span> in Abuja
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Menu Categories */}
      <section id="menu" className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Signature Specialties</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Custom menus available for events, private dining, and premium weekly meal plans.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {chefConfig.categories.map((cat) => (
              <motion.div key={cat.id} variants={sectionVariants}>
                <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all h-full group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg">
                      {iconMap[cat.icon]}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-bold mb-3">{cat.title}</h3>
                    <p className="text-foreground/60 mb-6 font-sans">
                      {cat.description}
                    </p>
                    <Button variant="ghost" className="p-0 hover:bg-transparent text-gold hover:text-gold-hover group-hover:translate-x-1 transition-transform">
                      See Samples <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-gold border-gold/20">The Visual Feast</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Plated to Perfection</h2>
            <p className="text-foreground/60">Real meals from recent clients. Crafted with passion, served with elegance.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {chefConfig.gallery.map((img, idx) => (
              <motion.div 
                key={idx} 
                variants={sectionVariants}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer shadow-md"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-foreground text-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
            {chefConfig.benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-start gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  {iconMap[benefit.icon]}
                </div>
                <h3 className="text-xl font-heading font-bold text-gold">{benefit.title}</h3>
                <p className="text-white/60 font-sans leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Client Love</h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefConfig.testimonials.map((t, idx) => (
              <Card key={idx} className="bg-gray-50 border-none shadow-none p-8 relative overflow-hidden group">
                <div className="absolute -top-4 -right-4 text-gold/10 pointer-events-none group-hover:scale-110 transition-transform">
                  <Star className="w-32 h-32 fill-current" />
                </div>
                <div className="relative z-10">
                  <p className="text-lg text-foreground/80 italic mb-8 font-sans">
                    "{t.review}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-xs text-foreground/50 uppercase tracking-widest">{t.event}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 border-t">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6">Ready to Book Your Experience?</h2>
                <p className="text-foreground/60 mb-10 text-lg leading-relaxed">
                  Inquire now to check availability for your date. I respond to all WhatsApp messages within 2 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/40 font-medium">Call / WhatsApp</p>
                      <p className="text-lg font-bold">{chefConfig.whatsapp}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/40 font-medium">Email</p>
                      <p className="text-lg font-bold">{chefConfig.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/40 font-medium">Location</p>
                      <p className="text-lg font-bold">{chefConfig.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gold/5 border border-gold/10 rounded-2xl">
                  <p className="text-gold font-bold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full animate-ping" />
                    Limited Weekly Slots
                  </p>
                  <p className="text-sm text-foreground/60">
                    I only accept 3 private catering events per week to maintain the highest quality standards.
                  </p>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4">
                  <Badge className="bg-gold/10 text-gold border-none font-bold uppercase tracking-widest text-[10px]">Active Now</Badge>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-8">Fast Booking</h3>
                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full bg-gold hover:bg-gold-hover text-white h-16 text-xl rounded-2xl">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                      <MessageCircle className="w-6 h-6" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full border-gray-200 h-16 text-lg rounded-2xl group">
                    <a href={`https://instagram.com/${chefConfig.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                      <Instagram className="w-6 h-6 group-hover:text-gold transition-colors" />
                      Follow on Instagram
                    </a>
                  </Button>
                </div>
                <p className="mt-8 text-center text-xs text-foreground/40 px-4 leading-relaxed font-sans">
                  By reaching out, you're one step closer to a gourmet experience in the comfort of your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b">
            <span className="text-3xl font-heading font-bold tracking-tighter">
              {chefConfig.name.toUpperCase()}
            </span>
            <div className="flex items-center gap-8">
              {["About", "Menu", "Gallery", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium hover:text-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/40 font-sans">
            <p>© {new Date().getFullYear()} {chefConfig.name}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-gold cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-gold cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] sm:w-[350px]">
        <Button asChild className="w-full h-14 bg-gold hover:bg-gold-hover text-white rounded-full shadow-2xl flex items-center justify-center gap-2 text-lg">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Book Now on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
