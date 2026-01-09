import { Carousel } from "@/components/Carousel";

interface SearchParams {
  slide?: string;
}

interface CarouselPageProps {
  searchParams: SearchParams;
}

// Mock data generator per le slide
function generateSlides() {
  return [
    {
      id: 1,
      title: "Benvenuto nel Carousel",
      description: "Questo è il primo slide del nostro carousel",
      image: "https://picsum.photos/seed/carousel1/800/400",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Navigazione Fluida",
      description: "Naviga tra le slide usando i pulsanti o la tastiera",
      image: "https://picsum.photos/seed/carousel2/800/400",
      color: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      title: "URL Sincronizzato",
      description: "Lo stato della slide è sincronizzato con l'URL",
      image: "https://picsum.photos/seed/carousel3/800/400",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 4,
      title: "Server Component",
      description: "I dati vengono caricati lato server",
      image: "https://picsum.photos/seed/carousel4/800/400",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 5,
      title: "Client Interactivity",
      description:
        "La navigazione avviene lato client per performance ottimali",
      image: "https://picsum.photos/seed/carousel5/800/400",
      color: "from-indigo-500 to-blue-600",
    },
  ];
}

export default function CarouselPage({ searchParams }: CarouselPageProps) {
  // Server Component: legge searchParams.slide e carica i dati
  const currentSlide = Number(searchParams.slide) || 1;
  const slides = generateSlides();
  const totalSlides = slides.length;

  // Validazione dell'indice (clamp tra 1 e totalSlides)
  const validSlideIndex = Math.max(1, Math.min(currentSlide, totalSlides));
  const currentSlideData = slides[validSlideIndex - 1];

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Carousel</h1>
      <p className="text-gray-600 mb-6">
        Esempio di carousel con navigazione URL-driven e stato sincronizzato
      </p>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Slide corrente */}
        <div
          className={`relative h-96 bg-gradient-to-r ${currentSlideData.color}`}
        >
          <img
            src={currentSlideData.image}
            alt={currentSlideData.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <h2 className="text-4xl font-bold mb-4 text-center drop-shadow-lg">
              {currentSlideData.title}
            </h2>
            <p className="text-xl text-center drop-shadow-md max-w-2xl">
              {currentSlideData.description}
            </p>
          </div>
        </div>

        {/* Client Component per la navigazione */}
        <Carousel totalSlides={totalSlides} currentSlide={validSlideIndex} />
      </div>

      {/* Info aggiuntive */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">💡 Funzionalità:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Navigazione con pulsanti Precedente/Successivo</li>
          <li>Indicatori numerici cliccabili</li>
          <li>Navigazione con tastiera (← →)</li>
          <li>
            URL sincronizzato (puoi condividere il link a una slide specifica)
          </li>
          <li>Autoplay opzionale con toggle</li>
        </ul>
      </div>
    </main>
  );
}
