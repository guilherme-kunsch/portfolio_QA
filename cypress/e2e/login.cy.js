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

  it("Deve apresentar erro ao inserir somente o usuário", () => {
    cy.login("admin", "");
    cy.get(loc.MESSAGE_REQUIRED).should("contain", "Required");
  });

  it("Deve apresentar erro ao inserir somente a senha", () => {
    cy.login("", "admin123");
    cy.get(loc.MESSAGE_REQUIRED).should("contain", "Required");
  });

  it.only("Deve apresentar erro ao inserir e-mail ao invés de usuário", () => {
    cy.login("teste@ucl.br", "admin123");
    cy.get(loc.MESSAGE, { timeout: 10000 }).should(
      "contain",
      "Invalid credentials",
    );
  });
});
