export class VodxSearchPage {
  //Common elements

  getLoader = () => cy.get('.loader');

  //Elements in VODX search page

  getListOfItems = () => cy.get('.list-item_container');
  getSearchTextbox = () => cy.get('[data-testid=search_input]');
  getCurrentUrl = () => cy.url();
  getPaginationLabel = () => cy.get('.indeterminate-label');
  getPaginationNextButton = () =>
    cy.get('[data-testid=indeterminate-pagination-next-page-button]');
  getPaginationPreviousButton = () =>
    cy.get('[data-testid=indeterminate-pagination-previous-page-button]');

  //Filtering elements

  getFilterByWebsiteDropdown = () =>
    cy.get(
      ':nth-child(2) > [data-testid=tag-dropdown_wrapper] > .tag-dropdown_button > .tag-dropdown_toggle-container > .tag-dropdown_toggle'
    );
  getATVRiderWebsite = () =>
    cy.get('[name="atvrider-0"] > .dropdown-option-text-checkmark_container');
  getChicletTextContainer = () => cy.get('.chiclet-text_container');
  getElementFromDropdown = () =>
    cy.get('[name="bar26-1"] > .dropdown-option-text-checkmark_container');
  getATVRiderChiclet = () => cy.get('#atvrider > .chiclet-text_container');
  getSectionsTagDropdownWrapper = () =>
    cy.get(':nth-child(3) > [data-testid=tag-dropdown_wrapper]');
  getSectionsTagDropdown = () =>
    cy.get(
      ':nth-child(3) > [data-testid=tag-dropdown_wrapper] > .tag-dropdown_button > .tag-dropdown_toggle-container > .tag-dropdown_toggle'
    );
  getSectionsChiclets = () =>
    cy.get(
      ':nth-child(3) > [data-testid=tag-dropdown_wrapper] > .tag-dropdown_button > [data-testid=tag-button_list-container]'
    );
  getSectionsResultFromDropdown = () =>
    cy.get('[name="islands-12"] > .dropdown-option-text-checkmark_container');
  getWebsiteBar26 = () =>
    cy.get('[name="bar26-1"] > .dropdown-option-text-checkmark_container');
  getClearSections = () =>
    cy.get(
      '[name="460627df-0117-4659-9c39-4176492f4294-0"] > .dropdown-option-text-checkmark_container'
    );
  getSelectIslandsSection = () =>
    cy.get(
      '[name="94f26782-bcdd-4d0d-a956-3b85a16a8f62-4"] > .dropdown-option-text-checkmark_container'
    );
  getRemoveFilterSection = () =>
    cy.get('[id=94f26782-bcdd-4d0d-a956-3b85a16a8f62]');
  getRemoveFilterWebsite = () => cy.get('[id=bar26]');
  getAuthorFilterDropdown = () =>
    cy.get(
      ':nth-child(5) > [data-testid=tag-dropdown_wrapper] > .tag-dropdown_button > .tag-dropdown_toggle-container > .tag-dropdown_toggle'
    );
  getAuthorFilterMichael = () => cy.get('[name="Michael Guild-3"]');
  getAuthorTest14 = () => cy.get('[name="test-14"]');
  getAuthorChiclet = () => cy.get('#test > .chiclet-text_container');
  getVisitUrlWithAuthorFilter = () =>
    cy.visit(
      '/videocenter/x/vodxsearch?author=Michael%20Guild&author=test&author=Wednesday'
    );
  getFilterResetButton = () => cy.get('.filter-reset_button-link');
  getFilterTypeDropdown = () =>
    cy.get(
      ':nth-child(7) > [data-testid=tag-dropdown_wrapper] > .tag-dropdown_button > .tag-dropdown_toggle-container > .tag-dropdown_toggle'
    );
  getFilterTypeWaterMark = () => cy.get('[name="water-mark-9"]');
  getFilterTypeNameNelson = () => cy.get('[name="nelsonm_vcx-2"]');
  getFilterTypeNelsonChicletText = () =>
    cy.get('#nelsonm_vcx > .chiclet-text_container');
  getVisitUrlType = () =>
    cy.visit(
      '/videocenter/x/vodxsearch?type=water-mark&type=nelsonm_vcx&type=1234567'
    );
  getDateRangeRadioDay = () => cy.get('#date-range-radio-day');
  getDateRangeRadioCustom = () => cy.get('#date-range-radio-custom');
  getDateRangeRadioWeek = () => cy.get('#date-range-radio-week');
  getDateRangeRadioMonth = () => cy.get('#date-range-radio-month');
  getDateRangeRadioAll = () => cy.get('#date-range-radio-all');
  getUrlWithCustomDate = () =>
    cy.visit(
      '/videocenter/x/vodxsearch?published=custom&endDate=2022-01-28T22%3A02%3A10.572Z&startDate=2022-01-27T22%3A02%3A10.572Z'
    );
  getDatePickerInput = () =>
    cy.get(
      ':nth-child(2) > .react-datepicker__input-container > .React-datePicker-readOnly-button'
    );
  getDatePickerReadOnlyButton = () =>
    cy.get(
      ':nth-child(4) > .react-datepicker__input-container > .React-datePicker-readOnly-button'
    );
  getUrlLastDay = () =>
    cy.visit(
      '/videocenter/x/vodxsearch?siteId=bar26&siteId=atvrider&published=last_day'
    );
  getUrlBar26 = () =>
    cy.visit(
      '/videocenter/x/vodxsearch?title=e&siteId=staging&siteId=bar26&page=2'
    );
  getVisitUrlWithWebsitesAndSections = () =>
    cy.visit(
      '/videocenter/x/vodxsearch?siteId=islands&siteId=bar26&sectionId=460627df-0117-4659-9c39-4176492f4294&sectionId=4ef381c2-8aa2-4bde-bd5b-dd780a25b41b&sectionId=f21900ca-21d9-48c5-b97b-3e24d791a19b'
    );
  getBar26FilterChiclet = () => cy.get('#bar26');
  getIslandsFilterChiclet = () => cy.get('#islands');
  getBar26AndTest0ChicletSelected = () =>
    cy.get('[id=460627df-0117-4659-9c39-4176492f4294]');
  getIslandsEuropeChicletSelected = () =>
    cy.get('[id=4ef381c2-8aa2-4bde-bd5b-dd780a25b41b]');
  getIslandsExoticChicletSelected = () =>
    cy.get('[id=f21900ca-21d9-48c5-b97b-3e24d791a19b]');
  getVisitUrlBar26 = () => cy.visit('/videocenter/x/vodxsearch?siteId=bar26');
  getWebsiteNameFilter = () => cy.get('[data-testid=websiteName]');
  getPrimaryNameFilter = () =>
    cy.get('[data-testid=primarySection]').should('contain', 'Destinations');
  getUrlWithTitleAndSite = () =>
    cy.visit('/videocenter/x/vodxsearch?title=sample&siteId=islands');
  getSearchResultListForTags = () => cy.get('.list-item_container_inner');
  getFilterIcon = () => cy.get('.filter-icon');
  getCopyUUIDIcon = () => cy.get('[data-testid=copyUUID]');
  getArcAlert = () => cy.get('#arc-alert');
  getReadyFilterCheckbox = () => cy.get('#ready-filter_checkbox');
  getPublishedFilterCheckbox = () => cy.get('#published-filter_checkbox');
  getCreateFilterCheckbox = () => cy.get('#create-filter_checkbox');
  getResultsPage4 = () => cy.visit('/videocenter/x/vodxsearch?page=4');
  getResultsPage100 = () => cy.visit('/videocenter/x/vodxsearch?page=100');
  getUrlPublishedLastWeekAndPage100 = () =>
    cy.visit('/videocenter/x/vodxsearch?published=last_week&page=100');
  getUrlSiteFoxAndPage100 = () =>
    cy.visit('/videocenter/x/vodxsearch?siteId=fox-13&page=100');
  getUrlVODXSearch = () => cy.visit('/videocenter/x/vodxsearch');
  getTimeFilter = () =>
    cy.get('.time-filter_radio-container > ul > :nth-child(1) > label');
  getPaginationContainer = () => cy.get('.VOD-search-pagination-v2__container');
  getPreviousButton = () => cy.get('[data-testid=previous-page_button]');
  getNextButton = () => cy.get('[data-testid=next-page_button]');
  getPaginationDropdown = () => cy.get('[data-testid=pagination_dropdown]');
  getPaginationPage3 = () => cy.get('[name="page-3"]');
}

export const vodxSearchPage = new VodxSearchPage();
