/// <reference types="cypress" />

context("Focus", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("tab roving focus", () => {
    // focus on bills tab
    // press right arrow
    cy.get("#bills-tabs-tab-bills").focus().type("{rightArrow}");

    // should have focus on transactions
    // move left
    cy.get("#bills-tabs-tab-transactions")
      .should("have.focus")
      .type("{leftArrow}");

    // should have focus on bulls
    // click
    cy.get("#bills-tabs-tab-bills").should("have.focus").click();

    // bills panel should be visible
    cy.get("#bills-tabs-panel-bills").should("be.visible");

    // press tab
    cy.realPress("Tab");

    // should focus on panel
    cy.get("#bills-tabs-panel-bills").should("have.focus");

    // move focus on bills tab
    // press right arrow
    cy.get("#bills-tabs-tab-bills").focus().type("{rightArrow}");

    // should focus on transactions tab
    // click
    cy.get("#bills-tabs-tab-transactions").should("have.focus").click();

    // transactions panel should be visible
    cy.get("#bills-tabs-panel-transactions").should("be.visible");

    // press tab
    cy.realPress("Tab");

    // should focus on transactions panel
    cy.get("#bills-tabs-panel-transactions").should("have.focus");
  });
});
