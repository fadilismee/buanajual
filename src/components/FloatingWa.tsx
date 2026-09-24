import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/6285979220599?text=" +
  encodeURIComponent("Halo Buana Computer, saya ingin tanya-tanya soal jual hardware bekas");

/** Tombol WA mengambang — selalu terlihat di pojok kanan bawah semua halaman. */
export function FloatingWa() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp Buana Computer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={26} fill="currentColor" strokeWidth={1.5} />
    </a>
  );
}
