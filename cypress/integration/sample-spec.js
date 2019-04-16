describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
});
describe('number input directive', function() {
  const urlBase = 'http://127.0.0.1:4200/';
  it('format at focus out', function() {
    cy.visit(`${urlBase}focus`);

    cy.get('[name="directive-input"]').should('have.value', '10,000')
    cy.get('[name="directive-input"]').focus();
    cy.get('[name="directive-input"]').should('have.value', '10000')
    cy.get('[name="directive-input"]').blur();
    cy.get('[name="directive-input"]').should('have.value', '10,000')
  })
});
