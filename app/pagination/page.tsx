import { PaginationBar } from "@/components/PaginationBar";

interface SearchParams {
  page?: string;
}

interface PaginationPageProps {
  searchParams: SearchParams;
}

// Mock data generator
function generateItems(page: number, perPage: number) {
  const start = (page - 1) * perPage;
  return Array.from({ length: perPage }, (_, i) => ({
    id: start + i + 1,
    title: `Articolo ${start + i + 1}`,
    description: `Descrizione dell'articolo numero ${start + i + 1}`,
  }));
}

export default function PaginationPage({ searchParams }: PaginationPageProps) {
  // Server Component: legge searchParams e calcola i dati
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 5;
  const totalItems = 42; // In un caso reale, verrebbe dal database
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Fetch dei dati paginati (qui simulato)
  const items = generateItems(currentPage, itemsPerPage);

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Pagination Bar</h1>
      <p className="text-gray-600 mb-6">
        Esempio di paginazione server-driven con Client Component per la
        navigazione
      </p>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Pagina {currentPage} di {totalPages}
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-400 transition-colors"
            >
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client Component per la navigazione */}
      <PaginationBar totalPages={totalPages} />
    </main>
  );
}
