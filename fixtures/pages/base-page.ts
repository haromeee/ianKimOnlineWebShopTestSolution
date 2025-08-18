import { Locator, Page, BrowserContext } from "@playwright/test";
import { testData, User } from "../../test-data/test-data";

export class BasePage {
  constructor(
    readonly page: Page,
    protected readonly context: BrowserContext
  ) {}

  /**
   * Navigates to the given path relative to the configured baseURL.
   * If no path is provided, it defaults to "/" (the application root).
   *
   * @param path A relative URL path (e.g. "/login"). Defaults to "/"
   */

  protected async navigate(path: string = "/") {
    await this.page.goto(path);
  }

  /**
   * Retrieves specified user from test data file
   *
   * @param userType The userType value for a specific user within the testData object
   * @returns User object of specified userType
   */
  public async getUserDetail(userType: string): Promise<User> {
    const user = testData.users?.find((user) => user.userType === userType);
    if (!user) {
      throw new Error(`User ${userType} not found in test data`);
    }
    return user;
  }
}
