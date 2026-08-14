import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  title: string;
  img: string;
  caption: string;
}

interface GalleryModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (idx: number) => void;
}

export function GalleryModal({ items, currentIndex, onClose, onSelectIndex }: GalleryModalProps) {
  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  const handlePrev = () => {
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % items.length);
  };

  return (
    <Dialog open={currentIndex !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl border-gold/40 bg-[#FFFDFC]/95 text-[#2B1208] p-2 backdrop-blur-2xl overflow-hidden">
        <div className="relative flex flex-col items-center justify-center">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 rounded-full bg-[#FFF8E8]/90 p-2 text-[#2B1208] hover:text-gold border border-gold/40 transition cursor-pointer"
            aria-label="Close image"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Navigation controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 z-20 rounded-full bg-[#FFF8E8]/90 p-3 text-[#2B1208] hover:text-gold border border-gold/40 transition cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 z-20 rounded-full bg-[#FFF8E8]/90 p-3 text-[#2B1208] hover:text-gold border border-gold/40 transition cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image */}
          <div className="w-full max-h-[75vh] overflow-hidden flex items-center justify-center bg-[#2B1208]/10 rounded-sm">
            <img
              src={current.img}
              alt={current.title}
              className="max-h-[75vh] w-auto max-w-full object-contain anim-slow-zoom"
            />
          </div>

          {/* Caption bar */}
          <div className="w-full bg-[#FFF8E8]/95 p-4 text-center border-t border-gold/30">
            <h3 className="font-display text-xl text-[#783B0B]">{current.title}</h3>
            <p className="font-serif italic text-sm text-[#4B301B] mt-1">{current.caption}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
