describe('ag-grid-editor', () => {
  const urlBase = 'http://localhost:4200/';

  it('datepicker', () => {
    cy.visit(`${urlBase}grid/reactive`);

    // ダブルクリックで立ち上がるか
    cy.xpath('//div[@col-id="startDate"]').last().dblclick();
    cy.get('bs-datepicker-container').should('be.visible');

    // 値がセットされる
    cy.xpath('//bs-datepicker-container//td/span').eq(15).click();
    // TODO: 厳密な日付の比較など

    cy.compareSnapshot('datepicker', 0.1);
  });

  it('editable', () => {
    cy.visit(`${urlBase}grid/reactive`);

    // editableなセルが編集できるか
    // 編集後背景色が変わるか
    cy.xpath('//div[@col-id="price"]').last().should('not.have.class', 'bg-danger');
    cy.xpath('//div[@col-id="price"]').last().dblclick();
    cy.xpath('//div[@col-id="price"]').last().children('input').type('2000{enter}');
    cy.xpath('//div[@col-id="price"]').last().should('have.class', 'bg-danger');

    cy.compareSnapshot('editable', 0.0);
  });
});
