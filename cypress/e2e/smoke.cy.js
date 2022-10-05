import AccountPage from '../support/pages/accountPage'
import CheckoutPage from '../support/pages/checkoutPage'
import HomePage from '../support/pages/homePage'
import ProductPage from '../support/pages/productPage'
const homePage = new HomePage
const accountPage = new AccountPage
const productPage = new ProductPage
const checkoutPage = new CheckoutPage

beforeEach(() => {

  homePage.go()

})

describe('Cart and Checkout', () => {

  it('Add to cart and enter checkout', () => {

    homePage.accessSignIn();
    accountPage.fillLoginFields('roni_cost@example.com', 'roni_cost3@example.com');
    accountPage.submitSignIn();
    homePage.productHomePage('Breathe-Easy Tank');
    productPage.setSize();
    productPage.setColor();
    productPage.setQuantity('2');
    productPage.addToCart('Breathe-Easy Tank');
    homePage.productSearch('Fusion Backpack');
    productPage.productSearchPage('Fusion Backpack');
    productPage.addToCart('Fusion Backpack');
    homePage.miniCard('3');
    homePage.goToCheckoutFromMiniCard();
    checkoutPage.selectShippmentMethod();
    checkoutPage.placeOrder('Thank you for your purchase!');

  })

})
