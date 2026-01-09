import { InfiniteScrollTrigger } from "@/components/InfiniteScrollTrigger";

interface SearchParams {
  page?: string;
}

interface InfiniteScrollPageProps {
  searchParams: SearchParams;
}

// Mock data generator
function generateItems(page: number, perPage: number) {
  const start = (page - 1) * perPage;
  return Array.from({ length: perPage }, (_, i) => ({
    id: start + i + 1,
    title: `Post ${start + i + 1}`,
    description: `Contenuto del post numero ${
      start + i + 1
    }. Questo è un esempio di caricamento progressivo.`,
    image: `https://picsum.photos/seed/${start + i + 1}/400/300`,
  }));
}

export default function InfiniteScrollPage({
  searchParams,
}: InfiniteScrollPageProps) {
  // Server Component: legge searchParams.page e carica i dati fino a quella pagina
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 6;
  const totalItems = 30; // In un caso reale, verrebbe dal database
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const hasMore = currentPage < totalPages;

  // Carica tutti gli item fino alla pagina corrente (accumulo)
  const allItems = Array.from({ length: currentPage }, (_, i) =>
    generateItems(i + 1, itemsPerPage)
  ).flat();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Infinite Scroll</h1>
      <p className="text-gray-600 mb-6">
        Esempio di caricamento progressivo con trigger per caricare più
        contenuti
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {allItems.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Client Component per il trigger di caricamento */}
      <InfiniteScrollTrigger
        hasMore={hasMore}
        currentPage={currentPage}
        itemsLoaded={allItems.length}
        totalItems={totalItems}
      />
    </main>
  );
}
