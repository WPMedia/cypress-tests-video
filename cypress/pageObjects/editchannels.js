export class EditChannels {
  //Elements in adSettings
  getListItemContainer = () => cy.get('.list-item_container');
  getReactTabs4 = () => cy.get('#react-tabs-4');
  getUnsavedChanges = () => cy.get('.unsaved-changes');
  getSlider = () => cy.get('.slider');
  getTag = () => cy.get('#tag');
  getFieldErrorMessage = () =>
    cy.get('p.ad-server-url-field-error-message.visible');

  //Elements in Channel Preview
  getPanel = () => cy.get('.panel');
  getChannelSettings = () => cy.get('.channel-settings');

  //Elements in Edit Channel Programming
  getLoader = () => cy.get('.loader');
  getProgramList = () => cy.get('.program-list');
  getUnsavedChangesText = () => cy.get('.__arc--c-jWDeGS');
  getUnsavedChangesTextRed = () =>
    cy.get('.unsaved-changes > .css-18g31mc-Text');
  getSaveChannel = () => cy.get('.save-channel');
  getArcAlert = () => cy.get('#arc-alert');
  getMenuButton67 = () => cy.get('#menu-button--menu--67');
  getOptionMenu67 = () => cy.get('#option-1--menu--67');
  getUndoProgramRemoval = () => cy.get('[data-cy=undo-program-removal]');
  getEditPage = () => cy.get('[data-testid="program-edit_page"]');
  getTitleLinkText = () =>
    cy.get(
      '[data-rbd-draggable-id="1"] > .program > .title > .button-link > .button-text'
    );
  getPrimaryAction = () => cy.get('.primary-action');
  getStatusBadgeText = () => cy.get('.status-badge > .css-18g31mc-Text');
  getLabelCssText = () => cy.get(':nth-child(2) > label.css-18g31mc-Text');
  getProgramTitle = () => cy.get('#programTitle');
  getLabelCssText1 = () => cy.get(':nth-child(3) > .css-18g31mc-Text');
  getProgramDescription = () => cy.get('#programDescription');
  getMissingFieldError = () => cy.get('.missing-field_error');
  getMenuButton = () => cy.get('button[id^="menu-button--menu--"]');
  getDivIdOption = () => cy.get('div[id^=option-]');
  getBackButton = () => cy.get('.back-button');
  getAdminModal = () => cy.get('.admin-modal');
  getAdminModalPrimaryButton = () =>
    cy.get('[data-testid=admin-modal_primary-btn]');
  getAddProgramButton = () => cy.get('[data-testid=add_program_button]');
  getAddProgramTip = () => cy.get('#addProgramTip');
  getButtonMenu67 = () => cy.get('#menu-button--menu--67');
  getOptionMenu67 = () => cy.get('#option-1--menu--67');
  getButtonMenu5 = () => cy.get('#menu-button--menu--5');
  getWorkbarButton = () => cy.get('.channel-workbar-menu > button');
  getStatusBarOverflow = () =>
    cy.get('[data-testid=status-bar-overflow-menu-item-0]');
  getText = () => cy.get('.text');
  getUnpublishChannel = () => cy.get('.unpublish-channel');
  getStartChannel = () => cy.get('.start-channel ');
  getPublishChannel = () => cy.get('.publish-channel');
  getEncodingSuccess = () =>
    cy.get(
      '[data-rbd-draggable-id="1"] > .program > .encoding-status > .success'
    );
  getEncodingRefresh = () =>
    cy.get(
      '[data-rbd-draggable-id="3"] > .program > .encoding-status > .refresh'
    );

  //Elements in Edit Channel Settings
  getName = () => cy.get('#name');
  getDescription = () => cy.get('#description');
  getReactTabs6 = () => cy.get('.tab-bar #react-tabs-6');
  getWebsiteModalButton = () => cy.get('.website-modal-button');
  getMenuMessage = () => cy.get('.menu-message');
  getPrimaryWebsite = () => cy.get('.primary-website');
  getSecondaryWebsite = () => cy.get('.secondary-website');
  getSeparatedSection = () => cy.get('[data-cy=chevron-separated-section]');
  getAdditionalSitesButton = () => cy.get('.display-additional-sites_button');
  getAdditionalSectionsButton = () =>
    cy.get('.display-additional-sections_button');
  getPanelChild = () => cy.get('.panel > :nth-child(1)');

  //Elements in Edit Channel VOD Search
  getModalContainer = () => cy.get('[data-testid=modal-container]');
  getSearchLabel = () => cy.get('.search_label');
  getPaginationLabel = () => cy.get('.vod-search_pagination-label');
  getListItemWrapper = () => cy.get('.vod-list-item_wrapper');
  getLeftContainer = () =>
    cy.get('#vod-item-fe14a959-38a0-4bc2-ab5e-197703e8f457 > .left_container');
  getLeftContainer1 = () =>
    cy.get('#vod-item-23a88ffd-eddf-4b6d-861b-d6cd1af04130 > .left_container');
  getMidContainerAnchor = () =>
    cy.get('.vod-selected > .mid_container > .vod-title_anchor');
  getPreviousPageButton = () => cy.get('[data-testid=previous-page_button]');
  getSearchInput = () => cy.get('[data-testid=search_input]');
  getNextPageButton = () => cy.get('[data-testid=next-page_button]');
  getDropdownButton = () => cy.get('[data-testid=pagination_dropdown] > .btn');
  getDropdown3Toggle = () => cy.get(':nth-child(3) > .dropdown_toggle');
  getDropdown5Toggle = () => cy.get(':nth-child(5) > .dropdown_toggle');
  getBar26 = () => cy.get('[value="bar26"]');
  getTest0 = () => cy.get('[value="/test0"]');
  getLabel1 = () =>
    cy.get('.time-filter_radio-container > ul > :nth-child(1) > label');
  getLabel2 = () =>
    cy.get('.time-filter_radio-container > ul > :nth-child(2) > label');
  getLabel3 = () =>
    cy.get('.time-filter_radio-container > ul > :nth-child(3) > label');
  getRaycom = () => cy.get('[value="raycom"]');
  getResetButtonLink = () => cy.get('.filter-reset_button-link');
  getCloseIcon = () => cy.get('[data-testid=close_icon]');
  getListError = () => cy.get('.vod-list-error');
  getNoVODSFound = () => cy.get('.no-vods-found');
}

export const editChannels = new EditChannels();
