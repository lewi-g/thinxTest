import {shopAllNavItems as navItems} from '../helpers/thinxNavList'

describe('Collection Navigation on Shop all page', function() {
  before(function() {
    cy.visit('https://www.shethinx.com/collections/thinx-shop-all')
  })
  navItems.forEach(nav => {
    it(`Shows "${nav.nav}" in the navigation`, function() {
      cy.get('.collection-nav.js-collection-nav')
        .find('.collection-nav-item__title')
        .contains(nav.nav)
        .should('be.visible')
        .parent('a')
        .should('have.attr', 'href', nav.url)
    })
    it(`Loads "${nav.nav}" page when navigation is clicked`, function (){
      cy.get('.collection-nav.js-collection-nav')
        .find('.collection-nav-item__title')
        .contains(nav.nav).click()
        .wait(400).url().should('include', nav.url)
    })
  })
})
