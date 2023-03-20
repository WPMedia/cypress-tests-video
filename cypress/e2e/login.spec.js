describe('Login spec', { testIsolation: false }, () => {
    let myurl;

    before(() => {
        const { baseUrl, username, password } = Cypress.env();
        //login
        cy.setArcToken({ baseUrl, username, password });
        myurl = baseUrl;
    });

    context("Using the loginCommand", () => {
        it("preserves the cookies by default", () => {
            cy.getCookie("Arc-Token").should("exist");
            // Update path to application here
            cy.visit(`${myurl}/{path to application}`);
            cy.wait(2000);
            cy.log("Hello");
        });
    });
});