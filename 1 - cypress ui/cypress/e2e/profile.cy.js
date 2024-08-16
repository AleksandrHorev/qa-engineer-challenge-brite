import HomePage from "../pages/homePage";
import ProfilePage from "../pages/profilePage";

describe('Profile spec', () => {
  it('Users are able to find an actor and check the upcoming post-production films', () => {
    const homePage = new HomePage();
    homePage.visit();

    cy.fixture('actor').then(actor => {
      homePage.searchFor(`${actor.name} ${actor.surname}`);
    })

    const profilePage = new ProfilePage();
    profilePage.upcoming().click();
    profilePage.upcomingMovieByType('Post-production').click();
  })
})