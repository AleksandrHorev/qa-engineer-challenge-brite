import Button from "../components/button";

class RatingPage {
  constructor() {
    this.rateSelector = '[data-testid="rating-button__user-rating__unrated"]';
    this.starsSelector = '[aria-label="Rate {0}"]';
  }

  rate() {
    return new Button(this.rateSelector);
  }

  stars(stars) {
    const selector = this.starsSelector.replace('{0}', stars);
    return new Button(selector);
  }
}

export default RatingPage;