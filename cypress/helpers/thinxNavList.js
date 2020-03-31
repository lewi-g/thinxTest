import {thinx} from './thinxProducts'

let shopDropNavItems = ['Shop all undies']

thinx.collections.forEach(col => {
  if (col.styles) {
    const styles = col.styles.map(st => st.name)
    shopDropNavItems = [...shopDropNavItems, col.collectionName, ...styles]
  } else {
    shopDropNavItems.push(col.collectionName)
  }
})

export const mainNavList = [
  {
    navItem: 'shop',
    drop: true,
    dropNavItems: shopDropNavItems
  },
  {
    navItem: 'learn',
    drop: true,
    dropNavItems: ['how it works', 'how to wash', 'reviews', 'faqs', 'about']
  },
  { navItem: 'mission', drop: true ,
  dropNavItems: []
},
  {
    navItem: 'periodical',
    drop: true,
    dropNavItems: [
      'like talking w/ your BFFs after a few mimosas... but a blog.',
      'Thinx Piece',
      'Women\'s Health',
      'This Week in Feminism',
      'Undie the Surface',
      'Pop Culture'
    ]
  },
  { navItem: 'Know Your Flow', drop: false }
]

export const shopAllNavItems = [
  {
    nav: 'Shop all',
    url: '/collections/thinx-shop-all'
  },
  {
    nav: 'Classic',
    url: '/collections/thinx-classic'
  },
  {
    nav: 'Organic cotton',
    url: '/collections/thinx-organic-cotton'
  },
  {
    nav: 'Thinx air',
    url: '/collections/thinx-air'
  },
  {
    nav: 'Activewear',
    url: '/collections/thinx-activewear'
  },
  {
    nav: 'Saver sets',
    url: '/collections/thinx-saver-sets'
  },
  {
    nav: 'Last call',
    url: '/collections/thinx-last-call-sale'
  }
]