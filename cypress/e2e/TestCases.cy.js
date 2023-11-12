
import 'cypress-file-upload';
import SignUp from "../PageObjects/SignUp";
import ContactForm from '../PageObjects/ContactForm';


describe("Test Cases",()=>{
    beforeEach("Visit",()=>{
        cy.visit("https://automationexercise.com/");
        
    })

    it.skip("Register User with existing email",()=>{
        cy.get('a[href="/login"]').click();
        const obj = new SignUp();
        /*
        cy.get("input[placeholder='Name']").type("Momin");
        cy.get("[data-qa='signup-email']").type("sheikhamin.c6s2@gmail.com");
        cy.get('[data-qa="signup-button"]').click();
        */
       obj.setName("momin");
       obj.setEmailAddress("sheikhamin.c6s2@gmail.com");
       obj.clickSignUp();
    })

    it("Contact Form",()=>{
        const obj = new ContactForm();
        
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
        /*
        cy.get("[data-qa='name']").type("AMIn");
        cy.get("[data-qa='email']").type('momin@gmail.com');
        cy.get('[data-qa="subject"]').type("how is life");
        cy.get('#message[data-qa="message"]').type("milo");
        cy.get(':nth-child(6) > .form-control').attachFile('file.jpg');
        cy.get('[data-qa="submit-button"]').click();
        */
       
        obj.typeName("amin");
        obj.typeEmailAddress('momin@gmail.com');
        obj.setSubject("how is life");
        obj.typeMessage('milo');
        obj.uploadFile();
        obj.clickSubmit();
        
        cy.get('.status').contains("Success! Your details have been submitted successfully.");
    })

})