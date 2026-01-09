"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationBarProps {
  totalPages: number;
}

export const PaginationBar = ({ totalPages }: PaginationBarProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.replace(`?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsisStart = currentPage > 3;
    const showEllipsisEnd = currentPage < totalPages - 2;

    // Sempre mostra la prima pagina
    pages.push(1);

    if (showEllipsisStart) {
      pages.push("...");
    }

    // Pagine centrali
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (showEllipsisEnd) {
      pages.push("...");
    }

    // Sempre mostra l'ultima pagina
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => navigateToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        aria-label="Pagina precedente"
      >
        ← Precedente
      </button>

      <div className="flex gap-1">
        {getPageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${index}`} className="px-3 py-2">
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              onClick={() => navigateToPage(pageNumber)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-600 text-white font-semibold"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
              aria-label={`Vai alla pagina ${pageNumber}`}
              aria-current={isActive ? "page" : undefined}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => navigateToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        aria-label="Pagina successiva"
      >
        Successiva →
      </button>
    </div>
  );
};
