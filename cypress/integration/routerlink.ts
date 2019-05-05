describe('routerlink', () => {
  const urlBase = 'http://localhost:4200/';

  it('routerlink', () => {
    cy.visit(`${urlBase}routerlink`);
    cy.compareSnapshot('routerlink', 0.0);
  });
});
