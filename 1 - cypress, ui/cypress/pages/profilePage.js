import Button from "../components/button";

class ProfilePage {
  constructor() {
    this.upcomingSelector = '[data-testid="accordion-item-actor-upcoming-projects"]';
    this.upocmingMovieSelector = 'li.ipc-inline-list__item>a';
  }

  upcoming() {
    return new Button(this.upcomingSelector);
  }

  upcomingMovieByType(type) {
    return cy.get(this.upocmingMovieSelector).contains(type);
  }
}

export default ProfilePage;