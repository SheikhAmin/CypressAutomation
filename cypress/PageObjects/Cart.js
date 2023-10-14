class Cart{

    btnProduct = "a[href='/product_details/1']";
    btnAddtoCart = "button[type='button']";
    btnContinue = '.modal-footer > .btn';
    btnCart = '.shop-menu > .nav > :nth-child(3) > a';
    btnProceed = '.col-sm-6 > .btn';
    OrderData = "textarea[name='message']";
    btnPlaceOrder = ".btn.btn-default.check_out";
    NameOnCard = '[data-qa="name-on-card"]';
    CardNumber = '[data-qa="card-number"]';
    CVC = "input[placeholder='ex. 311']";
    MM = "input[placeholder='MM']";
    YYYY = "input[placeholder='YYYY']";
    btnPay = "#submit";
    btnContinue1 = '[data-qa="continue-button"]';

    clickProduct(){
        cy.get(this.btnProduct).click();
    };

    clickAddToCart(){
        cy.get(this.btnAddtoCart).click();
    };

    clickContinue(){
        cy.get(this.btnContinue).click();
    };

    clickCart(){
        cy.get(this.btnCart).click();
    };

    clickProceed(){
        cy.get(this.btnProceed).click();
    };

    setOrderData(data){
        cy.get(this.OrderData).type(data);
    };

    clickPlaceOrder(){
        cy.get(this.btnPlaceOrder).click();
    };

    setNameOnCard(name){
        cy.get(this.NameOnCard).type(name);
    };

    setCardNum(cnum){
        cy.get(this.CardNumber).type(cnum);
    };

    setCVC(cvc){
        cy.get(this.CVC).type(cvc);
    };

    setMM(mm){
        cy.get(this.MM).type(mm);
    };

    setYYY(yyy){
        cy.get(this.YYYY).type(yyy);
    };

    clickPay(){
        cy.get(this.btnPay).click();
    };

    clickContinue1(){
        cy.get(this.btnContinue1).click();
    };

}

export default Cart;