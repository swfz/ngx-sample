describe('queryparams', () => {
  const urlBase = 'http://localhost:4200/';

  it('init-with-url', () => {
    cy.visit(`${urlBase}queryparams?count=5`);
    cy.get('span.text-info').should(value$ => {
      expect(value$[0].textContent).to.equal('5')
    });

    cy.compareSnapshot('init-with-url', 0.0);
  });

  it('event-to-url', () => {
    cy.visit(`${urlBase}queryparams`);

    cy.get('button.btn-primary').click();
    cy.get('button.btn-primary').click();
    cy.get('button.btn-primary').click();

    cy.get('span.text-info').should(value$ => {
      expect(value$[0].textContent).to.equal('3')
    });
    cy.url().should('include', 'count=3')

    cy.compareSnapshot('event-to-url', 0.0);
  });
});
