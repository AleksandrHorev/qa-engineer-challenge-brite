class Button {
  constructor(selector) {
    this.selector = selector;
  }

  click(position = 1, options = {}) {
    // cypress counting the list from 0 index
    cy.get(this.selector).eq(position - 1).click(options);
  }
}

export default Button;
