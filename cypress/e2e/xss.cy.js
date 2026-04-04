describe('Test de sécurité - XSS', () => {
  it("Refuser un script XSS dans les commentaires", () => {

    cy.request('POST', 'http://localhost:8081/login', {
      username: 'test2@test.fr',
      password: 'testtest'
    }).then((loginResponse) => {

      let token = loginResponse.body.token

      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/reviews',
        headers: {
          Authorization: `Bearer ${token}`
        },
        failOnStatusCode: false,
        body: {
          title: 'Test XSS',
          comment: '<script>alert("XSS");</script>',
          rating: 4
        }
      }).then((response) => {

        // Le comportement attendu est un refus
        expect(response.status).to.eq(400)

      })
    })
  })
})