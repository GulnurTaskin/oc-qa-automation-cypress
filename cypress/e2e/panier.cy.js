describe('Test fonctionnel - Panier', () => {

    it('Ajouter un produit au panier', () => {

          cy.visit('http://localhost:4200')
        cy.get('.text-header > button').click() // voir les produits
        cy.url().should('include', '/products')

        // l'affichage
        cy.contains('Consulter').should('have.length.greaterThan', 0)
        cy.contains('Consulter').each(($button) => {
            cy.wrap($button).should('be.visible')
        })

        cy.contains('Consulter').first().click()
        cy.get('[data-cy="detail-product-add"]')
            .scrollIntoView()
            .should('be.visible')

        cy.contains('Connexion').click()

        cy.get('[data-cy="login-input-username"]').type('test2@test.fr')
        cy.get('[data-cy="login-input-password"]').type('testtest')

        cy.get('[data-cy="login-submit"]').click()
        cy.get('.text-header > button').click() // voir les produits

        cy.get('[data-cy="product-link"]').eq(2).click()
        cy.wait(1000)
        cy.get('[data-cy="detail-product-add"]')
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true })

        cy.url().should('include', '/cart')

    })

})