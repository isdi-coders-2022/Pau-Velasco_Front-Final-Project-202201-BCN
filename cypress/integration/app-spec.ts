// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/login");
  });

  it("renders the app should find h2 with login", function () {
    cy.get("input").first().type("pau");
    cy.get("input").last().type("pau");
    cy.get("button").click();
  });
});

export {};
