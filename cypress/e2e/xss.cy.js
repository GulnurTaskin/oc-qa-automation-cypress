describe('Test de sécurité - XSS', () => {
  it("Vérifier l'absence de faille XSS dans les commentaires", () => {

    // Connexion utilisateur
    cy.request('POST', 'http://localhost:8081/login', {
      username: 'test2@test.fr',
      password: 'testtest'
    }).then((loginResponse) => {

      // Récupération du token
      let token = loginResponse.body.token

      // Envoi d’un commentaire avec un script XSS
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/reviews',
        headers: {
          Authorization: `Bearer ${token}`
        },
        failOnStatusCode: false,
        body: {
          title: 'Test XSS',
          comment: '<script>alert("XSS")</script>',
          rating: 4
        }
      }).then((response) => {

        // Vérifier que la requête est acceptée
        expect(response.status).to.be.oneOf([200, 201])

        // Aller sur le site
        cy.visit('http://localhost:4200',)

        // Accéder aux avis
        cy.get('[data-cy="nav-link-reviews"]').first().click()

        // Vérifier que le commentaire est affiché
        cy.contains('Test XSS').should('exist')

        // Vérifier que le script n’est pas exécuté
        cy.contains('<script>').should('not.exist')

      })
    })
  })
})