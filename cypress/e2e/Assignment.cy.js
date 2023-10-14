import Cart from "../PageObjects/Cart";
import LogIn from "../PageObjects/LogIn";
import SignUp from "../PageObjects/SignUp";


describe('Assignment',()=>{

    it('Sign Up',()=>{

        cy.visit("https://automationexercise.com/");
        cy.get("a[href='/login']").click();
        
        /*
        cy.get("input[placeholder='Name']").type("Sheikh Amin");
        cy.get('[data-qa="signup-email"]').type("sheikhamin.cs1@gmail.com");
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender1').click();
        cy.get('[data-qa="password"]').type("amin");
        cy.get('[data-qa="days"]').select("7");
        cy.get('[data-qa="months"]').select("June");
        cy.get('[data-qa="years"]').select("1999");
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('[data-qa="first_name"]').type("Sheikh");
        cy.get('[data-qa="last_name"]').type('Amin');
        cy.get('[data-qa="company"]').type('Dhaka Bank');
        cy.get('[data-qa="address"]').type("244 East Nakhalpara Tejgaon, Dhaka-1215");
        cy.get('[data-qa="address2"]').type("244 East Nakhalpara Tejgaon, Dhaka-1215");
        cy.get('[data-qa="country"]').select("Canada");
        cy.get('[data-qa="state"]').type("Dhaka");
        cy.get('[data-qa="city"]').type("Dhaka");
        cy.get("#zipcode").type('1215');
        cy.get("#mobile_number").type("01521255651");
        cy.get("button[data-qa='create-account']").click();
        cy.get('[data-qa="continue-button"]').click();

        */

        const obj = new SignUp();

        obj.setName("Sheikh Amin");
        obj.setEmailAddress("sheikhamin.c22s1@gmail.com"); //change email every time for teseting 
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

    })

    it.only('Select item & Add to Cart',()=>{
        
        cy.visit("https://automationexercise.com/");
        cy.get("a[href='/login']").click();

        const login = new LogIn();
        login.enterEmail("sheikhamin.c22s1@gmail.com");
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

        /*

        cy.get("a[href='/product_details/1']").click();
        cy.get("button[type='button']").click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.col-sm-6 > .btn').click();
        cy.get("textarea[name='message']").type("Order will be received by my a person named Momin.");
        cy.get(".btn.btn-default.check_out").click();
        cy.get('[data-qa="name-on-card"]').type("Tazrin");
        cy.get('[data-qa="card-number"]').type("065464");
        cy.get("input[placeholder='ex. 311']").type("611");
        cy.get("input[placeholder='MM']").type("July");
        cy.get("input[placeholder='YYYY']").type("2025");
        cy.get("#submit").click();
        cy.get('[data-qa="continue-button"]').click();

        */

    })
})

