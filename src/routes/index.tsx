import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import tapovanImg from "@/assets/tapovan.jpg";
import founderImg from "@/assets/founder.jpg";
import diyaImg from "@/assets/diya.jpg";
import fluteImg from "@/assets/flute.jpg";
import rasaImg from "@/assets/rasa.jpg";
import galleryAshram from "@/assets/gallery_ashram_1785922735991.png";
import galleryMeditation from "@/assets/gallery_meditation_1785922755761.png";
import galleryTemple from "@/assets/gallery_krishna_temple_1785922768852.png";
import galleryHealing from "@/assets/gallery_healing_1785922782557.png";
import womenImg from "@/assets/women.jpeg";
import cardMorningMangalaArati from "@/assets/Card/Morning Mangala Arati.jpeg";
import cardBhajansKirtan from "@/assets/Card/Bhajans & Kirtan.jpeg";
import cardBhagavadGita from "@/assets/Card/Bhagavad Gita Wisdom.jpeg";
import cardSpiritualCounselling from "@/assets/Card/Spiritual Counselling.jpeg";
import cardHealingSessions from "@/assets/Card/Healing Sessions.jpeg";
import cardSatsang from "@/assets/Card/Satsang.jpeg";
import cardYoga from "@/assets/Card/Yoga.jpeg";
import cardSattvicBhojan from "@/assets/Card/Sattvic Bhojan.jpeg";
import cardSeva from "@/assets/Card/Seva.jpeg";
import { ConsultationModal } from "@/components/ConsultationModal";
import { LegalDialog } from "@/components/LegalDialog";
import { LoadingScreen } from "@/components/LoadingScreen";
import { SacredParticles } from "@/components/SacredParticles";
import { GalleryModal } from "@/components/GalleryModal";
import {
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
  ShoppingBag,
  Gift,
  Flame,
  HandHeart,
  Crown,
  Clock,
  Home,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: IndexPage,
  head: () => ({
    meta: [
      { title: "Radhe Krishna Tapovan — Spiritual Sanctuary & Devotional Home" },
      {
        name: "description",
        content:
          "Welcome to Radhe Krishna Tapovan. A sacred home where every soul is invited to experience the eternal love of Sri Radhe and Sri Krishna through devotion, meditation, seva, and joyful living.",
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
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ${delay}ms cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s ${delay}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
      className={className}
    >
      {children}
    </Comp>
  );
}/* -------- Section Header (Centered) -------- */
const SectionHeaderCenter = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
    <h2 className="font-display text-3xl sm:text-4xl text-[#7A1717] font-normal tracking-tight">
      {title}
    </h2>
    <div className="gold-line mt-4 mx-auto w-28" />
    {subtitle && (
      <p className="mt-3 text-sm sm:text-base text-[#4B301B] font-sans leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

/* -------- Decorative Gold Lotus Separator -------- */
const SacredDivider = () => (
  <div className="my-16 flex items-center justify-center gap-4 opacity-75">
    <span className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-gold/60" />
    <span className="text-gold text-xs tracking-widest font-serif">❈  ॥  RADHE RADHE  ॥  ❈</span>
    <span className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-gold/60" />
  </div>
);

/* -------- Navigation Bar -------- */
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
    { label: "Experience", href: "#offerings" },
    { label: "Journeys", href: "#programs" },
    { label: "Seva", href: "#seva" },
    { label: "Tridevana", href: "#tridevana" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#FFFDF8]/95 backdrop-blur-md py-3 border-b border-[#A9691C]/20 shadow-sm"
          : "bg-gradient-to-b from-[#FFFDF8]/95 via-[#FFFDF8]/60 to-transparent py-4 sm:py-5"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#hero" className="group flex items-center shrink-0">
          <img
            src="/Logo.jpeg"
            alt="Radhe Krishna Tapovan Logo"
            className={`rounded-2xl object-cover border-none bg-transparent shadow-none group-hover:scale-105 transition-all duration-300 transform shrink-0 ${
              scrolled
                ? "h-20 w-20 sm:h-24 sm:w-24"
                : "h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32"
            }`}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] text-[#4B301B] transition duration-200 hover:text-gold font-medium py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Animated Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative text-[#4B301B] lg:hidden focus:outline-none flex flex-col items-center justify-center gap-1.5 h-9 w-9 border-none bg-transparent shadow-none p-1 transition cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-[#4B301B] rounded-full transition-all duration-300 transform origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
          />
          <span
            className={`h-0.5 w-5 bg-[#4B301B] rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
          />
          <span
            className={`h-0.5 w-5 bg-[#4B301B] rounded-full transition-all duration-300 transform origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#A9691C]/20 bg-[#FFFDF8]/98 px-6 py-6 backdrop-blur-xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-xs uppercase tracking-[0.25em] text-[#4B301B] hover:text-gold transition font-medium border-b border-[#A9691C]/15"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}



/* -------- Main Index Page Component -------- */
export default function IndexPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>();
  const [legalType, setLegalType] = useState<"privacy" | "terms" | "refund" | null>(null);
  const [galleryModalIdx, setGalleryModalIdx] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const galleryItems = [
    { title: "Ashram Sanctuary Grounds", img: galleryAshram, caption: "Peaceful Temple Gardens & Tulsi Groves" },
    { title: "Meditation Hall", img: galleryMeditation, caption: "Guided Meditation & Sacred Inner Silence" },
    { title: "Retreat Sanctuary", img: tapovanImg, caption: "Transformative Spiritual Retreats surrounded by Nature" },
    { title: "Wisdom Circle", img: diyaImg, caption: "Interactive Vedic Learning & Bhagavad Gita Discourses" },
    { title: "Krishna Temple Altar", img: galleryTemple, caption: "Divine Radha Krishna Temple Shrine & Daily Arati" },
    { title: "Sound & Energy Healing", img: galleryHealing, caption: "Holistic Vibration & Energy Realignment" },
  ];

  const handleOpenConsultation = (program?: string) => {
    setSelectedProgram(program);
    setConsultationOpen(true);
  };

  const handleOpenGallery = (index: number) => {
    setGalleryModalIdx(index);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#2B1208] selection:bg-[#D49D44]/30">
      <LoadingScreen />
      <Navigation onOpenConsultation={handleOpenConsultation} />

      {/* 01. HOME (HERO & 5 PILLARS) */}
      <section id="hero" className="relative flex flex-col justify-center bg-[#FFFDF8] text-[#2B1208] pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 overflow-hidden">
        <SacredParticles />

        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Radha Krishna Sanctuary"
            className="h-full w-full object-cover object-center opacity-80 anim-slow-zoom"
          />
          <div className="absolute inset-0 bg-radial from-transparent via-[#FFFDF8]/30 to-[#FFFDF8]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF8] via-[#FFFDF8]/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 w-full py-4 sm:py-6">
          <div className="max-w-3xl">
            <Reveal delay={50}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-gradient-red-luxury tracking-tight">
                Welcome to Radhe Krishna Tapovan
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 font-sans text-base sm:text-lg leading-relaxed text-[#4B301B] max-w-2xl font-light">
                A sacred home where every soul is invited to experience the eternal love of Sri Radha and Sri Krishna through devotion, meditation, seva, and joyful living.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenConsultation("Begin Your Journey")}
                  className="btn-red-luxury inline-flex items-center gap-2.5 rounded-md px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] cursor-pointer"
                >
                  <span>Begin Your Journey</span>
                  <ChevronRight className="h-4 w-4 text-[#FFFDF8]" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE (SHORTFORM) */}
      <section className="py-10 sm:py-14 bg-[#FFFDF8] border-b border-[#A9691C]/20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <Reveal>
                <div className="relative rounded-2xl overflow-hidden border border-[#A9691C]/25 shadow-xl max-w-[280px] sm:max-w-[320px]">
                  <img
                    src={founderImg}
                    alt="Sri Krishna Abhirra portrait"
                    className="w-full h-auto max-h-[420px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF8] via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D49D44] font-semibold block mb-2">
                  Founder's Message
                </span>
                <h2 className="font-display text-2xl sm:text-3xl text-[#7A1717] font-normal">
                  A Message from Sri Krishna Abhirra
                </h2>
                <div className="gold-line mt-3 w-24 mb-5" />
                <blockquote className="space-y-3 font-sans text-base text-[#4B301B] leading-relaxed italic border-l-2 border-[#D49D44] pl-4">
                  <p className="font-medium text-[#2B1208] not-italic">
                    "My life is an offering at the lotus feet of Sri Radha and Sri Krishna."
                  </p>
                  <p>
                    "Through Radhe Krishna Tapovan, my prayer is to create a place where every soul can experience divine love, every woman can rediscover her strength and dignity, and every visitor can feel the living presence of Krishna in daily life."
                  </p>
                </blockquote>
                <div className="mt-4 font-display text-base text-[#2B1208] font-medium">
                  — Sri Krishna Abhirra, <span className="text-sm text-[#4B301B] font-normal font-sans">Founder</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02. OUR TAPOVAN */}
      <section id="about" className="py-16 sm:py-20 bg-[#FFF8E8] border-b border-[#A9691C]/20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="font-display text-3xl sm:text-4xl text-[#2B1208] font-normal">
                  Our Tapovan
                </h2>
                <div className="gold-line mt-3 w-28 mb-6" />
              </Reveal>

              <Reveal delay={150}>
                <div className="space-y-4 font-sans text-base leading-relaxed text-[#4B301B]">
                  <p className="border-l-2 border-[#D49D44] pl-4 py-1 font-medium text-[#2B1208]">
                    Radhe Krishna Tapovan is a spiritual sanctuary inspired by the eternal love of Sri Radha and Sri Krishna.
                  </p>
                  <p>
                    Here, devotion is not simply practised—it is experienced. Every prayer, every song, every smile, and every act of service becomes an offering of love.
                  </p>
                  <p>
                    Our purpose is to help every visitor discover peace, compassion, inner joy, and Krishna Consciousness while living a meaningful and loving life.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="mt-8">
                  <a
                    href="#seva"
                    className="inline-block rounded-md border border-[#D49D44] bg-[#FFFFFF] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#4B301B] hover:bg-[#FFF8E8] transition cursor-pointer shadow-sm"
                  >
                    Read More
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={200}>
                <div className="relative rounded-xl overflow-hidden border border-[#A9691C]/25 shadow-xl group">
                  <img
                    src={tapovanImg}
                    alt="Tapovan Sanctuary Grounds"
                    className="w-full h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8E8] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#D49D44] pl-4 text-[#2B1208]">
                    <p className="font-display text-base font-light italic text-[#2B1208]">
                      "Every act of service becomes an offering of love."
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03. EXPERIENCE THE TAPOVAN */}
      <section id="offerings" className="py-16 sm:py-20 bg-[#FFF8E8] border-b border-[#A9691C]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeaderCenter
            title="Experience the Tapovan"
            subtitle="Every day at the Tapovan is an invitation to slow down, reconnect, and experience devotion."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Morning Mangala Arati", desc: "Begin the day in prayer and divine remembrance.", img: cardMorningMangalaArati },
              { title: "Guided Meditation", desc: "Discover stillness, awareness, and inner peace.", img: galleryMeditation },
              { title: "Bhajans & Kirtan", desc: "Experience devotion through sacred music and joyful singing.", img: cardBhajansKirtan },
              { title: "Bhagavad Gita Wisdom", desc: "Explore timeless wisdom for meaningful everyday living.", img: cardBhagavadGita },
              { title: "Spiritual Counselling", desc: "Find a compassionate space for reflection, guidance, and inner growth.", img: cardSpiritualCounselling },
              { title: "Healing Sessions", desc: "Experience peaceful practices that nurture body, mind, and spirit.", img: cardHealingSessions },
              { title: "Satsang", desc: "Come together in the company of seekers, devotees, and spiritual wisdom.", img: cardSatsang },
              { title: "Yoga", desc: "Bring harmony to body, breath, mind, and consciousness.", img: cardYoga },
              { title: "Sattvic Bhojan", desc: "Share simple, nourishing vegetarian food prepared with love.", img: cardSattvicBhojan },
              { title: "Seva", desc: "Transform everyday service into an offering of devotion.", img: cardSeva },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 50}>
                <div className="group relative h-64 rounded-xl overflow-hidden border border-[#A9691C]/20 bg-[#FFFFFF] shadow-sm flex flex-col justify-end p-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1208] via-[#2B1208]/60 to-transparent" />

                  <div className="relative z-10">
                    <h3 className="font-display text-xl text-ivory font-medium group-hover:text-gold transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-ivory/90 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => handleOpenConsultation("Experience a Day at the Tapovan")}
              className="rounded-md bg-[#D49D44] hover:bg-[#A9691C] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#2B1208] transition cursor-pointer shadow-sm"
            >
              Experience a Day at the Tapovan
            </button>
          </div>
        </div>
      </section>



      {/* 07. SPIRITUAL JOURNEYS */}
      <section id="programs" className="py-16 sm:py-20 bg-[#FFFDF8] border-b border-[#A9691C]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeaderCenter
            title="Spiritual Journeys"
            subtitle="Come for a day, stay for a while, or walk deeper into your spiritual journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "One Day with Krishna",
                desc: "A peaceful day of prayer, meditation, satsang, seva, and joyful living.",
              },
              {
                title: "Weekend in Vrindavan",
                desc: "Step away from everyday life and reconnect with devotion, nature, and inner peace.",
              },
              {
                title: "Children's Gurukulam",
                desc: "A joyful environment where children discover values, wisdom, culture, and devotion.",
              },
              {
                title: "Family Retreat",
                desc: "Experience prayer, connection, learning, and togetherness as a family.",
              },
              {
                title: "Full Moon Meditation",
                desc: "Gather beneath the full moon for an evening of meditation, silence, and spiritual reflection.",
              },
              {
                title: "Bhagavad Gita Journey",
                desc: "Explore timeless wisdom and discover its meaning in everyday life.",
              },
            ].map((journey, idx) => (
              <Reveal key={journey.title} delay={idx * 60}>
                <div className="h-full rounded-xl border border-[#A9691C]/20 bg-[#FFFFFF] p-6 hover:border-[#D49D44] transition duration-300 flex flex-col justify-between shadow-sm group">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#A9691C] font-bold block mb-2">
                      Spiritual Journey
                    </span>
                    <h3 className="font-display text-xl text-[#2B1208] font-medium group-hover:text-[#D49D44] transition">
                      {journey.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#4B301B] leading-relaxed font-sans">
                      {journey.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenConsultation(journey.title)}
                    className="mt-6 w-full rounded border border-[#D49D44] bg-[#FFF8E8] py-2.5 text-xs font-semibold uppercase tracking-wider text-[#4B301B] hover:bg-[#D49D44] hover:text-[#2B1208] transition duration-300 cursor-pointer"
                  >
                    Inquire Journey
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08. CELEBRATIONS */}
      <section id="celebrations" className="py-16 sm:py-20 bg-[#FFF8E8] border-b border-[#A9691C]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeaderCenter
            title="Celebrations"
            subtitle="Where devotion becomes music, colour, celebration, and togetherness."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Janmashtami", desc: "Celebrate the divine appearance of Sri Krishna with devotion and joy." },
              { title: "Radhashtami", desc: "Honour the divine love and grace of Sri Radha." },
              { title: "Holi", desc: "Celebrate the festival of colours with devotion, music, joy, and togetherness." },
              { title: "Guru Purnima", desc: "Express gratitude and reverence towards the Guru and the path of wisdom." },
              { title: "Pournami", desc: "Gather under the fullness of the moon for prayer, meditation, and spiritual reflection." },
              { title: "Kirtan Evenings", desc: "Come together through sacred music, chanting, and joyful devotion." },
              { title: "Rasa Celebration", desc: "Celebrate the timeless divine love of Radha and Krishna." },
              { title: "Bhajan Festivals", desc: "Experience devotion through sacred songs and collective prayer." },
              { title: "Seva & Community Events", desc: "Come together to serve, celebrate, and strengthen the spirit of community." },
            ].map((fest, idx) => (
              <Reveal key={fest.title} delay={idx * 50}>
                <div className="h-full rounded-xl border border-[#A9691C]/20 bg-[#FFFFFF] p-5 hover:border-[#D49D44] transition duration-300 flex flex-col justify-between group shadow-sm">
                  <div>
                    <h3 className="font-display text-lg text-[#2B1208] font-medium group-hover:text-[#D49D44] transition">
                      {fest.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#4B301B] leading-relaxed font-sans">
                      {fest.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenConsultation(`Celebration: ${fest.title}`)}
                    className="mt-4 text-xs uppercase tracking-wider text-[#4B301B] hover:text-[#D49D44] font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Participate</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WOMAN SHAKTI */}
      <section id="women-empowerment" className="py-16 sm:py-20 bg-[#FFF8E8] border-b border-[#A9691C]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D49D44] font-semibold block mb-2">
                  The Vision of Sri Krishna Abhirra
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#7A1717] font-normal tracking-tight">
                  WOMAN SHAKTI
                </h2>
                <div className="gold-line mt-3 w-28 mb-6" />
              </Reveal>

              <Reveal delay={150}>
                <div className="space-y-4 text-sm sm:text-base text-[#4B301B] leading-relaxed font-sans">
                  <p>
                    At Radhe Krishna Tapovan, Woman Shakti is an essential expression of Sri Krishna Abhirra’s vision — creating a sacred space where women can feel safe, respected, nurtured and empowered to begin again. Inspired by the love and strength of Radha and the consciousness of Krishna, the Tapovan envisions a compassionate community where women — including widows, single mothers, elderly women, women without family support, and those seeking a fresh beginning — can find dignified accommodation, meaningful work, education, skill development, spiritual guidance, healing and self-reliance. True empowerment is not simply giving a woman shelter; it is helping her rediscover her strength, dignity, purpose and freedom.
                  </p>

                  <div className="p-5 my-4 rounded-xl border border-[#D49D44]/40 bg-[#FFFFFF] shadow-sm">
                    <p className="font-display text-base text-[#7A1717] font-medium leading-loose italic whitespace-pre-line">
                      “I am safe here.
                      I am respected here.
                      I can heal here.
                      I can learn here.
                      I can work here.
                      I can grow here.
                      I can serve here.
                      I can discover who I truly am here.”
                    </p>
                  </div>

                  <p>
                    The dream of Sri Krishna Abhirra is to create a living spiritual community where Krishna Consciousness and social responsibility come together — where a woman’s emotional sensitivity becomes strength, her experiences become wisdom, and her life becomes an expression of Shakti and Seva. When a woman rises, a family rises; when families rise, society transforms. Radhe Krishna Tapovan aspires to become a place where every woman can find a safe beginning, a meaningful life and the freedom to become her fullest self.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="mt-8">
                  <button
                    onClick={() => handleOpenConsultation("Woman Shakti")}
                    className="rounded-md bg-[#D49D44] hover:bg-[#A9691C] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#2B1208] transition cursor-pointer shadow-sm"
                  >
                    Discover Woman Shakti
                  </button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="relative rounded-2xl overflow-hidden border border-[#A9691C]/25 shadow-2xl">
                  <img
                    src={womenImg}
                    alt="Woman Shakti - Radhe Krishna Tapovan"
                    className="w-full h-auto max-h-[560px] object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8E8]/40 via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 09. RADHE KRISHNA SPIRITUAL STORE */}
      <section id="store" className="py-16 sm:py-20 bg-[#FFFDF8] border-b border-[#A9691C]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeaderCenter
            title="Radhe Krishna Spiritual Store"
            subtitle="Sacred and meaningful offerings to carry a little of the Tapovan home with you."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Tulsi Malas", desc: "Sacred malas traditionally associated with devotion and remembrance.", icon: ShoppingBag },
              { title: "Rudraksha", desc: "Sacred beads cherished as part of spiritual practice and meditation.", icon: Flame },
              { title: "Radha Krishna", desc: "Beautiful devotional representations of Sri Radha and Sri Krishna.", icon: Crown },
              { title: "Spiritual Books", desc: "Books and wisdom to support reflection, learning, and spiritual growth.", icon: BookOpen },
              { title: "Incense", desc: "Fragrant offerings to create a peaceful and devotional atmosphere.", icon: Flower2 },
              { title: "Essential Oils", desc: "Natural fragrances for moments of relaxation, meditation, and inner stillness.", icon: Flower2 },
              { title: "Meditation Kits", desc: "Thoughtfully selected essentials to support your personal practice.", icon: Gift },
              { title: "Natural Healing Products", desc: "Natural offerings inspired by holistic and mindful living.", icon: Heart },
              { title: "Handmade Devotional Gifts", desc: "Meaningful handcrafted items created with love and devotion.", icon: HandHeart },
            ].map((prod, idx) => {
              const IconComp = prod.icon;
              return (
                <Reveal key={prod.title} delay={idx * 60}>
                  <div className="h-full rounded-xl border border-[#A9691C]/20 bg-[#FFFFFF] p-6 hover:border-[#D49D44] transition duration-300 flex flex-col justify-between group shadow-sm">
                    <div>
                      <div className="h-10 w-10 rounded-lg border border-[#D49D44]/30 bg-[#FFF8E8] flex items-center justify-center text-[#4B301B] mb-4 group-hover:bg-[#D49D44] group-hover:text-[#2B1208] transition duration-300">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-xl text-[#2B1208] font-medium group-hover:text-[#D49D44] transition">
                        {prod.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#4B301B] leading-relaxed font-sans">
                        {prod.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenConsultation(`Store Item: ${prod.title}`)}
                      className="mt-6 w-full rounded border border-[#D49D44] bg-[#FFF8E8] py-2.5 text-xs font-semibold uppercase tracking-wider text-[#4B301B] hover:bg-[#D49D44] hover:text-[#2B1208] transition duration-300 cursor-pointer"
                    >
                      Visit Store
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. SEVA */}
      <section id="seva" className="py-16 sm:py-20 bg-[#FFF8E8] border-b border-[#A9691C]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeaderCenter
            title="Seva"
            subtitle="Service becomes sacred when it is offered with love."
          />

          <Reveal delay={100}>
            <p className="text-center max-w-2xl mx-auto text-base text-[#4B301B] leading-relaxed font-sans mb-12 italic">
              "Every act of seva, whether small or great, can become an offering at the lotus feet of Sri Radha and Sri Krishna."
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Annadanam", desc: "Share nourishing food and the warmth of compassion." },
              { title: "Supporting Children", desc: "Help create opportunities for children to learn, grow, and flourish." },
              { title: "Women's Empowerment", desc: "Support spaces that nurture dignity, confidence, education, and independence." },
              { title: "Tree Planting", desc: "Serve nature by planting and caring for trees." },
              { title: "Temple Seva", desc: "Contribute your time and effort to the care of sacred spaces." },
              { title: "Volunteer Opportunities", desc: "Offer your skills, time, and presence to the Tapovan community." },
              { title: "Supporting Retreats", desc: "Help create peaceful spaces for spiritual journeys and retreats." },
              { title: "Education", desc: "Support learning, wisdom, values, and meaningful growth." },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 50}>
                <div className="p-5 rounded-xl border border-[#A9691C]/20 bg-[#FFFFFF] h-full hover:border-[#D49D44] transition duration-300 flex flex-col justify-between shadow-sm">
                  <div>
                    <h3 className="font-display text-lg text-[#2B1208] font-medium">{s.title}</h3>
                    <p className="text-xs text-[#4B301B] mt-1.5 leading-relaxed font-sans">{s.desc}</p>
                  </div>
                  <div className="gold-line mt-4 w-full" />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => handleOpenConsultation("Join Seva")}
              className="rounded-md bg-[#D49D44] hover:bg-[#A9691C] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#2B1208] transition cursor-pointer shadow-sm"
            >
              Join Seva
            </button>
          </div>
        </div>
      </section>

      {/* 11. FOUNDER'S MESSAGE */}
      <section className="py-16 sm:py-20 bg-[#FFFDF8] border-b border-[#A9691C]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative rounded-xl overflow-hidden border border-[#A9691C]/20 shadow-xl">
                  <img
                    src={founderImg}
                    alt="Sri Krishna Abhirra portrait"
                    className="w-full h-auto max-h-[460px] object-cover object-top rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF8] via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-3xl sm:text-4xl text-[#7A1717] font-normal">
                  Founder's Message
                </h2>
                <h3 className="mt-1 text-lg font-display text-[#7A1717] font-medium">
                  A Message from Sri Krishna Abhirra
                </h3>
                <div className="gold-line mt-3 w-32 mb-6" />
              </Reveal>

              <Reveal delay={150}>
                <div className="space-y-4 font-sans text-base text-[#4B301B] leading-relaxed italic">
                  <Quote className="h-8 w-8 text-[#D49D44]/60 mb-2" />
                  <p className="font-semibold text-[#2B1208]">
                    "My life is an offering at the lotus feet of Sri Radha and Sri Krishna."
                  </p>
                  <p>
                    "Through Radhe Krishna Tapovan, my prayer is to create a place where every soul can experience divine love, every woman can rediscover her strength and dignity, every child can grow with values and wisdom, and every visitor can feel the living presence of Krishna in daily life."
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#A9691C]/20 font-display text-lg text-[#2B1208] font-medium">
                  — Sri Krishna Abhirra
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CONTACT */}
      <section id="contact" className="py-16 sm:py-20 bg-[#FFF8E8] border-b border-[#A9691C]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={tapovanImg} alt="Tapovan Entrance" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8E8] via-[#FFF8E8]/80 to-[#FFF8E8]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeaderCenter
            title="Contact"
            subtitle="Connect with Radhe Krishna Tapovan for visits, guidance, seva, and inquiries."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {/* Phone */}
            <Reveal delay={50}>
              <div className="p-8 rounded-2xl border border-[#A9691C]/20 bg-[#FFFFFF] shadow-sm h-full flex flex-col justify-between hover:border-[#D49D44] transition duration-300">
                <div>
                  <div className="p-3 bg-[#FFF8E8] border border-[#D49D44]/30 text-[#4B301B] rounded-xl w-fit mb-4">
                    <Phone className="h-6 w-6 text-[#7A1717]" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D49D44] font-semibold block mb-1">
                    Phone
                  </span>
                  <h3 className="font-display text-xl text-[#2B1208] font-medium mb-3">
                    Call Us
                  </h3>
                  <div className="space-y-2 font-sans text-sm text-[#4B301B]">
                    <div>
                      <a href="tel:9995969529" className="font-semibold text-base text-[#7A1717] hover:text-gold transition block">
                        9995969529
                      </a>
                    </div>
                    <div>
                      <a href="tel:9995859292" className="font-semibold text-base text-[#7A1717] hover:text-gold transition block">
                        9995859292
                      </a>
                    </div>
                  </div>
                </div>
                <div className="gold-line mt-6 w-full" />
              </div>
            </Reveal>

            {/* Mail id */}
            <Reveal delay={100}>
              <div className="p-8 rounded-2xl border border-[#A9691C]/20 bg-[#FFFFFF] shadow-sm h-full flex flex-col justify-between hover:border-[#D49D44] transition duration-300">
                <div>
                  <div className="p-3 bg-[#FFF8E8] border border-[#D49D44]/30 text-[#4B301B] rounded-xl w-fit mb-4">
                    <Mail className="h-6 w-6 text-[#7A1717]" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D49D44] font-semibold block mb-1">
                    Mail ID
                  </span>
                  <h3 className="font-display text-xl text-[#2B1208] font-medium mb-3">
                    Email
                  </h3>
                  <p className="font-sans text-sm text-[#4B301B] mb-3 leading-relaxed">
                    Reach out to us via email for general inquiries, guidance, and programs.
                  </p>
                  <a
                    href="mailto:contact@radhekrishnatapovan.org"
                    className="font-medium text-sm text-[#7A1717] hover:text-gold transition break-all block"
                  >
                    contact@radhekrishnatapovan.org
                  </a>
                </div>
                <div className="gold-line mt-6 w-full" />
              </div>
            </Reveal>

            {/* Address */}
            <Reveal delay={150}>
              <div className="p-8 rounded-2xl border border-[#A9691C]/20 bg-[#FFFFFF] shadow-sm h-full flex flex-col justify-between hover:border-[#D49D44] transition duration-300">
                <div>
                  <div className="p-3 bg-[#FFF8E8] border border-[#D49D44]/30 text-[#4B301B] rounded-xl w-fit mb-4">
                    <MapPin className="h-6 w-6 text-[#7A1717]" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D49D44] font-semibold block mb-1">
                    Address
                  </span>
                  <h3 className="font-display text-xl text-[#2B1208] font-medium mb-3">
                    Radhe Krishna Tapovan
                  </h3>
                  <div className="font-sans text-sm text-[#4B301B] leading-relaxed space-y-0.5">
                    <p className="font-medium text-[#2B1208]">Door no : 444</p>
                    <p>A4 - Bulding</p>
                    <p>Aristo road</p>
                    <p>Chembukkavu</p>
                    <p>Thrissur</p>
                    <p className="text-xs font-semibold text-[#7A1717] pt-1">680005</p>
                  </div>
                </div>
                <div className="gold-line mt-6 w-full" />
              </div>
            </Reveal>
          </div>

          <div className="text-center">
            <button
              onClick={() => handleOpenConsultation("Contact Inquiries")}
              className="rounded-md bg-[#D49D44] hover:bg-[#A9691C] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#2B1208] transition cursor-pointer shadow-sm"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* 13. OUR NEXT DIVINE PROJECT (TRIDEVANA) */}
      <section id="tridevana" className="py-16 sm:py-20 bg-[#2B1208] text-[#FFF8E8] border-b border-[#D49D44]/30 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#EEC87B] font-bold block mb-2">
                OUR NEXT DIVINE PROJECT
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#FFF8E8] font-normal tracking-tight">
                Tridevana – A Sacred Temple & Yogashram
              </h2>
              <p className="text-lg font-display text-[#EEC87B] mt-1">
                A Vision for the Future
              </p>
              <div className="gold-line mt-4 mx-auto w-32" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-3xl mx-auto space-y-4 text-base text-[#FFF8E8]/90 leading-relaxed font-sans text-center mb-14">
              <p>
                Inspired by the divine love and teachings of Sri Radha and Sri Krishna, our next sacred project, Tridevana Temple & Yogashram, is envisioned as a spiritual destination where ancient wisdom meets conscious living.
              </p>
              <p>
                Tridevana will be a divine space dedicated to devotion, meditation, yoga, spiritual learning, healing, and self-realization—a place where seekers can experience inner peace, divine connection, and the timeless beauty of Indian spiritual traditions.
              </p>
              <p>
                Through sacred architecture, peaceful gardens, meditation spaces, cultural activities, and spiritual gatherings, Tridevana aims to create an atmosphere where every visitor can reconnect with the Divine and discover harmony within themselves.
              </p>
            </div>
          </Reveal>

          {/* Vision of Tridevana */}
          <Reveal delay={150}>
            <div className="p-8 rounded-2xl border border-[#D49D44]/40 bg-[#5A1F16]/70 max-w-3xl mx-auto mb-14 text-center shadow-2xl">
              <h3 className="font-display text-xl text-[#EEC87B] font-medium mb-3">
                The Vision of Tridevana
              </h3>
              <p className="text-sm text-[#FFF8E8]/80 mb-4 font-sans italic">
                To create a living spiritual ecosystem where:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#FFF8E8]/90 font-sans text-left">
                <div className="flex items-center gap-2 p-2 rounded bg-[#2B1208] border border-[#D49D44]/30">
                  <Flower2 className="h-4 w-4 text-[#EEC87B] shrink-0" />
                  <span>Devotion becomes an experience</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#2B1208] border border-[#D49D44]/30">
                  <Flower2 className="h-4 w-4 text-[#EEC87B] shrink-0" />
                  <span>Meditation becomes a way of life</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#2B1208] border border-[#D49D44]/30">
                  <Flower2 className="h-4 w-4 text-[#EEC87B] shrink-0" />
                  <span>Wisdom becomes practical living</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#2B1208] border border-[#D49D44]/30">
                  <Flower2 className="h-4 w-4 text-[#EEC87B] shrink-0" />
                  <span>Nature becomes a place of healing</span>
                </div>
                <div className="flex items-center gap-2 p-2 sm:col-span-2 justify-center rounded bg-[#2B1208] border border-[#D49D44]/30">
                  <Flower2 className="h-4 w-4 text-[#EEC87B] shrink-0" />
                  <span>Community becomes a family of love and compassion</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Tridevana Will Include (10 items) */}
          <Reveal delay={200}>
            <div className="mb-14">
              <h3 className="font-display text-2xl text-center text-[#FFF8E8] font-normal mb-8">
                Tridevana Will Include
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { title: "Sacred Temple Spaces", desc: "Spaces dedicated to prayer, devotion, and divine remembrance." },
                  { title: "Meditation & Yoga Halls", desc: "Peaceful environments for meditation, yoga, breathwork, and inner stillness." },
                  { title: "Spiritual Learning Centre", desc: "A place to explore spiritual wisdom, philosophy, culture, and conscious living." },
                  { title: "Bhagavad Gita & Vedic Wisdom Programs", desc: "Discover timeless teachings and their relevance to everyday life." },
                  { title: "Retreat Facilities", desc: "Spaces designed for deeper reflection, spiritual journeys, and transformative retreats." },
                  { title: "Nature Gardens & Sacred Groves", desc: "Peaceful natural spaces for walking, contemplation, meditation, and connection with nature." },
                  { title: "Sattvic Food & Community Dining", desc: "Simple, nourishing food shared in the spirit of gratitude and togetherness." },
                  { title: "Cultural Celebrations", desc: "Spaces for festivals, music, traditional arts, devotional gatherings, and cultural expression." },
                  { title: "Healing & Wellness Experiences", desc: "Holistic experiences that encourage balance, awareness, and inner wellbeing." },
                  { title: "Spaces for Seva and Gatherings", desc: "Open spaces where people can come together in service, devotion, learning, and community." },
                ].map((feat) => (
                  <div key={feat.title} className="p-4 rounded-xl border border-[#D49D44]/30 bg-[#5A1F16]/60 hover:border-[#EEC87B] transition duration-300 flex flex-col justify-between shadow-md">
                    <div>
                      <Flower2 className="h-4 w-4 text-[#EEC87B] mb-2" />
                      <h4 className="font-display text-sm text-[#EEC87B] font-medium">{feat.title}</h4>
                      <p className="text-xs text-[#FFF8E8]/85 mt-1 leading-relaxed font-sans">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Epilogue Banner */}
          <Reveal delay={250}>
            <div className="p-8 rounded-2xl border border-[#D49D44]/50 bg-gradient-to-r from-[#5A1F16] via-[#2B1208] to-[#5A1F16] text-center max-w-3xl mx-auto shadow-2xl space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#EEC87B] font-bold block">
                A Divine Abode in the Making
              </span>
              <p className="text-base text-[#FFF8E8]/90 font-sans italic">
                "From the love of Radha and Krishna, a vision is born—to create sacred spaces where every soul can experience devotion, peace, wisdom, and the presence of the Divine."
              </p>
              <div className="pt-2 font-display text-2xl text-[#EEC87B] font-medium">
                Coming Soon – Tridevana Temple & Yogashram
              </div>
              <p className="text-xs text-[#EEC87B]/75 uppercase tracking-widest font-sans">
                A journey from devotion to realization, from knowledge to experience, from seeking to becoming.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => handleOpenConsultation("Tridevana Project Inquiry")}
                  className="rounded-md bg-gradient-to-r from-[#EEC87B] to-[#D49D44] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2B1208] hover:brightness-105 transition cursor-pointer shadow-md"
                >
                  Inquire & Support Tridevana
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#D49D44]/30 bg-[#2B1208] text-[#FFF8E8] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Left: Newsletter */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/Logo.jpeg"
                  alt="Radhe Krishna Tapovan Logo"
                  className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover border-none bg-transparent shadow-none shrink-0"
                />
                <div className="font-display text-base tracking-[0.15em] text-[#EEC87B] font-medium">
                  RADHE KRISHNA TAPOVAN
                </div>
              </div>

              <p className="text-xs text-[#EEC87B] italic">
                "Live in devotion. Serve with love. Awaken the soul."
              </p>

              <div className="pt-2 text-xs text-[#FFF8E8]/80 font-sans space-y-1">
                <p className="text-gold font-medium">Radhe Krishna Tapovan</p>
                <p>Door no : 444, A4 - Bulding, Aristo road</p>
                <p>Chembukkavu, Thrissur 680005</p>
                <p className="pt-1">
                  <span className="text-gold font-medium">Ph: </span>
                  <a href="tel:9995969529" className="hover:text-gold transition font-medium">9995969529</a>,{" "}
                  <a href="tel:9995859292" className="hover:text-gold transition font-medium">9995859292</a>
                </p>
              </div>

              <div className="pt-2">
                <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-2">
                  Stay Connected
                </div>
                <p className="text-xs text-[#FFF8E8]/70 leading-relaxed mb-3">
                  Receive spiritual updates, event information, inspiration, and retreat news from the Tapovan.
                </p>
                {subscribed ? (
                  <div className="p-3 rounded border border-gold/50 bg-gold/15 text-xs text-[#EEC87B] font-semibold">
                    Hari Om! Thank you for subscribing to our sacred updates.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Your email address"
                      className="rounded-md border border-[#D49D44]/40 bg-[#5A1F16] px-3.5 py-2 text-xs text-[#FFF8E8] placeholder-[#FFF8E8]/50 focus:border-gold focus:outline-none w-full"
                    />
                    <button
                      type="submit"
                      className="rounded-md bg-gold px-4 py-2 text-xs uppercase font-bold tracking-wider text-[#2B1208] hover:bg-[#EEC87B] transition cursor-pointer shrink-0"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">Quick Links</div>
              <ul className="space-y-2 text-xs text-[#FFF8E8]/85 font-sans">
                <li><a href="#hero" className="hover:text-gold transition">Home</a></li>
                <li><a href="#about" className="hover:text-gold transition">Our Tapovan</a></li>
                <li><a href="#offerings" className="hover:text-gold transition">Experience</a></li>
                <li><a href="#programs" className="hover:text-gold transition">Spiritual Journeys</a></li>
                <li><a href="#celebrations" className="hover:text-gold transition">Celebrations</a></li>
                <li><a href="#seva" className="hover:text-gold transition">Seva</a></li>
                <li><a href="#store" className="hover:text-gold transition">Store</a></li>
                <li><a href="#life" className="hover:text-gold transition">Gallery</a></li>
                <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
              </ul>
            </div>

            {/* Legal Links & Social */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">Legal & Information</div>
              <ul className="space-y-2 text-xs text-[#FFF8E8]/85 font-sans">
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
                    Refund & Cancellation Policy
                  </button>
                </li>
              </ul>

              <div className="pt-4 flex items-center gap-3 text-gold">
                <a href="#" aria-label="Instagram" className="p-2 border border-gold/30 rounded hover:bg-gold hover:text-[#2B1208] transition"><Instagram className="h-4 w-4" /></a>
                <a href="#" aria-label="YouTube" className="p-2 border border-gold/30 rounded hover:bg-gold hover:text-[#2B1208] transition"><Youtube className="h-4 w-4" /></a>
                <a href="#" aria-label="Facebook" className="p-2 border border-gold/30 rounded hover:bg-gold hover:text-[#2B1208] transition"><Facebook className="h-4 w-4" /></a>
                <a href="#" aria-label="WhatsApp" className="p-2 border border-gold/30 rounded hover:bg-gold hover:text-[#2B1208] transition"><MessageCircle className="h-4 w-4" /></a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-[#D49D44]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF8E8]/60 gap-3">
            <div>
              © 2025 Radhe Krishna Tapovan. All Rights Reserved.
            </div>
            <div className="text-[#EEC87B] font-medium tracking-widest font-serif">
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
