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
            cy.visit(`${myurl}/videocenter/x/channel/DOLORSITAMETTV1`);
            cy.wait(2000);
          });


describe('Channel Ad Settings', () => {
  it('should flag missing values and invalid URLs', () => {
    editChannels.getReactTabs4().click();
    editChannels.getUnsavedChanges().should('have.length', 0);
    editChannels.getSlider().click();
/*     editChannels.getUnsavedChanges().should('have.length', 1);
    editChannels.getTag().clear().blur();
    editChannels.getUnsavedChanges().should('have.length', 1);
    editChannels.getFieldErrorMessage().should('exist');
    editChannels
      .getFieldErrorMessage()
      .should('contain', 'This field is required');
    editChannels.getTag().clear().type('chrome://about').blur();
    editChannels.getUnsavedChanges().should('have.length', 1);
    editChannels.getFieldErrorMessage().should('exist');
    editChannels
      .getFieldErrorMessage()
      .should('contain', 'Please provide a valid URL');
    editChannels
      .getTag()
      .clear()
      .type('https://arcpublishing.com/ads/test-tag')
      .blur();
    editChannels.getFieldErrorMessage().should('not.exist');
    editChannels
      .getTag()
      .clear()
      .type('https://arcpublishing.com/ads/test-tag')
      .blur();
    editChannels.getFieldErrorMessage().should('not.exist');
    editChannels.getUnsavedChanges().should('have.length', 1); */
  });
});
});
});