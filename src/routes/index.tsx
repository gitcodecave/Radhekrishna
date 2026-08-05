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

/* -------- Standardized Reveal on Scroll Component -------- */
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
      { threshold: 0.1 }
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
        transform: shown ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ${delay}ms cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s ${delay}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/* -------- Standardized Section Eyebrow -------- */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-gold-antique font-semibold">
    <span className="h-px w-6 bg-gold/50" />
    <span>{children}</span>
    <span className="h-px w-6 bg-gold/50" />
  </div>
);

const EyebrowLeft = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold-antique font-semibold">
    <span className="h-px w-6 bg-gold/50" />
    <span>{children}</span>
  </div>
);

/* -------- Standardized Sticky Navigation -------- */
function Navigation({ onOpenConsultation }: { onOpenConsultation: (program?: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Offerings", href: "#offerings" },
    { label: "Programs", href: "#programs" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-shadow/95 backdrop-blur-md py-3.5 border-b border-gold/25 shadow-md"
          : "bg-gradient-to-b from-shadow/80 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/Logo.jpeg"
            alt="Yugala Radhe Krishna Tapovan Logo"
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border border-gold/60 transition duration-300 group-hover:border-gold"
          />
          <div className="leading-tight">
            <span className="font-display text-sm tracking-[0.2em] text-gold-light group-hover:text-gold transition font-medium block">
              YUGALA TAPOVAN
            </span>
            <span className="text-[11px] uppercase tracking-wider text-ivory/70 block">
              Radhe Krishna Sanctuary
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-ivory/80 transition duration-200 hover:text-gold font-medium py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => onOpenConsultation()}
            className="rounded-md border border-gold/70 bg-gold/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light transition duration-200 hover:bg-gold hover:text-shadow cursor-pointer"
          >
            Join Our Programs
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gold-light md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-gold/30 bg-shadow/98 px-6 py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-xs uppercase tracking-[0.25em] text-ivory/90 hover:text-gold transition font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-3 w-full rounded-md bg-gold py-3 text-xs uppercase tracking-[0.2em] text-shadow font-bold"
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
    { title: "Ashram Grounds", img: galleryAshram, caption: "Peaceful Ashram Sanctuary Grounds" },
    { title: "Meditation Hall", img: galleryMeditation, caption: "Guided Meditation & Sacred Silence" },
    { title: "Retreat Sanctuary", img: tapovanImg, caption: "Transformative Spiritual Retreats" },
    { title: "Wisdom Circle", img: diyaImg, caption: "Interactive Vedic Learning Workshops" },
    { title: "Krishna Temple Altar", img: galleryTemple, caption: "Divine Radha Krishna Temple Shrine" },
    { title: "Sound Healing", img: galleryHealing, caption: "Holistic Sound & Energy Alignment" },
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
      {/* Non-intrusive Entrance Screen */}
      <LoadingScreen />

      {/* Sticky Navigation */}
      <Navigation onOpenConsultation={handleOpenConsultation} />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex items-center bg-shadow text-ivory pt-28 pb-20 overflow-hidden">
        <SacredParticles />

        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Radha and Krishna sanctuary"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-shadow via-shadow/75 to-shadow/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 w-full py-12">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-shadow/80 px-4 py-1.5 backdrop-blur-md mb-6">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                  Radha Krishna Spiritual Sanctuary
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-4xl font-normal leading-[1.15] text-ivory sm:text-5xl lg:text-6xl tracking-tight">
                Experience Divine Love.
                <br />
                <span className="text-gradient-gold">Awaken Your Inner Self.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 font-sans text-base sm:text-lg leading-relaxed text-ivory/80 max-w-2xl font-light">
                A sanctuary dedicated to meditation, healing, Krishna Consciousness, and holistic transformation inspired by the eternal love of Radha and Krishna.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenConsultation()}
                  className="inline-flex items-center gap-2.5 rounded-md bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-shadow transition duration-200 hover:bg-gold-light cursor-pointer shadow-md"
                >
                  <span>Join Our Programs</span>
                  <ChevronRight className="h-4 w-4" />
                </button>

                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-md border border-ivory/30 bg-shadow/50 backdrop-blur-sm px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ivory transition duration-200 hover:border-gold hover:text-gold-light"
                >
                  <span>Explore Sanctuary</span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-gold/20 pt-6 max-w-xl">
                <div>
                  <div className="font-display text-2xl text-gold-light font-medium">Daily</div>
                  <div className="text-xs text-ivory/70 uppercase tracking-wider mt-0.5">Guided Meditation</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-gold-light font-medium">Holistic</div>
                  <div className="text-xs text-ivory/70 uppercase tracking-wider mt-0.5">Healing & Wisdom</div>
                </div>
                <div className="hidden sm:block">
                  <div className="font-display text-2xl text-gold-light font-medium">Vrindavan</div>
                  <div className="text-xs text-ivory/70 uppercase tracking-wider mt-0.5">Sacred Atmosphere</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-24 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <EyebrowLeft>Spiritual Heritage</EyebrowLeft>
                <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                  About Yugala Radhe Krishna Tapovan
                </h2>
                <h3 className="mt-2 text-lg text-saffron font-medium">
                  A Sacred Space for Inner Transformation
                </h3>
              </Reveal>

              <Reveal delay={150}>
                <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-muted-foreground">
                  <p className="border-l-2 border-gold/60 pl-4 py-1 font-medium text-foreground/90">
                    Yugala Radhe Krishna Tapovan is a spiritual community where seekers experience devotion, meditation, healing, and self-discovery through the timeless wisdom of Radha and Krishna.
                  </p>
                  <p>
                    We believe true transformation begins within. Through guided spiritual practices, holistic wellness, and compassionate guidance, we help individuals cultivate peace, purpose, and divine consciousness.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
                  <div className="p-4 rounded-md bg-card border border-border">
                    <div className="font-display text-2xl text-crimson font-semibold">100%</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Holistic Guidance</div>
                  </div>
                  <div className="p-4 rounded-md bg-card border border-border">
                    <div className="font-display text-2xl text-crimson font-semibold">Timeless</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Vedic Wisdom</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={200}>
                <div className="relative rounded-lg overflow-hidden border border-border shadow-md">
                  <img
                    src={tapovanImg}
                    alt="Tapovan Sanctuary Grounds"
                    className="w-full h-[440px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-shadow/85 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 border-l-2 border-gold pl-4 text-ivory">
                    <p className="font-display text-base font-light italic">"Where every heart awakens to the lotus feet of Radha-Krishna."</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-20 bg-shadow text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Guiding Philosophy</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-4xl">
                Vision & Mission
              </h2>
              <div className="gold-line mt-4 mx-auto w-24" />
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="h-full rounded-lg border border-gold/30 bg-shadow/90 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 bg-crimson/30 border border-gold/40 text-gold rounded-full">
                    <Sun className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl text-gold-light font-medium">Our Vision</h3>
                </div>
                <p className="font-sans text-base leading-relaxed text-ivory/85">
                  "To inspire humanity to live with devotion, compassion, inner peace, and Krishna Consciousness."
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="h-full rounded-lg border border-gold/30 bg-shadow/90 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 bg-crimson/30 border border-gold/40 text-gold rounded-full">
                    <Heart className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl text-gold-light font-medium">Our Mission</h3>
                </div>
                <p className="font-sans text-base leading-relaxed text-ivory/85">
                  "To create a sacred environment where individuals can heal, meditate, learn, serve, and transform through the boundless love of Radha and Krishna."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. OFFERINGS */}
      <section id="offerings" className="py-24 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Sacred Pathways</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                What We Offer
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Comprehensive pathways for spiritual growth, learning, and self-realization.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <Reveal key={offer.title} delay={index * 80}>
                  <div className="h-full rounded-lg border border-border bg-card p-6 flex flex-col justify-between hover:border-gold/60 transition duration-300 shadow-sm">
                    <div>
                      <div className="h-11 w-11 rounded-md border border-gold/30 bg-muted/50 flex items-center justify-center text-crimson mb-5">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-xl font-medium text-foreground">
                        {offer.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {offer.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenConsultation(offer.title)}
                      className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-crimson hover:text-gold-antique transition cursor-pointer"
                    >
                      <span>Explore Offering</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-shadow text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <EyebrowLeft>Sanctuary Distinctives</EyebrowLeft>
                <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-4xl">
                  Why Choose Us
                </h2>
                <p className="mt-4 text-sm sm:text-base text-ivory/80 leading-relaxed">
                  Discover a nurtured environment designed to elevate your mind, soothe your soul, and anchor your spirit in divine love.
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => handleOpenConsultation()}
                    className="rounded-md bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-shadow hover:bg-gold-light transition cursor-pointer"
                  >
                    Start Your Path Today
                  </button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-3">
                {[
                  "Rooted in Krishna Consciousness",
                  "Experienced Spiritual Guidance",
                  "Meditation & Healing Programs",
                  "Holistic Personal Development",
                  "Value-Based Learning",
                  "Supportive Spiritual Community",
                  "Peaceful Learning Environment",
                ].map((item, idx) => (
                  <Reveal key={item} delay={idx * 60}>
                    <div
                      onMouseEnter={() => setActiveWhyUsIdx(idx)}
                      className={`flex items-center gap-3.5 rounded-lg border px-5 py-3.5 transition-all duration-200 cursor-pointer ${
                        activeWhyUsIdx === idx
                          ? "border-gold bg-shadow/95 text-ivory shadow-sm"
                          : "border-gold/20 bg-shadow/60 text-ivory/80 hover:border-gold/40"
                      }`}
                    >
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition ${
                          activeWhyUsIdx === idx ? "bg-gold text-shadow" : "bg-crimson/50 text-gold"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-sans text-sm font-medium">
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

      {/* 6. CORE PROGRAMS */}
      <section id="programs" className="py-24 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Featured Offerings</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                Our Core Programs
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Deepen your practice with structured programs designed for seekers of all stages.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Reveal key={program.title} delay={idx * 80}>
                <div className="h-full rounded-lg border border-border bg-card p-6 flex flex-col justify-between hover:border-gold/60 transition duration-300 shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-crimson bg-crimson/10 px-2.5 py-0.5 rounded border border-crimson/20">
                        {program.tag}
                      </span>
                      <Calendar className="h-4 w-4 text-gold-antique" />
                    </div>
                    <h3 className="font-display text-xl font-medium text-foreground">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {program.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenConsultation(program.title)}
                    className="mt-6 w-full rounded-md border border-gold/50 py-2.5 text-xs font-semibold uppercase tracking-wider text-crimson hover:bg-crimson hover:text-ivory hover:border-crimson transition duration-200 cursor-pointer"
                  >
                    Enroll / Inquire
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY / SANGHA */}
      <section className="py-20 bg-shadow text-ivory relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={rasaImg} alt="Community Celebration" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-shadow/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <Reveal>
              <EyebrowLeft>Join the Sangha</EyebrowLeft>
              <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-4xl">
                Become Part of the Yugala Family
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-4 space-y-3 text-sm sm:text-base text-ivory/85 leading-relaxed">
                <p>
                  Join a growing community of spiritual seekers committed to inner peace, devotion, learning, and selfless service.
                </p>
                <p>
                  Membership offers access to retreats, meditation sessions, workshops, exclusive learning resources, and community events.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-8">
                <button
                  onClick={() => handleOpenConsultation("Community Membership")}
                  className="rounded-md bg-gold px-7 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-shadow hover:bg-gold-light transition cursor-pointer"
                >
                  Join Community Membership
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. GALLERY */}
      <section id="gallery" className="py-24 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Sanctuary Moments</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                Gallery
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Visual glimpses of devotion, meditation, and sacred spaces at Tapovan. Click any image to preview.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 80}>
                <div
                  onClick={() => setGalleryModalIdx(idx)}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm hover:border-gold/60 transition duration-300 cursor-pointer"
                >
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-shadow/40 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                      <div className="p-2.5 rounded-full bg-gold text-shadow">
                        <Maximize2 className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-border">
                    <div className="font-display text-base font-medium text-foreground">{item.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.caption}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Seeker Reflections</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                Testimonials
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Reflections from participants whose lives were transformed at Tapovan.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 max-w-3xl mx-auto">
            <Reveal delay={150}>
              <div className="rounded-xl border border-border bg-background p-8 sm:p-10 shadow-sm relative">
                <Quote className="h-8 w-8 text-gold-antique/30 mb-3" />
                <div className="flex items-center gap-1 text-gold mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-sans text-base sm:text-lg text-foreground leading-relaxed italic">
                  "{testimonials[activeTestimonialIdx].quote}"
                </p>

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-display text-base font-medium text-crimson">
                      {testimonials[activeTestimonialIdx].name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonials[activeTestimonialIdx].role}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setActiveTestimonialIdx(
                          (activeTestimonialIdx - 1 + testimonials.length) % testimonials.length
                        )
                      }
                      className="p-2 rounded-md border border-border text-foreground hover:bg-muted transition cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveTestimonialIdx((activeTestimonialIdx + 1) % testimonials.length)
                      }
                      className="p-2 rounded-md border border-border text-foreground hover:bg-muted transition cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    activeTestimonialIdx === idx ? "w-6 bg-crimson" : "w-2 bg-border hover:bg-gold-antique"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-shadow text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Connect With Us</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-4xl">
                Begin Your Journey Today
              </h2>
              <p className="mt-2 text-sm sm:text-base text-ivory/80">
                Whether you're seeking inner peace, healing, or spiritual growth, we're here to guide you.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={150}>
                <div className="rounded-lg border border-gold/30 bg-shadow/80 p-7 backdrop-blur-sm space-y-5">
                  <h3 className="font-display text-xl text-gold-light font-medium mb-4">Contact Details</h3>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-crimson/30 border border-gold/30 text-gold rounded-md">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-gold-light/80 font-semibold">Phone</div>
                      <div className="text-sm text-ivory mt-0.5">+91 98765 43210 / +91 87654 32109</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-crimson/30 border border-gold/30 text-gold rounded-md">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-gold-light/80 font-semibold">Email</div>
                      <div className="text-sm text-ivory mt-0.5">info@yugalatapovan.org</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-crimson/30 border border-gold/30 text-gold rounded-md">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-gold-light/80 font-semibold">Address</div>
                      <div className="text-sm text-ivory mt-0.5">
                        Yugala Radhe Krishna Tapovan Marg, Sacred Vrindavan Sanctuary Valley, India
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gold/20">
                    <div className="text-[11px] uppercase tracking-wider text-gold-light/80 font-semibold mb-3">
                      Follow Our Sacred Journey
                    </div>
                    <div className="flex items-center gap-3 text-gold">
                      <a href="#" className="p-2 border border-gold/30 rounded-md hover:bg-gold hover:text-shadow transition" aria-label="Instagram">
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a href="#" className="p-2 border border-gold/30 rounded-md hover:bg-gold hover:text-shadow transition" aria-label="YouTube">
                        <Youtube className="h-4 w-4" />
                      </a>
                      <a href="#" className="p-2 border border-gold/30 rounded-md hover:bg-gold hover:text-shadow transition" aria-label="Facebook">
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a href="#" className="p-2 border border-gold/30 rounded-md hover:bg-gold hover:text-shadow transition" aria-label="WhatsApp">
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={200}>
                <div className="rounded-lg border border-gold/30 overflow-hidden h-[260px] relative shadow-md">
                  <iframe
                    title="Yugala Tapovan Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14144.595089332152!2d77.69344445!3d27.57962255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736fcb27561f71%3A0xe9fb56f8f5333f28!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="rounded-lg border border-gold/40 bg-gradient-to-r from-crimson/30 to-shadow/90 p-7 text-center">
                  <h3 className="font-display text-xl text-ivory mb-1 font-medium">Book a Consultation / Join a Program</h3>
                  <p className="text-xs sm:text-sm text-ivory/80 mb-5">
                    Connect directly with our spiritual guidance facilitators to reserve your seat or ask any questions.
                  </p>
                  <button
                    onClick={() => handleOpenConsultation()}
                    className="w-full rounded-md bg-gold hover:bg-gold-light text-shadow font-semibold py-3 px-6 text-xs uppercase tracking-[0.2em] transition cursor-pointer"
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
      <footer className="border-t border-gold/25 bg-shadow text-ivory py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src="/Logo.jpeg"
                  alt="Yugala Radhe Krishna Tapovan Logo"
                  className="h-10 w-10 rounded-full object-cover border border-gold/60"
                />
                <div className="font-display text-base tracking-[0.15em] text-gold-light font-medium">
                  YUGALA RADHE KRISHNA TAPOVAN
                </div>
              </div>
              <p className="text-xs text-ivory/70 max-w-sm leading-relaxed">
                A sacred space dedicated to meditation, healing, Krishna Consciousness, and holistic transformation inspired by the eternal love of Radha and Krishna.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">Quick Links</div>
              <ul className="space-y-1.5 text-xs text-ivory/80">
                <li>
                  <a href="#about" className="hover:text-gold transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#offerings" className="hover:text-gold transition">
                    Offerings
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-gold transition">
                    Core Programs
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gold transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">Legal & Information</div>
              <ul className="space-y-1.5 text-xs text-ivory/80">
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

              <div className="pt-3 flex items-center gap-3 text-gold">
                <a href="#" aria-label="Instagram" className="hover:text-ivory transition"><Instagram className="h-4 w-4" /></a>
                <a href="#" aria-label="YouTube" className="hover:text-ivory transition"><Youtube className="h-4 w-4" /></a>
                <a href="#" aria-label="Facebook" className="hover:text-ivory transition"><Facebook className="h-4 w-4" /></a>
                <a href="#" aria-label="WhatsApp" className="hover:text-ivory transition"><MessageCircle className="h-4 w-4" /></a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/50 gap-3">
            <div>
              © {new Date().getFullYear()} Yugala Radhe Krishna Tapovan. All rights reserved.
            </div>
            <div className="text-gold-light/60 font-medium">
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
