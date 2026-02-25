describe("Testing the application", () => {
  // before(() => {
  // })
  it("Registering a user", () => {
    cy.login("Admin", "admin123");
    cy.contains(".oxd-main-menu-item", "Recruitment")
      .should("be.visible")
      .click();

    cy.get(".orangehrm-header-container > .oxd-button").click();

    cy.get('[name="firstName"]')
      .type("Guilherme")
      .should("have.value", "Guilherme");
    cy.get('[name="middleName"]').type("Kunsch").should("have.value", "Kunsch");
    cy.get('[name="lastName"]')
      .type("Das Neves")
      .should("have.value", "Das Neves");

    cy.get(".oxd-select-text").click();
    cy.get(".oxd-select-dropdown")
      .contains("Senior Support Specialist")
      .click();
    // cy.contains("label", "Email").parent().find("input"); //email
    // cy.contains("label", "Contact Number").parent().find("input"); //contact number

    // cy.get(".oxd-file-button"); //resume

    // cy.get(
    //   ".orangehrm-save-candidate-page-full-width > .oxd-input-group > :nth-child(2) > .oxd-input",
    // ); //keywords

    // cy.get(".oxd-date-input > .oxd-input"); //Date of Application

    // cy.get(".oxd-textarea"); //Notes

    // cy.get(".oxd-checkbox-input > .oxd-icon"); //checkbox

    // cy.get(".oxd-button--secondary"); //button save
  });
});
