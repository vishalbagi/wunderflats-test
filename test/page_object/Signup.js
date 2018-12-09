import Page from './page';
import common from "../helpers/common";

class Signup extends Page {
    get firstNameInput() {
        return browser.element('#firstName');
    }

    get lastNameInput() {
        return browser.element('#lastName');
    }

    get emailInput() {
        return browser.element('#email');
    }

    get passwordInput() {
        return browser.element('#password');
    }

    get passwordConfirmationInput() {
        return browser.element('#passwordConfirmation');
    }

    get dialCodeInput() {
        return browser.element("//*[@type='tel' and contains(@class,'dialCode')]");
    }

    get phoneNumberInput() {
        return browser.element("//*[@type='tel' and contains(@class,'phoneNumber')]");
    }

    get checkboxTerms() {
        return browser.element("//*[@type='checkbox']");
    }

    get SignupButton() {
        return browser.element("//button[.='Sign up!']");
    }


    open() {
        console.log("NAV");
        super.open("/signup");
    }

    signUpToWunderflat() {
        this.dialCodeInput.waitForExist();
        this.dialCodeInput.setValue("91");
        var phone = common.randomString(10, "123456789");
        this.phoneNumberInput.click();

        this.phoneNumberInput.setValue(phone);
        this.lastNameInput.setValue(common.randomString(8));
        this.firstNameInput.setValue(common.randomString(8));


        this.emailInput.setValue(common.randomString(8) + "@abx.xyx");


        var pass = common.randomString(8);
        this.passwordInput.setValue(pass);
        this.passwordConfirmationInput.setValue(pass);
        this.checkboxTerms.click()
        this.SignupButton.click();
        console.log("Created new user");
    }
}

export default new Signup()