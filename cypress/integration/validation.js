describe('validation', () => {
  const urlBase = 'http://localhost:4200/';

  it('validation', () => {
    cy.visit(`${urlBase}validation`);
    cy.compareSnapshot('validation', 0.0);
  });
});
