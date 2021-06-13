describe('Pizza Form', () => {

    beforeEach(() => {
        cy.visit('http://localhose:3000')
    })

    it('sanity checks', () => {
        expect(5).to.equal(5)
    })
})