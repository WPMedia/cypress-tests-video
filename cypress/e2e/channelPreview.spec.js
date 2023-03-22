import { editChannels } from '../pageObjects/editchannels';

describe('Channel Preview', { testIsolation: false }, () => {
    let myurl;

    before(() => {
        const { baseUrl, username, password } = Cypress.env();
        //login
        cy.setArcToken({ baseUrl, username, password });
        myurl = baseUrl;
    });


    context("Using The Login Command", () => {
        it("Preserves the cookies by default", () => {
            cy.getCookie("Arc-Token").should("exist");
            // Update path to application here
            cy.visit(`${myurl}/videocenter/x/channel/ASAPTV`);
            cy.wait(2000);
          });
  it("Landing on a running channel redirects to preview", () => {
    cy.get('.tab-bar')
    .should('contain', 'Configure channel')
    .and('contain', 'Preview');
  });
  it('Landing on a stopped channel does not redirect to preview', () => {
    cy.visit('/videocenter/x/channel/WFTV_9_PRODUCTION');
    editChannels.getPanel().should('not.contain', 'Playing now');
    editChannels.getChannelSettings().should('contain', 'Channel settings');
  });
});
});
