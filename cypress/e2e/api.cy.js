describe('API Tests', () => {

    it('Login avec un utilisateur valide', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8081/login',
            body: {
                username: "test2@test.fr",
                password: "testtest"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it('Refuser l’accès sans authentification avec un 401', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8081/orders',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, 'Le code de statut doit être 401').to.eq(401)
        })
    })

    it('Récupérer la liste des produits', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8081/products'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.empty
        })
    })
    it('Récupérer le détail d’un produit avec un id fixe', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8081/products/3'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id')
        })
    })

    it('Récupérer le détail d’un produit avec un id dynamique ', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8081/products'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.empty

            const productId = response.body[0].id

            cy.request({
                method: 'GET',
                url: `http://localhost:8081/products/${productId}`
            }).then((detailResponse) => {
                expect(detailResponse.status).to.eq(200)
                expect(detailResponse.body).to.have.property('id', productId)
            })
        })
    })
    it('Récupérer le panier de l’utilisateur connecté', () => {
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
                url: 'http://localhost:8081/orders',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
    it('Ajouter un produit au panier', () => {
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

                const product = productsResponse.body.find((item) => item.availableStock > 0)

                expect(product).to.exist

                cy.request({
                    method: 'PUT',
                    url: 'http://localhost:8081/orders/add',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: {
                        product: product.id,
                        quantity: 1
                    }
                }).then((response) => {
                    expect(response.status).to.eq(200)
                })
            })
        })
    })
    it('Ajouter un avis', () => {
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
                    body: {
                        title: 'Très bon produit',
                        comment: 'Produit agréable à utiliser.',
                        rating: 4,

                    }
                }).then((response) => {
                    expect(response.status).to.eq(200)
                })
            })
        })
    })

})