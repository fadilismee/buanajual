import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWa } from "@/components/FloatingWa";
import { JualHero } from "@/components/JualHero";
import { HardwareBentoGrid } from "@/components/HardwareBentoGrid";
import { HardwareConditionStage } from "@/components/HardwareConditionStage";
import { PromoBonus } from "@/components/PromoBonus";
import { GradeGuide } from "@/components/GradeGuide";
import { GalleryTerima } from "@/components/GalleryTerima";
import { BuybackCatalog } from "@/components/BuybackCatalog";
import { StepsSection } from "@/components/StepsSection";
import { JualFaq } from "@/components/JualFaq";
import { TradeInCta } from "@/components/TradeInCta";

export const Route = createFileRoute("/jual/")({
  validateSearch: (search: Record<string, unknown>): { q?: string | undefined } => ({
    q: typeof search["q"] === "string" && search["q"].length > 0 ? search["q"] : undefined,
  }),
  head: () => ({
    meta: [
      {
        title: "Jual Laptop Bekas & Hardware Rusak Harga Terbaik — Gudang Komputer",
      },
      {
        name: "description",
        content:
          "Jual laptop bekas, laptop rusak, motherboard, VGA, RAM & SSD ke 3 cabang Gudang Komputer (Gunungkidul DIY, Lampung, Cikarang). Price list buyback transparan, cek lab 15 menit, dana cair instan. WA 6285979220599.",
      },
      {
        name: "keywords",
        content:
          "jual laptop bekas, jual laptop rusak, harga beli laptop mati, jual motherboard rusak, jual vga rusak, buyback gunungkidul, buyback lampung, buyback cikarang, tukar tambah laptop",
      },
      {
        property: "og:title",
        content: "Jual Hardware Bekas & Rusak Jadi Rupiah — Gudang Komputer",
      },
      {
        property: "og:description",
        content:
          "Daripada jadi rongsokan, tukar hardware Anda menjadi rupiah di 3 cabang Gudang Komputer (Gunungkidul, Lampung, Cikarang). Terima laptop, PC, motherboard, VGA normal, rusak & matot — taksiran transparan, cair instan.",
      },
      { property: "og:image", content: "https://gudangkomputer.web.id/gudangkomputer-logo.png" },
      { property: "og:url", content: "https://gudangkomputer.web.id/jual" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://gudangkomputer.web.id/jual" }],
  }),
  component: JualPage,
});

function JualPage() {
  const navigate = useNavigate();
  const search = Route.useSearch();
  const [query, setQuery] = useState(search.q ?? "");

  useEffect(() => {
    setQuery(search.q ?? "");
  }, [search.q]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    navigate({
      to: "/jual",
      search: value.trim() ? { q: value } : {},
      replace: true,
    });
  };

  const handleAjukan = (title: string, category: string) => {
    navigate({ to: "/jual/form", search: { model: title, category } });
  };

  return (
    <div className="min-h-screen bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader query={query} onQueryChange={handleQueryChange} />
      <JualHero />
      <HardwareBentoGrid />
      <HardwareConditionStage />
      <PromoBonus />
      <BuybackCatalog query={query} onQueryChange={handleQueryChange} onAjukan={handleAjukan} />
      <GradeGuide />
      <GalleryTerima />
      <StepsSection />
      <JualFaq />
      <TradeInCta />
      <SiteFooter />
      <FloatingWa />
    </div>
  );
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://gudangkomputer.web.id/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Jual Hardware Bekas & Rusak",
      item: "https://gudangkomputer.web.id/jual",
    },
  ],
};
