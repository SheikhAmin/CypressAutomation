

describe('Assignment',()=>{

    it('Sign Up',()=>{

        cy.visit("https://automationexercise.com/");
        cy.get("a[href='/login']").click();
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
    })
})