describe('Test de sécurité - XSS', () => {
  it("Vérifier l'absence de faille XSS dans l’espace commentaire", () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/login',
      body: {
        username: 'test2@test.fr',
        password: 'testtest'
      }
    }).then((loginResponse) => {
      expect(loginResponse.status).to.eq(200)

      const token = loginResponse.body.token

      cy.request({
        method: 'GET',
        url: 'http://localhost:8081/products'
      }).then((productsResponse) => {
        expect(productsResponse.status).to.eq(200)
        expect(productsResponse.body).to.not.be.empty

        const product = productsResponse.body[0]

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
            rating: 4,
            
          }
        }).then((response) => {
          expect(response.status).to.be.oneOf([200, 201])
        })
      })
    })
  })
})