describe('Form - testing our form inputs', function () {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });
    it("add text to inputs and submit form", function () {
        cy.get('[data-cy="name"]').type('bllaah').should("have.value", "bllaah");
        cy.get('[data-cy="email"]').type("im@Bored.com");
        cy.get('[data-cy="motivation"]').type("130k a year is the motivation!");
        cy.get('[data-cy="positions"]')
        cy.get('select').select('Tabling')
        cy.get('[data-cy="terms"]').check()
        cy.get('[data-cy="submit"]').click()
    });
});