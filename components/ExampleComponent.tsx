"use client";

import { useState } from "react";

export function ExampleComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Componente di Esempio</h2>
      <p>Contatore: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Incrementa
      </button>
    </div>
  );
}
