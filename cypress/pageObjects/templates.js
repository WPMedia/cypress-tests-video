export class Templates {
  //Common elements

  getCreateTemplateButton = () =>
    cy.get('[data-testid=create_template_button]');
  getModalContainer = () => cy.get('[data-testid=modal-container]');
  getModalTitle = () => cy.get('.admin-modal__title');
  getModalTitleBody = () => cy.get('.admin-modal__body > :nth-child(1)');
  getTemplateNameInput = () => cy.get('[data-testid=template-name_input]');
  getSecondaryButton = () => cy.get('[data-testid=admin-modal_secondary-btn]');
  getPrimaryButton = () => cy.get('[data-testid=admin-modal_primary-btn]');
  getModalWrapper = () => cy.get('[data-testid=modal-wrapper]');
  getCloseIcon = () => cy.get('.close_icon');
  getModalErrorContainer = () =>
    cy.get('[data-testid=admin-modal_error-container]');
  getMenuButton12 = () => cy.get('#menu-button--menu--12');
  getOption1Menu3 = () => cy.get('[data-testid=delete_template_button]');
  getModalBody = () => cy.get('.admin-modal__body');
  getBodyTableRow = () => cy.get('tbody tr');
  getDataReachAlert = () => cy.get('[data-reach-alert]');
  getMenuButton9 = () => cy.get('#menu-button--menu--9');
  getOption1Menu9 = () => cy.get('#option-1--menu--9');
  getTableRowInTableBody = () => cy.get('tbody > tr');
  getSearchInput = () => cy.get('[data-testid=search_input]');
  getNoTemplatesMessage = () => cy.get('.no-templates');
  getTableRow1SVG = () => cy.get('thead > tr > :nth-child(1) svg');
  getTableBodyText = () => cy.get('tbody > :nth-child(1) > :nth-child(1) > a');
  getTableRow1 = () => cy.get('thead > tr > :nth-child(1)');
  getTableRow2SVG = () => cy.get('thead > tr > :nth-child(2) svg');
  getTableRow2 = () => cy.get('thead > tr > :nth-child(2)');
  getTableChild2 = () => cy.get('tbody > :nth-child(1) > :nth-child(2)');
  getTableRow3SVG = () => cy.get('thead > tr > :nth-child(3) svg');
  getTableRow3 = () => cy.get('thead > tr > :nth-child(3)');
  getTableBody3 = () => cy.get('tbody > :nth-child(1) > :nth-child(3)');
  getNextPageButton = () =>
    cy.get('[data-testid=indeterminate-pagination-next-page-button]');
  getPreviousPageButton = () =>
    cy.get('[data-testid=indeterminate-pagination-previous-page-button]');
}

export const templates = new Templates();
