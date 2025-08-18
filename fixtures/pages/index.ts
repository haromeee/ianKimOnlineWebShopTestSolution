import { test as base } from "playwright-bdd";
import { expect } from "@playwright/test";
import { BasePage } from "./base-page";
import { CartPage } from "./cart-page";
import { CategoryPage } from "./category-page";
import { CheckoutPage } from "./checkout-page";
import { HomePage } from "./home-page";
import { LoginPage } from "./login-page";
import { ProductDetailsPage } from "./product-details-page";
import { PurchaseFlow } from "../flows/purchase-flow";

type Fixtures = {
  basePage: BasePage;
  cartPage: CartPage;
  categoryPage: CategoryPage;
  checkoutPage: CheckoutPage;
  homePage: HomePage;
  loginPage: LoginPage;
  productDetailsPage: ProductDetailsPage;
  purchaseFlow: PurchaseFlow;
};

export const test = base.extend<Fixtures>({
  basePage: async ({ page, context }, use) => {
    await use(new BasePage(page, context));
  },
  cartPage: async ({ page, context }, use) => {
    await use(new CartPage(page, context));
  },
  categoryPage: async ({ page, context }, use) => {
    await use(new CategoryPage(page, context));
  },
  checkoutPage: async ({ page, context }, use) => {
    await use(new CheckoutPage(page, context));
  },
  homePage: async ({ page, context }, use) => {
    await use(new HomePage(page, context));
  },
  loginPage: async ({ page, context }, use) => {
    await use(new LoginPage(page, context));
  },
  productDetailsPage: async ({ page, context }, use) => {
    await use(new ProductDetailsPage(page, context));
  },
  purchaseFlow: async (
    {
      page,
      context,
      cartPage,
      categoryPage,
      checkoutPage,
      homePage,
      productDetailsPage,
    },
    use
  ) => {
    await use(
      new PurchaseFlow(
        page,
        context,
        cartPage,
        categoryPage,
        checkoutPage,
        homePage,
        productDetailsPage
      )
    );
  },
});

export { expect };
