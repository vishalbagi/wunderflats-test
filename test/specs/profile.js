import Loginpage from "../page_object/Login"
import Profilepage from "../page_object/Profile"
import Homepage from "../page_object/Home"
import common from "../helpers/common";

var config = require('../util/config');
import Signup from "../page_object/Signup";

describe('Wunderflat user should able change its User Profile data', () => {
    before(function () {
        //Go to Log in and try to log in user data from config file
        Loginpage.open();
        Loginpage.login(config.userName, config.passWord);
        var isLoginSucess = Homepage.isLogInSucess();
        //If log in is not success.  Then register as new use
        if (!isLoginSucess) {
            Signup.open();
            Signup.signUpToWunderflat();
            console.log("Created new user for the test");
        }
    })
    it('Wunderflat customer should able to change his First Name', () => {
        Homepage.waitForHomePage();
        //Go to home page and wait for page to load
        Profilepage.open();
        Profilepage.waitForProfilePageToAppear();
        var oldName = Profilepage.getFieldValue("first Name");
        var newName = common.randomString(5);
        console.log("Original first name is" + oldName);
        Profilepage.changeFirstName(newName);
        //Assertion to check is value is updated
        expect(Profilepage.getFieldValue("first Name")).to.be.equal(newName)
        expect(Profilepage.getFieldValue("first Name")).to.not.equal(oldName)

    });
    it('Wunderflat customer should able to change his  Last Name', () => {
        Profilepage.waitForProfilePageToAppear();
        var oldName = Profilepage.getFieldValue("last Name");
        var newName = common.randomString(5);
        console.log("Original last name is" + oldName);
        Profilepage.changeLastName(newName);
        //Assertion
        expect(Profilepage.getFieldValue("last Name")).to.be.equal(newName)
        expect(Profilepage.getFieldValue("last Name")).to.not.equal(oldName)
    })

    it('Wunderflat customer should able to change his  Comany Name', () => {
        Profilepage.waitForProfilePageToAppear();
        var oldName = Profilepage.getFieldValue("COMPANY NAME");
        var newName = common.randomString(5);
        console.log("Original last name is" + oldName);
        Profilepage.changeCompanyName(newName);
        //Assetions
        expect(Profilepage.getFieldValue("COMPANY NAME")).to.be.equal(newName)
        expect(Profilepage.getFieldValue("COMPANY NAME")).to.not.equal(oldName)
    })
});
