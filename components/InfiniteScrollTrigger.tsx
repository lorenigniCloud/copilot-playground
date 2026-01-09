"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface InfiniteScrollTriggerProps {
  hasMore: boolean;
  currentPage: number;
  itemsLoaded: number;
  totalItems: number;
}

export const InfiniteScrollTrigger = ({
  hasMore,
  currentPage,
  itemsLoaded,
  totalItems,
}: InfiniteScrollTriggerProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const loadMore = () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", (currentPage + 1).toString());
    router.replace(`?${params.toString()}`);

    // Reset loading dopo un breve delay per permettere la navigazione
    setTimeout(() => setIsLoading(false), 500);
  };

  // Intersection Observer per il caricamento automatico
  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(trigger);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, isLoading, currentPage]);

  if (!hasMore) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 font-medium">
          🎉 Hai visualizzato tutti i {totalItems} elementi!
        </p>
      </div>
    );
  }

  return (
    <div ref={triggerRef} className="text-center py-8">
      {isLoading ? (
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Caricamento in corso...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-500 text-sm">
            Caricati {itemsLoaded} di {totalItems} elementi
          </p>
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            aria-label="Carica altri elementi"
          >
            Carica altro
          </button>
        </div>
      )}
    </div>
  );
};
