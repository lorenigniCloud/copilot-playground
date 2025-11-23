"use client";

import styles from "./ExampleComponent.module.css";
import { useState } from "react";

export function ExampleComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className={`${styles.card} p-4 border rounded-lg`}>
      <h2 className={`text-xl font-semibold mb-2 ${styles.neon}`}>
        Componente di Esempio
      </h2>
      <p className={styles.subtitle}>Contatore: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className={`mt-2 px-4 py-2 text-white rounded ${styles.button}`}
      >
        Incrementa
      </button>
    </div>
  );
}
