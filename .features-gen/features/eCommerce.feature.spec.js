// Generated from: features/eCommerce.feature
import { test } from "../../fixtures/pages/index.ts";

test.describe('eCommerce site validations', () => {

  test.describe('Place order for first item in category', () => {

    test('Example #1', { tag: ['@ecommerce', '@logged-in'] }, async ({ When, purchaseFlow, Then }) => { 
      await When('I add product "Allegiant by Veronica Roth" under category "Books" to cart', null, { purchaseFlow }); 
      await Then('I verify product "Allegiant by Veronica Roth" added successfully to final checkout cart', null, { purchaseFlow }); 
    });

    test('Example #2', { tag: ['@ecommerce', '@logged-in'] }, async ({ When, purchaseFlow, Then }) => { 
      await When('I add product "Secret Obsession Perfume" under category "Fragrance" to cart', null, { purchaseFlow }); 
      await Then('I verify product "Secret Obsession Perfume" added successfully to final checkout cart', null, { purchaseFlow }); 
    });

    test('Example #3', { tag: ['@ecommerce', '@logged-in'] }, async ({ When, purchaseFlow, Then }) => { 
      await When('I add product "Tropiques Minerale Loose Bronzer" under category "Makeup" to cart', null, { purchaseFlow }); 
      await Then('I verify product "Tropiques Minerale Loose Bronzer" added successfully to final checkout cart', null, { purchaseFlow }); 
    });

  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features/eCommerce.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ loginPage }, use) => use({ loginPage }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":11,"tags":["@ecommerce","@logged-in"],"steps":[{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I add product \"Allegiant by Veronica Roth\" under category \"Books\" to cart","stepMatchArguments":[{"group":{"start":15,"value":"Allegiant by Veronica Roth","children":[]},"parameterTypeName":""},{"group":{"start":59,"value":"Books","children":[]},"parameterTypeName":""}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I verify product \"Allegiant by Veronica Roth\" added successfully to final checkout cart","stepMatchArguments":[{"group":{"start":18,"value":"Allegiant by Veronica Roth","children":[]},"parameterTypeName":""}]}]},
  {"pwTestLine":13,"pickleLine":12,"tags":["@ecommerce","@logged-in"],"steps":[{"pwStepLine":14,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I add product \"Secret Obsession Perfume\" under category \"Fragrance\" to cart","stepMatchArguments":[{"group":{"start":15,"value":"Secret Obsession Perfume","children":[]},"parameterTypeName":""},{"group":{"start":57,"value":"Fragrance","children":[]},"parameterTypeName":""}]},{"pwStepLine":15,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I verify product \"Secret Obsession Perfume\" added successfully to final checkout cart","stepMatchArguments":[{"group":{"start":18,"value":"Secret Obsession Perfume","children":[]},"parameterTypeName":""}]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":["@ecommerce","@logged-in"],"steps":[{"pwStepLine":19,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I add product \"Tropiques Minerale Loose Bronzer\" under category \"Makeup\" to cart","stepMatchArguments":[{"group":{"start":15,"value":"Tropiques Minerale Loose Bronzer","children":[]},"parameterTypeName":""},{"group":{"start":65,"value":"Makeup","children":[]},"parameterTypeName":""}]},{"pwStepLine":20,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I verify product \"Tropiques Minerale Loose Bronzer\" added successfully to final checkout cart","stepMatchArguments":[{"group":{"start":18,"value":"Tropiques Minerale Loose Bronzer","children":[]},"parameterTypeName":""}]}]},
]; // bdd-data-end