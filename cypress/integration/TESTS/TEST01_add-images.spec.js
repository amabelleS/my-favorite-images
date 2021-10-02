describe('Search and add images to favorites', () => {
  it('Navigate to search, add first two of search results, and verify them at home', () => {
    cy.log('***Navigate to search***');
    const searchTerm = 'sunshine';
    cy.visit('/');
    cy.title().should('eq', 'My Favorite Images');
    cy.get('[data-testid="add-image_btn"]').click();
    cy.url().should('include', 'search');
    cy.get('[data-testid="search-input"]')
      .type(`${searchTerm}`)
      .should('have.value', `${searchTerm}`);
    cy.get('[data-testid="search-btn"]').as('someButtonToNavigateOnNewPage');
    cy.get('@someButtonToNavigateOnNewPage').click();
    cy.wait(10000);

    cy.log('***Mark first two pictures as favorite***');
    cy.get('[data-cy=loading_spinner]', { timeout: 10000 }).should('not.exist');
    cy.wait(10000);
    cy.get('[data-cy="test-list"]').as('list');
    cy.get('@list').within(($ul) => {
      cy.get('[data-testid*="catch-image"]')
        .first()
        .trigger('mouseover')
        .should('be.visible')
        .should('have.css', 'width', '150px')
        .find('[data-testid="plus-icon-0"]')
        //cy.get('[data-testid="plus-icon-0"]')
        //.trigger('mouseover')
        .should('be.visible')
        .click();
      cy.get('[data-testid*="catch-image"]')
        .eq(1)
        .trigger('mouseover')
        .should('be.visible')
        .find('[data-testid="plus-icon-1"]')
        //cy.get('[data-testid="plus-icon-1"]')
        //.trigger('mouseover')
        .should('be.visible')
        .click();
    });

    cy.log('***Navigate back to home page***');
    cy.get('[data-testid="backBtn"]').should('be.visible').click();

    cy.log('***Verify the selected pictures in favoritese***');
    cy.log(
      '***Also whithin - sort of verification for the image size format method, to be re-writen with jest or fake API request***'
    );
    cy.get('ul').as('favorites');
    cy.get('@favorites').within(($ul) => {
      cy.get('[data-testid*="catch-image"]')
        .first()
        .should('be.visible')
        .trigger('mouseover')
        .should('contain.text', '5.5m');
      // cy.get('[data-testid="catch-size-5533914-5.5m"]').should('be.visible');
      cy.get('li')
        .eq(1)
        .trigger('mouseover')
        .should('be.visible')
        .should('contain.text', '5.1m');
    });
  });
});
