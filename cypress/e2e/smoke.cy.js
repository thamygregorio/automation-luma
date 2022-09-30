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
    cy.get('.size > .swatch-attribute-options [aria-label="M"]').click();
    cy.get('.swatch-attribute.color > .swatch-attribute-options [aria-label="Yellow"]').click();
    cy.get('#qty').clear().type('2');
    cy.get('.loader').should('not.exist')
    cy.get('#product-addtocart-button').click({force: true});
    cy.get('#search').type('Fusion Backpack');
    cy.get('#search_mini_form > .actions > .action').click();
    cy.get('.product-items').contains("Fusion Backpack").click();
    cy.get('.loader').should('not.exist')
    cy.get('#product-addtocart-button').click({force: true});
    cy.get('.counter-number').should('have.text', '3');
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').click();
    cy.get('.loader').should('not.exist')
    cy.get(':nth-child(1) > :nth-child(1) > .radio').check();
    cy.get('.button > span').click();
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
    cy.get('.base').should('have.text', 'Thank you for your purchase!');
  })
})
