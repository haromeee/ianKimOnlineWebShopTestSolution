import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CheckoutPage extends BasePage {
  public readonly basketLink: Locator;
  public readonly checkoutHeader: Locator;
  public readonly productsTable: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.basketLink = this.page.getByRole('link', {name: 'Basket'}).first();
    this.checkoutHeader = this.page.locator(".heading1");
    this.productsTable = this.page.locator("table.confirm_products");
  }


  /**
   * Navigates back to Cart from Checkout Confirmation page
   */

  public async goBackToCart() {
    await this.basketLink.click();
  }


  /**
   * Verifies checkout header text on the displayed Checkout Confirmation page
   */

  public async verifyCategoryHeader() {
    let checkoutHeader = await this.checkoutHeader
      .locator(".maintext")
      .textContent();
    expect(
      checkoutHeader?.trim(),
      `The displayed header "${checkoutHeader?.trim()}" does not match the expected header "Checkout Confirmation"`
    ).toBe("Checkout Confirmation");
  }

  /**
   * Verifies specified product exists in final cart at Checkout
   * 
   * @param productName Name of product
   */

  public async verifyProductInCheckoutCart(productName: string) {
    // Filter for specific row that contains product
    const row = this.productsTable.getByRole("row").filter({
      has: this.page.getByRole("link", { name: `${productName}` }),
    });

    // Verify product exists in cart
    await expect(
      row,
      `Product ${productName} expected in cart but was not found.`
    ).toHaveCount(1);
  }
}
