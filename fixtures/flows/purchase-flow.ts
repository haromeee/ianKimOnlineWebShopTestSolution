import { Page, BrowserContext } from "@playwright/test";
import { CartPage } from "../pages/cart-page";
import { CategoryPage } from "../pages/category-page";
import { CheckoutPage } from "../pages/checkout-page";
import { HomePage } from "../pages/home-page";
import { ProductDetailsPage } from "../pages/product-details-page";
import { test, expect } from "../../fixtures/pages";

export class PurchaseFlow {
  constructor(
    private readonly page: Page,
    private readonly context: BrowserContext,
    private readonly cartPage: CartPage,
    private readonly categoryPage: CategoryPage,
    private readonly checkoutPage: CheckoutPage,
    private readonly homePage: HomePage,
    private readonly productDetailsPage: ProductDetailsPage
  ) {}

  /**
   * To add a product from the specified category page by product name
   *
   * @param category Category name displayed on Home page categories menu
   * @param productName Name of product
   */

  async addToCartByProductName(category: string, productName: string) {
    // Navigate to specified categories page
    await this.homePage.clickOnCategory(category);
    await this.categoryPage.verifyCategoryHeader(category);

    // Click on product title to navigate to product details page
    await this.categoryPage.clickOnProductTitleByName(productName);
    await this.productDetailsPage.verifyProductTitle(productName);

    // Add product to cart
    await this.productDetailsPage.addSimpleProductToCart();
    await this.cartPage.verifyCartPageDisplayed();
    await this.cartPage.verifyProductAddedToCart(productName);
  }

  /**
   * To verify a product added successfully to final cart at Checkout
   * 
   * @param productName Name of product
   */

  async verifyProductAddedToFinalCart(productName: string) {
    // Navigate to final checkout page
    await this.cartPage.navigateToCheckout();
    await this.checkoutPage.verifyCategoryHeader();

    // Verify product is in final cart at Checkout
    await this.checkoutPage.verifyProductInCheckoutCart(productName);
  }
}
