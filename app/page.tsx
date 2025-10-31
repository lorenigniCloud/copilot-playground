import { ExampleComponent } from "@/components/ExampleComponent";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Copilot Playground</h1>
      <p className="text-lg mb-4">
        Benvenuto nel playground per sperimentare con GitHub Copilot!
      </p>
      <ExampleComponent />
    </main>
  );
}
