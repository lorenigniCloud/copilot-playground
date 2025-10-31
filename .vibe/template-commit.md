# Template per Commit Messages

## 🎯 Analisi delle Modifiche

### File Modificati:

```
📁 [Lista file dal git status]
```

### Tipo di Modifica:

- [ ] feat: Nuova funzionalità
- [ ] fix: Bug fix
- [ ] docs: Documentazione
- [ ] style: Formatting, linting
- [ ] refactor: Code refactoring
- [ ] test: Aggiunta/modifica test
- [ ] chore: Maintenance tasks
- [ ] perf: Performance improvement
- [ ] ci: CI/CD changes

## 📝 Descrizione Modifiche

### Cosa è stato fatto:

-
-
-

### Perché è stato fatto:

-
-
-

### Come è stato implementato:

-
-
-

## 🎯 Impatto

### Funzionalità Aggiunte:

-
-

### Funzionalità Modificate:

-
-

### Bug Risolti:

-
-

### Breaking Changes:

- [ ] Nessuno
- [ ] API changes
- [ ] Database schema
- [ ] Configuration changes
- [ ] Dependencies update
- Dettagli:

## 🧪 Testing

### Test Aggiunti/Modificati:

-
-

### Test Coverage:

- Prima: %
- Dopo: %

### Manual Testing:

- [ ] Feature testing completato
- [ ] Regression testing completato
- [ ] Cross-browser testing (se applicabile)

## 📋 Checklist Pre-Commit

- [ ] Lint passa
- [ ] Test suite passa
- [ ] Build successful
- [ ] Documentation aggiornata
- [ ] No console.log dimenticati
- [ ] No TODO temporanei
- [ ] Performance accettabile

## 🔗 Riferimenti

### Issue/Task ID:

- Fixes #
- Closes #
- Relates to #

### Pull Request:

- PR #

### Design/Specs:

- Link to design:
- Link to specs:

## 💭 Note per i Reviewer

### Aree che richiedono attenzione:

-
-

### Decisioni di design da discutere:

-
-

### Punti di miglioramento futuri:

-
-

---

## 🚀 Generated Commit Message

### Formato Conventional Commits:

```
type(scope): short description

Longer explanation if needed.

- List of changes
- Another change
- Final change

Fixes #123
```

### Esempi:

```
feat(auth): add OAuth2 login integration

Implement Google and GitHub OAuth2 providers for user authentication.
Add new login component with provider selection and error handling.

- Add OAuth2Service with provider abstractions
- Implement GoogleAuthProvider and GitHubAuthProvider
- Update LoginForm component with provider buttons
- Add error handling for failed authentication
- Include tests for new authentication flows

Fixes #45
```

```
fix(ui): resolve mobile responsive issues in header

The header navigation was broken on mobile devices due to incorrect
CSS media queries and missing touch event handlers.

- Fix CSS media queries for mobile breakpoints
- Add touch event handling for mobile menu toggle
- Improve accessibility with proper ARIA labels
- Update header component tests

Fixes #78
```

---

**Istruzioni d'uso**:

1. Esegui `git status` e `git diff` per vedere le modifiche
2. Usa `/commitmessage` in Copilot Chat per generazione automatica
3. Compila questo template per commit complessi
4. Segui il formato Conventional Commits
5. Includi sempre reference agli issue risolti
