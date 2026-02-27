import loc from "../support/locators";
describe("Testing the application", () => {
  it("Registering a recruitment", () => {
    cy.login("Admin", "admin123");
    cy.contains(loc.RECRUITMENT.NAV, "Recruitment", { timeout: 10000 })
      .should("be.visible")
      .click();

    cy.get(loc.RECRUITMENT.ADD, {
      timeout: 10000,
    }).click();

    cy.get(loc.RECRUITMENT.FIRST_NAME)
      .type("Guilherme")
      .should("have.value", "Guilherme");
    cy.get(loc.RECRUITMENT.MIDDLE_NAME)
      .type("Kunsch")
      .should("have.value", "Kunsch");
    cy.get(loc.RECRUITMENT.LAST_NAME)
      .type("Das Neves")
      .should("have.value", "Das Neves");

    cy.get(loc.RECRUITMENT.VACANCY).click();
    cy.get(loc.RECRUITMENT.SELECT_VACANCY)
      .contains("Senior Support Specialist")
      .click();

    cy.get(loc.RECRUITMENT.EMAIL)
      .find("input")
      .eq(0)
      .type("teste@teste.com")
      .should("have.value", "teste@teste.com");

    cy.get(loc.RECRUITMENT.CONTACT_NUMBER)
      .find("input")
      .eq(1)
      .type("27997523768")
      .should("have.value", "27997523768");

    cy.get(loc.RECRUITMENT.UPLOAD).selectFile(
      "cypress/fixtures/images/curriculo.pdf",
      { force: true },
    );

    cy.contains("curriculo.pdf").should("be.visible");

    cy.get(loc.RECRUITMENT.KEYWORDS)
      .find("input")
      .eq(3)
      .type("works, recruitment, emplooyes")
      .should("have.value", "works, recruitment, emplooyes");

    cy.get(loc.RECRUITMENT.CALENDAR).find("input").click();
    cy.get(loc.RECRUITMENT.SELECT_DATE)
      .contains(".oxd-calendar-date", "25")
      .click();

    cy.get(loc.RECRUITMENT.NOTES)
      .find("textarea")
      .type("Sabe programar e nadar!")
      .should("have.value", "Sabe programar e nadar!");

    cy.get(loc.RECRUITMENT.CHECKBOX).click();

    cy.get(loc.RECRUITMENT.SALVE_BUTTON).click();

    cy.get(loc.RECRUITMENT.MESSAGE, { timeout: 5000 }).should(
      "contain",
      "Successfully Save",
    );
  });
});
