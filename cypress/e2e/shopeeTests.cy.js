describe('Shopee Homepage Tests with Language Selection', () => {
  beforeEach(() => {
    cy.visit('https://shopee.co.th/')
  })

  // Test case 1: Verify homepage in English after selecting EN language
  it('Should handle language popup and load homepage in EN', () => {
    // Wait for the language selection popup to appear and then click "English"
    cy.get('.language-selection', { timeout: 10000 }).should('be.visible')
    cy.get('.language-selection__list-item button').contains('English').click()

    // Wait for the page to reload and verify that the page is in English
    cy.contains('Sign Up', { timeout: 10000 }).should('be.visible')
  })

  // Test case 2: Search for the keyword "baby toys" in the search box
  it('Should search for "baby toys" and show relevant results', () => {
    cy.get('.language-selection', { timeout: 10000 }).should('be.visible')
    cy.get('.language-selection__list-item button').contains('English').click()

    cy.contains('Sign Up', { timeout: 10000 }).should('be.visible')

    // Perform the search for "baby toys" by typing in the input field and clicking the search button
    cy.get('.shopee-searchbar-input__input').type('baby toys')
    cy.get('.shopee-searchbar__search-button').click()

    // Verify that the URL contains 'search' and 'baby' to confirm the search results page is loaded
    cy.url().should('include', 'search').and('include', 'baby')

    // Verify that the search results list contains multiple items
    cy.get('.shopee-search-item-result__items')
      .find('.shopee-search-item-result__item') // Find each item in the list
      .should('have.length.greaterThan', 0) // Ensure that there is at least one item in the list
  })

  // Test case 3: Display search results as a list
  it('Should display search results as a list of products', () => {
    cy.get('.language-selection', { timeout: 10000 }).should('be.visible')
    cy.get('.language-selection__list-item button').contains('English').click()

    cy.contains('Sign Up', { timeout: 10000 }).should('be.visible')

    cy.get('.shopee-searchbar-input__input').type('baby toys')
    cy.get('.shopee-searchbar__search-button').click()

    cy.url().should('include', 'search').and('include', 'baby')

    // Verify that the product listing section is visible
    cy.get('.shopee-search-item-result__items').should('be.visible')

    // Verify that the product items are displayed in a list format
    cy.get(
      '.shopee-search-item-result__items .shopee-search-item-result__item'
    ).should('have.length.greaterThan', 0) // Check that the list has at least one item
  })
})
