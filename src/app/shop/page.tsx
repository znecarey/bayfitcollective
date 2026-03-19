import { ShopHero } from "@/components/shop/ShopHero";
import { ShopComingSoon } from "@/components/shop/ShopComingSoon";
import { BayfitTickerBanner } from "@/components/ui/BayfitTickerBanner";

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ShopComingSoon />
      <BayfitTickerBanner />
    </>
  );
}

