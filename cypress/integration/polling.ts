describe('polling', () => {
  const urlBase = 'http://localhost:4200/';

  it('polling', () => {
    cy.visit(`${urlBase}polling`);
    cy.compareSnapshot('polling', 0.0);
  });
});
