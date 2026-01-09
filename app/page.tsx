import { ExampleComponent } from "@/components/ExampleComponent";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Copilot Playground</h1>
      <p className="text-lg mb-8">
        Benvenuto nel playground per sperimentare con GitHub Copilot!
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          📚 Esempi di Pattern Server/Client
        </h2>
        <p className="text-gray-600 mb-6">
          Esplora i pattern di composizione Server Component + Client Component
          con stato sincronizzato via URL
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pagination Bar */}
          <Link
            href="/pagination"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
          >
            <div className="text-4xl mb-3">📄</div>
            <h3 className="text-xl font-semibold mb-2">Pagination Bar</h3>
            <p className="text-gray-600 text-sm">
              Paginazione classica con navigazione numerata. Il Server Component
              fetcha i dati paginati, il Client Component gestisce la
              navigazione via URL.
            </p>
            <div className="mt-4 text-blue-600 font-medium">Esplora →</div>
          </Link>

          {/* Infinite Scroll */}
          <Link
            href="/infinite-scroll"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500"
          >
            <div className="text-4xl mb-3">♾️</div>
            <h3 className="text-xl font-semibold mb-2">Infinite Scroll</h3>
            <p className="text-gray-600 text-sm">
              Caricamento progressivo con trigger. Gli item si accumulano man
              mano che si scorre, con Intersection Observer per il caricamento
              automatico.
            </p>
            <div className="mt-4 text-green-600 font-medium">Esplora →</div>
          </Link>

          {/* Carousel */}
          <Link
            href="/carousel"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-purple-500"
          >
            <div className="text-4xl mb-3">🎠</div>
            <h3 className="text-xl font-semibold mb-2">Carousel</h3>
            <p className="text-gray-600 text-sm">
              Slider con navigazione completa: pulsanti, indicatori, navigazione
              da tastiera e autoplay. Lo stato della slide è sincronizzato con
              l&apos;URL.
            </p>
            <div className="mt-4 text-purple-600 font-medium">Esplora →</div>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🧪 Componente di Test</h2>
        <ExampleComponent />
      </section>
    </main>
  );
}
