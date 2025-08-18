import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
  public readonly categoriesMenu: Locator;
  public readonly passwordInput: Locator;
  public readonly usernameInput: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.categoriesMenu = this.page.locator('.categorymenu');
  }

  /**
   * Click on specified category pill on Home page categories menu
   *
   * @param category Category name displayed on Home page categories menu
   */

  public async clickOnCategory(category: string) {
    const categories = this.categoriesMenu.getByRole('link', {
      name: category,
    });
    try {
      for (const li of await categories.all()) {
        let categoryName = await li.textContent();
        if (categoryName?.trim() === category) {
          await li.click();
        }
      }
    } catch (error) {
      throw new Error(`Category name ${category} expected but was not found.`);
    }
  }
}
