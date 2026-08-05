import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import tapovanImg from "@/assets/tapovan.jpg";
import diyaImg from "@/assets/diya.jpg";
import fluteImg from "@/assets/flute.jpg";
import rasaImg from "@/assets/rasa.jpg";
import galleryAshram from "@/assets/gallery_ashram_1785922735991.png";
import galleryMeditation from "@/assets/gallery_meditation_1785922755761.png";
import galleryTemple from "@/assets/gallery_krishna_temple_1785922768852.png";
import galleryHealing from "@/assets/gallery_healing_1785922782557.png";
import { ConsultationModal } from "@/components/ConsultationModal";
import { LegalDialog } from "@/components/LegalDialog";
import { LoadingScreen } from "@/components/LoadingScreen";
import { SacredParticles } from "@/components/SacredParticles";
import { GalleryModal } from "@/components/GalleryModal";
import {
  Sparkles,
  Heart,
  Sun,
  BookOpen,
  Users,
  Compass,
  Check,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Star,
  Quote,
  ArrowUpRight,
  ShieldCheck,
  Flower2,
  Maximize2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: IndexPage,
  head: () => ({
    meta: [
      { title: "Yugala Radhe Krishna Tapovan — Spiritual Sanctuary & Inner Transformation" },
      {
        name: "description",
        content:
          "Experience Divine Love. Awaken Your Inner Self. A spiritual sanctuary dedicated to meditation, healing, Krishna Consciousness, and holistic transformation inspired by Radha and Krishna.",
      },
    ],
  }),
});

/* -------- Reveal on Scroll Component -------- */
function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 1s ${delay}ms cubic-bezier(.22,1,.36,1), transform 1s ${delay}ms cubic-bezier(.22,1,.36,1)`,
      }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/* -------- Eyebrow & Decorative Marks -------- */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-antique">
    <span className="h-px w-8 bg-gold/60" />
    <span className="font-semibold">{children}</span>
    <span className="h-px w-8 bg-gold/60" />
  </div>
);

const SacredMandalaVector = () => (
  <svg
    viewBox="0 0 500 500"
    className="absolute -right-20 top-1/2 -translate-y-1/2 h-[600px] w-[600px] text-gold/15 pointer-events-none anim-rotate-slow hidden lg:block"
    fill="none"
  >
    <circle cx="250" cy="250" r="240" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
    <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="1" />
    <circle cx="250" cy="250" r="160" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="250" cy="250" r="110" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
    <circle cx="250" cy="250" r="60" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M250 10 L250 490 M10 250 L490 250 M80 80 L420 420 M80 420 L420 80"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.7"
    />
    {[...Array(12)].map((_, i) => (
      <circle
        key={i}
        cx={250 + 160 * Math.cos((i * Math.PI) / 6)}
        cy={250 + 160 * Math.sin((i * Math.PI) / 6)}
        r="8"
        fill="currentColor"
        opacity="0.3"
      />
    ))}
  </svg>
);

/* -------- Sticky Header Navigation -------- */
function Navigation({ onOpenConsultation }: { onOpenConsultation: (program?: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Academy", href: "#academy" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-shadow/95 backdrop-blur-md py-3.5 border-b border-gold/20 shadow-lg"
          : "bg-gradient-to-b from-shadow/90 via-shadow/40 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#hero" className="flex items-center gap-3.5 group">
          <img
            src="/Logo.jpeg"
            alt="Yugala Radhe Krishna Tapovan Logo"
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border border-gold/60 shadow-md group-hover:scale-105 transition duration-300"
          />
          <div className="leading-none">
            <span className="font-display text-sm tracking-[0.25em] text-gold-light group-hover:text-gold transition">
              YUGALA
            </span>
            <span className="block font-serif italic text-xs tracking-wider text-ivory/80">
              Radhe Krishna Tapovan
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.22em] text-ivory/80 transition duration-300 hover:text-gold-light font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => onOpenConsultation()}
            className="border border-gold/70 bg-gold/10 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-gold-light transition duration-300 hover:bg-gold hover:text-shadow font-semibold shadow-gold cursor-pointer"
          >
            Join Our Programs
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gold-light md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-gold/30 bg-shadow/98 px-6 py-6 backdrop-blur-xl md:hidden anim-fade-up">
          <nav className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm uppercase tracking-[0.25em] text-ivory/90 hover:text-gold transition"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-4 w-full bg-gold py-3 text-xs uppercase tracking-[0.25em] text-shadow font-bold"
            >
              Join Our Programs
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

/* -------- Main Single Page Component -------- */
export function IndexPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>();
  const [legalType, setLegalType] = useState<"privacy" | "terms" | "refund" | null>(null);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [galleryModalIdx, setGalleryModalIdx] = useState<number | null>(null);
  const [activeWhyUsIdx, setActiveWhyUsIdx] = useState<number>(0);

  const handleOpenConsultation = (programName?: string) => {
    setSelectedProgram(programName);
    setConsultationOpen(true);
  };

  const galleryItems = [
    { title: "Ashram", img: galleryAshram, caption: "Peaceful Ashram Sanctuary Grounds" },
    { title: "Meditation", img: galleryMeditation, caption: "Guided Meditation & Silence" },
    { title: "Retreats", img: tapovanImg, caption: "Transformative Spiritual Retreats" },
    { title: "Workshops", img: diyaImg, caption: "Interactive Wisdom Workshops" },
    { title: "Krishna Temple", img: galleryTemple, caption: "Divine Radha Krishna Temple Altar" },
    { title: "Healing Sessions", img: galleryHealing, caption: "Holistic Sound & Energy Healing" },
  ];

  const testimonials = [
    {
      quote:
        "Attending the 7-day retreat changed my perspective on life completely. The guided meditation and divine atmosphere brought me deep emotional healing and stillness.",
      name: "Ananya Sharma",
      role: "Retreat Participant",
    },
    {
      quote:
        "The Bhagavad Gita learning sessions at Yugala Tapovan helped me navigate complex life decisions with clarity, devotion, and peace.",
      name: "Rajesh K. Verma",
      role: "Academy Student",
    },
    {
      quote:
        "My children look forward to the Kids Gurukulam every weekend! They have developed respect, focus, and a beautiful connection to Radha and Krishna.",
      name: "Priya & Amit Nambiar",
      role: "Parents",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-crimson selection:text-ivory overflow-x-hidden">
      {/* Sacred Loading Screen */}
      <LoadingScreen />

      {/* Sticky Header Navigation */}
      <Navigation onOpenConsultation={handleOpenConsultation} />

      {/* 1. HERO SECTION (Dynamic, Sophisticated & Animated) */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-shadow text-ivory pt-28 pb-20">
        {/* Floating Sacred Golden Dust Canvas */}
        <SacredParticles particleCount={40} />

        {/* Hero Background Image with Parallax & Slow Zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Radha and Krishna in divine love"
            className="h-full w-full object-cover opacity-45 anim-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-shadow via-shadow/70 to-shadow/50" />
          <div className="absolute inset-0 bg-radial from-transparent via-shadow/30 to-shadow" />
        </div>

        {/* Rotating Sacred Vector Mandala Backdrop */}
        <SacredMandalaVector />

        {/* Dynamic Animated Pulsing Gold Halos */}
        <div
          className="pointer-events-none absolute left-1/4 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-3xl anim-pulse-glow"
          style={{ background: "radial-gradient(circle, #e3c477 0%, #cf7902 40%, transparent 75%)" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 w-full py-16 flex flex-col justify-center">
          <div className="max-w-4xl">
            {/* Dynamic Floating Badge */}
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-shadow/80 px-4 py-1.5 backdrop-blur-md anim-float mb-6 shadow-gold">
                <Sparkles className="h-4 w-4 text-gold animate-spin" style={{ animationDuration: "12s" }} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
                  Sacred Radha Krishna Sanctuary
                </span>
              </div>
            </Reveal>

            {/* Main Sophisticated Animated Headline */}
            <Reveal delay={150}>
              <h1 className="font-display text-4xl font-light leading-[1.08] text-ivory sm:text-6xl lg:text-7xl tracking-wide">
                Experience Divine Love.
                <br />
                <span className="font-serif italic text-shimmer-gold">Awaken Your Inner Self.</span>
              </h1>
            </Reveal>

            {/* Subheading */}
            <Reveal delay={300}>
              <p className="mt-8 max-w-2xl font-serif text-lg leading-relaxed text-ivory/85 sm:text-xl lg:text-2xl font-light">
                A spiritual sanctuary dedicated to meditation, healing, Krishna Consciousness, and holistic transformation inspired by the eternal love of Radha and Krishna.
              </p>
            </Reveal>

            {/* Dynamic Interactive CTA Buttons */}
            <Reveal delay={450}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <button
                  onClick={() => handleOpenConsultation()}
                  className="group relative inline-flex items-center gap-3.5 border border-gold bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-shadow transition duration-300 hover:bg-gold-light hover:border-gold-light shadow-gold cursor-pointer overflow-hidden"
                >
                  <span className="relative z-10">Join Our Programs</span>
                  <ChevronRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 border border-ivory/30 bg-shadow/40 backdrop-blur-sm px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-ivory/90 transition duration-300 hover:border-gold hover:text-gold-light hover:bg-shadow/70"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </a>
              </div>
            </Reveal>

            {/* Feature Stat Highlights */}
            <Reveal delay={600}>
              <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-gold/25 pt-8 max-w-2xl">
                <div>
                  <div className="font-display text-2xl sm:text-3xl text-gold-light font-medium">Daily</div>
                  <div className="font-serif text-xs text-ivory/70 tracking-wider uppercase mt-1">Guided Meditation</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl text-gold-light font-medium">Holistic</div>
                  <div className="font-serif text-xs text-ivory/70 tracking-wider uppercase mt-1">Healing & Gita</div>
                </div>
                <div className="hidden sm:block">
                  <div className="font-display text-2xl sm:text-3xl text-gold-light font-medium">Vrindavan</div>
                  <div className="font-serif text-xs text-ivory/70 tracking-wider uppercase mt-1">Peaceful Sanctuary</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Banner Strap */}
        <div className="absolute inset-x-0 bottom-0 border-t border-gold/20 bg-shadow/80 backdrop-blur py-3 text-center text-xs uppercase tracking-[0.3em] text-gold-light/70">
          <span>Devotion · Meditation · Healing · Krishna Consciousness</span>
        </div>
      </section>

      {/* 2. ABOUT YUGALA RADHE KRISHNA TAPOVAN */}
      <section id="about" className="relative py-24 bg-background overflow-hidden grain border-b border-gold/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>Our Spiritual Heritage</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
                  About Yugala Radhe Krishna Tapovan
                </h2>
                <h3 className="mt-3 font-serif italic text-xl text-saffron font-medium">
                  A Sacred Space for Inner Transformation
                </h3>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 space-y-6 font-serif text-lg leading-relaxed text-muted-foreground">
                  <p className="border-l-2 border-gold/50 pl-4 py-1">
                    Yugala Radhe Krishna Tapovan is a spiritual community where seekers experience devotion, meditation, healing, and self-discovery through the timeless wisdom of Radha and Krishna.
                  </p>
                  <p>
                    We believe true transformation begins within. Through guided spiritual practices, holistic wellness, and compassionate guidance, we help individuals cultivate peace, purpose, and divine consciousness.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={350}>
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-gold/30 pt-6">
                  <div className="group p-4 bg-card/60 border border-gold/20 hover:border-gold transition">
                    <div className="font-display text-3xl text-crimson font-medium group-hover:scale-105 transition duration-300">100%</div>
                    <div className="font-serif text-sm text-muted-foreground mt-1">Holistic Guidance</div>
                  </div>
                  <div className="group p-4 bg-card/60 border border-gold/20 hover:border-gold transition">
                    <div className="font-display text-3xl text-crimson font-medium group-hover:scale-105 transition duration-300">Timeless</div>
                    <div className="font-serif text-sm text-muted-foreground mt-1">Vedic Wisdom</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={250}>
                <div className="relative rounded-none overflow-hidden border border-gold/40 shadow-sacred group">
                  <img
                    src={tapovanImg}
                    alt="Tapovan Spiritual Community Sanctuary"
                    className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-shadow/90 via-shadow/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 border-l-2 border-gold pl-4 text-ivory">
                    <p className="font-serif italic text-lg">"Where every heart awakens to the lotus feet of Radha-Krishna."</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="relative py-24 bg-shadow text-ivory overflow-hidden">
        <SacredParticles particleCount={25} />

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={fluteImg} alt="Spiritual flute motif" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Guiding Philosophy</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-light text-ivory sm:text-4xl">
                Vision & Mission
              </h2>
              <div className="gold-line mt-4 mx-auto w-32" />
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={150}>
              <div className="h-full border border-gold/30 bg-shadow/80 p-8 lg:p-10 backdrop-blur-md relative group hover:border-gold transition duration-500 hover:-translate-y-1 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 bg-crimson/40 border border-gold/40 text-gold rounded-full group-hover:scale-110 group-hover:bg-crimson transition duration-300">
                    <Sun className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl text-gold-light">Our Vision</h3>
                </div>
                <p className="font-serif text-xl leading-relaxed text-ivory/90 italic">
                  "To inspire humanity to live with devotion, compassion, inner peace, and Krishna Consciousness."
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="h-full border border-gold/30 bg-shadow/80 p-8 lg:p-10 backdrop-blur-md relative group hover:border-gold transition duration-500 hover:-translate-y-1 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 bg-crimson/40 border border-gold/40 text-gold rounded-full group-hover:scale-110 group-hover:bg-crimson transition duration-300">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl text-gold-light">Our Mission</h3>
                </div>
                <p className="font-serif text-xl leading-relaxed text-ivory/90 italic">
                  "To create a sacred environment where individuals can heal, meditate, learn, serve, and transform through the boundless love of Radha and Krishna."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE OFFER */}
      <section id="academy" className="relative py-24 bg-card grain border-b border-gold/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Sacred Offerings</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
                What We Offer
              </h2>
              <p className="mt-3 font-serif text-lg text-muted-foreground">
                Comprehensive pathways for spiritual growth, learning, and self-realization.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Spiritual Retreats",
                desc: "Transformative one-day, weekend, and seven-day retreats.",
                icon: Compass,
              },
              {
                title: "Meditation & Healing",
                desc: "Guided meditation, emotional healing, mindfulness, and holistic wellness.",
                icon: Flower2,
              },
              {
                title: "Academy",
                desc: "Courses in Krishna Consciousness, Bhagavad Gita, Yoga, Meditation, and Spiritual Development.",
                icon: BookOpen,
              },
              {
                title: "Workshops",
                desc: "Interactive sessions for self-growth, mindfulness, parenting, youth, and wellness.",
                icon: Users,
              },
              {
                title: "Consultation",
                desc: "Personal guidance for spiritual, emotional, and life transformation.",
                icon: Sparkles,
              },
              {
                title: "Facilitator Training",
                desc: "Become a certified meditation and spiritual wellness facilitator.",
                icon: ShieldCheck,
              },
            ].map((offer, index) => {
              const IconComp = offer.icon;
              return (
                <Reveal key={offer.title} delay={index * 100}>
                  <div className="h-full border border-gold/30 bg-background/90 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-xl flex flex-col justify-between group relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-saffron to-crimson opacity-0 group-hover:opacity-100 transition duration-300" />
                    <div>
                      <div className="h-12 w-12 rounded-none border border-gold/40 bg-muted/60 flex items-center justify-center text-crimson group-hover:bg-crimson group-hover:text-ivory group-hover:scale-110 transition duration-300 mb-6">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-2xl font-normal text-foreground group-hover:text-crimson transition">
                        {offer.title}
                      </h3>
                      <p className="mt-3 font-serif text-base text-muted-foreground leading-relaxed">
                        {offer.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenConsultation(offer.title)}
                      className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-antique font-semibold hover:text-crimson transition cursor-pointer"
                    >
                      <span>Explore Offering</span>
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="relative py-24 bg-shadow text-ivory overflow-hidden">
        <SacredParticles particleCount={25} />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Sanctuary Distinctives</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-light text-ivory sm:text-4xl lg:text-5xl">
                  Why Choose Us
                </h2>
                <p className="mt-4 font-serif text-lg text-ivory/80 leading-relaxed">
                  Discover a nurtured environment designed to elevate your mind, soothe your soul, and anchor your spirit in divine love.
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => handleOpenConsultation()}
                    className="border border-gold bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-shadow hover:bg-gold-light transition shadow-gold cursor-pointer"
                  >
                    Start Your Path Today
                  </button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {[
                  "Rooted in Krishna Consciousness",
                  "Experienced Spiritual Guidance",
                  "Meditation & Healing Programs",
                  "Holistic Personal Development",
                  "Value-Based Learning",
                  "Supportive Spiritual Community",
                  "Peaceful Learning Environment",
                ].map((item, idx) => (
                  <Reveal key={item} delay={idx * 80}>
                    <div
                      onMouseEnter={() => setActiveWhyUsIdx(idx)}
                      className={`flex items-center gap-4 border px-6 py-4 transition-all duration-300 cursor-pointer ${
                        activeWhyUsIdx === idx
                          ? "border-gold bg-shadow/95 shadow-gold translate-x-2"
                          : "border-gold/20 bg-shadow/60 hover:border-gold/50"
                      }`}
                    >
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                          activeWhyUsIdx === idx
                            ? "bg-gold text-shadow border-gold"
                            : "bg-crimson/50 text-gold border-gold/40"
                        }`}
                      >
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="font-serif text-lg text-ivory/90 font-medium">
                        {item}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR CORE PROGRAMS */}
      <section id="programs" className="relative py-24 bg-background grain border-b border-gold/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Featured Offerings</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
                Our Core Programs
              </h2>
              <p className="mt-3 font-serif text-lg text-muted-foreground">
                Deepen your practice with structured programs designed for seekers of all stages.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "7-Day Inner Transformation Retreat",
                desc: "An immersive week of deep sadhana, guided meditation, silent reflection, and divine Krishna Consciousness.",
                tag: "Retreat",
              },
              {
                title: "Weekend Spiritual Retreat",
                desc: "Recharge your spirit over Saturday & Sunday with sacred kirtan, yoga, pranayama, and healing circles.",
                tag: "Weekend",
              },
              {
                title: "Kids Gurukulam",
                desc: "Nurturing young minds with Vedic values, storytelling, mindfulness, Bhagavad Gita slokas, and creative arts.",
                tag: "Youth",
              },
              {
                title: "Healing & Meditation Programs",
                desc: "Emotional release, sound healing, mantra chanting, and restorative energy alignment for deep inner peace.",
                tag: "Wellness",
              },
              {
                title: "Bhagavad Gita Learning",
                desc: "Systematic verse-by-verse study revealing practical life wisdom and devotion for modern daily living.",
                tag: "Academy",
              },
              {
                title: "Yoga & Pranayama",
                desc: "Harmonize body, breath, and spirit through traditional hatha yoga and breath expansion techniques.",
                tag: "Holistic",
              },
            ].map((program, idx) => (
              <Reveal key={program.title} delay={idx * 100}>
                <div className="h-full border border-gold/30 bg-card p-8 flex flex-col justify-between hover:border-gold transition duration-500 shadow-sm hover:shadow-lg group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson bg-crimson/10 px-3 py-1 border border-crimson/20">
                        {program.tag}
                      </span>
                      <Calendar className="h-4 w-4 text-gold-antique group-hover:scale-110 transition" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground font-normal group-hover:text-crimson transition">
                      {program.title}
                    </h3>
                    <p className="mt-3 font-serif text-base text-muted-foreground leading-relaxed">
                      {program.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenConsultation(program.title)}
                    className="mt-8 w-full border border-gold/60 py-3 text-xs uppercase tracking-[0.25em] text-crimson font-semibold hover:bg-crimson hover:text-ivory hover:border-crimson transition duration-300 cursor-pointer"
                  >
                    Enroll / Inquire
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR COMMUNITY */}
      <section className="relative py-24 bg-shadow text-ivory overflow-hidden">
        <SacredParticles particleCount={30} />

        <div className="absolute inset-0 z-0">
          <img src={rasaImg} alt="Community Rasa Leela Celebration" className="h-full w-full object-cover opacity-20 anim-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-shadow via-shadow/90 to-shadow/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Join the Sangha</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-light text-ivory sm:text-5xl">
                Become Part of the Yugala Family
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 space-y-6 font-serif text-xl leading-relaxed text-ivory/90">
                <p>
                  Join a growing community of spiritual seekers committed to inner peace, devotion, learning, and selfless service.
                </p>
                <p>
                  Membership offers access to retreats, meditation sessions, workshops, exclusive learning resources, and community events.
                </p>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => handleOpenConsultation("Community Membership")}
                  className="bg-gold hover:bg-gold-light text-shadow font-semibold px-8 py-4 text-xs uppercase tracking-[0.25em] transition shadow-gold cursor-pointer"
                >
                  Join Community Membership
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. GALLERY (Interactive Lightbox Viewer) */}
      <section id="gallery" className="relative py-24 bg-background grain border-b border-gold/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Sanctuary Moments</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
                Gallery
              </h2>
              <p className="mt-3 font-serif text-lg text-muted-foreground">
                Visual glimpses of devotion, meditation, and sacred spaces at Tapovan. Click any image to view in full screen.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 100}>
                <div
                  onClick={() => setGalleryModalIdx(idx)}
                  className="group relative overflow-hidden rounded-none border border-gold/30 bg-card shadow-sm hover:border-gold transition duration-500 cursor-pointer"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-shadow/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <div className="p-3 rounded-full bg-gold/80 text-shadow border border-gold">
                        <Maximize2 className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-shadow/90 via-shadow/20 to-transparent opacity-80 group-hover:opacity-90 transition duration-300 pointer-events-none" />
                  <div className="absolute bottom-4 left-5 right-5 text-ivory">
                    <div className="font-display text-xl text-gold-light font-medium">{item.title}</div>
                    <div className="font-serif text-xs text-ivory/80 italic">{item.caption}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (Interactive Slider & Carousel) */}
      <section className="relative py-24 bg-card grain border-b border-gold/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Seeker Experiences</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
                Testimonials
              </h2>
              <p className="mt-3 font-serif text-lg text-muted-foreground">
                Heartfelt reflections from participants whose lives were transformed at Tapovan.
              </p>
            </div>
          </Reveal>

          {/* Interactive Testimonial Featured Focus */}
          <div className="mt-14 max-w-3xl mx-auto">
            <Reveal delay={200}>
              <div className="border border-gold/40 bg-background/95 p-8 sm:p-12 shadow-md relative">
                <Quote className="h-10 w-10 text-gold/40 mb-4" />
                <div className="flex items-center gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-serif text-xl sm:text-2xl italic text-foreground leading-relaxed">
                  "{testimonials[activeTestimonialIdx].quote}"
                </p>

                <div className="mt-8 pt-6 border-t border-gold/30 flex items-center justify-between">
                  <div>
                    <div className="font-display text-lg font-semibold text-crimson">
                      {testimonials[activeTestimonialIdx].name}
                    </div>
                    <div className="font-serif text-sm text-muted-foreground">
                      {testimonials[activeTestimonialIdx].role}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setActiveTestimonialIdx(
                          (activeTestimonialIdx - 1 + testimonials.length) % testimonials.length
                        )
                      }
                      className="p-2 border border-gold/40 text-gold hover:bg-gold hover:text-shadow transition cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveTestimonialIdx((activeTestimonialIdx + 1) % testimonials.length)
                      }
                      className="p-2 border border-gold/40 text-gold hover:bg-gold hover:text-shadow transition cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Indicator Dots */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeTestimonialIdx === idx ? "w-8 bg-crimson" : "w-2.5 bg-gold/40 hover:bg-gold"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" className="relative py-24 bg-shadow text-ivory overflow-hidden">
        <SacredParticles particleCount={30} />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <Eyebrow>Connect With Us</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-light text-ivory sm:text-5xl">
                Begin Your Spiritual Journey Today
              </h2>
              <p className="mt-4 font-serif text-xl text-ivory/85">
                Whether you're seeking inner peace, healing, or spiritual growth, we're here to guide you.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal delay={150}>
                <div className="border border-gold/30 bg-shadow/70 p-8 backdrop-blur space-y-6">
                  <h3 className="font-display text-2xl text-gold-light mb-6">Contact Details</h3>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-crimson/30 border border-gold/40 text-gold rounded-none group-hover:bg-crimson group-hover:text-ivory transition duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gold-light/80 font-semibold">Phone</div>
                      <div className="font-serif text-lg text-ivory mt-1">+91 98765 43210 / +91 87654 32109</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-crimson/30 border border-gold/40 text-gold rounded-none group-hover:bg-crimson group-hover:text-ivory transition duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gold-light/80 font-semibold">Email</div>
                      <div className="font-serif text-lg text-ivory mt-1">info@yugalatapovan.org</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-crimson/30 border border-gold/40 text-gold rounded-none group-hover:bg-crimson group-hover:text-ivory transition duration-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gold-light/80 font-semibold">Address</div>
                      <div className="font-serif text-lg text-ivory mt-1">
                        Yugala Radhe Krishna Tapovan Marg, Sacred Vrindavan Sanctuary Valley, India
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gold/20">
                    <div className="text-xs uppercase tracking-wider text-gold-light/80 font-semibold mb-3">
                      Follow Our Sacred Journey
                    </div>
                    <div className="flex items-center gap-4 text-gold">
                      <a href="#" className="p-2.5 border border-gold/30 hover:bg-gold hover:text-shadow transition duration-300" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-2.5 border border-gold/30 hover:bg-gold hover:text-shadow transition duration-300" aria-label="YouTube">
                        <Youtube className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-2.5 border border-gold/30 hover:bg-gold hover:text-shadow transition duration-300" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-2.5 border border-gold/30 hover:bg-gold hover:text-shadow transition duration-300" aria-label="WhatsApp">
                        <MessageCircle className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Google Map & Direct CTA Card */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal delay={250}>
                {/* Interactive Map Embed */}
                <div className="border border-gold/30 overflow-hidden h-[300px] relative shadow-lg">
                  <iframe
                    title="Yugala Tapovan Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14144.595089332152!2d77.69344445!3d27.57962255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736fcb27561f71%3A0xe9fb56f8f5333f28!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "brightness(0.85) contrast(1.1)" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>

              <Reveal delay={350}>
                <div className="border border-gold/40 bg-gradient-to-br from-crimson/40 via-shadow to-shadow p-8 text-center shadow-gold">
                  <h3 className="font-display text-2xl text-ivory mb-2">Book a Consultation / Join a Program</h3>
                  <p className="font-serif text-ivory/80 mb-6">
                    Connect directly with our spiritual guidance facilitators to reserve your seat or ask any questions.
                  </p>
                  <button
                    onClick={() => handleOpenConsultation()}
                    className="w-full bg-gold hover:bg-gold-light text-shadow font-semibold py-4 px-8 text-xs uppercase tracking-[0.25em] transition shadow-gold cursor-pointer"
                  >
                    Book Consultation / Join Program
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/30 bg-shadow/95 text-ivory py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/Logo.jpeg"
                  alt="Yugala Radhe Krishna Tapovan Logo"
                  className="h-12 w-12 rounded-full object-cover border border-gold/60 shadow-gold"
                />
                <div className="font-display text-lg tracking-[0.2em] text-gold-light">
                  YUGALA RADHE KRISHNA TAPOVAN
                </div>
              </div>
              <p className="font-serif text-sm text-ivory/70 max-w-sm leading-relaxed">
                A sacred space dedicated to meditation, healing, Krishna Consciousness, and holistic transformation inspired by the eternal love of Radha and Krishna.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">Quick Links</div>
              <ul className="space-y-2 text-sm font-serif text-ivory/80">
                <li>
                  <a href="#about" className="hover:text-gold transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-gold transition">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#academy" className="hover:text-gold transition">
                    Academy
                  </a>
                </li>
                <li>
                  <a href="#academy" className="hover:text-gold transition">
                    Workshops
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gold transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">Legal & Information</div>
              <ul className="space-y-2 text-sm font-serif text-ivory/80">
                <li>
                  <button
                    onClick={() => setLegalType("privacy")}
                    className="hover:text-gold transition text-left cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalType("terms")}
                    className="hover:text-gold transition text-left cursor-pointer"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalType("refund")}
                    className="hover:text-gold transition text-left cursor-pointer"
                  >
                    Refund Policy
                  </button>
                </li>
              </ul>

              <div className="pt-4 flex items-center gap-4 text-gold">
                <a href="#" aria-label="Instagram" className="hover:text-ivory transition"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="YouTube" className="hover:text-ivory transition"><Youtube className="h-5 w-5" /></a>
                <a href="#" aria-label="Facebook" className="hover:text-ivory transition"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="WhatsApp" className="hover:text-ivory transition"><MessageCircle className="h-5 w-5" /></a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/50 font-serif gap-4">
            <div>
              © {new Date().getFullYear()} Yugala Radhe Krishna Tapovan. All rights reserved.
            </div>
            <div className="text-gold-light/60 italic">
              ॥ Radhe Radhe · Hare Krishna ॥
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultProgram={selectedProgram}
      />
      <LegalDialog type={legalType} onClose={() => setLegalType(null)} />
      <GalleryModal
        items={galleryItems}
        currentIndex={galleryModalIdx}
        onClose={() => setGalleryModalIdx(null)}
        onSelectIndex={(idx) => setGalleryModalIdx(idx)}
      />
    </div>
  );
}
