describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true);
  });
});
describe('number input directive', function() {
  const urlBase = 'http://localhost:4200/';
  it('format at focus out', function() {
    cy.visit(`${urlBase}focus`);

    cy.get('[name="directive-input"]').should('have.value', '10,000');
    cy.get('[name="directive-input"]').focus();
    cy.get('[name="directive-input"]').should('have.value', '10000');
    cy.get('[name="directive-input"]').blur();
    cy.get('[name="directive-input"]').should('have.value', '10,000');

    cy.compareSnapshot('number-input-form', 0.3);
  });
});
describe('ag-grid flex box', function() {
  const urlBase = 'http://localhost:4200/';

  it('collapse and expand', function() {
    cy.visit(`${urlBase}grid/flex`);

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
