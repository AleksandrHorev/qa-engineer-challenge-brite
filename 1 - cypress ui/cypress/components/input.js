class Input {
  constructor(selector) {
    this.selector = selector;
  }

  type(value) {
    cy.get(this.selector).type(value);
  }

  click(position = 1) {
    // cypress counting the list from 0 index
    cy.get(this.selector).eq(position - 1).click();
  }

  doubleClick(position = 1) {
    cy.get(this.selector).eq(position - 1).dblclick();
  }
}

export default Input;
