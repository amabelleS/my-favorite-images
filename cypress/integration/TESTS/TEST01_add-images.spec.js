describe('Search and add images to favorites', () => {
  it('Navigate to search', () => {
    const searchTerm = 'sunshine';
    cy.visit('http://localhost:3000/');
    cy.title().should('eq', 'My Favorite Images');
    cy.get('[data-testid="add-image_btn"]').click();
    cy.url().should('include', 'search');
    cy.get('[data-testid="search-input"]')
      .type(`${searchTerm}`)
      .should('have.value', `${searchTerm}`);
    cy.get('[data-testid="backBtn"]').as('someButtonToNavigateOnNewPage');
    cy.get('@someButtonToNavigateOnNewPage').click();
    cy.wait(10000);
  });

  it('Mark first two pictures as favorite', () => {
    cy.get('[data-cy=loading_spinner]', { timeout: 10000 }).should('not.exist');
    cy.wait(10000);
    cy.get('[data-cy="test-list"]').as('list');
    cy.get('@list').within(($ul) => {
      cy.get('li')
        .first()
        .trigger('mouseover')
        .should('be.visible')
        .should('have.css', 'width', '150px');
      cy.get('[data-testid="plus-icon-0"]')
        .trigger('mouseover')
        .should('be.visible')
        .click();
      cy.get('li').eq(1).trigger('mouseover').should('be.visible');
      cy.get('[data-testid="plus-icon-1"]')
        .trigger('mouseover')
        .should('be.visible')
        .click();
    });
  });

  it('Navigate back to home page', () => {
    cy.get('[data-testid="backBtn"]').should('be.visible').click();
  });

  it('Verify the selected pictures in favorites', () => {
    cy.get('ul').as('favorites');
    cy.get('@favorites').within(($ul) => {
      // cy.get('li').first().trigger('mouseover').should('be.visible');
      cy.get('[data-testid="catch-image"]')
        .first()
        .trigger('mouseover')
        .should('be.visible');
      cy.get('[data-testid="catch-size-5533914-5.5m"]').should('be.visible');
      cy.get('li').eq(1).trigger('mouseover').should('be.visible');

      // can't reach react selectors.. tryied in differnt ways:( I need to re-write the code so that the image component wont be a styled component
      //   cy.react('*', { image: { id: '336672' } }).should(
      //     'have.image.id',
      //     '336672'
      //   );
    });
  });
});
