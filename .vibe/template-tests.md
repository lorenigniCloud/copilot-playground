# Template per Generazione Test

## 🎯 Target da Testare

### Funzione/Classe/Modulo:

```typescript
// Incolla qui il codice da testare
```

### Tipo di Componente:

- [ ] Pure Function
- [ ] React Component
- [ ] Custom Hook
- [ ] API Service
- [ ] Utility Class
- [ ] Altro:

## 📋 Scenari di Test

### Happy Path:

- [ ] Input valido standard
- [ ] Caso d'uso principale
- [ ] Flow completo end-to-end

### Edge Cases:

- [ ] Input vuoti/null/undefined
- [ ] Valori limite (min/max)
- [ ] Array/string vuoti
- [ ] Oggetti nested complessi

### Error Cases:

- [ ] Input invalidi
- [ ] Network failures (se applicabile)
- [ ] Permission denied
- [ ] Timeout scenarios
- [ ] Errori di validazione

### Performance Cases:

- [ ] Large datasets
- [ ] Concurrent operations
- [ ] Memory leaks
- [ ] Long-running operations

## 🛠️ Setup Testing

### Framework di Test:

- [ ] Jest
- [ ] Vitest
- [ ] React Testing Library
- [ ] Cypress/Playwright
- [ ] Altro:

### Mock Requirements:

- [ ] API calls
- [ ] Database queries
- [ ] External services
- [ ] Date/Time
- [ ] Random values
- [ ] Browser APIs

### Test Data:

```typescript
// Mock data examples
const mockUser = {
  id: 1,
  name: "Test User",
  email: "test@example.com",
};

const mockApiResponse = {
  data: [],
  status: 200,
  message: "Success",
};
```

## 🧪 Test Categories

### Unit Tests:

- [ ] Logica interna
- [ ] Trasformazioni dati
- [ ] Calcoli e algoritmi
- [ ] Validazioni

### Integration Tests:

- [ ] Interazione componenti
- [ ] API calls
- [ ] Database operations
- [ ] External services

### Component Tests (se React):

- [ ] Rendering corretto
- [ ] Props handling
- [ ] Event handling
- [ ] State changes
- [ ] Lifecycle methods

### E2E Tests:

- [ ] User workflows
- [ ] Cross-browser compatibility
- [ ] Responsive behavior

## 📊 Coverage Goals

### Minimum Coverage:

- [ ] Statements: 80%
- [ ] Branches: 75%
- [ ] Functions: 90%
- [ ] Lines: 80%

### Critical Paths:

- [ ] Business logic: 100%
- [ ] Security functions: 100%
- [ ] Payment/transactions: 100%
- [ ] Data validation: 95%

## 🎭 Test Doubles Strategy

### Stubs:

-
-

### Mocks:

-
-

### Spies:

-
-

### Fakes:

-
-

## ⚡ Performance Testing

### Metrics da Misurare:

- [ ] Execution time
- [ ] Memory usage
- [ ] CPU utilization
- [ ] Network requests count

### Thresholds:

- Max execution time:
- Max memory usage:
- Max network calls:

## 📝 Test Documentation

### Naming Convention:

```
describe("[Component/Function name]", () => {
  describe("when [condition]", () => {
    it("should [expected behavior]", () => {
      // Test implementation
    });
  });
});
```

### Test Structure (AAA):

```typescript
// Arrange - Setup test data and dependencies

// Act - Execute the function/behavior under test

// Assert - Verify the expected outcome
```

## 🚀 Automation

### CI/CD Integration:

- [ ] Run on every commit
- [ ] Run on PR creation
- [ ] Block merge if tests fail
- [ ] Generate coverage reports

### Test Scripts:

```json
{
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "test:e2e": "cypress run"
}
```

---

**Istruzioni d'uso**:

1. Seleziona il codice da testare
2. Usa `/tests` in Copilot Chat per generazione automatica
3. Compila questo template per casi complessi
4. Rivedi e customizza i test generati
5. Assicurati che tutti i test passino prima del commit
