Cypress.Commands.add('stubServer', () => {
    cy.server();
    cy.route('/api/heroes/1', {id: 1, name: 'hoge'}).as('hero1');
    cy.route('/api/heroes/2', {id: 2, name: 'fuga'}).as('hero2');
    cy.route('/api/heroes/3', {id: 3, name: 'piyo'}).as('hero3');
    cy.route('/api/heroes', [{id: 1, name: 'hoge'}, {id: 2, name: 'fuga'}, {id: 3, name: 'piyo'}]).as('allHero');
    cy.route({url: '/api/heroes/4', status: 404, response: 'Hero not found.'}).as('notFound');
});

Cypress.Commands.add('assertCurrentHero', (id,name) => {
  cy.xpath('//div[@aria-label="hero"]/div[@aria-label="id"]').first().should('have.text', id);
  cy.xpath('//div[@aria-label="hero"]/div[@aria-label="name"]').first().should('have.text', name);
});

Cypress.Commands.add('assertLog', (lines, code, ok) => {
  cy.get('.alert-info > div').should($log => {
    expect($log).to.have.length(lines);

    Array.from($log).forEach((log,i,_) => {
      expect(log).to.contain(` ${code} `);
      expect(log).to.contain(ok);
    });
  });
});

describe('http-request-cache', () => {
  const urlBase = 'http://localhost:4200/';

  it('get-all-heroes', () => {
    cy.stubServer();

    cy.visit(`${urlBase}cache`);

    cy.get('.btn-primary').click();
    cy.wait('@allHero');
    cy.xpath('//div[@aria-label="heroes"]').should('have.length', 3);
    cy.xpath('//div[@aria-label="heroes"]/div[@aria-label="id"]').eq(0).should('have.text', '1');
    cy.xpath('//div[@aria-label="heroes"]/div[@aria-label="name"]').eq(0).should('have.text', 'hoge');

    cy.xpath('//div[@aria-label="heroes"]/div[@aria-label="id"]').eq(1).should('have.text', '2');
    cy.xpath('//div[@aria-label="heroes"]/div[@aria-label="name"]').eq(1).should('have.text', 'fuga');

    cy.xpath('//div[@aria-label="heroes"]/div[@aria-label="id"]').eq(2).should('have.text', '3');
    cy.xpath('//div[@aria-label="heroes"]/div[@aria-label="name"]').eq(2).should('have.text', 'piyo');

    cy.assertLog(1,200,'true');

    cy.compareSnapshot('get-all-heroes', 0.0);
  });

  it('get-one-hero', () => {
    cy.stubServer();
    cy.visit(`${urlBase}cache`);

    cy.get('.btn-success').eq(0).click();
    cy.wait('@hero1');

    cy.assertCurrentHero('1','hoge');
    cy.assertLog(1,200,'true');

    cy.compareSnapshot('get-one-hero', 0.0);
  });

  it('get-one-hero-with-cache', () => {
    cy.stubServer();
    cy.visit(`${urlBase}cache`);

    // 1 -> 2 -> 1
    cy.get('.btn-success').eq(0).click();
    cy.wait('@hero1');

    // 1でdom変わってるか
    cy.assertCurrentHero('1','hoge');

    // log1行か
    cy.assertLog(1,200,'true');

    cy.get('.btn-success').eq(1).click();
    cy.wait('@hero2');

    // 2でdom変わってるか
    cy.assertCurrentHero('2','fuga');

    // log2行になっているか
    cy.assertLog(2,200,'true');

    cy.get('.btn-success').eq(0).click();
    cy.wait(5000);
    // 1でdom変わってるか
    cy.assertCurrentHero('1','hoge');
    // log増えてないか(cacheから参照されているか)
    cy.assertLog(2,200,'true');

    cy.compareSnapshot('get-one-hero-with-cache', 0.0);
  });

  it('get-one-hero-but-not-found', () => {
    // 404のログチェック
    cy.stubServer();
    cy.visit(`${urlBase}cache`);

    cy.get('.btn-success').eq(3).click();
    cy.wait('@notFound');

    cy.assertLog(1,404,'false');

    cy.compareSnapshot('get-one-hero-but-not-found', 0.0);
  });

  it('all-pattern', () => {
    cy.stubServer();
    cy.visit(`${urlBase}cache`);

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

    cy.compareSnapshot('all-pattern', 0.0);
  });
});
