import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface LegalDialogProps {
  type: "privacy" | "terms" | "refund" | null;
  onClose: () => void;
}

export function LegalDialog({ type, onClose }: LegalDialogProps) {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: "Privacy Policy",
      subtitle: "Yugala Radhe Krishna Tapovan Digital Sanctuary",
      body: (
        <div className="space-y-3 text-sm text-ivory/80 font-serif leading-relaxed">
          <p>
            At Yugala Radhe Krishna Tapovan, we value the sanctity and privacy of every seeker's spiritual journey.
            Any personal information collected during program registrations, newsletter subscriptions, or consultations
            is kept strictly confidential.
          </p>
          <p>
            We do not share, sell, or disclose your personal data to third parties. All communication is dedicated solely to
            informing you about your requested retreats, workshops, and spiritual events.
          </p>
          <p>
            For any queries regarding your data protection, please reach out to our team at <strong>privacy@yugalatapovan.org</strong>.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms & Conditions",
      subtitle: "Guidelines for Sanctuary Participation",
      body: (
        <div className="space-y-3 text-sm text-ivory/80 font-serif leading-relaxed">
          <p>
            Welcome to Yugala Radhe Krishna Tapovan. By participating in our retreats, courses, and online programs,
            you agree to adhere to the peaceful and respectful atmosphere of our spiritual community.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Participants must maintain a clean, mindful, and respectful demeanor toward facilitators and fellow seekers.</li>
            <li>Sanctuary premises and virtual sessions are dedicated strictly to spiritual transformation, meditation, and devotion.</li>
            <li>All learning materials, discourses, and media remain the spiritual copyright of Yugala Radhe Krishna Tapovan.</li>
          </ul>
        </div>
      ),
    },
    refund: {
      title: "Refund & Cancellation Policy",
      subtitle: "Fair Practices for Retreats and Programs",
      body: (
        <div className="space-y-3 text-sm text-ivory/80 font-serif leading-relaxed">
          <p>
            We understand that life events may require changes to your schedule. Our refund policy for retreats and academy courses is as follows:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Cancellations 7+ days prior:</strong> 100% full refund or credit transfer to a future retreat.</li>
            <li><strong>Cancellations 3-6 days prior:</strong> 50% refund or full credit transfer to another program.</li>
            <li><strong>Cancellations within 48 hours:</strong> Credit transfer available for future sessions upon request.</li>
          </ul>
          <p>
            To initiate a cancellation or request a program transfer, please contact <strong>support@yugalatapovan.org</strong>.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];

  return (
    <Dialog open={!!type} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg border-gold/40 bg-shadow text-ivory backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-gold-light">{current.title}</DialogTitle>
          <DialogDescription className="text-ivory/60 font-serif text-xs uppercase tracking-widest">
            {current.subtitle}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 border-t border-b border-gold/20 my-2">
          {current.body}
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="border border-gold/50 px-6 py-2 text-xs uppercase tracking-widest text-gold hover:bg-gold hover:text-shadow transition duration-300"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
