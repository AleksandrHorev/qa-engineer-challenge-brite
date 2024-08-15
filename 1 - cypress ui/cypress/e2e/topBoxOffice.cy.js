import HomePage from "../pages/homePage";
import MoviewPage from "../pages/moviePage";
import RatingPage from "../pages/ratingPage";
import TopBoxOfficePage from "../pages/topBoxOfficePage";

describe('Top Box Office spec', () => {
  it('Users are able to rate a film', () => {
    const homePage = new HomePage();
    homePage.visit();
    homePage.menu().click();
    homePage.topBoxOffice().click();

    const topBoxOfficePage = new TopBoxOfficePage();
    const moviePosition = 2;
    topBoxOfficePage.getAllMovies().click(moviePosition);

    const moviePage = new MoviewPage();
    moviePage.imdbRating().click();

    const ratingPage = new RatingPage();
    ratingPage.rate().click();

    const amountOfStars = 5;
    ratingPage.stars(amountOfStars).click(1, {force: true});
  })
})
