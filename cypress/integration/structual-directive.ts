describe('structual-directive', () => {
  const urlBase = 'http://localhost:4200/';

  it('structual-directive', () => {
    cy.visit(`${urlBase}structual_directive`);
    cy.compareSnapshot('structual-directive', 0.0);
  });
});
