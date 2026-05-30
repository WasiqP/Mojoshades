"use client";

import { useEffect, useRef, type RefObject } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/utils";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = {
  heroBg: "/images/hero/hero-bg.jpg",
  cardGloss: "/images/hero-lips.png",
  cardSatin: "/images/hero/card-satin.jpg",
} as const;

type PhoneUiProps = {
  label: string;
  balance: string;
  actionLabel?: string;
  balanceClassName?: string;
  framed?: boolean;
  badges?: [string, string];
  transaction?: {
    icon: string;
    title: string;
    meta: string;
    amount: string;
  };
};

function PhoneUi({
  label,
  balance,
  actionLabel = "View shade",
  balanceClassName,
  framed = false,
  badges,
  transaction,
}: PhoneUiProps) {
  return (
    <>
      <div className={cn("r-phone-ui", framed && "r-phone-ui--framed")}>
        <span className="r-phone-label">{label}</span>
        <span className={cn("r-phone-balance", balanceClassName)}>{balance}</span>
        <span className="r-phone-accounts">{actionLabel}</span>
      </div>
      {badges && (
        <div className="r-phone-badges">
          <span className="r-phone-badge">{badges[0]}</span>
          <span className="r-phone-badge">{badges[1]}</span>
        </div>
      )}
      {transaction && (
        <div className="r-phone-transaction">
          <span className="r-phone-transaction-icon">{transaction.icon}</span>
          <span className="r-phone-transaction-copy">
            <span className="r-phone-transaction-title">{transaction.title}</span>
            <span className="r-phone-transaction-meta">{transaction.meta}</span>
          </span>
          <span className="r-phone-transaction-amount">{transaction.amount}</span>
        </div>
      )}
    </>
  );
}

function HeroFrameCard({
  fillRef,
  label,
  balance,
  badges,
}: {
  fillRef: RefObject<HTMLDivElement | null>;
  label: string;
  balance: string;
  badges: [string, string];
}) {
  return (
    <div className="r-phone-shell r-phone-shell--framed">
      <div ref={fillRef} className="r-phone-fill" aria-hidden>
        <Image
          src={IMAGES.heroBg}
          alt=""
          fill
          className="object-cover object-[center_22%]"
          sizes="300px"
        />
      </div>
      <PhoneUi
        label={label}
        balance={balance}
        balanceClassName="r-phone-balance--title"
        framed
        badges={badges}
      />
    </div>
  );
}

function ProductPhoneCard({
  image,
  alt,
  label,
  balance,
  transaction,
}: {
  image: string;
  alt: string;
  label: string;
  balance: string;
  transaction?: PhoneUiProps["transaction"];
}) {
  return (
    <div className="r-phone-shell r-phone-shell--filled">
      <Image src={image} alt={alt} fill className="object-cover" sizes="300px" />
      <PhoneUi label={label} balance={balance} transaction={transaction} />
    </div>
  );
}

export function HeroSection() {
  const sceneRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);
  const salaryPanelRef = useRef<HTMLDivElement>(null);
  const salaryHeaderRef = useRef<HTMLDivElement>(null);
  const salaryCtaRef = useRef<HTMLDivElement>(null);
  const phonesWrapRef = useRef<HTMLDivElement>(null);
  const centerFillRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    document.body.classList.add("revolut-hero-active");
    return () => document.body.classList.remove("revolut-hero-active");
  }, []);

  useEffect(() => {
    if (reducedMotion || !sceneRef.current || !pinRef.current) return;

    const bg = bgRef.current;
    const heroCopy = heroCopyRef.current;
    const salaryPanel = salaryPanelRef.current;
    const salaryHeader = salaryHeaderRef.current;
    const salaryCta = salaryCtaRef.current;
    const phonesWrap = phonesWrapRef.current;
    const centerFill = centerFillRef.current;
    const left = leftRef.current;
    const center = centerRef.current;
    const right = rightRef.current;

    if (
      !bg ||
      !heroCopy ||
      !salaryPanel ||
      !salaryHeader ||
      !salaryCta ||
      !phonesWrap ||
      !centerFill ||
      !left ||
      !center ||
      !right
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
        },
        (context) => {
          const { isDesktop } = context.conditions!;
          const spread = isDesktop ? 272 : 118;
          const slots = [left, center, right];

          gsap.set(slots, {
            xPercent: -50,
            yPercent: -50,
            transformOrigin: "center center",
          });
          gsap.set([left, right], { opacity: 0, scale: 0.88, x: 0 });
          gsap.set(center, { scale: isDesktop ? 1.55 : 1.35, y: 0 });
          gsap.set(phonesWrap, { y: 0 });
          gsap.set(bg, { scale: 1, opacity: 1 });
          gsap.set(centerFill, { opacity: 0 });
          gsap.set(salaryPanel, { opacity: 0 });
          gsap.set(salaryHeader, { opacity: 0, y: 36 });
          gsap.set(salaryCta, { opacity: 0, y: 20 });
          gsap.set(heroCopy, { opacity: 1, y: 0 });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: sceneRef.current,
                start: "top top",
                end: "+=100%",
                pin: pinRef.current,
                scrub: 0.85,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            })
            .to(
              heroCopy,
              { opacity: 0, y: -32, ease: "power2.inOut", duration: 0.28 },
              0
            )
            .to(
              bg,
              { scale: 1.06, opacity: 0.35, ease: "power2.inOut", duration: 0.45 },
              0
            )
            .to(
              salaryPanel,
              { opacity: 1, ease: "power2.out", duration: 0.42 },
              0.08
            )
            .to(
              centerFill,
              { opacity: 1, ease: "power2.out", duration: 0.38 },
              0.12
            )
            .to(
              center,
              {
                scale: isDesktop ? 1 : 0.96,
                y: isDesktop ? -28 : -14,
                ease: "power2.inOut",
                duration: 0.55,
              },
              0
            )
            .to(
              left,
              {
                opacity: 1,
                scale: isDesktop ? 0.92 : 0.86,
                x: -spread,
                ease: "power2.out",
                duration: 0.52,
              },
              0.1
            )
            .to(
              right,
              {
                opacity: 1,
                scale: isDesktop ? 0.92 : 0.86,
                x: spread,
                ease: "power2.out",
                duration: 0.52,
              },
              0.1
            )
            .to(
              phonesWrap,
              {
                scale: isDesktop ? 0.88 : 0.92,
                y: isDesktop ? -48 : -20,
                ease: "power2.out",
                duration: 0.5,
              },
              0.12
            )
            .to(
              center,
              { scale: isDesktop ? 1.04 : 1, ease: "power1.out", duration: 0.35 },
              0.48
            )
            .to(
              salaryHeader,
              { opacity: 1, y: 0, ease: "power2.out", duration: 0.38 },
              0.35
            )
            .to(
              salaryCta,
              { opacity: 1, y: 0, ease: "power2.out", duration: 0.35 },
              0.42
            );
        }
      );
    }, sceneRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 400);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section ref={sceneRef} className="r-hero-scene" data-revolut-hero>
      <div
        ref={pinRef}
        className={cn("r-hero-pin", reducedMotion && "r-hero-pin--static")}
      >
        <div ref={bgRef} className="r-hero-bg" aria-hidden>
          <Image
            src={IMAGES.heroBg}
            alt=""
            fill
            priority
            className="r-hero-bg-image"
            sizes="100vw"
          />
          <div className="r-hero-bg-shade" />
        </div>

        <div ref={salaryPanelRef} className="r-salary-panel" aria-hidden />

        <div ref={salaryHeaderRef} className="r-salary-header">
          <h2 className="r-salary-title">Your lineup, reimagined</h2>
          <p className="r-salary-lede">
            Layer gloss over matte, switch shades for day to night, and build a
            collection that never plays it safe — all with Mojoshades.
          </p>
        </div>

        <div ref={salaryCtaRef} className="r-salary-cta-wrap">
          <Link href="/shop" className="r-pill r-pill--dark">
            Shop all shades
          </Link>
        </div>

        <div ref={heroCopyRef} className="r-hero-copy">
          <h1 className="r-hero-title">Lips &amp; Beyond</h1>
          <p className="r-hero-lede">
            Bold colour for lips that refuse to whisper. Editorial shades,
            weightless wear — made to be seen.
          </p>
          <Link href="/shop" className="r-pill r-pill--dark r-hero-cta">
            Shop the drop
          </Link>
        </div>

        <div className="r-phones-stage">
          <div ref={phonesWrapRef} className="r-phones-wrap">
            <div ref={leftRef} className="r-phone-slot r-phone-slot--left">
              <ProductPhoneCard
                image={IMAGES.cardGloss}
                alt="Pink Noise gloss lipstick"
                label="Gloss · Pink Noise"
                balance="$22"
                transaction={{
                  icon: "💋",
                  title: "Night-out look",
                  meta: "Last worn · Friday",
                  amount: "★ loved",
                }}
              />
            </div>

            <div ref={centerRef} className="r-phone-slot r-phone-slot--center">
              <HeroFrameCard
                fillRef={centerFillRef}
                label="Matte · Bestseller"
                balance="Cherry Bomb"
                badges={["12H Wear", "Cruelty Free"]}
              />
            </div>

            <div ref={rightRef} className="r-phone-slot r-phone-slot--right">
              <ProductPhoneCard
                image={IMAGES.cardSatin}
                alt="Midnight Merlot satin lipstick"
                label="Satin · Merlot"
                balance="$26"
                transaction={{
                  icon: "✨",
                  title: "Evening touch-up",
                  meta: "Added today",
                  amount: "In bag",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
