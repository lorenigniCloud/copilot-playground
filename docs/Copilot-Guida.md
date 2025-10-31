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

### Come Usare i Template:

1. **Crea** il template `.md` nella cartella `.vibe/`
2. **Apri l'anteprima** con `Ctrl/Cmd+Shift+V`
3. **Seleziona sezioni** e usa `Ctrl/Cmd+I` per farle completare da Copilot
4. **Copia risultati** nella chat per generare codice coerente

## 🔄 Workflow Ottimizzato

### 1. Pianificazione (Template-First)

```
Template .md → Copilot completion → Refine → Apply to code
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

1. **Template nella cartella `.vibe/`** - Modifica e usa per nuove feature
2. **Componenti React** - Genera nuovi componenti con Copilot
3. **Utility functions** - Crea helpers con documentazione auto-generata
4. **Test automatici** - Usa `/tests` sui componenti esistenti
5. **Commit messages** - Prova `/commitmessage` sulle tue modifiche

**Prossimo step**: Prova a creare un nuovo componente usando prima un template `.md`, poi lascia che Copilot generi il codice!
