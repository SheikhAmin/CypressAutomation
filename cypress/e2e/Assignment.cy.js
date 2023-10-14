import Cart from "../PageObjects/Cart";
import LogIn from "../PageObjects/LogIn";
import SignUp from "../PageObjects/SignUp";

describe("Assignment", () => {
  it("Sign Up", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("a[href='/login']").click();

    const obj = new SignUp();

    obj.setName("Sheikh Amin");
    obj.setEmailAddress("sheikhamin.c3s1@gmail.com"); //change email every time for teseting
    obj.clickSignUp();
    obj.setGender();
    obj.setPassword("amin");
    obj.setDay("7");
    obj.setMonth("June");
    obj.setYear("1999");
    obj.clickNewsLetter();
    obj.clickOffer();
    obj.setFirstName("Sheikh");
    obj.setLastName("Amin");
    obj.setCompany("Dhaka Bank");
    obj.setAddress("244 East Nakhalpara Tejgaon, Dhaka-1215");
    obj.setAddress2("244 East Nakhalpara Tejgaon, Dhaka-1215");
    obj.setCountry("Canada");
    obj.setCity("Dhaka");
    obj.setState("Dhaka");
    obj.setZipCode("1215");
    obj.setMobileNum("01521255651");
    obj.clickCreateAccount();
    obj.clickContinue();
  });

  it.only("Select item & Add to Cart", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("a[href='/login']").click();

    const login = new LogIn();
    login.enterEmail("sheikhamin.c3s1@gmail.com");
    login.enterPassword("amin");
    login.clickLogIn();

    const cart = new Cart();
    cart.clickProduct();
    cart.clickAddToCart();
    cart.clickContinue();
    cart.clickCart();
    cart.clickProceed();
    cart.setOrderData("Order will be received by my a person named Momin.");
    cart.clickPlaceOrder();
    cart.setNameOnCard("Tazrin Tuly");
    cart.setCardNum("611546");
    cart.setCVC("611");
    cart.setMM("July");
    cart.setYYY("2025");
    cart.clickPay();
    cart.clickContinue1();
  });
});
