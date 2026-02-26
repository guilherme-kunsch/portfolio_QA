describe("Testing the application", () => {
  // before(() => {
  // })
  it("Registering a user", () => {
    cy.login("Admin", "admin123");
    cy.contains(".oxd-main-menu-item", "Recruitment", { timeout: 10000 })
      .should("be.visible")
      .click();

    cy.get(".orangehrm-header-container > .oxd-button", {
      timeout: 10000,
    }).click();

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

    cy.get(".oxd-grid-3.orangehrm-full-width-grid")
      .find("input")
      .eq(0)
      .type("teste@teste.com")
      .should("have.value", "teste@teste.com");

    cy.get(".oxd-grid-3.orangehrm-full-width-grid")
      .find("input")
      .eq(1)
      .type("27997523768")
      .should("have.value", "27997523768");

    cy.get(".oxd-file-input").selectFile(
      "cypress/fixtures/images/curriculo.pdf",
      { force: true },
    );

    cy.contains("curriculo.pdf").should("be.visible");

    cy.get(".oxd-grid-3.orangehrm-full-width-grid")
      .find("input")
      .eq(3)
      .type("works, recruitment, emplooyes")
      .should("have.value", "works, recruitment, emplooyes");

    cy.get(".oxd-date-wrapper").find("input").click();
    cy.get(".oxd-calendar-wrapper")
      .contains(".oxd-calendar-date", "25")
      .click();

    cy.get(".oxd-grid-3.orangehrm-full-width-grid")
      .find("textarea")
      .type("Sabe programar e nadar!")
      .should("have.value", "Sabe programar e nadar!");

    cy.get(".oxd-icon.bi-check.oxd-checkbox-input-icon").click();

    cy.get(".oxd-button--secondary").click();

    cy.get(".oxd-toast", { timeout: 5000 }).should(
      "contain",
      "Successfully Save",
    );
  });
});
