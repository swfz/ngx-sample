describe('ag-grid flex box', () => {
  const urlbase = 'http://localhost:4200/';

  it('collapse and expand', () => {
    cy.visit(`${urlbase}grid/flex`);

    cy.get('div.card-block')
      .contains('Menu2 content')
      .should('be.visible');
    cy.get('button')
      .contains('Toggle Menu2 collapse')
      .click();
    cy.get('div.card-block')
      .contains('Menu2 content')
      .should('be.hidden');
    cy.get('button')
      .contains('Toggle Menu2 collapse')
      .click();
    cy.get('div.card-block')
      .contains('Menu2 content')
      .should('be.visible');

    cy.compareSnapshot('ag-grid-flexbox', 0.3);
  });
});
