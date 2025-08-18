import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class ProductDetailsPage extends BasePage {
  public readonly addToCartButton: Locator;
  public readonly alertMessage: Locator;
  public readonly productTitle: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.addToCartButton = this.page.locator("a.cart");
    this.alertMessage = this.page.locator("div.alert.alert-error.alert-danger");
    this.productTitle = this.page.locator("h1.productname");
  }

  /**
   * Add displayed simple product to cart
   *
   * @remarks The product must be a simple product that does NOT have pre-requisite steps for the product to be added
   *
   * @throws {Error} If product requires configuration or cannot be added
   */

  public async addSimpleProductToCart() {
    // Add product to cart
    expect(
      this.addToCartButton,
      "Add to Cart button should be visible."
    ).toBeVisible();
    await this.addToCartButton.click();
    await expect(
      this.alertMessage,
      "Alert message should NOT be displayed on Product Details Page. Pre-requisite NOT fulfilled."
    ).toBeHidden();
  }

  /**
   * Returns alert text string displayed on product details page
   *
   * @returns Alert text string value
   */

  public async getAlertText() {
    const alertMessage = this.alertMessage.locator("strong");
    return await alertMessage.innerText();
  }

  /**
   * Returns product title string displayed on product details page
   *
   * @returns Product title string value
   */

  public async getProductTitle() {
    await this.productTitle.waitFor();
    const productTitleText = await this.productTitle
      .locator(".bgnone")
      .innerText();
    return productTitleText;
  }

  /**
   * Verifies product title is correctly matching passed parameter value
   *
   * @param productName Product name
   */

  public async verifyProductTitle(productName: string) {
    const productTitleText = await this.getProductTitle();
    expect(
      productTitleText?.toLowerCase(),
      `Expected product name: ${productName}. Product name ${productTitleText} displayed instead`
    ).toBe(productName.toLowerCase());
  }
}
