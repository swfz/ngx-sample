describe('number input directive', () => {
  const urlBase = 'http://localhost:4200/';
  it('format at focus out', () => {
    cy.visit(`${urlBase}focus`);

    cy.get('[name="directive-input"]').should('have.value', '10,000');
    cy.get('[name="directive-input"]').focus();
    cy.get('[name="directive-input"]').should('have.value', '10000');
    cy.get('[name="directive-input"]').blur();
    cy.get('[name="directive-input"]').should('have.value', '10,000');

    cy.compareSnapshot('number-input-form', 0);
  });
});
