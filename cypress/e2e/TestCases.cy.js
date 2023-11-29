
import 'cypress-file-upload';
import SignUp from "../PageObjects/SignUp";
import ContactForm from '../PageObjects/ContactForm';
import Subscription from '../PageObjects/Subscription.cy';





describe("Test Cases",()=>{

    beforeEach("Visit",()=>{
        cy.visit("https://automationexercise.com/");
        
    })

    it("Register User with existing email",()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('a[href="/login"]').click();
        const obj = new SignUp();
        /*
        cy.get("input[placeholder='Name']").type("Momin");
        cy.get("[data-qa='signup-email']").type("sheikhamin.c6s2@gmail.com");
        cy.get('[data-qa="signup-button"]').click();
        */
        cy.get('.signup-form > h2').should('be.visible')
       obj.setName("momin");
       obj.setEmailAddress("sheikhamin.c6s2@gmail.com");
       obj.clickSignUp();
       cy.get('.signup-form > form > p').should('be.visible');
    })

    it("Contact Form",()=>{
        const obj = new ContactForm();
        
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
        cy.get('.contact-form > .title').should('be.visible');
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
        cy.get('span').click();
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
    })

    it("Verify Test Cases Page",()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get("header[id='header'] li:nth-child(5) a:nth-child(1)").click();
        cy.scrollTo('bottom');
    })

    it('Verify all products & product detail page',()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get("a[href='/products']").click();
        cy.scrollTo('bottom');
        cy.get('.title').should('be.visible');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('.product-information > h2').should('be.visible');
        cy.get('.product-information > :nth-child(3)').should('be.visible');
        cy.get(':nth-child(5) > span').should('be.visible');
        cy.get('.product-information > :nth-child(6)').should('be.visible');
        cy.get('.product-information > :nth-child(7)').should('be.visible');
        cy.get('.product-information > :nth-child(8)').should('be.visible');
    })

    it('Search Product',()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get("a[href='/products']").click();
        cy.scrollTo('bottom');
        cy.scrollTo('top');
        cy.get('#search_product').type('Blue Top');
        cy.get('#submit_search').click();
        cy.get('.productinfo > p').contains('Blue');
        cy.get('.features_items > .col-sm-4').should('be.visible');
        
    })
    it.only('Verify Subscription in home page',()=>{
        const ob = new Subscription();
        ob.goDown();
        ob.emailType('sheikhamin.cs@gmail.com');
        ob.btnClick();
        ob.alert();
    })
})



