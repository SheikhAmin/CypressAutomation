import Cart from "../PageObjects/Cart";
import LogIn from "../PageObjects/LogIn";
import SignUp from "../PageObjects/SignUp";

describe("Assignment", () => {
  it("Sign Up", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("a[href='/login']").click();

    const obj = new SignUp();

    obj.setName("Sheikh Amin");
    obj.setEmailAddress("sheikhamin.c6s1@gmail.com"); //change email every time for teseting
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

    //checking account created successfully or not
    cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)").should('have.text','Congratulations! Your new account has been successfully created!'); 
        
    obj.clickContinue();
  });

  it.only("Select item & Add to Cart", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("a[href='/login']").click();

    const login = new LogIn();
    login.enterEmail("sheikhamin.c6s1@gmail.com");
    login.enterPassword("amin");
    login.clickLogIn();

    //checking Logged in as Sheikh Amin
    cy.get(':nth-child(10) > a').should('contain','Logged in as Sheikh Amin'); 
    cy.wait(3000);

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

    //checking order confirmation
    cy.get('.col-sm-9 > p').should('have.text','Congratulations! Your order has been confirmed!'); 

    cart.clickContinue1();
  });
});
