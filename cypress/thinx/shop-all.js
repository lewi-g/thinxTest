import { thinx } from '../helpers/thinxProducts'

describe('Shop All Page', () => {
  before(()=> {
    cy.visit('https://www.shethinx.com/collections/thinx-shop-all')
  })

  const collections = thinx.collections

  collections.forEach(collection => {
    it(`shows ${collection.collectionName} as collection header`, ()=> {
      cy.get('.collection-grid')
        .contains(collection.collectionName)
        .parent()
        .should('have.class', 'collection-header__title')
    })

    if (collection.collectionName !== 'Saver Sets') {
      const styles = collection.styles

      styles.forEach(style => {
        const productName = new RegExp('^' + style.name + '$')
        
        it(`shows ${style.name} style`, ()=> {
          cy.get('.product-item')
            .contains(productName)
            .parent()
            .should('have.class', 'product-item__title')
            .and('be', 'visible')
        })

        it(`shows the original price for ${style.name} is $${style.price}`, ()=> {
          const price = '$' + style.price
          cy.get('.product-item')
            .contains(productName)
            .parent()
            .next()
            .should('have.class', 'product-item__price')
            .and('contain', price)
            .and('be', 'visible')
        })

        it(`shows that its absorbance is of type ${style.type}`, ()=> {
          cy.get('.product-item')
            .contains(productName)
            .parent()
            .parent()
            .parent()
            .find('.product-item__type')
            .contains(style.type)
            .should('be.visible')
        })

        it(`shows at least one color option for ${style.name}`, ()=> {
          cy.get('.product-item')
            .contains(productName)
            .parent()
            .parent()
            .siblings('.product-item__swatches')
            .find('.collection-swatch')
            .should('have.length.gte', 1)
          })
          
          // TO DO
          // shows exact number of colors
          // Shows each color
          // When click on swatch, the image changes
      })
    }
  })
})
