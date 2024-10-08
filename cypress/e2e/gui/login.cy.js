describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false } // Não irá fazer o cache da Session pois é um teste de login 

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
