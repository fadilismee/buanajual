import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWa } from "@/components/FloatingWa";
import { JualHero } from "@/components/JualHero";
import { HardwareBentoGrid } from "@/components/HardwareBentoGrid";
import { StepsSection } from "@/components/StepsSection";
import { B2BLiquidation } from "@/components/B2BLiquidation";
import { DepoLocations } from "@/components/DepoLocations";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HardwareConditionStage } from "@/components/HardwareConditionStage";
import { BuybackCatalog } from "@/components/BuybackCatalog";
import { JualFaq } from "@/components/JualFaq";
import { TradeInCta } from "@/components/TradeInCta";

export const Route = createFileRoute("/jual/")({
  validateSearch: (search: Record<string, unknown>): { q?: string | undefined } => ({
    q: typeof search["q"] === "string" && search["q"].length > 0 ? search["q"] : undefined,
  }),
  head: () => ({
    meta: [
      {
        title: "Gudang Komputer — Jual Hardware Bekas, Rusak & Mati Total Cair Instan",
      },
      {
        name: "description",
        content:
          "Pusat buyback & lelang hardware komputer: laptop, VGA artefak, motherboard mati total, PC kantor di 3 depo cabang (Cikarang, Gunungkidul DIY, Lampung). Estimasi < 15 menit, dana cair langsung di tempat. WA 0859-7922-0599.",
      },
      {
        name: "keywords",
        content:
          "gudang komputer, jual laptop bekas, jual laptop rusak, harga beli laptop mati, jual vga artefak, jual motherboard rusak, depo cikarang, depo gunungkidul, depo lampung, lelang pc kantor",
      },
      {
        property: "og:title",
        content: "Gudang Komputer — Jual Hardware. Cair Sekarang.",
      },
      {
        property: "og:description",
        content:
          "Ubah laptop, GPU, motherboard, & PC mati total menjadi uang tunai di 3 cabang resmi Gudang Komputer. Cek lab 15 menit, dana langsung cair detik itu juga.",
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
    <div className="min-h-screen bg-surface text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader query={query} onQueryChange={handleQueryChange} />
      <JualHero />
      <HardwareBentoGrid />
      <StepsSection />
      <B2BLiquidation />
      <DepoLocations />
      <TestimonialsSection />
      <HardwareConditionStage />
      <BuybackCatalog query={query} onQueryChange={handleQueryChange} onAjukan={handleAjukan} />
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
