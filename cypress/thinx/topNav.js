import { thinx } from '../helpers/thinxProducts'
const btwn = 'pages/btwn'
const speax = 'pages/speax'
describe('top Nav of shethinx.com', () => {
  before(function() {
    cy.visit('/').get('[alt="Thinx Logo"]')
  })
  it('shows page', () => {
    cy.get('[alt="Thinx Logo"]')
  })
  it('shows Thinx logo in header', () => {
    cy.get('.common-header__logo.common-header__logo--thinx').should(
      'be.visible'
    )
  })
  it('shows Thinx[BTWN] in header', () => {
    cy.get('.common-header__logo--desktop.common-header__logo--btwn').should(
      'be.visible'
    )
  })
  it('shows Speax in header', () => {
    cy.get('.common-header')
      .find('[data-brand="speax"]')
      .should('be.visible')
  })
  it('Clicking BTWN takes you to BTWN page', () => {
    cy.get('.common-header__logo--desktop.common-header__logo--btwn')
      .click()
      .wait(400)
      .url()
      .should('include', btwn)
  })
  it('Clicking Speax takes you to Speax page', () => {
    cy.get('.common-header')
      .find('[data-brand="speax"]')
      .click()
      .wait(400)
      .url()
      .should('include', speax)
  })
  it('Clicking Thinx takes you to Thinx page', () => {
    cy.get('.common-header__logo.common-header__logo--thinx')
      .click()
      .wait(400)
      .url()
      .should('include', 'shethinx.com')
  })
})
