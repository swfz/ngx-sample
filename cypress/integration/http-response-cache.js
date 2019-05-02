describe('http-request-cache', () => {
  const urlBase = 'http://localhost:4200/';

  it('get-all-heroes', () => {
    cy.visit(`${urlBase}cache`);

    cy.server();
    cy.route('/api/heroes/1', {id: 1, name: 'hoge'}).as('hero1');
    cy.route('/api/heroes/2', {id: 2, name: 'fuga'}).as('hero2');
    cy.route('/api/heroes/3', {id: 3, name: 'piyo'}).as('hero3');
    cy.route('/api/heroes', [{id: 1, name: 'hoge'}, {id: 2, name: 'fuga'}, {id: 3, name: 'piyo'}]).as('allHero');
    cy.route({url: '/api/heroes/4', status: 404, response: 'Hero not found.'}).as('notFound');

    cy.get('.btn-primary').click();
    cy.get('.btn-success').eq(0).click();
    cy.get('.btn-success').eq(1).click();
    cy.get('.btn-success').eq(2).click();
    cy.get('.btn-success').eq(3).click();

    // cached
    cy.get('.btn-success').eq(1).click();

    cy.wait('@allHero');
    cy.wait('@hero1');
    cy.wait('@hero2');
    cy.wait('@hero3');
    cy.wait('@notFound');

    cy.get('.alert-info > div').should($log => {
      expect($log).to.have.length(5);

      Array.from($log).forEach((log,i,_) => {
        if(i === 4){
          expect(log).to.contain(' 404 ');
          expect(log).to.contain('false');
        }
        else{
          expect(log).to.contain(' 200 ');
          expect(log).to.contain('true');
        }
      })
    });

    cy.compareSnapshot('get-heroes', 0.0);

  });
});
