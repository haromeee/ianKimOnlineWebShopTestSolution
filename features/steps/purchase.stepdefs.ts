import { createBdd } from "playwright-bdd";
import { test, expect } from "../../fixtures/pages";

const { Given, When, Then } = createBdd(test);

/**
   * Step definition for adding a product to cart from the specified category page by name
   *
   * @param category Category name displayed on Home page categories menu
   * @param index The nth product card in a product grid page
   */

When(
  /^I add product "(.*)" under category "(.*)" to cart$/,
  async ({ purchaseFlow }, productName: string, category: string) => {
    await purchaseFlow.addToCartByProductName(category, productName);
  }
);

/**
   * Step definition to verify if the specified product exists in final cart at Checkout
   *
   * @param productName Name of product
   */

Then(
  /^I verify product "(.*)" added successfully to final checkout cart$/,
  async ({ purchaseFlow }, productName: string) => {
    await purchaseFlow.verifyProductAddedToFinalCart(productName);
  }
);