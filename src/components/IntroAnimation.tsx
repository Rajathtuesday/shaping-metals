import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
<link rel="icon" type="image/png" href="/logo.png" />

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({
  onComplete,
}: IntroAnimationProps) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowText(true), 300);

    const t2 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0B0B0B] flex items-center justify-center overflow-hidden">

      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C9A45C]/10 blur-3xl" />

      <div className="text-center">
        <img
  src={logo}
  alt="Shaping Metals"
  className={`
    mx-auto mb-8
    h-24 md:h-36
    object-contain
    transition-all duration-1000
    ${
      showText
        ? "opacity-100 scale-100 rotate-0"
        : "opacity-0 scale-50 rotate-180"
    }
  `}
/>

<div
  className={`relative overflow-hidden transition-all duration-1000 ${
    showText ? "opacity-100" : "opacity-0"
  }`}
>
  <h1 className="text-[#C9A45C] font-serif text-5xl md:text-8xl tracking-[0.25em] animate-pulse">
    SHAPING METALS
  </h1>

  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_linear_infinite]">
    <div className="h-full w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12" />
  </div>
</div>

        <div
          className={`mt-6 h-[2px] bg-[#C9A45C] mx-auto
          transition-all duration-1000
          ${showText ? "w-40 opacity-100" : "w-0 opacity-0"}`}
        />

        <p
          className={`mt-8 text-white/80 uppercase tracking-[0.5em] text-xs md:text-sm
          transition-all duration-1000 delay-300
          ${
            showText
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Artistry In Metal
        </p>

      </div>
    </div>
  );
}