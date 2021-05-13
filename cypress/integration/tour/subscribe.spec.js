describe('the subscribe block works as expected', () => {
    it("appears on the homepage", () => {
      cy.visit("/")

      cy.findByTestId('Spotify').should('exist')
      cy.findByTestId('iTunes').should('exist')
      cy.findByTestId('Google-Podcast').should('exist')
      cy.findByTestId('PocketCasts').should('exist')
      cy.findByTestId('RSS').should('exist')
    })
})