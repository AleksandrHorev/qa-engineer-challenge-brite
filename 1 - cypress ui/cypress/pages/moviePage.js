import Button from "../components/button";

class MoviewPage {
  constructor() {
    this.imdbRatingSelector = '[data-testid="hero-rating-bar__aggregate-rating"]';
    this.photosSelector = '[data-testid="photos-title"] a';
  }

  imdbRating() {
    return new Button(this.imdbRatingSelector);
  }

  photos() {
    return new Button(this.photosSelector);
  }
}

export default MoviewPage;