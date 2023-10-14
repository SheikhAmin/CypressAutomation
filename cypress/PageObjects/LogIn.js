class LogIn{
   
    EmailAddress = "input[data-qa='login-email']";
    Password = "input[placeholder='Password']";
    btnLogin = "button[data-qa='login-button']";

    enterEmail(email){
        cy.get(this.EmailAddress).type(email);
    };

    enterPassword(pass){
        cy.get(this.Password).type(pass);
    };

    clickLogIn(){
        cy.get(this.btnLogin).click();
    };

}

export default LogIn;