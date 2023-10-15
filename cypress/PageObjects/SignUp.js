class SignUp {
  Name = "input[placeholder='Name']";
  EmailAddress = '[data-qa="signup-email"]';
  btnSignUp = '[data-qa="signup-button"]';
  btnGender = "#id_gender1";
  Password = '[data-qa="password"]';
  Day = '[data-qa="days"]';
  Month = '[data-qa="months"]';
  Year = '[data-qa="years"]';
  Newsletter = "#newsletter";
  Offer = "#optin";
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

  // assigning name
  setName(name) {
    cy.get(this.Name).type(name);
  };

  // assigning email address
  setEmailAddress(email) {
    cy.get(this.EmailAddress).type(email);
  };

  // clicking sign up btn
  clickSignUp() {
    cy.get(this.btnSignUp).click();
  };

  // selecting gender
  setGender() {
    cy.get(this.btnGender).click();
  };

  // assigning password
  setPassword(pass) {
    cy.get(this.Password).type(pass);
  };

  // selecting day
  setDay(day) {
    cy.get(this.Day).select(day);
  };

  // selecting month
  setMonth(month) {
    cy.get(this.Month).select(month);
  };

  // selecting year
  setYear(year) {
    cy.get(this.Year).select(year);
  };

  // checkbox for newsletter
  clickNewsLetter() {
    cy.get(this.Newsletter).click();
  };

  // checkbox for offer
  clickOffer() {
    cy.get(this.Offer).click();
  };

  // assigning first name
  setFirstName(fname) {
    cy.get(this.FirstName).type(fname);
  };

  // assigning last name
  setLastName(lname) {
    cy.get(this.LastName).type(lname);
  };

  // assigning company name
  setCompany(company) {
    cy.get(this.Company).type(company);
  };

  // providing address 
  setAddress(address) {
    cy.get(this.Address).type(address);
  };

  // providing address 2
  setAddress2(address2) {
    cy.get(this.Address2).type(address2);
  };

  // providing city name
  setCity(city) {
    cy.get(this.City).type(city);
  };

  // providing state name
  setState(state) {
    cy.get(this.State).type(state);
  };

  // providing country name
  setCountry(country) {
    cy.get(this.Country).select(country);
  };

  // providing zip code
  setZipCode(zipcode) {
    cy.get(this.ZipCode).type(zipcode);
  };

  // providing mobile number
  setMobileNum(mobilenum) {
    cy.get(this.MobileNum).type(mobilenum);
  };

  // clicking create account btn
  clickCreateAccount() {
    cy.get(this.btnCreateAccount).click();
  };

  // clicking continue btn
  clickContinue() {
    cy.get(this.btnContinue).click();
  };
}

export default SignUp;
