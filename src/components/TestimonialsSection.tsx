import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "5 unit RTX 3070 bekas mining langsung ditest suhu dan display live. Dalam 30 menit transfer BCA masuk penuh tanpa potongan aneh-aneh.",
    author: "Rian P. • Tangerang",
    tag: "GPU BUYBACK",
  },
  {
    quote:
      "Lelang 38 laptop kantor eks-karyawan lancar. Tim datang ke kantor dengan sertifikat data wipe lengkap. Sangat profesional.",
    author: "Bambang S. • Jakarta",
    tag: "B2B CORPORATE",
  },
  {
    quote:
      "Laptop Lenovo Legion kena tumpahan air dan matot. Tempat lain menolak, di Gudang Komputer tetap dihargai layarnya dan part yang hidup.",
    author: "Nadya A. • Depok",
    tag: "UNIT RUSAK/MATOT",
  },
  {
    quote:
      "Decommission 6 unit Dell PowerEdge Rackmount R730 server data center. Eksekusi tim rapi, penimbangan transparan, langsung pelunasan tunai transfer bank.",
    author: "Hendra K. • Bekasi",
    tag: "SERVER & DATA CENTER",
  },
  {
    quote:
      "Jual borongan 420 kg rongsokan PCB motherboard jadul & power supply rusak dari bengkel servis. Timbangan digital akurat, harga per kilo fair.",
    author: "Fajar M. • Yogyakarta",
    tag: "E-WASTE BULK",
  },
  {
    quote:
      "MacBook Pro M1 layar blank akibat retak engsel. Toko offline biasa nawar sadis, di Gudang Komputer dihargai wajar komponen logic board & baterainya.",
    author: "Clara V. • Jakarta Selatan",
    tag: "MACBOOK PARTIAL",
  },
  {
    quote:
      "Tutup warnet e-sports 24 PC full set i5 + GTX 1660 Ti. Tim jemput langsung pakai armada blind van dalam 1 hari tuntas di-appraise dan dicairkan.",
    author: "Eko Prasetyo • Bandar Lampung",
    tag: "WARNET LIQUIDATION",
  },
  {
    quote:
      "Upgrade rig kerja kreator 3D, jual RTX 4080 lama. Proses drop langsung ke Depo Cikarang cuma 20 menit tes FurMark & TimeSpy langsung deal.",
    author: "Dennis A. • Cikarang",
    tag: "CREATOR PC UPGRADE",
  },
  {
    quote:
      "Penggantian berkala 50 unit SSD & RAM server kantor. Yang paling berharga adalah adanya Berita Acara & jaminan sertifikat DoD wipe 100% aman audit ISO.",
    author: "Arif Wicaksono • Bogor",
    tag: "IT ASSET AUDIT",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="relative w-full bg-surface-container-lowest/80 py-16 lg:py-20 border-t border-surface-container"
      id="testimoni"
    >
      <div className="pointer-events-none absolute bottom-10 left-10 w-[450px] h-[450px] bg-primary-container/10 blur-[130px] rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal from="bottom">
          <div className="flex flex-col items-center text-center gap-2 mb-12">
            <span className="font-monotech text-[11px] text-primary-fixed uppercase tracking-widest font-bold">
              BUKTI KEPUASAN PELANGGAN
            </span>
            <h2 className="font-heading text-2xl md:text-4xl uppercase text-on-surface tracking-tight font-extrabold">
              Kata Mereka yang Sudah Mencairkan
            </h2>
            <p className="text-sm text-on-surface-variant max-w-md">
              Lebih dari 1.200 nasabah perorangan &amp; korporat mempercayakan likuidasi hardware ke
              Gudang Komputer.
            </p>
          </div>
        </Reveal>

        {/* 3x3 Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} from="bottom" delay={idx * 40} className="h-full">
              <div className="bg-surface-container h-full p-6 rounded-2xl border border-surface-container-high flex flex-col justify-between hover:border-primary-container/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-1 text-primary-container mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface italic leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-surface-container-high flex items-center justify-between">
                  <span className="font-heading text-xs text-on-surface uppercase font-bold">
                    {t.author}
                  </span>
                  <span className="font-monotech text-[10px] text-primary-fixed font-bold">
                    {t.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
