import loc from "../support/locators";

describe("Testing the application", () => {
  before(() => {
    cy.visit(loc.URL);
  });

  it("Deve realizar o login com dados válidos", () => {
    cy.get(loc.LOGIN.USER).type("Admin").should("have.value", "Admin");
    cy.get(loc.LOGIN.PASSWORD)
      .type("admin123")
      .should("have.value", "admin123");

    cy.get(loc.LOGIN.BTN_LOGIN).click();
  });

  it.only("Deve apresentar erro ao inserir senha inválida", () => {
    cy.visit(loc.URL);
    cy.get(loc.LOGIN.USER).type("Admin").should("have.value", "Admin");
    cy.get(loc.LOGIN.PASSWORD)
      .type("admin1234")
      .should("have.value", "admin1234");

    cy.get(loc.LOGIN.BTN_LOGIN).click();

    cy.get(loc.MESSAGE).should("contain", "Invalid credentials");
  });
});
