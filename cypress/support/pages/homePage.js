import HomeElements from "../elements/homeElements";
const homeElements = new HomeElements

class HomePage {

    go() {
        cy.visit('/')
    }

    accessSignIn() {
        cy.contains(homeElements.buttonSignIn()).click()
    }

    productHomePage(product) {
        cy.get(homeElements.shelfProductItems()).contains(product).click();
    }

    productSearch(product) {
        cy.get(homeElements.searchProduct()).type(product + '{enter}');
    }

    miniCard(count) {
        cy.get(homeElements.counterMiniCart()).should('have.text', count);
        cy.get(homeElements.miniCart()).click();
    }

    goToCheckoutFromMiniCard() {
        cy.contains(homeElements.goToCheckout()).click();
    }

}

export default HomePage;