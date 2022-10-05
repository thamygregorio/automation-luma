import AccountElements from '../elements/accountElements';
const accountElements = new AccountElements;

class AccountPage {

    fillLoginFields(email, password) {
        cy.get(accountElements.emailField()).should('be.visible').type(email)
        cy.get(accountElements.passField()).should('be.visible').type(password)
    }

    submitSignIn() {
        cy.get(accountElements.buttonSubmitSignIn()).click();
    }
}

export default AccountPage;