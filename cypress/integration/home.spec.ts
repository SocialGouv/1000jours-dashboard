describe("Home page", () => {
  it("should render the main page", () => {
    cy.visit("http://localhost:3000/");
    cy.title().should(
      "equal",
      "1000 premiers jours - Dashboard"
    );
    cy.get("h1").should(
      "contain",
      "Gestion & visualisation des demandes de contact"
    );
  });
});
