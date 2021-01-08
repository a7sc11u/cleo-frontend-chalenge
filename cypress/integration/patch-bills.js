/// <reference types="cypress" />

context("Bills", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("add transaction as bill", () => {
    // count bills list items
    cy.get("#bills-tabs-panel-bills .bills-list-item").then(($billElements) => {
      const initialBillsCount = $billElements.length;

      // go to transactions
      cy.get("#bills-tabs-tab-transactions").click();

      // count transactions list items
      cy.get("#bills-tabs-panel-transactions .bills-list-item").then(
        ($transactionElements) => {
          const initialTransactionsCount = $transactionElements.length;

          // click add as bill
          cy.get("#bills-tabs-panel-transactions .bill-action-button")
            .first()
            .click();

          /* eslint-disable-next-line */
          cy.wait(800);

          // should have one less transactin
          cy.get("#bills-tabs-panel-transactions .bills-list-item").should(
            "have.length",
            initialTransactionsCount - 1
          );

          // go back to bills
          cy.get("#bills-tabs-tab-bills").click();

          // should have one more bill
          cy.get("#bills-tabs-panel-bills .bills-list-item").should(
            "have.length",
            initialBillsCount + 1
          );
        }
      );
    });
  });

  it("remove bill", () => {
    //open transactions tab
    cy.get("#bills-tabs-tab-transactions").click();

    // count transactions list items
    cy.get("#bills-tabs-panel-transactions .bills-list-item").then(
      ($transactionElements) => {
        const initialTransactionsCount = $transactionElements.length;

        // go back to bills tab
        cy.get("#bills-tabs-tab-bills").click();

        // count bills list items
        cy.get("#bills-tabs-panel-bills .bills-list-item").then(
          ($billElements) => {
            const initialBillsCount = $billElements.length;

            // click remove bill
            cy.get("#bills-tabs-panel-bills .bill-action-button")
              .first()
              .click();

            /* eslint-disable-next-line */
            cy.wait(800);

            // should have one less bill
            cy.get("#bills-tabs-panel-bills .bills-list-item").should(
              "have.length",
              initialBillsCount - 1
            );

            // go to transactions
            cy.get("#bills-tabs-tab-transactions").click();

            // should have one more transaction
            cy.get("#bills-tabs-panel-transactions .bills-list-item").should(
              "have.length",
              initialTransactionsCount + 1
            );
          }
        );
      }
    );
  });
});
