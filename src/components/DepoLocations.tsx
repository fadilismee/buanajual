import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

const depos = [
  {
    id: "cikarang",
    name: "Depo Cikarang",
    badge: "PUSAT INDUSTRI JABODETABEK",
    statusBadge: "Live Testing",
    address:
      "Kawasan Industri MM2100, Jl. Selayar Blok D, Cikarang Barat, Kabupaten Bekasi, Jawa Barat 17530",
    schedule: "Senin – Sabtu: 08:30 – 17:00 WIB",
    pic: "+62 859-7922-0599",
    mapQuery: "https://maps.google.com/?q=Kawasan+Industri+MM2100+Cikarang+Barat",
    mapEmbed:
      "https://maps.google.com/maps?q=Kawasan+Industri+MM2100+Cikarang+Barat&z=14&hl=id&output=embed",
    waLink:
      "https://wa.me/6285979220599?text=" +
      encodeURIComponent("Halo PIC Depo Cikarang, saya mau jadwalkan drop-off hardware"),
  },
  {
    id: "gunungkidul",
    name: "Depo Gunungkidul",
    badge: "DEPO DIY & JAWA TENGAH",
    statusBadge: "E-Waste & PC",
    address:
      "Jl. KH Agus Salim, Ledoksari, Kepek, Kec. Wonosari, Kabupaten Gunungkidul, D.I. Yogyakarta 55813",
    schedule: "Senin – Sabtu: 08:30 – 17:00 WIB",
    pic: "+62 859-7922-0599",
    mapQuery: "https://maps.google.com/?q=Wonosari+Gunungkidul+Yogyakarta",
    mapEmbed:
      "https://maps.google.com/maps?q=Wonosari+Gunungkidul+Yogyakarta&z=14&hl=id&output=embed",
    waLink:
      "https://wa.me/6285979220599?text=" +
      encodeURIComponent(
        "Halo PIC Depo Gunungkidul, saya mau drop-off komputer dan limbah hardware",
      ),
  },
  {
    id: "lampung",
    name: "Depo Lampung",
    badge: "DEPO SUMATERA & LAMPUNG",
    statusBadge: "Hub Sumatera",
    address:
      "Jl. Sultan Agung No. 88, Way Halim Permai, Kec. Way Halim, Kota Bandar Lampung, Lampung 35141",
    schedule: "Senin – Sabtu: 08:30 – 17:00 WIB",
    pic: "+62 859-7922-0599",
    mapQuery: "https://maps.google.com/?q=Way+Halim+Bandar+Lampung",
    mapEmbed: "https://maps.google.com/maps?q=Way+Halim+Bandar+Lampung&z=14&hl=id&output=embed",
    waLink:
      "https://wa.me/6285979220599?text=" +
      encodeURIComponent("Halo PIC Depo Lampung, saya mau appraisal laptop dan hardware"),
  },
];

export function DepoLocations() {
  return (
    <section
      className="relative w-full bg-surface-container-lowest py-16 lg:py-20 border-t border-surface-container"
      id="lokasi-depo"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-primary-container/10 blur-[140px] rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal from="bottom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2">
                <div className="relative flex h-2 w-2 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
                </div>
                <span className="font-monotech text-[11px] text-primary-fixed uppercase tracking-widest font-bold">
                  JARINGAN REGIONAL RESMI
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl uppercase text-on-surface font-bold tracking-tight">
                LOKASI DEPO &amp; DROP POINT
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md">
              Kunjungi depo kami untuk appraisal langsung di tempat atau jadwalkan kurir jemput
              gratis ke lokasi Anda.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depos.map((d, i) => (
            <Reveal key={d.id} from="bottom" delay={i * 90} className="h-full">
              <div className="bg-surface-container h-full rounded-2xl border border-surface-container-high/80 overflow-hidden flex flex-col justify-between hover:border-primary-container/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                {/* Map preview */}
                <div className="relative w-full h-48 bg-surface-container-low overflow-hidden border-b border-surface-container-high">
                  <iframe
                    className="w-full h-full border-0 grayscale invert opacity-75 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={d.mapEmbed}
                    title={`Peta ${d.name}`}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-surface/90 backdrop-blur-md border border-surface-container-high px-2.5 py-1 rounded text-primary-fixed font-monotech text-[10px] font-bold uppercase tracking-wider shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                      {d.badge}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-heading text-lg sm:text-xl uppercase text-on-surface font-bold tracking-tight">
                        {d.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 font-monotech text-[10px] bg-primary-container/10 border border-primary-container/30 text-primary-fixed px-2 py-0.5 rounded font-bold uppercase">
                        {d.statusBadge}
                      </span>
                    </div>

                    <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                      {d.address}
                    </p>

                    <div className="flex flex-col gap-2 pt-3 border-t border-surface-container-high text-xs text-on-surface-variant font-monotech">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-primary-container shrink-0" />
                        <span>{d.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-primary-container shrink-0" />
                        <span>PIC Depo: {d.pic}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <a
                      className="inline-flex items-center justify-center gap-1.5 bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-heading font-bold py-2.5 px-3 rounded border border-surface-container-high transition-colors text-center"
                      href={d.mapQuery}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MapPin size={14} />
                      <span>Petunjuk Arah</span>
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-1.5 bg-primary-container hover:bg-secondary-container text-white text-xs font-heading font-bold py-2.5 px-3 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,94,20,0.4)] text-center"
                      href={d.waLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Calendar size={14} />
                      <span>Jadwalkan</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
