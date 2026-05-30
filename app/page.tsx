import { HeroSection } from "@/components/home/HeroSection";
import { Marquee } from "@/components/motion/Marquee";
import { BrandStatement } from "@/components/home/BrandStatement";
import { FeaturedShades } from "@/components/home/FeaturedShades";
import { ShopByFinish } from "@/components/home/ShopByFinish";
import { EditorialBanner } from "@/components/home/EditorialBanner";
import { TrendingNow } from "@/components/home/TrendingNow";
import { ReviewCarousel } from "@/components/home/ReviewCarousel";
import { NewsletterForm } from "@/components/home/NewsletterForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee text="Lips Only — No Compromise" />
      <BrandStatement />
      <FeaturedShades />
      <ShopByFinish />
      <EditorialBanner />
      <TrendingNow />
      <ReviewCarousel />
      <NewsletterForm />
    </>
  );
}
