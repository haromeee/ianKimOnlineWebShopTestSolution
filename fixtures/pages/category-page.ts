import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CategoryPage extends BasePage {
  public readonly categoryHeader: Locator;
  public readonly categoryContentPanel: Locator;
  public readonly productCards: Locator;
  public readonly productGrid: Locator;
  private readonly productTitle: string;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.categoryHeader = this.page.locator(".heading1");
    this.categoryContentPanel = this.page.locator(".contentpanel");
    this.productGrid = this.categoryContentPanel.locator(
      ".thumbnails.grid.row.list-inline"
    );
    this.productCards = this.productGrid.locator(":scope > div");
    this.productTitle = ".prdocutname";
  }

  /**
   * Clicks on product title by product card index to navigate to product details page
   *
   * @param index The nth product card in the product grid page
   */

  public async clickOnProductTitleByIndex(index: number) {
    // Scroll product card into view
    const productCard = await this.getProductCardByIndex(index);
    await productCard.scrollIntoViewIfNeeded();

    // Click on product card title
    await productCard.locator(this.productTitle).click();
  }

  /**
   * Clicks on product title to navigate to product details page
   *
   * @param productName Name of product
   */

  public async clickOnProductTitleByName(productName: string) {
    // Scroll product card into view
    const productCard = await this.getProductCardByName(productName);
    await productCard.scrollIntoViewIfNeeded();

    // Click on product card title
    await productCard.locator(this.productTitle).click();
  }

  /**
   * Retrieves category header text on the displayed product category page
   *
   * @returns Returns category header text string of currently displayed category page
   */

  public async getCategoryHeader() {
    return await this.categoryHeader.locator(".maintext").textContent();
  }

  /**
   * Retrieves product card in grid page based on specified index
   *
   * @param index The nth product card in the product grid page
   * @returns Returns product card with the nth index in the grid page
   */

  public async getProductCardByIndex(index: number) {
    return this.productCards.nth(index);
  }

   /**
   * Retrieves product card in grid page based on specified product name
   *
   * @param productName Name of product
   * @returns Returns product card of specified product
   * @throws Assertion error if locator not found or not unique
   */

  public async getProductCardByName(productName: string): Promise<Locator> {
    const productCard = this.productCards.filter({
        has: this.page.getByRole('link', {name: productName})
    });

    await expect(productCard, `Product ${productName} not found on page.`).toHaveCount(1);
    return productCard;
  }

  /**
   * Retrieves product title string of product in grid page based on specified index
   *
   * @param index The nth product card in the product grid page
   * @returns String value of product title
   */

  public async getProductTitleByIndex(index: number): Promise<string> {
    const productCard = await this.getProductCardByIndex(index);
    return await productCard.locator(this.productTitle).innerText();
  }

  /**
   * Verifies category header text on the displayed product category page to passed category value
   *
   * @param category Category name displayed on Home page categories menu
   */

  public async verifyCategoryHeader(category: string) {
    const categoryHeader = await this.getCategoryHeader();
    expect(
      categoryHeader,
      `The displayed category "${categoryHeader?.trim()}" does not match the expected specified category "${category}"`
    ).toBe(category);
  }
}
