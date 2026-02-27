const locators = {
  LOGIN: {
    USER: '[name="username"]',
    PASSWORD: '[name="password"]',
    BTN_LOGIN: ".oxd-button",
  },
  URL: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  MESSAGE: ".oxd-alert",
  MESSAGE_REQUIRED: ".oxd-input-group > .oxd-text",
  RECRUITMENT: {
    NAV: ".oxd-main-menu-item",
    ADD: ".orangehrm-header-container > .oxd-button",
    FIRST_NAME: '[name="firstName"]',
    MIDDLE_NAME: '[name="middleName"]',
    LAST_NAME: '[name="lastName"]',
    REQUIRED:
      "oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message",
    VACANCY: ".oxd-select-text",
    SELECT_VACANCY: ".oxd-select-dropdown",
    EMAIL: ".oxd-grid-3.orangehrm-full-width-grid",
    CONTACT_NUMBER: ".oxd-grid-3.orangehrm-full-width-grid",
    UPLOAD: ".oxd-file-input",
    KEYWORDS: ".oxd-grid-3.orangehrm-full-width-grid",
    CALENDAR: ".oxd-date-wrapper",
    SELECT_DATE: ".oxd-calendar-date",
    NOTES: ".oxd-grid-3.orangehrm-full-width-grid",
    CHECKBOX: ".oxd-icon.bi-check.oxd-checkbox-input-icon",
    SALVE_BUTTON: ".oxd-button--secondary",
    MESSAGE: ".oxd-toast",
    REQUIRED: "Required",
  },
};

export default locators;
