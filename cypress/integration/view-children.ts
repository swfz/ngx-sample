describe('viewchildren', () => {
  const urlBase = 'http://localhost:4200/';

  it('viewchildren', () => {
    cy.visit(`${urlBase}viewchildren`);

    cy.get('div.popover-content').should('not.be.visible');

    // cy.contains('all open').click();

    cy.get('div.popover-content')
      .eq(0)
      .should('have.text', 'a');
    cy.get('div.popover-content')
      .eq(1)
      .should('have.text', 'b');
    cy.get('div.popover-content')
      .eq(2)
      .should('have.text', 'c');

    cy.compareSnapshot('viewchildren-popover-open', 0.0);

    // cy.contains('all hide').click();

    cy.get('div.popover-content').should('not.be.visible');
  });
});
