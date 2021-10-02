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

Cypress.Commands.add('Navigate', () => {
  cy.visit('http://localhost:3000/');
  //   cy.waitForReact(1000, '#root'); // 1000 is the timeout in milliseconds, you can provide as per AUT
  cy.title().should('eq', 'My Favorite Images');
  cy.get('.sc-dIUeWJ').click();
  cy.url().should('include', 'search');
  cy.get('.sc-giImIA').type('sunshine').should('have.value', 'sunshine');
  cy.get('.sc-ezredP').click();
  cy.waitForReact();
  cy.wait(10000);
});
