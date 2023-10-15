class Cart {
  btnProduct = "a[href='/product_details/1']";
  btnAddtoCart = "button[type='button']";
  btnContinue = ".modal-footer > .btn";
  btnCart = ".shop-menu > .nav > :nth-child(3) > a";
  btnProceed = ".col-sm-6 > .btn";
  OrderData = "textarea[name='message']";
  btnPlaceOrder = ".btn.btn-default.check_out";
  NameOnCard = '[data-qa="name-on-card"]';
  CardNumber = '[data-qa="card-number"]';
  CVC = "input[placeholder='ex. 311']";
  MM = "input[placeholder='MM']";
  YYYY = "input[placeholder='YYYY']";
  btnPay = "#submit";
  btnContinue1 = '[data-qa="continue-button"]';

  // clicking product1 
  clickProduct() {
    cy.get(this.btnProduct).click();
  };

  // clicking add to cart
  clickAddToCart() {
    cy.get(this.btnAddtoCart).click();
  };

  // clicking continue to pop up
  clickContinue() {
    cy.get(this.btnContinue).click();
  };

  // clicking cart btn
  clickCart() {
    cy.get(this.btnCart).click();
  };

  // clicking proceed
  clickProceed() {
    cy.get(this.btnProceed).click();
  };

  // providing order data
  setOrderData(data) {
    cy.get(this.OrderData).type(data);
  };

  // clicking place order btn
  clickPlaceOrder() {
    cy.get(this.btnPlaceOrder).click();
  };

  // providing name on card
  setNameOnCard(name) {
    cy.get(this.NameOnCard).type(name);
  };

  // providing card number
  setCardNum(cnum) {
    cy.get(this.CardNumber).type(cnum);
  };

  // providing cvc 
  setCVC(cvc) {
    cy.get(this.CVC).type(cvc);
  };

  // providing mm
  setMM(mm) {
    cy.get(this.MM).type(mm);
  };

 // providing expiary year
  setYYY(yyy) {
    cy.get(this.YYYY).type(yyy);
  };

  // clicking to pay btn
  clickPay() {
    cy.get(this.btnPay).click();
  };

  // clicking continue btn after confirmation msg
  clickContinue1() {
    cy.get(this.btnContinue1).click();
  };
}

export default Cart;
