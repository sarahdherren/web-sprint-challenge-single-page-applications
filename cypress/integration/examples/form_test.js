describe('Pizza Form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('sanity checks', () => {
        expect(5).to.equal(5)
    })

    const name = () => cy.get("#name-input")
    const checkboxes = () => cy.get('.toppings')
    const submit = () => cy.get('#order-button')
    const select = () => cy.get('#size-dropdown')
    
    it('the proper elements exist', () => {
        name().should('exist')
        checkboxes().should('exist')
        submit().should('exist')
    })

    it('can enter a name into the text input', () => {
        name()
            .type('Kenneth')
            .should('have.value', 'Kenneth')
    })

    it('can check multiple topping options', () => {
        checkboxes().check
    })

    it('can submit form', () => {
        name().type('Kenneth')
        submit().click
    })

})