import { thinx } from '../helpers/thinxProducts'
import { mainNavList as navList } from '../helpers/thinxNavList'

describe('shethinx landing page desktop', () => {
  before(function() {
    cy.visit('/').get('[alt="Thinx Logo"]')
  })

  it('can load shethinx.com', () => {
    cy.get('[alt="Thinx Logo"]')
  })

  it(`Shows a navigation bar with ${navList.length} items`, () => {
    cy.get('.desktop-nav')
      .find('.desktop-nav__item')
      .should('have.length', navList.length)
  })

  navList.forEach(n => {
    describe(`"${n.navItem}" dropdown nav-items and behaviour`, () => {
      it(`shows "${n.navItem}" in the navigation bar`, () => {
        cy.get('.desktop-nav').within(() => {
          cy.findByText(n.navItem).should('be.visible')
        })
      })

      if (n.drop) {
        it('dropdown is not initially visible', () => {
          cy.get('.desktop-nav-dropdown').should('not.be.visible')
        })

        it(`hovering on "${n.navItem}" shows a dropdown with all the styles`, function() {
          cy.get('.desktop-nav')
            .within(() => {
              cy.findByText(n.navItem)
                .parent()
                .trigger('mouseover')
                .wait(400)
            })
            .get(`.desktop-nav-dropdown--${n.navItem}`)
            .should('be.visible')
        })

        // navigation items
        n.dropNavItems.forEach(dropNavItem => {
          it(`should show "${dropNavItem}" in "${n.navItem}" dropdown`, () => {
            cy.get(`.desktop-nav-dropdown--${n.navItem}`)
              .should('be.visible')
              .within(() => {
                cy.findByText(dropNavItem).should('be.visible')
              })
          })
        })

        //hide dropdown on mouseout
        it(`should hide dropdown on mouseout of "${n.navItem}"`, () => {
          cy.get('.desktop-nav')
            .within(() => {
              cy.findByText(n.navItem)
                .parent()
                .trigger('mouseout')
                .wait(400)
            })
            .get(`.desktop-nav-dropdown--${n.navItem}`)
            .should('not.be.visible')
            .get('.desktop-nav-dropdown')
            .should('not.be.visible')
        })
      }
    })
  })
})

