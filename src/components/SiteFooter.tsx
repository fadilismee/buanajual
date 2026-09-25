import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer id="kontak" className="border-t border-white/10 bg-[#0f0f0f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:gap-12 lg:grid-cols-[1.5fr_1fr] lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/Buanacomputer-logo.png"
                alt="Gudang Komputer"
                className="h-8 w-auto object-contain brightness-0 invert"
                loading="lazy"
              />
              <span className="text-sm font-bold tracking-tight">GUDANG KOMPUTER</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              Toko laptop, PC rakitan, dan aksesoris komputer. Melayani satuan & korporat. Cek
              katalog online sebelum ke toko — harga transparan, garansi jelas.
            </p>
            <p className="mt-4 text-xs text-white/55">
              Mertosan Kulon, Potorono, Banguntapan, Bantul 55196
            </p>
          </div>

          <div className="text-sm">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Kontak
            </h4>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-white hover:underline"
                >
                  0859-7922-0599
                </a>
              </li>
              <li>Alamat: Mertosan Kulon, Potorono, Kec. Banguntapan, Bantul, DIY 55196</li>
              <li>
                <a
                  href="https://maps.google.com/?q=-7.8372069,110.4148331"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/90 hover:text-white hover:underline"
                >
                  Lihat di Google Maps →
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Jam Buka & Layanan
            </h4>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>Senin – Sabtu: 09.00 – 20.00 WIB</li>
              <li>Minggu: 10.00 – 17.00 WIB (janjian WA)</li>
              <li className="pt-2">
                <Link to="/jual" className="text-white hover:underline">
                  Jual Barang Rusak →
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Tautan & Layanan
            </h4>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>
                <Link to="/jual/form" className="hover:text-white hover:underline">
                  Ajukan Jual
                </Link>
              </li>
              <li>
                <Link to="/berita" className="hover:text-white hover:underline">
                  Berita Acara Transaksi
                </Link>
              </li>
              <li>
                <a
                  href="https://service.gudangkomputer.web.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  Layanan Service
                </a>
              </li>
              <li>
                <Link to="/jual" className="hover:text-white hover:underline">
                  Jual Barang Rusak
                </Link>
              </li>
              <li>
                <a
                  href="https://gudangkomputer.web.id/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://gudangkomputer.web.id/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[200px] w-full overflow-hidden rounded-lg sm:h-[260px] lg:h-auto lg:min-h-[300px]">
          <iframe
            src="https://maps.google.com/maps?q=-7.8372069,110.4148331&z=17&hl=id&output=embed"
            title="Lokasi Gudang Komputer Bantul"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gudang Komputer. Semua hak dilindungi.</p>
          <div className="flex gap-4">
            <a
              href="https://gudangkomputer.web.id/about"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Syarat Layanan
            </a>
            <a
              href="https://gudangkomputer.web.id/about"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
