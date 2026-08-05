import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2, Sparkles } from "lucide-react";

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
      <DialogContent className="max-w-md border-gold/40 bg-shadow text-ivory backdrop-blur-xl">
        <DialogHeader>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
            <Sparkles className="h-4 w-4 text-gold" />
            <span>Yugala Spiritual Sanctuary</span>
          </div>
          <DialogTitle className="font-display text-2xl font-light text-ivory">
            {submitted ? "Blessings & Gratitude" : "Book a Consultation / Join a Program"}
          </DialogTitle>
          <DialogDescription className="text-ivory/70 font-serif">
            {submitted
              ? "Your request has been received. Our spiritual guidance team will connect with you shortly."
              : "Begin your journey towards inner peace, devotion, and Krishna Consciousness."}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold border border-gold/50">
              <CheckCircle2 className="h-10 w-10 text-gold" />
            </div>
            <h3 className="font-display text-lg text-ivory mb-2">Hari Om! Submission Successful</h3>
            <p className="text-sm font-serif text-ivory/80 mb-6">
              Thank you, <span className="text-gold font-semibold">{formData.name || "Seeker"}</span>. We look forward to guiding you on the program: <span className="italic text-gold">{formData.program}</span>.
            </p>
            <button
              onClick={handleReset}
              className="w-full bg-gold hover:bg-gold-light text-shadow font-semibold py-3 px-6 text-xs uppercase tracking-widest transition duration-300"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gold-light/90 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="w-full rounded-none border border-gold/30 bg-shadow/60 px-4 py-2.5 text-sm text-ivory placeholder-ivory/40 focus:border-gold focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gold-light/90 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full rounded-none border border-gold/30 bg-shadow/60 px-4 py-2.5 text-sm text-ivory placeholder-ivory/40 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gold-light/90 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-none border border-gold/30 bg-shadow/60 px-4 py-2.5 text-sm text-ivory placeholder-ivory/40 focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gold-light/90 mb-1">
                Select Program or Offering
              </label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full rounded-none border border-gold/30 bg-shadow/80 px-4 py-2.5 text-sm text-ivory focus:border-gold focus:outline-none"
              >
                <option value="7-Day Inner Transformation Retreat" className="bg-shadow text-ivory">7-Day Inner Transformation Retreat</option>
                <option value="Weekend Spiritual Retreat" className="bg-shadow text-ivory">Weekend Spiritual Retreat</option>
                <option value="Kids Gurukulam" className="bg-shadow text-ivory">Kids Gurukulam</option>
                <option value="Healing & Meditation Programs" className="bg-shadow text-ivory">Healing & Meditation Programs</option>
                <option value="Bhagavad Gita Learning" className="bg-shadow text-ivory">Bhagavad Gita Learning</option>
                <option value="Yoga & Pranayama" className="bg-shadow text-ivory">Yoga & Pranayama</option>
                <option value="Spiritual Consultation" className="bg-shadow text-ivory">Personal Spiritual Consultation</option>
                <option value="Facilitator Training" className="bg-shadow text-ivory">Facilitator Training</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gold-light/90 mb-1">
                Message / Spiritual Goal
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your intentions or any specific questions..."
                className="w-full rounded-none border border-gold/30 bg-shadow/60 px-4 py-2.5 text-sm text-ivory placeholder-ivory/40 focus:border-gold focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-gold hover:bg-gold-light text-shadow font-semibold py-3 px-6 text-xs uppercase tracking-[0.25em] transition duration-300 shadow-gold"
            >
              Submit Booking Request
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
