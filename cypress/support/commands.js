Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Julio')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type('Teste Cypress')
    cy.get('button[type="submit"]').click()

})