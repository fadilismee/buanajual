import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const faqList = [
  {
    q: "Komputer atau laptop mati total apakah tetap bernilai?",
    a: "Ya, tetap bernilai! Kami menghitung nilai komponen yang masih berfungsi (layar LCD, RAM, SSD, casing) maupun nilai lebur material motherboard & chip IC donor.",
  },
  {
    q: "Apakah data pribadi di dalam hard disk/SSD aman?",
    a: "100% aman terjamin. Setiap drive melalui proses data sanitization permanen berstandar militer NIST 800-88 & DoD 5220.22-M sehingga file tidak dapat dipulihkan kembali oleh software komersial apapun.",
  },
  {
    q: "Bagaimana proses penjemputan barangnya?",
    a: "Untuk area sekitar 3 cabang (Gunungkidul DIY, Lampung, dan Cikarang Jabodetabek) kurir internal kami siap menjemput langsung ke alamat Anda secara gratis setelah estimasi disepakati via WhatsApp.",
  },
  {
    q: "Apakah menerima lelang borongan kantor, sekolah, atau warnet?",
    a: "Sangat bisa! Kami melayani pembelian 10 hingga 200+ unit PC/laptop/monitor. Tim penaksir datang langsung ke lokasi Anda lengkap dengan armada pengangkut, faktur, dan dokumen BAST resmi.",
  },
  {
    q: "Bagaimana jika berdomisili di luar area 3 cabang?",
    a: "Kirimkan paket via ekspedisi (J&T, JNE, SiCepat, Paxel). Video unboxing dan tes diagnosa lab kami videokan secara transparan, lalu dana langsung ditransfer ke rekening bank/QRIS Anda.",
  },
];

export function JualFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="relative w-full bg-surface py-16 lg:py-20 border-t border-surface-container"
      id="faq"
    >
      <div className="w-full max-w-[840px] mx-auto px-4 sm:px-6">
        <Reveal from="bottom">
          <div className="flex flex-col items-center text-center gap-2 mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-3 py-1 border border-surface-container-high text-primary-fixed font-monotech text-[11px] font-bold uppercase tracking-wider">
              <HelpCircle size={13} />
              FAQ &amp; TANYA JAWAB
            </div>
            <h2 className="font-heading text-2xl md:text-3xl uppercase text-on-surface tracking-tight font-extrabold">
              Pertanyaan Sering Diajukan
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-md">
              Hal-hal yang sering ditanyakan penjual hardware di Gudang Komputer.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3.5">
          {faqList.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} from="bottom" delay={i * 40}>
                <div
                  className={`bg-surface-container rounded-xl border transition-colors overflow-hidden ${
                    isOpen
                      ? "border-primary-container/60 shadow-[0_4px_20px_rgba(255,94,20,0.1)]"
                      : "border-surface-container-high hover:border-primary-container/30"
                  }`}
                >
                  <button
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-heading text-sm sm:text-base text-on-surface font-bold uppercase tracking-wide pr-3">
                      {f.q}
                    </span>
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                        isOpen
                          ? "bg-primary-container text-white rotate-180"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-surface-container-high/60 pt-3">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
