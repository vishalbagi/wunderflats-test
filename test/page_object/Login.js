import Page from './page';
class Login extends Page{
    get emailIdInput(){return browser.element('#email');}
    get passwordInput(){return browser.element('#password');}
    get loginButton(){return browser.element("//button[text()='Login']");}




  /*  open(){
        super.open();
    }*/

  login(username,pass){
      this.emailIdInput.waitForExist();
    this.emailIdInput.setValue(username);
    this.passwordInput.setValue(pass);
    this.loginButton.click();
    this.loginButton.wait
}
}
export  default new Login()