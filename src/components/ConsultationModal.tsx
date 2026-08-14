import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2, Flower2 } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultProgram }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: defaultProgram || "Spiritual Consultation",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleReset()}>
      <DialogContent className="max-w-md border-[#A9691C]/20 bg-[#FFFFFF] text-[#2B1208] shadow-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4B301B] font-medium">
            <Flower2 className="h-4 w-4 text-[#D49D44]" />
            <span>Radhe Krishna Spiritual Sanctuary</span>
          </div>
          <DialogTitle className="font-display text-2xl font-normal text-[#2B1208]">
            {submitted ? "Blessings & Gratitude" : "Book a Consultation / Join a Program"}
          </DialogTitle>
          <DialogDescription className="text-[#4B301B] font-sans text-xs sm:text-sm">
            {submitted
              ? "Your request has been received. Our spiritual guidance team will connect with you shortly."
              : "Begin your journey towards inner peace, devotion, and Krishna Consciousness."}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF8E8] text-[#4B301B] border border-[#D49D44]/40">
              <CheckCircle2 className="h-10 w-10 text-[#4B301B]" />
            </div>
            <h3 className="font-display text-lg text-[#2B1208] mb-2">Hari Om! Submission Successful</h3>
            <p className="text-sm font-sans text-[#4B301B] mb-6">
              Thank you, <span className="text-[#2B1208] font-semibold">{formData.name || "Seeker"}</span>. We look forward to guiding you on the program: <span className="italic text-[#2B1208]">{formData.program}</span>.
            </p>
            <button
              onClick={handleReset}
              className="w-full bg-[#D49D44] hover:bg-[#A9691C] text-[#2B1208] font-bold py-3 px-6 text-xs uppercase tracking-[0.2em] transition duration-300 rounded-md cursor-pointer shadow-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#4B301B] mb-1 font-semibold">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="w-full rounded-md border border-[#A9691C]/20 bg-[#FFFDF8] px-4 py-2.5 text-sm text-[#2B1208] placeholder-[#957C62] focus:border-[#D49D44] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4B301B] mb-1 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full rounded-md border border-[#A9691C]/20 bg-[#FFFDF8] px-4 py-2.5 text-sm text-[#2B1208] placeholder-[#957C62] focus:border-[#D49D44] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4B301B] mb-1 font-semibold">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-md border border-[#A9691C]/20 bg-[#FFFDF8] px-4 py-2.5 text-sm text-[#2B1208] placeholder-[#957C62] focus:border-[#D49D44] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#4B301B] mb-1 font-semibold">
                Select Program or Offering
              </label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full rounded-md border border-[#A9691C]/20 bg-[#FFFDF8] px-4 py-2.5 text-sm text-[#2B1208] focus:border-[#D49D44] focus:outline-none"
              >
                <option value="7-Day Inner Transformation Retreat" className="bg-[#FFFDF8] text-[#2B1208]">7-Day Inner Transformation Retreat</option>
                <option value="Weekend Spiritual Retreat" className="bg-[#FFFDF8] text-[#2B1208]">Weekend Spiritual Retreat</option>
                <option value="Kids Gurukulam" className="bg-[#FFFDF8] text-[#2B1208]">Kids Gurukulam</option>
                <option value="Healing & Meditation Programs" className="bg-[#FFFDF8] text-[#2B1208]">Healing & Meditation Programs</option>
                <option value="Bhagavad Gita Learning" className="bg-[#FFFDF8] text-[#2B1208]">Bhagavad Gita Learning</option>
                <option value="Yoga & Pranayama" className="bg-[#FFFDF8] text-[#2B1208]">Yoga & Pranayama</option>
                <option value="Spiritual Consultation" className="bg-[#FFFDF8] text-[#2B1208]">Personal Spiritual Consultation</option>
                <option value="Facilitator Training" className="bg-[#FFFDF8] text-[#2B1208]">Facilitator Training</option>
                <option value="Community Seva" className="bg-[#FFFDF8] text-[#2B1208]">Join Community Seva</option>
                <option value="Sacred Boutique Inquiry" className="bg-[#FFFDF8] text-[#2B1208]">Spiritual Boutique Item Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#4B301B] mb-1 font-semibold">
                Message / Spiritual Goal
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your intentions or any specific questions..."
                className="w-full rounded-md border border-[#A9691C]/20 bg-[#FFFDF8] px-4 py-2.5 text-sm text-[#2B1208] placeholder-[#957C62] focus:border-[#D49D44] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-[#D49D44] hover:bg-[#A9691C] text-[#2B1208] font-bold py-3.5 px-6 text-xs uppercase tracking-[0.25em] transition duration-300 rounded-md cursor-pointer shadow-sm"
            >
              Submit Booking Request
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

