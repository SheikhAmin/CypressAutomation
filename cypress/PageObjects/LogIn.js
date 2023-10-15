class LogIn {
  EmailAddress = "input[data-qa='login-email']";
  Password = "input[placeholder='Password']";
  btnLogin = "button[data-qa='login-button']";

  // providing email address
  enterEmail(email) {
    cy.get(this.EmailAddress).type(email);
  };

  // providing password
  enterPassword(pass) {
    cy.get(this.Password).type(pass);
  };

  // clicking login btn
  clickLogIn() {
    cy.get(this.btnLogin).click();
  };
}

export default LogIn;
