import CheckoutElements from '../elements/checkoutElements';
const checkoutElements = new CheckoutElements;

class CheckoutPage {

    selectShippmentMethod() {
        cy.get(checkoutElements.checkoutLoader()).should('not.exist');
        cy.get(checkoutElements.selectShippimentMethod()).should('be.visible').check();
        cy.contains(checkoutElements.buttonNextCheckout()).should('be.visible').click();
    }

    placeOrder(success) {
        cy.contains(checkoutElements.buttonPlaceOrder()).should('be.visible').click();
        cy.get(checkoutElements.successPage()).should('have.text', success)
        cy.url().should('include', '/checkout/onepage/success')
    }

}

export default CheckoutPage;