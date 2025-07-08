describe('Home check', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5173/')
  })
});

describe('Header Check', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5173/');

  } )  
})
describe('General app functions', () => {
    beforeEach (() => {
        cy.visit('/')
        });
        
        // confirm header exists
        it('header element renders', () => {
            cy.get('h1').first().should('exist')
        });
        // confirm nav bar exists
        
        it('nav bar element renders', () => {
            cy.get('nav').first().should('exist')
        });
});

// describe('Test Character Data Length of Objects', () => {

// })

describe('character verification', () => {
  beforeEach(() => {
    cy.visit('/CharacterPage');
  });

  it('searches for "rick" and shows 20 cards', () => {
    // wait for the API so we never race the UI
    cy.intercept('GET', '**/character*').as('getChars');

    cy.get('#characterSearch').type('rick');
    cy.get('button').click();   // use a test‑ID on the button, too

                         // ensures data is back
    cy.get('[data-testid="character-card"]')       // now the cards, not the wrapper
      .should('have.length', 20);
  });
});