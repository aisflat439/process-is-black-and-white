describe("Navigating around the website works", () => {
  describe('the header', () => {
    it("shows books, process and award winners", () => {
      cy.visit("/")

      cy.get('header')
          .findByText('the books')
          .should('exist')

      cy.get('header')
          .findByText('the process')
          .should('exist')
          
      cy.get('header')
          .findByText('award winners')
          .should('exist')
    })
  })

  describe('navigating the header', () => {
    it('navigates to the each page in the header', () => {
      cy.visit("/")

      cy.get('header')
          .findByText('the books')
          .click()

      cy.url()
          .should('include', '/books')
      
      cy.get('header')
          .findByText('the process')
          .click()

      cy.url()
          .should('include', '/the-process')
      
      cy.get('header')
          .findByText('award winners')
          .click()

      cy.url()
          .should('include', '/award-winners')
      
      cy.get('header')
          .findByText(/the process is black and white/i)
          .click()

      cy.get('h1')
          .findByText(/A weekly show following the entrepreneurship journeys of two friends./i)
    })
  })
})