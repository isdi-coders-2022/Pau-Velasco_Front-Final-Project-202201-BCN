// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/login");
  });

  it("log the user to de main page", function () {
    cy.get("input").first().type("pau");
    cy.get("input").last().type("pau");
    cy.get("button").click();
  });
});

export {};
