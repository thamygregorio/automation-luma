beforeEach(() => {
  cy.visit('/')
})

// Add to Cart
describe('Cart and Checkout', () => {
  it('Add to cart and enter checkout', () => {
    cy.get('.panel > .header > .authorization-link > a').click();
    cy.get('#email').type('roni_cost@example.com');
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('roni_cost3@example.com');
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
    cy.get('.product-items').contains("Breathe-Easy Tank").click();
    cy.get('.size > .swatch-attribute-options [option-label="M"]').click();
    cy.get('.swatch-attribute.color > .swatch-attribute-options [option-label="Yellow"]').click();
    cy.get('#qty').clear().type('2');
    cy.get('#product-addtocart-button > span').click();
    cy.get('#search').type('Fusion Backpack');
    cy.get('#search_mini_form > .actions > .action').click();
    cy.get('.product-items').contains("Fusion Backpack").click();;
    cy.get('#product-addtocart-button > span').click();
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').click();
  })
})
