## Ian Kim - e-Commerce Site Test Automation Suite

This is Ian Kim's Complete App Automation Suite.

Tests were built on the online test webshop: **'https://automationteststore.com'**.

**Runner & style:** The suite uses Playwright Test (TypeScript) with Gherkin BDD via playwright-bdd. Feature files are converted to Playwright specs with bddgen, so we keep BDD readability and still get Playwright’s fixtures, tracing, retries, reporters and projects.

**Fixtures | Fixture file:** With a single fixtures (index.ts) file extends test (from playwright-bdd) to inject all Page Objects and flows into test steps.

**Page Objects & Flows:**

- POMs per screen (Shop, Cart, Checkout) hold selectors and action methods interacting with UI.
- A flow layer (e.g. PurchaseFlow) consolidates multi-page tasks like “purchase product” to keep steps declarative.

**Locators & Assertions:**

- Prefer role (getByRole) or testId locators for robustness. However, due to limitations with e-Commerce website & inability to add testId attributes, had to fall back to class token CSS (.btn.btn-sm...).
- Assertions use Playwright’s expect with clear in-built assertion messages.
- Helper methods sometimes assert internally (e.g., toHaveCount(1)).

**Config & runtime:**

- playwright.config.ts wires defineBddConfig({ features, steps }) and uses baseURL so page.goto('/path') resolves cleanly.
- Scripts added to abstract complexity around commands such as '**npm run bddgen && playwright tes**t'.

---

### Tech Stack:

- Language:
    - Javascript/Typescript

- Key Frameworks/Tools:
    - Playwright
    - playwright-bdd (Gherkin .feature support)
    - Typescript
    - Node.js/npm

- Patterns/Architecture:
    - Page Object Model (POM) components: clear selectors & actions per page (e.g. ShopPage, CartPage).
    - Flow/Service layer (e.g. PurchaseFlow - Cross page business tasks)

---

### Project Structure:

- features/
  - *.feature             # All feature files are located here
  - steps/                # BDD declarative steps (Given/When/Then)
  - support/              # Support code that runs before any steps (Hooks)
- fixtures/
  - pages/                # POMs (ShopPage, CartPage, CheckoutPage…) + fixture file exposing POMs/flows
  - flows/                # Business flows (PurchaseFlow)
- test-data/              # Centralised test data to be used across environments & tests
- package.json            # Source of truth for all project dependencies. Contains all script commands to run tests
- playwright.config.ts    # baseURL, reporter, BDD wiring (Wires Gherkin files into Playwright Test runner)

---

## How to use:

### Pre-requisites
1) Node.js ≥ 18
2) Access to github repository.
3) An IDE installed e.g. Visual Studio Code

### Steps

1) Clone the repository from GitHub
2) On the Terminal, enter 'npm i' to download all dependencies.
3) On the Terminal, enter 'npx playwright install' to download all Playwright related packages. 
4) Navigate to the module you want to execute tests.
5) On the Terminal, run a script command (e.g. 'npm run test:bdd:headed' - For all tests in headed view) to execute the tests/subset of tests in a specific manner.

---
