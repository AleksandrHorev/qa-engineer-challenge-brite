describe('pokeapi spec', () => {
  it('User can reuqest with a valid ID', () => {
    const id = 1
    const url = `berry/${id}`;
    cy.request('GET', url)
      .then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.isOkStatusCode).to.eq(true)

        expect(resp.body.id).to.eq(id)
        expect(resp.body.name).to.eq('cheri')
      })
  })

  it('User get an error if ID is invalid', () => {
    const id = 100
    const url = `berry/${id}`;
    cy.request({ method: 'GET', url: url, failOnStatusCode: false })
      .then((resp) => {
        expect(resp.status).to.eq(404)
        expect(resp.isOkStatusCode).to.eq(false)
        expect(resp.statusText).to.eq('Not Found')
      })
  })
  
  it('User can reuqest with a valid NAME', () => {
    const name = 'chesto'
    const url = `berry/${name}`;
    cy.request('GET', url)
      .then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.isOkStatusCode).to.eq(true)

        expect(resp.body.id).to.eq(2)
        expect(resp.body.name).to.eq(name)
      })
  })

  it('User get an error if NAME is invalid', () => {
    const name = 'someRandomName123'
    const url = `berry/${name}`;
    cy.request({ method: 'GET', url: url, failOnStatusCode: false })
      .then((resp) => {
        expect(resp.status).to.eq(404)
        expect(resp.isOkStatusCode).to.eq(false)
        expect(resp.statusText).to.eq('Not Found')
      })
  })

  it('User can request "spicy" berries and get a specific one', () => {
    const berryType = 'spicy'
    const urlFlavor = `berry-flavor/${berryType}`;
    let theMostPotencyBerry
    cy.request('GET', urlFlavor)
      .then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.isOkStatusCode).to.eq(true)

        expect(resp.body.id).to.eq(1)
        expect(resp.body.name).to.eq(berryType)

        resp.body.berries.sort((first, second) => second.potency - first.potency)
        theMostPotencyBerry = resp.body.berries[0].berry.name
        return theMostPotencyBerry
      })
      .then(name => {
        const urlBerry = `berry/${name}`;
        return cy.request('GET', urlBerry);
      })
      .then((resp) => {
        const enigmaId = 60
        expect(resp.status).to.eq(200)
        expect(resp.isOkStatusCode).to.eq(true)

        expect(resp.body.id).to.eq(enigmaId)
        expect(resp.body.name).to.eq(theMostPotencyBerry)
      })
  })
})