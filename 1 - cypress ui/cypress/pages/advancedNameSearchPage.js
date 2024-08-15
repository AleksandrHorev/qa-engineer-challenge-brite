import Button from "../components/button";
import Input from "../components/input";

class AdvancedNameSearchPage {
  constructor() {
    this.filterSelector = '[data-testid="chip-list-test-id"]';
    this.birthdaySelector = '[data-testid="accordion-item-birthdayAccordion"]';
    this.birthdayDateSelector = '[name="birthday-input"]';
    this.birthDateSelector = '[data-testid="accordion-item-birthDateAccordion"]';
    this.searchSelector = '[data-testid="adv-search-get-results"]';
    this.allPeopleSelector = 'li.ipc-metadata-list-summary-item div.ipc-title a';
    this.birthdayDateStartDatePickerSelector = '[data-testid="birthDate-start"]';
    this.birthdayDateToInputSelector = '[data-testid="birthYearMonth-end"]';
  }

  filter() {
    return new Button(this.filterSelector);
  }

  birthday() {
    return new Button(this.birthdaySelector);
  }

  birthdayDate() {
    return new Input(this.birthdayDateSelector);
  }

  birthdayDateStartDatePicker() {
    return new Input(this.birthdayDateStartDatePickerSelector);
  }

  birthdayDateToInput() {
    return new Input(this.birthdayDateToInputSelector);
  }

  birthDate() {
    return new Input(this.birthDateSelector);
  }

  search() {
    return new Input(this.searchSelector);
  }

  allPeople() {
    return new Button(this.allPeopleSelector);
  }

}

export default AdvancedNameSearchPage;