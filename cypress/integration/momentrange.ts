describe('momentrange', () => {
  const urlBase = 'http://localhost:4200/';

  it('is-visible', () => {
    cy.visit(`${urlBase}momentrange`);

    // 画面が見れるか
    cy.contains('true').should('is.visible');
    cy.contains('false').should('is.visible');

    cy.compareSnapshot('moment-range-is-visible', 0.05);
  });
});
