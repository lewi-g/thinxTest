import { thinx } from '../helpers/thinxProducts'


describe('Adding product to bag', () => {
  const cart = '.common-header__right > .common-toolbar > .cart-preview__count'
  const undieQty = 2 + Math.floor(Math.random()*7)
  const ctaButton = '.product__cta--active > .btn'

  before(function() {
    cy.visit('https://www.shethinx.com/')
  })

  it('clicking on "Shop all undies" from "shop" dropdown goes to shop all url', () => {
    cy.get('.desktop-nav')
      .within(() => {
        cy.findByText('shop')
          .should('be.visible')
          .parent()
          .trigger('mouseover')
          .wait(400)
      })
      .get(`.desktop-nav-dropdown--shop`)
      .should('be.visible')
      .within(() => {
        cy.findByText('Shop all undies')
          .should('be.visible')
          .click()
      })
      .url()
      .should('contain', thinx.shopAllUndies.url)
    })

    it('shows new visitor survey when on "shop all" page', ()=>{
      cy.get('.survey')
      .should('be.visible')
    })

    it('closes survey form when clicking on "X"',()=>{
      cy
      .get('#new-visitor-form > .survey__close')
      .click()
    })

    // TODO pick a product (random)
    it('Clickingon Super Hiphugger image takes to Super Hiphugger page', ()=> {
      cy.get('div[data-product-handle="thinx-super-hiphugger"]')
      .find('a')
      .first()
      .click({ force: true })
      .wait(1000)
      .url()
      .should('contain', 'products/thinx-super-hiphugger')
    })

    it('Select a Size button is visible and disabled', ()=> {
      cy
      // Add to bag shows
      .get(ctaButton)
      .contains('Select a Size')
      .should('be.visible')
      .and('have.attr', 'disabled')
    })

    it('Can select "M" size', ()=> {
      cy
      // close modal asking for email
      // .get('#modal-close')
      // .click()
      .get('[data-label="M"]')
      .click()
    })
    // TODO assert that modal closes
    // TODO pick a color?
    // all the sizes aren't selected
    // pick a size

    it('Can click on "+" to change the quantity of undies', ()=> {
      if(undieQty >2){
        for(let i = 1; i<undieQty; i++){
          cy.get('[aria-label="increase selected quantity"]')
          .click().wait(300)
        } 
      } else {
        cy.get('[aria-label="increase selected quantity"]')
          .click().wait(300)
      }
    })

    it('"Select a Size" button shows "Add to Bag" and is not disabled', ()=> {
      cy.get(ctaButton)
      .contains('Add to bag')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
    })
    
    it('Clicking on "Add to Bag" button changes it to "item added"', ()=> {
      cy.get(ctaButton)
      .click()
      // .get(ctaButton)
      .contains('item added')
    })
    
    it('Hovering over cart shows item quantity and product name', () => {
      cy.get(cart).trigger('mouseover')
      .get('.cart-preview.js-cart-preview')
      .within(() => {
        cy.findByText('Super Hiphugger')
        .get('[rv-text="cart.item_count"]')
        .contains(undieQty)
      })
  })
})
