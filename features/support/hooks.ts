import { createBdd } from "playwright-bdd";
import { test, expect } from "../../fixtures/pages";

const { Before, BeforeAll } = createBdd(test);

BeforeAll(async () => {
  
})

Before({ tags: "@logged-in" }, async ({ loginPage }) => {
  // Get default user login credentials
  const user = await loginPage.getUserDetail("Default User");
  
  // Open browser and go to login page
  await loginPage.goToLoginPage();
  await loginPage.login(user.userName, user.password);
  const browserTitle: string = (await loginPage.page.title()).trim();
  expect(
    browserTitle,
    "Log in has failed for specified user credentials."
  ).toBe("My Account");
});
