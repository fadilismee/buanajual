import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-monotech text-sm font-semibold uppercase tracking-widest text-primary">
          Error 404
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Halaman yang Anda cari tidak ada atau sudah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/jual"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-monotech text-sm font-semibold uppercase tracking-widest text-destructive">
          Terjadi Kesalahan
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Halaman ini gagal dimuat
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Ada masalah di sisi kami. Coba muat ulang atau kembali ke beranda.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Coba Lagi
          </button>
          <Link
            to="/jual"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#121416" },
      {
        name: "google-site-verification",
        content: "D9D4lVIRUuQ1KP4nHWeOJWaH5SgfFGUJf1bpLSFjkEY",
      },
      { title: "Gudang Komputer — Toko Komputer & Buyback Hardware" },
      {
        name: "description",
        content:
          "Pusat jual beli & buyback laptop bekas, PC rakitan, motherboard, dan VGA di 3 cabang resmi: Gunungkidul (DIY), Lampung, dan Cikarang (Jabar). Hubungi WA 6285979220599.",
      },
      {
        name: "keywords",
        content:
          "gudang komputer, jual laptop bekas, buyback hardware, jual vga rusak, jual motherboard rusak, toko komputer gunungkidul, toko komputer lampung, toko komputer cikarang, service komputer",
      },
      { name: "author", content: "Gudang Komputer" },
      { property: "og:title", content: "Gudang Komputer - Katalog Laptop & PC" },
      {
        property: "og:description",
        content:
          "Jelajahi katalog Gudang Komputer — laptop, PC rakitan, monitor, dan aksesoris lengkap dengan spesifikasi dan harga.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Gudang Komputer" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:image", content: "https://gudangkomputer.web.id/gudangkomputer-logo.png" },
      { property: "og:url", content: "https://gudangkomputer.web.id" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gudang Komputer - Katalog Laptop & PC" },
      {
        name: "twitter:description",
        content:
          "Jelajahi katalog Gudang Komputer — laptop, PC rakitan, monitor, dan aksesoris lengkap dengan spesifikasi dan harga.",
      },
      { name: "twitter:image", content: "https://gudangkomputer.web.id/gudangkomputer-logo.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/manifest.json" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://gudangkomputer.web.id/#website",
  name: "Gudang Komputer",
  alternateName: [
    "Gudang Komputer",
    "Gudang Komputer Gunungkidul",
    "Gudang Komputer Lampung",
    "Gudang Komputer Cikarang",
  ],
  url: "https://gudangkomputer.web.id",
  inLanguage: "id-ID",
  description:
    "Toko komputer & pusat buyback hardware di Gunungkidul (DIY), Lampung, dan Cikarang (Jabar).",
};

const siteNavigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Katalog Laptop & PC",
      description: "Katalog laptop baru & second, PC rakitan, monitor, dan aksesoris komputer",
      url: "https://gudangkomputer.web.id/",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Journal & Tips Servis",
      description: "Panduan rakit PC, review teardown, dan tips perawatan laptop dari meja teknisi",
      url: "https://gudangkomputer.web.id/blog",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Tentang Laboratorium Gudang Komputer",
      description:
        "Profil laboratorium servis mikro-elektronika, transparansi meja periksa, dan daur ulang e-waste",
      url: "https://gudangkomputer.web.id/about",
    },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gudang Komputer",
  image: "https://gudangkomputer.web.id/gudangkomputer-logo.png",
  url: "https://gudangkomputer.web.id",
  telephone: "6285979220599",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gunungkidul",
    addressRegion: "DI Yogyakarta",
    addressCountry: "ID",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "20:00",
  },
  priceRange: "Rp 50.000 - Rp 25.000.000",
  sameAs: [
    "https://service.gudangkomputer.web.id",
    "https://gudangkomputer.web.id/jual",
    "https://gudangkomputer.web.id/blog",
    "https://gudangkomputer.web.id/about",
  ],
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </QueryClientProvider>
  );
}
