/// <reference types="cypress" />

const getImageCard = (index: number) => {
  const inspectedCard = cy.get('[data-testid=ImageList]').children().eq(index).children().eq(0);

  inspectedCard.should('have.attr', 'data-testid', 'ImageCard');

  return inspectedCard;
};

describe('Images page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders initial list', () => {
    cy.get('[data-testid=ImageList]').should('exist').children().should('have.length', 15);
  });

  it('renders empty message', () => {
    cy.visit('/', {
      onBeforeLoad: (window) => {
        window.localStorage.setItem('MOCK_API_EMPTY_RESPONSE', 'true');
      },
    });

    cy.get('[data-testid=ImageList]').should('not.exist');
    cy.get('[data-testid=noImagesIndicator]').should('exist');
  });

  it('loads additional images when scrolling', () => {
    cy.get('[data-testid=ImageList]').children().should('have.length', 15);
    cy.get('[data-testid=ImageListTrigger]').should('exist');

    cy.get('[data-testid=PageContainer]').scrollTo('bottom');
    cy.get('[data-testid=ImageList]').children().should('have.length', 30);

    cy.get('[data-testid=PageContainer]').scrollTo('bottom');
    cy.get('[data-testid=ImageList]').children().should('have.length', 35);

    cy.get('[data-testid=ImageListTrigger]').should('not.exist');
  });

  it('displays image metadata on hover', () => {
    const inspectedCard = getImageCard(0);

    inspectedCard.realHover().within(() => {
      cy.get('[data-testid=ImageCardMetadata]').should('be.visible');
      cy.get('[data-testid=ImageCardTitle]')
        .should('be.visible')
        .should('have.text', 'photo-alt-100');
      cy.get('[data-testid=ImageCardAuthor]')
        .should('be.visible')
        .should('have.text', 'photo-photographer-100');
      cy.get('[data-testid=ImageCardFavoriteButton]').should('be.visible');
    });
  });

  it('adds image to favorite', () => {
    const inspectedCard = getImageCard(2);

    inspectedCard.realHover().within(() => {
      cy.get('[data-testid=ImageCardFavoriteIcon]').should('not.exist');

      cy.get('[data-testid=ImageCardFavoriteButton]').should('be.visible');
      cy.get('[data-testid=ImageCardFavoriteButton]').click();
      cy.get('[data-testid=ImageCardFavoriteIcon]').should('exist');
    });
  });

  it('persist favorite on page reload', () => {
    getImageCard(2)
      .realHover()
      .within(() => {
        cy.get('[data-testid=ImageCardFavoriteButton]').click();
        cy.get('[data-testid=ImageCardFavoriteIcon]').should('exist');
      });

    cy.reload();

    getImageCard(2).within(() => {
      cy.get('[data-testid=ImageCardFavoriteIcon]').should('exist');
    });
  });
});
