import Page from './page';

class Login extends Page {
    get emailIdInput() {
        return browser.element('#email');
    }

    get passwordInput() {
        return browser.element('#password');
    }

    get loginButton() {
        return browser.element("//button[text()='Login']");
    }

    get signupButton() {
        return browser.element("//*[.='Sign up!']");
    }


    open() {
        super.open("/login");
    }
//login to systme
    login(username, pass) {
        this.emailIdInput.waitForExist();
        this.emailIdInput.setValue(username);
        this.passwordInput.setValue(pass);
        this.loginButton.click()
        return !this.loginButton.isVisible()
    }

}

export default new Login()