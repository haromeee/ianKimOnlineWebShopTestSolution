## Ian Kim - e-Commerce Site Test Automation Suite

This is Ian Kim's Complete App Automation Suite.

The suite uses Playwright Test with TypeScript, a Page Object Model (POM), reusable flow/services (e.g. purchase flow) and BDD feature files executed via playwright-bdd.

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

features/
  *.feature             # All feature files are located here
  steps/                # BDD declarative steps (Given/When/Then)
  support/              # Support code that runs before any steps (Hooks)
fixtures/
  pages/                # POMs (ShopPage, CartPage, CheckoutPage…) + fixture exposing POMs/flows
  flows/                # Business flows (PurchaseFlow)
test-data/              # Centralised test data to be used across environments & tests
package.json            # Source of truth for all project dependencies. Contains all script commands to run tests
playwright.config.ts    # baseURL, reporter, BDD wiring

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
