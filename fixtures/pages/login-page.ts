import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
    public readonly loginButton: Locator;
    public readonly passwordInput: Locator;
    public readonly usernameInput: Locator;
    
    constructor(page: Page, context: BrowserContext) {
        super(page, context)

        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.passwordInput = this.page.locator('#loginFrm_password');
        this.usernameInput = this.page.locator('#loginFrm_loginname');

    }

    /**
     * Navigates user to login page
     */

    public async goToLoginPage() {
        await super.navigate('index.php?rt=account/login');
    }

    /**
     * Function to log into specified user login
     * 
     * @param username Username for login
     * @param password Password for specified login
     */

    public async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}