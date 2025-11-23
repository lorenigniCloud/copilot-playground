# Guida Completa GitHub Copilot in VS Code

## 🎯 Panoramica Rapida

GitHub Copilot è il tuo assistente di coding AI che ti aiuta a scrivere codice più velocemente e con meno errori. Questa guida ti mostra come sfruttarlo al massimo in VS Code.

## 🚀 Modalità di Accesso

### 1. Pannello Copilot (Sidebar)

- **Shortcut**: `Ctrl/Cmd+Shift+I` o clicca l'icona Copilot
- **Uso**: Chat persistente, cronologia conversazioni, richieste rapide
- **Ideale per**: Brainstorming, architettura, spiegazioni complesse

### 2. Chat In-Editor

- **Shortcut**: `Ctrl/Cmd+I` (con codice selezionato)
- **Uso**: Chat ancorata al contesto del file corrente
- **Ideale per**: Refactoring mirato, fix specifici, ottimizzazioni

### 3. Inline Completions

- **Apparizione**: Automatica durante la digitazione (testo grigio)
- **Navigazione**:
  - `Tab`: Accetta suggerimento completo
  - `Ctrl/Cmd+→`: Accetta parola per parola
  - `Alt/Option+]`: Suggerimento successivo
  - `Alt/Option+[`: Suggerimento precedente
  - `Esc`: Annulla suggerimento

## 💡 Comandi Slash Essenziali

Usali nella chat per azioni specifiche:

- `/explain` - Spiega il codice selezionato
- `/tests` - Genera test per la funzione/classe
- `/fix` - Corregge errori nel codice
- `/doc` - Genera documentazione
- `/optimize` - Ottimizza performance
- `/refactor` - Ristruttura il codice
- `/commitmessage` - Genera messaggio commit dalle diff
- `/terminal` - Genera comandi shell
- `/file` - Legge e analizza un file intero
- `@web` - Cerca informazioni sul web con fonti affidabili
- `@docs` - Riferisce alla documentazione ufficiale del progetto

## 🔧 Quick Fix & Actions

1. **Lampadina Quick Fix**: `Ctrl/Cmd+.`

   - "Explain this" - Spiegazione contestuale
   - "Generate Tests" - Test automatici
   - "Optimize" - Miglioramenti performance

2. **Copilot Actions nel menu contestuale**:
   - Tasto destro → "Copilot" → azioni disponibili

## 📁 Vibe Coding con Template .md

### Struttura Template Consigliata:

```markdown
# [Nome Progetto/Feature]

## 🎯 Obiettivo

- Cosa deve fare
- Risultato atteso

## 📋 Requisiti

- [ ] Funzionalità A
- [ ] Funzionalità B
- [ ] Test coverage

## 🏗️ Architettura

- Componenti principali
- Flusso dati
- Dipendenze

## 🚧 Vincoli

- Performance
- Compatibilità
- Limitazioni tecniche

## 💻 Esempi

\`\`\`typescript
// Esempio di utilizzo
\`\`\`

## 📝 Note Implementazione

- Pattern da seguire
- Best practices
```

## 🧭 Istruzioni personalizzate del repository (GitHub Copilot)

Le “repository custom instructions” permettono di dare a Copilot linee guida persistenti per questo progetto.

Tipi supportati:

- Istruzioni di repository: `.github/copilot-instructions.md` (si applicano a tutto il repo)
- Istruzioni per percorso: `.github/instructions/NAME.instructions.md` con frontmatter `applyTo` per definire i file interessati
- Istruzioni per agenti: `AGENTS.md` vicino al codice a cui si riferiscono (opzionale)

Esempi pratici:

1. Istruzioni globali del progetto

```
# File: .github/copilot-instructions.md

# docs/references/nextjs-resources.md

## Next.js Resources

- [Next.js Docs](https://nextjs.org/docs)
```

2. Regole per file TypeScript e React

```markdown
# File: .github/instructions/typescript.instructions.md

---

## applyTo: "**/\*.ts,**/\*.tsx"

- Usare tipi espliciti per props e return.
- Evitare any; preferire generics.
- Componenti React: usare memo solo quando necessario; evitare re-render superflui.
```

Note utili:

- Le istruzioni vengono automaticamente incluse nelle richieste di Copilot Chat fatte nel contesto del repository.
- Priorità: personali > repository > organizzazione; quando possibile evita conflitti.
- Puoi abilitare/disabilitare l’uso delle istruzioni dal pannello Chat su GitHub.

Riferimento ufficiale: “Adding repository custom instructions for GitHub Copilot” (docs.github.com).
Poi usa: `@docs:references/react-patterns Come creare un custom hook?`

## 🔄 Workflow Ottimizzato

### 1. Pianificazione (Istruzioni-First)

```
Aggiorna `.github/copilot-instructions.md` → Lavora con Copilot → Verifica → Documenta miglioramenti
```

### 2. Sviluppo (Context-Aware)

```
Select code → Ctrl/Cmd+I → /explain or /refactor → Apply changes
```

### 3. Testing

```
Select function → Chat → /tests → Review → Integrate
```

### 4. Commit

```
Git changes → Chat → /commitmessage → Review → Use
```

## 🎨 Personalizzazione VS Code

### Settings Raccomandati:

```json
{
  "github.copilot.enable": {
    "*": true,
    "markdown": true
  },
  "github.copilot.editor.enableAutoCompletions": true,
  "editor.inlineSuggest.enabled": true,
  "editor.formatOnSave": true
}
```

### Extensions Complementari:

- GitHub Copilot
- GitHub Copilot Chat
- Prettier (formatting)
- ESLint (linting)

## 🎯 Prompt Engineering Tips

### Buone Pratiche:

1. **Sii specifico**: "Crea un hook React per gestire form validation con Zod"
2. **Fornisci contesto**: "Nel progetto Next.js, usando TypeScript e Tailwind"
3. **Specifica pattern**: "Usa il pattern Repository per il data access"
4. **Indica vincoli**: "Ottimizza per performance, evita re-render"

### Esempi di Prompt Efficaci:

```
❌ "Fai una funzione"
✅ "Crea una funzione TypeScript che valida email con regex e ritorna boolean"

❌ "Migliora questo"
✅ "Refactor questa funzione per usare async/await invece di Promise chains"

❌ "Aggiungi test"
✅ "Genera test Jest per questa funzione, includi edge cases e mock delle dipendenze"

❌ "Come si fa authentication?"
✅ "@web Best practices per JWT authentication in Next.js con TypeScript"

❌ "Errore nel build"
✅ "@web Next.js build error: 'Module not found' con TypeScript + seleziona stack trace"
```

### 5. **Prompt con Web Research**

```
@web + specificity: "@web Come ottimizzare bundle size in Next.js 14 con App Router"
@web + context: "@web Migrazione da Create React App a Next.js mantenendo TypeScript"
@web + troubleshooting: "@web Risolvere conflitti di dipendenze con pnpm workspaces"
```

## 🚀 Shortcut Rapidi

| Azione              | Shortcut            | Uso                  |
| ------------------- | ------------------- | -------------------- |
| Chat Sidebar        | `Ctrl/Cmd+Shift+I`  | Conversazioni lunghe |
| Inline Chat         | `Ctrl/Cmd+I`        | Edit contestuali     |
| Accetta Suggestion  | `Tab`               | Completamento veloce |
| Prossimo Suggestion | `Alt+]`             | Naviga opzioni       |
| Quick Fix           | `Ctrl/Cmd+.`        | Azioni contestuali   |
| Terminal Command    | `/terminal` in chat | Comandi shell        |
| Web Search          | `@web` in chat      | Ricerca con fonti    |
| Docs Reference      | `@docs` in chat     | Documentazione       |

## 🔍 Debugging con Copilot

1. **Spiega l'errore**: Seleziona stack trace → `/explain`
2. **Fix automatico**: Seleziona codice problematico → `/fix`
3. **Genera log**: "Aggiungi logging per debug in questa funzione"
4. **Test edge cases**: "Genera test per i casi limite di questa funzione"

## 📈 Metriche e Miglioramento

### Monitora la tua produttività:

- Tempo risparmiato su boilerplate
- Riduzione errori syntax
- Velocità in task ripetitivi
- Qualità dei test generati

### Continuously Improve:

- Raffina i tuoi template `.md`
- Raccogli prompt che funzionano bene
- Impara dai suggerimenti di Copilot
- Sperimenta con nuovi comandi slash

---

## 🎪 Playground Specifico

In questo progetto puoi sperimentare:

1. **Istruzioni del repository** - Aggiungi `.github/copilot-instructions.md` e prova l’effetto in Copilot Chat
2. **Componenti React** - Genera nuovi componenti con Copilot
3. **Utility functions** - Crea helpers con documentazione auto-generata
4. **Test automatici** - Usa `/tests` sui componenti esistenti
5. **Commit messages** - Prova `/commitmessage` sulle tue modifiche

**Prossimo step**: Aggiungi `.github/copilot-instructions.md` con build, test e struttura del progetto; poi crea un nuovo componente con l’aiuto di Copilot!
