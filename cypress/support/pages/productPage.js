import HomeElements from '../elements/homeElements';
import ProductElements from '../elements/productElements'
const productElements = new ProductElements;
const homeElements = new HomeElements;

class ProductPage {

    setSize() {
        cy.get(productElements.productSize()).should('be.visible').click()
    }

    setColor() {
        cy.get(productElements.productColor()).should('be.visible').click()
    }

    setQuantity(quantity) {
        cy.get(productElements.productQuantity()).should('be.visible').clear().type(quantity)
    }

    addToCart(product) {
        cy.get(productElements.productLoader()).should('not.exist')
        cy.get(productElements.buttonAddToCart()).should('be.visible').click({ force: true })
        cy.contains('You added ' + product + ' to your shopping cart.').should('be.visible')
    }

    productSearchPage(product) {
        cy.get(homeElements.shelfProductItems()).contains(product).click();
    }

}

export default ProductPage;