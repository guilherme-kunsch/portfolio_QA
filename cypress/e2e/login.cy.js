import loc from "../support/locators";

describe("Testing the application", () => {
  it("Deve realizar o login com dados válidos", () => {
    cy.login("Admin", "admin123");
  });

  it("Deve apresentar erro ao inserir senha inválida", () => {
    cy.login("Admin", "admin");
    cy.get(loc.MESSAGE).should("contain", "Invalid credentials");
  });

  it("Deve apresentar erro ao inserir usuário inválido", () => {
    cy.login("admin", "admin123");
    cy.get(loc.MESSAGE).should("contain", "Invalid credentials");
  });

  it.only("Deve apresentar erro ao inserir somente o usuário", () => {
    cy.login("admin", "");
    cy.get(loc.MESSAGE_REQUIRED).should("contain", "Required");
  });
});
