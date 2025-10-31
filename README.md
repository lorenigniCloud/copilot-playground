# 🎪 Copilot Playground - Next.js + TypeScript

Un playground strutturato per sperimentare con GitHub Copilot usando il metodo **Vibe Coding** con template Markdown.

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
├── 📁 docs/            # Documentazione
│   └── Copilot-Guida.md # Guida completa Copilot
├── 📁 .vibe/           # Template per Vibe Coding
│   ├── README.md       # Come usare i template
│   ├── template-progetto.md
│   ├── template-refactor.md
│   ├── template-tests.md
│   └── template-commit.md
└── 📁 .vscode/         # Configurazione VS Code
    ├── extensions.json  # Extensions raccomandate
    └── settings.json    # Settings Copilot-ready
```

## 🎯 Cosa Puoi Sperimentare

### 1. 🤖 GitHub Copilot Features

- **Inline Completions**: Scrivi codice e vedi suggerimenti in tempo reale
- **Chat Integration**: `Ctrl/Cmd+Shift+I` per conversazioni
- **Slash Commands**: `/explain`, `/tests`, `/fix`, `/refactor`
- **Quick Actions**: `Ctrl/Cmd+.` per azioni contestuali

### 2. 📝 Vibe Coding Templates

- **Pianificazione**: Usa `template-progetto.md` per nuove feature
- **Refactoring**: Migliora codice con `template-refactor.md`
- **Testing**: Genera test con `template-tests.md`
- **Commit**: Messaggi strutturati con `template-commit.md`

### 3. ⚡ Workflow Ottimizzato

```bash
# Workflow tipico
1. Copia template da .vibe/
2. Compila con Copilot (Ctrl/Cmd+I)
3. Genera codice dalla specifica
4. Testa e itera
5. Commit strutturato
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
# 1. Copia template
cp .vibe/template-progetto.md .vibe/mio-primo-componente.md

# 2. Apri e compila il template
code .vibe/mio-primo-componente.md

# 3. Usa Ctrl/Cmd+I per far completare le sezioni a Copilot

# 4. Crea il componente:
# - Seleziona la specifica completa
# - Invia a Copilot Chat: "Genera componente React TypeScript"
# - Salva in components/MioPrimoComponente.tsx

# 5. Aggiungi al page.tsx e testa
```

### 2. Secondo Esperimento - Refactoring

```bash
# 1. Analizza ExampleComponent.tsx esistente
# Seleziona il codice → /explain in chat

# 2. Copia template refactor
cp .vibe/template-refactor.md .vibe/refactor-example.md

# 3. Compila problemi identificati e soluzioni

# 4. Applica refactoring guidato
# Seleziona codice → /refactor → applica suggerimenti

# 5. Testa che tutto funzioni ancora
```

### 3. Terzo Esperimento - Testing

```bash
# 1. Seleziona una funzione/componente
# 2. Usa /tests in chat per generazione automatica
# 3. Per casi complessi, usa template-tests.md
# 4. Implementa test mancanti
# 5. Verifica con pnpm test (quando configurato)
```

## 🎨 Personalizzazione

### Aggiungere Nuovi Template

```bash
# Crea nuovo template in .vibe/
cp .vibe/template-progetto.md .vibe/template-api.md
# Personalizza per API design, database schema, etc.
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
- `.vibe/README.md` - Come usare i template

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
