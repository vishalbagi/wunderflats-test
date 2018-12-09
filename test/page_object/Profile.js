import Page from './page';

class Profile extends Page {
    get firstNameInput() {
        return browser.element('#firstName');
    }

    get lastNameInput() {
        return browser.element('#lastName');
    }

    get emailInput() {
        return browser.element('#email');
    }

    get companyNameInput() {
        return browser.element('#companyName');
    }

    get jobTitleInput() {
        return browser.element('#jobTitle');
    }

    get saveProfileButton() {
        return browser.element("//button[text()='Save profile']");
    }

    get form() {
        return browser.element("//form[@class='UserProfileForm']")
    }


    open() {
        console.log("Inside my account");
        super.open("/my/account");
        browser.pause(5000);
    }

    waitForProfilePageToAppear() {
        //this.lastNameInput.waitForExist();
        this.form.waitForExist();

    }

    changeFirstName(inputValue) {
        this.firstNameInput.waitForExist();
        this.firstNameInput.setValue(inputValue);
        this.saveProfileButton.click();
        this.form.waitForExist();
    }

    changeLastName(inputValue) {
        this.lastNameInput.waitForExist();
        this.lastNameInput.setValue(inputValue);
        this.saveProfileButton.click();
        this.form.waitForExist();
    }

    changeCompanyName(inputValue) {
        this.companyNameInput.waitForExist();
        this.companyNameInput.setValue(inputValue);
        this.saveProfileButton.click();
        this.form.waitForExist();
    }

    getFieldValue(key) {
        var fieldValue = "";

        switch (key.toUpperCase()) {
            case "FIRST NAME":
                fieldValue = this.firstNameInput.getValue();
                break;
            case "LAST NAME":
                fieldValue = this.lastNameInput.getValue();
                break;
            case "COMPANY NAME":
                fieldValue = this.companyNameInput.getValue();
                break

        }
        return fieldValue;
    }
}

export default new Profile()