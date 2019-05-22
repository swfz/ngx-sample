describe('demo-viewchildren', () => {
  const urlBase = 'http://localhost:4200/';
  it('demo with typescript', () => {
    cy.visit(`${urlBase}viewchildren`);

    cy.get('i.fa-exclamation-circle')
      .eq(0)
      .click();
    cy.get('div.popover-content')
      .eq(0)
      .should('have.text', 'a');
  });

  it('demo with xpath', () => {
    cy.visit(`${urlBase}viewchildren`);

    cy.xpath('//i[contains(@class, "fa-exclamation-circle")]')
      .eq(1)
      .click();
    cy.xpath('//div[contains(@class, "popover-content")]').should(
      'have.text',
      'b'
    );
  });

  it('demo with screenshot', () => {
    cy.visit(`${urlBase}viewchildren`);

    cy.xpath('//button[contains(@class, "btn-outline-primary")]')
      .eq(0)
      .click();

    cy.compareSnapshot('demo-screenshot', 0.1);
  });
});
