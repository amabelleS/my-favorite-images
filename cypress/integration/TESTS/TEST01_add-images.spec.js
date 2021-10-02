describe('Search and add images to favorites', () => {
  //   Cypress.config('pageLoadTimeout', 100000);

  before(() => {
    cy.Navigate();
  });

  it('Navigate to search', () => {
    // cy.visit('http://localhost:3000/');
    // cy.title().should('eq', 'My Favorite Images');
    // cy.get('.sc-dIUeWJ').click();
    // cy.url().should('include', 'search');
    // cy.get('.sc-giImIA').type('sunshine').should('have.value', 'sunshine');
    // cy.get('.sc-ezredP').as('someButtonToNavigateOnNewPage');
    // cy.get('@someButtonToNavigateOnNewPage').click();
    // cy.wait(10000);
  });

  it('Mark first two pictures as favorite', () => {
    cy.get('[data-cy=loading_spinner]', { timeout: 100000 }).should(
      'not.exist'
    );
    cy.wait(10000);
    cy.get('[data-cy="test-list"]', { timeout: 100000 })
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
        // .invoke('show')
        .should('be.visible')
        .click();
      cy.get('li').eq(1).trigger('mouseover').should('be.visible');
      // .children()
      // .click();
      cy.get('[data-testid="plus-icon-1"]')
        .trigger('mouseover')
        // .invoke('show')
        .should('be.visible')
        .click();
    });
  });

  it('Navigate back to home page', () => {
    cy.get('[data-testid="backBtn"]').should('be.visible').click();
  });

  //   cy.react('Image');

  // you can have your assertions chained like
  it('Verify the selected pictures in favorites', () => {
    // cy.react('Image').should('be.visible');
    // cy.react('*', { props: { id: '336672' } }).should('be.visible');
    // cy.react('*', { props: { id: '1509956' } }).should('be.visible');
    // cy.get('[data-testid="img-0"]');
    // cy.get('[data-testid="img-1"]');
    cy.get('ul').within(($ul) => {
      cy.get('li').first().trigger('mouseover').should('be.visible');
      cy.get('li').eq(1).trigger('mouseover').should('be.visible');
      //   cy.react('*', { image: { id: '336672' } }).should(
      //     'have.image.id',
      //     '336672'
      //   );
    });
  });
});
