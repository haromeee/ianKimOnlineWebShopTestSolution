import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CartPage extends BasePage {
  public readonly cartHeader: Locator;
  public readonly cartRows: Locator;
  public readonly cartTable: Locator;
  public readonly checkoutButton: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.cartHeader = this.page.locator(".heading1");
    this.cartTable = this.page.locator(".product-list table");
    this.cartRows = this.cartTable.getByRole("row");
    this.checkoutButton = this.page
      .getByRole("link", { name: "Checkout" })
      .nth(0);
  }

  /**
   * Navigate user to final checkout page
   */

  public async navigateToCheckout() {
    await this.checkoutButton.click();
  }

  /**
   * Verifies user is on Shopping Cart page
   */

  public async verifyCartPageDisplayed() {
    const cartHeaderText = await this.cartHeader
      .locator(".maintext")
      .textContent();
    expect(cartHeaderText?.trim()).toBe("Shopping Cart");
  }

  /**
   * Verify a specified product has been added to cart
   *
   * @param productName Name of product to verify
   */

  public async verifyProductAddedToCart(productName: string) {
    // Filter for specific row that contains product
    const row = this.cartTable.getByRole("row").filter({
      has: this.page.getByRole("link", { name: `${productName}` }),
    });

    // Verify product exists in cart
    await expect(
      row,
      `Product ${productName} expected in cart but was not found.`
    ).toHaveCount(1);
  }
}
