describe('Search and add images to favorites', () => {
  Cypress.config('pageLoadTimeout', 100000);

  //   before(() => {
  //     cy.Navigate();
  //   });
  it('Navigate to search', () => {
    // before(function () {
    //   cy.Navigate();
    // });
    cy.visit('http://localhost:3000/');
    cy.title().should('eq', 'My Favorite Images');
    cy.get('.sc-dIUeWJ').click();
    cy.url().should('include', 'search');
    cy.get('.sc-giImIA').type('sunshine').should('have.value', 'sunshine');
    cy.get('.sc-ezredP').as('someButtonToNavigateOnNewPage');

    cy.get('@someButtonToNavigateOnNewPage').click();

    // cy.click('#YouAreOnNewPage');
  });

  it('Mark first two pictures as favorite', () => {
    cy.get('[data-cy=loading_spinner]', { timeout: 10000 }).should('not.exist');
    cy.get('[data-cy="test-list"]', { timeout: 10000 })
      .then(($ul) => {
        return $ul;
      })
      .as('list');
    cy.get('@list').within(($ul) => {
      cy.get('li').first().trigger('mouseover').should('be.visible');
      // .children()
      // .click();
      cy.get('[data-testid="plus-icon-0"]')
        .trigger('mouseover')
        .invoke('show')
        // .should('be.visible')
        .click({ force: true });
      cy.get('li').eq(1).trigger('mouseover').should('be.visible');
      // .children()
      // .click();
      cy.get('[data-testid="plus-icon-1"]')
        .trigger('mouseover')
        .invoke('show')
        // .should('be.visible')
        .click({ force: true });
    });
  });
});
