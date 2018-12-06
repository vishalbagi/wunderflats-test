// example of a test group
// note: all tests under the test directory are ran
//import * as common from  "./helpers/common.js";
import Loginpage from  "../page_object/Login"
import Profilepage from  "../page_object/Profile"

var randomString =function (len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}
describe('webdriver.io page', ()=> {
    before(function(){
        console.log("CCCCCCCCCCCCCCCCC");
        browser.url('https://en-master.wunderflats.xyz/login?redirect=/my/account');
        Loginpage.login('vishalbagi44+Test@gmail.com','Test12345');

    })
    it('cx', ()=> {
        Profilepage.waitForProfilePageToAppear();
        var firstName = browser.getValue("#firstName");
        var newName =randomString(5);//'vishalbagi44+Test';
        console.log("Original first name is"+firstName);
        Profilepage.changeFirstName(newName);
        expect(browser.getValue("#firstName")).to.be.equal(newName)
        // browser.getValue("#firstName").should.be.equal(newName);
        console.log(browser.getUrl()+browser.getValue("#firstName"))
    });
    it('c', ()=> {
        Profilepage.waitForProfilePageToAppear();
        var firstName = browser.getValue("#firstName");
        var newName =randomString(5);//'vishalbagi44+Test';
        console.log("Original first name is"+firstName);
        Profilepage.changeFirstName(newName);
        expect(browser.getValue("#firstName")).to.be.equal(newName)
       // browser.getValue("#firstName").should.be.equal(newName);
        console.log(browser.getUrl()+browser.getValue("#firstName"))
    });

});
