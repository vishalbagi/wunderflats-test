import Page from './page';
class Profile extends Page{
    get firstNameInput(){return browser.element('#firstName');}
    get lastNameInput(){return browser.element('#lastName');}
    get emailInput(){return browser.element('#email');}
    get companyNameInput(){return browser.element('#companyName');}

    get jobTitleInput(){return browser.element('#jobTitle');}
    get saveProfileButton(){return browser.element("//button[text()='Save profile']");}
    get form(){return browser.element("//form[@class='UserProfileForm']")}



    /*  open(){
          super.open();
      }*/
    waitForProfilePageToAppear(){
        //this.lastNameInput.waitForExist();
        this.form.waitForExist();

    }
    changeFirstName(inputValue){
        this.firstNameInput.waitForExist();
        this.firstNameInput.setValue(inputValue);
        this.saveProfileButton.click();
        this.form.waitForExist();
    }
}
export  default new Profile()