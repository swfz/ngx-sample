describe('to-promise', () => {
  const urlBase = 'http://localhost:4200/';

  it('to-promise', () => {
    cy.visit(`${urlBase}to-promise`);
    cy.compareSnapshot('to-promise', 0.0);
  });
});
