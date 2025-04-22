// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (name, surname, email, text) => {
    cy.get('#firstName').type(name)
    cy.get('#lastName').type(surname)
    cy.get('#email').type(email)
    cy.get('#open-text-area').type(text)
    cy.get('button.button').click()

    cy.get('.success').should('be.visible')
    cy.get('.success').contains('Mensagem enviada com sucesso.').should('be.visible')
  })

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })