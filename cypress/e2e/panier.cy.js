describe('Test fonctionnel - Panier', () => {

    it('Ajouter un produit au panier', () => {

        cy.visit('http://localhost:4200')

        cy.contains('Connexion').click()

        cy.get('[data-cy="login-input-username"]').type('test2@test.fr')
        cy.get('[data-cy="login-input-password"]').type('testtest')

        cy.get('[data-cy="login-submit"]').click()
        cy.get('.text-header > button').click() // voir les produits


        cy.get('[data-cy="product-link"]').eq(2).click()
        cy.get('[data-cy="detail-product-add"]')
            .scrollIntoView()
            .should('be.visible')
            .click()

        cy.url().should('include', '/cart')

    })

})