export class ListChannels {
  //Common elements
  getListItemContainer = () => cy.get('.list-item_container');
  getDropdownButton = () => cy.get('[data-testid=pagination_dropdown] > .btn');
  getPage2 = () => cy.get('[name="page-2"]');
  getPage3 = () => cy.get('[name="page-3"]');
  getPreviousPageButton = () =>
    cy.get('[data-testid=indeterminate-pagination-previous-page-button]');
  getNextPageButton = () =>
    cy.get('[data-testid=indeterminate-pagination-next-page-button]');
  getSearchInput = () => cy.get('[data-testid=search_input]');
  getClearSearch = () => cy.get('[data-testid=clear-search] > svg');
  getTitleDescriptionContainer = () =>
    cy.get(
      ':nth-child(1) > .upper_subcontainer > .title-description_container > .title'
    );

  //Create Channel Modal
  getNewChannelButton = () => cy.get('.new-channel_button');
  getModalContainer = () => cy.get('[data-testid=modal-container]');
  getAdminModalTitle = () => cy.get('.admin-modal__title');
  getAdminModalBody1 = () => cy.get('.admin-modal__body > :nth-child(1)');
  getChannelNameInput = () => cy.get('[data-testid=channel-name_input]');
  getAdminBody = () => cy.get('.admin-modal__body > :nth-child(4)');
  getAdminToggle = () =>
    cy.get('span > .dropdown_button > .dropdown_toggle > .dropdown_cta');
  getSecondaryButton = () => cy.get('[data-testid=admin-modal_secondary-btn]');
  getPrimaryButton = () => cy.get('[data-testid=admin-modal_primary-btn]');
  getDropdownToggleInmutableCta = () =>
    cy.get(
      '[data-for="primary_site_is_immutable"] > .dropdown_button > .dropdown_toggle > .dropdown_cta'
    );
  getDropdownBar5 = () =>
    cy.get('span > .dropdown_button > .dropdown-menu > [value="bar5"]');
  getCloseIcon = () => cy.get('.close_icon');
  getDropdownToggleInmutable = () =>
    cy.get(
      '[data-for="primary_site_is_immutable"] > .dropdown_button > .dropdown_toggle'
    );
  getModalWrapper = () => cy.get('[data-testid=modal-wrapper]');
  getModalErrorContainer = () =>
    cy.get('[data-testid=admin-modal_error-container]');
  getAdminModalBody3 = () => cy.get('.admin-modal__body > :nth-child(3)');
  getAdminModalBody6 = () => cy.get('.admin-modal__body > :nth-child(6)');
  getDropdownTypeInmutableCta = () =>
    cy.get(
      '[data-for="type"] > .dropdown_button > .dropdown_toggle > .dropdown_cta'
    );
  getDropdownMenu2 = () =>
    cy.get('span > .dropdown_button > .dropdown-menu > [value="2"]');
  getDropdownTimezoneCta = () =>
    cy.get(
      '[data-for="timezone"] > .dropdown_button > .dropdown_toggle > .dropdown_cta'
    );
  getType = () => cy.get('[data-for="type"]');
  getTimezone = () => cy.get('[data-for="timezone"]');

  //Delete Channel Modal
  getButtonMenu20 = () => cy.get('#menu-button--menu--20');
  getMenuDestroy = () => cy.get('[data-testid=menu-item_destroy]');
  getAdminModalBody = () => cy.get('.admin-modal__body');
  getDataReachAlert = () => cy.get('[data-reach-alert]');
  getButtonMenu26 = () => cy.get('#menu-button--menu--26');
  getButtonMenu32 = () => cy.get('#menu-button--menu--32');
  getButtonMenu14 = () => cy.get('#menu-button--menu--14');

  //List Page Filter
  getReactTagsSearch = () => cy.get('[data-testid=tag_search_input]');
  getReactTags1 = () =>
    cy.get('[name="islands2-0"] > .dropdown-option-text-checkmark_container');
  getReactTags0 = () =>
    cy.get('[name="islands-1"] > .dropdown-option-text-checkmark_container');
  getReactTagsSelected = () => cy.get('.chiclet-text_container');
  getReactTagsSelected1 = () => cy.get('#islands2 > svg');
  getDropdownButtonChild2 = () => cy.get(':nth-child(2) > .dropdown_button');
  getDropdownButtonFilterByWebsite = () =>
    cy.get('.tag-dropdown_toggle > .select-dropdown_chevron');
  getIslands = () => cy.get('[value="islands"]');
  getDropdownOptionSelected = () =>
    cy.get(
      ':nth-child(2) > .dropdown_button > .dropdown-menu > .selected_option-selected'
    );

  getDirtRider = () => cy.get('[value="dirtrider"]');
  getFox13 = () => cy.get('[value="fox-13"]');
  getBar27 = () => cy.get('[value="bar27"]');
  getReactTagSelected2 = () => cy.get('.react-tags__selected > :nth-child(2)');
  getBar5 = () => cy.get('[value="bar5"]');
  getPage = () => cy.get('.page');
  getRadioAll = () => cy.get('#date-range-radio-all');
  getRadioDay = () => cy.get('#date-range-radio-day');
  getRadioMonth = () => cy.get('#date-range-radio-month');
  getRadioWeek = () => cy.get('#date-range-radio-week');
  getDropdownButtonCta = () =>
    cy.get(
      ':nth-child(4) > .dropdown_button > .dropdown_toggle > .dropdown_cta'
    );
  getDropdownButtonToggle = () =>
    cy.get(':nth-child(4) > .dropdown_button > .dropdown_toggle');
  getDropdownMenuFalse = () =>
    cy.get(':nth-child(4) > .dropdown_button > .dropdown-menu > .false');
  getPageChild2 = () => cy.get('.page > :nth-child(2)');
  getPublishedFilterCheckbox = () => cy.get('#published-filter_checkbox');
  getDraftFilterCheckbox = () => cy.get('#draft-filter_checkbox');
  getBar26Filter = () =>
    cy.get(
      '[name="bar26-0"] > .dropdown-option-text-checkmark_container > .dropdown-option-text_container'
    );
  getTagBarSelect = () => cy.get('.dropdown-option-text-checkmark_container');
  getDropdownChevron = () =>
    cy.get('.tag-dropdown_toggle > .select-dropdown_chevron');

  //ListPageHappyPaths
  getStagingTestValue = () => cy.get('[value="staging-test"]');
  getATVRider = () => cy.get('[value="atvrider"]');
  getResetButton = () => cy.get('.filter-reset_button-link');
}

export const listChannels = new ListChannels();
