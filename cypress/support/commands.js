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

import loc from "../support/locators";
Cypress.Commands.add("login", (user, password) => {
  cy.visit(loc.URL);

  if (user) {
    cy.get(loc.LOGIN.USER).type(user);
  }

  if (password) {
    cy.get(loc.LOGIN.PASSWORD).type(password);
  }

  cy.get(loc.LOGIN.BTN_LOGIN).click();
});
