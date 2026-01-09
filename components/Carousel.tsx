"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface CarouselProps {
  totalSlides: number;
  currentSlide: number;
}

export const Carousel = ({ totalSlides, currentSlide }: CarouselProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isAutoplay, setIsAutoplay] = useState(false);

  const navigateToSlide = useCallback(
    (slideNumber: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("slide", slideNumber.toString());
      router.replace(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  const goToPrevious = () => {
    const prevSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    navigateToSlide(prevSlide);
  };

  const goToNext = () => {
    const nextSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    navigateToSlide(nextSlide);
  };

  // Autoplay
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isAutoplay, currentSlide, totalSlides]);

  // Navigazione con tastiera
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, totalSlides]);

  return (
    <div className="p-6">
      {/* Controlli di navigazione principali */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPrevious}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          aria-label="Slide precedente"
        >
          ← Precedente
        </button>

        <div className="flex items-center gap-4">
          <span className="text-gray-600 font-medium">
            {currentSlide} / {totalSlides}
          </span>

          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isAutoplay
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
            aria-label={isAutoplay ? "Ferma autoplay" : "Avvia autoplay"}
          >
            {isAutoplay ? "⏸ Ferma" : "▶ Autoplay"}
          </button>
        </div>

        <button
          onClick={goToNext}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          aria-label="Slide successiva"
        >
          Successiva →
        </button>
      </div>

      {/* Indicatori */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalSlides }, (_, i) => {
          const slideNumber = i + 1;
          const isActive = slideNumber === currentSlide;

          return (
            <button
              key={slideNumber}
              onClick={() => navigateToSlide(slideNumber)}
              className={`w-10 h-10 rounded-full font-semibold transition-all ${
                isActive
                  ? "bg-blue-600 text-white scale-110 shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              aria-label={`Vai alla slide ${slideNumber}`}
              aria-current={isActive ? "true" : undefined}
            >
              {slideNumber}
            </button>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
        />
      </div>
    </div>
  );
};
