export class VodxSearchCreateVideoModalPage {
  //Common elements

  getMainUrl = () => cy.visit('/videocenter/x/vodxsearch');

  //Elements in VODX search create video page

  getListOfItems = () => cy.get('.list-item_container');
  getCreateVideoButton = () => cy.get('.create-video_button');
  getModalContainer = () => cy.get('[data-testid=modal-container]');
  getModalTitle = () => cy.get('.admin-modal__title');
  getWebsiteDropdownLabel = () => cy.get('.website-dropdown_label');
  getTypeDropdownLabel = () => cy.get('.type-dropdown_label');
  getSecondaryButton = () => cy.get('[data-testid=admin-modal_secondary-btn]');
  getPrimaryButton = () => cy.get('[data-testid=admin-modal_primary-btn]');
  getTagSearchInput = () =>
    cy.get(
      ':nth-child(5) > .tag-dropdown_button > [data-testid=tag-button_list-container] > [data-testid=tag_search_input]'
    );
  getCloseIcon = () => cy.get('.close_icon');
  getModalWrapper = () => cy.get('[data-testid=modal-wrapper]');
  getATVRiderResult = () =>
    cy.get(
      '.admin-modal__body > [data-testid=tag-dropdown_wrapper] > .tag-dropdown_button > .dropdown-menu > [name="atvrider-0"] > .dropdown-option-text-checkmark_container > .dropdown-option-text_container'
    );
  getButtonListContainer = () =>
    cy.get(
      '.admin-modal__body > :nth-child(2) > .tag-dropdown_button > [data-testid=tag-button_list-container] > [data-testid=tag_search_input]'
    );
  getDropdownLive1Option = () =>
    cy.get(
      '.admin-modal__body > :nth-child(2) > .tag-dropdown_button > .dropdown-menu > [name="live-1"] > .dropdown-option-text-checkmark_container'
    );
  getSample4Checkmark = () =>
    cy.get(
      '.admin-modal__body > :nth-child(2) > .tag-dropdown_button > .dropdown-menu > [name="sample-4"] > .dropdown-option-text-checkmark_container'
    );
  getErrorModal = () => cy.get('[data-testid=admin-modal_error-container]');
  getPrimaryWebsiteRequired = () =>
    cy.get('.admin-modal__body > :nth-child(6)');
  getTypeRequired = () => cy.get('.admin-modal__body > :nth-child(3)');
}

export const vodxSearchCreateVideoModalPage =
  new VodxSearchCreateVideoModalPage();
