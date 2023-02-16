describe("Formulaire d'ajout page", () => {
  beforeEach(() => {
    cy.visit("/ajout-demande");
  });
  it("should be correct input label", () => {
    cy.get("form > :nth-child(1) > .fr-label").should("contain", "Prénom");
    cy.get("form > :nth-child(2) > .fr-label").should("contain", "Nombre d'enfants");
    cy.get("form > :nth-child(3) > .fr-label").should("contain", "Date de naissance du dernier enfant");
    cy.get("form > :nth-child(4) > .fr-label").should("contain", "Département");
    cy.get("form > :nth-child(5) > .fr-label").should("contain", "Date de prise de contact");
    cy.get("form > :nth-child(6) > .fr-label").should("contain", "Provenance du contact");
  });
  it("allows users to subscribe to the email list", () => {
    cy.get("#name").type("Mina")
    cy.get("#childNumber").type("2")
    cy.get('#select-\\:R8sm\\:').select("01 - Ain")
  })
  it("should write a comment", () => {
    cy.get("#comment").type("Ceci est un long message de test pour tester mon composant\nLe retour a la ligne se fait il correctement ?")
  })
  it("should click on button", () => {
    cy.get("form > .fr-btn").click()
  })
});