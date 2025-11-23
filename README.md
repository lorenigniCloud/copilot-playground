# 🎪 Copilot Playground - Next.js + TypeScript

Un playground pratico per sperimentare GitHub Copilot in VS Code con Next.js + TypeScript.

## 🚀 Quick Start

```bash
# Installa dipendenze
pnpm install

# Avvia development server
pnpm dev

# Apri http://localhost:3000
```

## 📁 Struttura Progetto

```
copilot-playground/
├── 📁 app/              # Next.js App Router
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── 📁 components/       # Componenti React riusabili
│   └── ExampleComponent.tsx
├── 📁 docs/             # Documentazione
│   └── Copilot-Guida.md # Guida completa Copilot
└── 📁 .vscode/         # Configurazione VS Code
    ├── extensions.json  # Extensions raccomandate
    └── settings.json    # Settings Copilot-ready

Suggerito (opzionale): aggiungi una cartella `.github/` con `copilot-instructions.md` per le istruzioni personalizzate del repository.
```

## 🎯 Cosa Puoi Sperimentare

### 1. 🤖 GitHub Copilot Features

- **Inline Completions**: Scrivi codice e vedi suggerimenti in tempo reale
- **Chat Integration**: `Ctrl/Cmd+Shift+I` per conversazioni
- **Slash Commands**: `/explain`, `/tests`, `/fix`, `/refactor`
- **Quick Actions**: `Ctrl/Cmd+.` per azioni contestuali

### 2. 🧭 Istruzioni personalizzate del repository (Consigliato)

- Crea `.github/copilot-instructions.md` con linee guida su build, test, run e struttura del progetto.
- Per aree specifiche, usa `.github/instructions/NAME.instructions.md` con frontmatter `applyTo` per associare i file interessati.
- Queste istruzioni vengono automaticamente usate da Copilot Chat quando lavori nel repo.

### 3. ⚡ Workflow Ottimizzato

```bash
# Workflow tipico
1. Scrivi/aggiorna `.github/copilot-instructions.md` (build, test, run, lint)
2. Lavora con Copilot (inline + chat) sui file del progetto
3. Usa `/tests`, `/fix`, `/refactor` per accelerare
4. Verifica in locale (dev/build) e committa
```

## 🛠️ Scripts Disponibili

```bash
pnpm dev         # Development server (localhost:3000)
pnpm build       # Build production
pnpm start       # Start production server
pnpm lint        # Lint con ESLint
```

## 🎓 Tutorial Quick Start

### 1. Prima Esperienza - Componente Semplice

```bash
# 1. Apri `components/`
# 2. In Copilot Chat: "Genera un componente React TS che mostra un contatore con + e -"
# 3. Incolla il codice in `components/Counter.tsx`
# 4. Importa e usa il componente in `app/page.tsx`
# 5. Avvia: pnpm dev
```

### 2. Secondo Esperimento - Refactoring

```bash
# 1. Analizza `components/ExampleComponent.tsx`
# 2. Seleziona il codice → /explain in chat
# 3. Chiedi: "/refactor elimina re-render inutili e aggiungi prop types chiari"
# 4. Applica e verifica con pnpm dev
```

### 3. Terzo Esperimento - Testing

```bash
# 1. Seleziona una funzione/componente
# 2. Usa /tests in chat per generare test (Jest/RTL)
# 3. Integra la suite ed esegui con pnpm test (quando configurato)
```

## 🎨 Personalizzazione

### Istruzioni personalizzate (dove metterle)

Se vuoi guidare Copilot nel tuo repository:

- Crea `.github/copilot-instructions.md` per le regole generali del progetto.
- Crea `.github/instructions/NAME.instructions.md` con:

```markdown
---
applyTo: "**/*.ts,**/*.tsx"
---

Linee guida specifiche per TypeScript e React...
```

### Configurare Extensions Utili

Le extensions raccomandate sono in `.vscode/extensions.json`:

- GitHub Copilot & Chat
- TypeScript & React support
- Prettier & ESLint

### Customizzare Settings Copilot

Modifica `.vscode/settings.json` per:

- Abilitare/disabilitare Copilot per linguaggi specifici
- Configurare auto-completions
- Personalizzare formatting

## 📚 Risorse di Apprendimento

### 📖 Documentazione Locale

- `docs/Copilot-Guida.md` - Guida completa in italiano

### 🔗 Link Utili

- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🎯 Obiettivi di Apprendimento

Dopo aver sperimentato con questo playground dovresti saper:

- ✅ Usare efficacemente Copilot inline completions
- ✅ Navigare tra suggerimenti multipli
- ✅ Utilizzare chat per spiegazioni e refactoring
- ✅ Applicare slash commands per task specifici
- ✅ Strutturare progetti con template Vibe Coding
- ✅ Generare test automaticamente
- ✅ Creare commit messages strutturati
- ✅ Integrare Copilot nel workflow quotidiano

## 🚀 Prossimi Passi

1. **Esplora**: Naviga tra i file esistenti con Copilot
2. **Crea**: Costruisci un nuovo componente usando i template
3. **Migliora**: Refactoring di codice esistente
4. **Testa**: Aggiungi test coverage
5. **Documenta**: Usa Copilot per generare docs
6. **Condividi**: Commit con messaggi strutturati

## 🤝 Contribuire

Questo è il tuo playground! Sperimenta liberamente:

- Aggiungi nuovi componenti
- Crea template personalizzati
- Testa workflow diversi
- Documenta scoperte interessanti

## 📄 License

Progetto educativo - usa come preferisci per imparare Copilot!

---

**Happy Coding with Copilot! 🎉**

_Ricorda: il vero valore di Copilot emerge quando combini la sua potenza con una pianificazione strutturata. I template sono la chiave per sbloccare questo potenziale._
