import Button from "../components/button";

class PhotosPage {
  constructor() {
    this.gallerySelector = '[data-testid="mv-gallery-button"]';
    this.filterSelector = '[data-testid="image-chip-dropdown-test-id"]';
    this.morePeopleSelector = '#Person-filter-select-dropdown';
    this.closeFilterSelector = '[title="Close Prompt"]';
    this.allPhotosSelector = '[data-testid="sub-section-images"] a';
  }

  gallery() {
    return new Button(this.gallerySelector);
  }

  filter() {
    return new Button(this.filterSelector);
  }

  selectPerson(name) {
    cy.get(this.morePeopleSelector).select(name);
  }

  closeFilter() {
    return new Button(this.closeFilterSelector);
  }

  allPhotos() {
    return new Button(this.allPhotosSelector);
  }

  waitPhotosAmount(amount) {
    cy.get('[data-testid="image-gallery-image"]').should('have.lengthOf', amount);
  }
}

export default PhotosPage;