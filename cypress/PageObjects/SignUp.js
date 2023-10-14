class SignUp{

    Name = "input[placeholder='Name']";
    EmailAddress = '[data-qa="signup-email"]';
    btnSignUp = '[data-qa="signup-button"]';
    btnGender = '#id_gender1';
    Password = '[data-qa="password"]';
    Day = '[data-qa="days"]';
    Month = '[data-qa="months"]';
    Year = '[data-qa="years"]';
    Newsletter = '#newsletter';
    Offer = '#optin';
    FirstName = '[data-qa="first_name"]';
    LastName = '[data-qa="last_name"]';
    Company = '[data-qa="company"]';
    Address = '[data-qa="address"]';
    Address2 = '[data-qa="address2"]';
    Country = '[data-qa="country"]';
    State = '[data-qa="state"]';
    City = '[data-qa="city"]';
    ZipCode = "#zipcode";
    MobileNum = "#mobile_number";
    btnCreateAccount = "button[data-qa='create-account']";
    btnContinue = '[data-qa="continue-button"]';

    setName(name){
        cy.get(this.Name).type(name);
    };

    setEmailAddress(email){
        cy.get(this.EmailAddress).type(email);
    };

    clickSignUp(){
        cy.get(this.btnSignUp).click();
    };

    setGender(){
        cy.get(this.btnGender).click();
    };

    setPassword(pass){
        cy.get(this.Password).type(pass);
    };

    setDay(day){
        cy.get(this.Day).select(day);
    };

    setMonth(month){
        cy.get(this.Month).select(month);
    };

    setYear(year){
        cy.get(this.Year).select(year);
    };

    clickNewsLetter(){
        cy.get(this.Newsletter).click();
    };

    clickOffer(){
        cy.get(this.Offer).click();
    };

    setFirstName(fname){
        cy.get(this.FirstName).type(fname);
    };

    setLastName(lname){
        cy.get(this.LastName).type(lname);
    };

    setCompany(company){
        cy.get(this.Company).type(company);
    };

    setAddress(address){
        cy.get(this.Address).type(address);
    };

    setAddress2(address2){
        cy.get(this.Address2).type(address2);
    };

    setCity(city){
        cy.get(this.City).type(city);
    };

    setState(state){
        cy.get(this.State).type(state);
    };

    setCountry(country){
        cy.get(this.Country).type(country);
    };

    setZipCode(zipcode){
        cy.get(this.ZipCode).type(zipcode);
    };

    setMobileNum(mobilenum){
        cy.get(this.MobileNum).type(mobilenum);
    };

    clickCreateAccount(){
        cy.get(this.btnCreateAccount).click();
    };

    clickContinue(){
        cy.get(this.btnContinue).click();
    };
}

export default SignUp;