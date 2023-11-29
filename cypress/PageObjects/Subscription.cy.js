class Subscription {
  email = "#susbscribe_email";
  btn = "#subscribe";
  goDown() {
    cy.scrollTo("bottom");
  }
  emailType(e) {
    cy.get(this.email).type(e);
  }
  alert() {
    cy.on("window:alert", (t) => {
      expect(t).to.contain("You have been successfully subscribed!");
    });
  }
  btnClick() {
    cy.get(this.btn).click();
  }
}

export default Subscription;
