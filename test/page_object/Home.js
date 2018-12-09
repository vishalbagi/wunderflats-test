import Page from './page';

class Home extends Page {
    get searchButton() {
        return browser.element('//button[text()="Search"]');
    }



    open() {
        super.open("");
    }

    isLogInSucess(){
        try{
            browser.pause(5000)
        return this.searchButton.isEnabled();
        }catch (Exception){
            return false;
        }
    }
    waitForHomePage(){
        this.searchButton.waitForExist();
    }
}

export default new Home()