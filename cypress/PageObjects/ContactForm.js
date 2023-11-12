class ContactForm{
    Name = "[data-qa='name']";
    Email = "[data-qa='email']";
    Subject = '[data-qa="subject"]';
    Message = '#message[data-qa="message"]';
    File = ':nth-child(6) > .form-control';
    btnSubmit = '[data-qa="submit-button"]';

    typeName(name){
        cy.get(this.Name).type(name);
    }

    typeEmailAddress(email){
        cy.get(this.Email).type(email);
    }

    setSubject(subject){
        cy.get(this.Subject).type(subject);
    }

    typeMessage(msg){
        cy.get(this.Message).type(msg);
    }

    uploadFile(file){
        cy.get(this.File).attachFile('file.jpg');
    }

    clickSubmit(){
        cy.get(this.btnSubmit).click();
    }
}

export default ContactForm;