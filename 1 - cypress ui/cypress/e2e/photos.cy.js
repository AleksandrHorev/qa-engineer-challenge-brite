import HomePage from "../pages/homePage";
import MoviewPage from "../pages/moviePage";
import PhotosPage from "../pages/photosPage";
import Top250TvShowsPage from "../pages/top250TvShowsPage";

describe('Photos spec', () => {
  it('Users are able to choose a specific photo on the film page', () => {
    const homePage = new HomePage();
    homePage.visit();
    homePage.declinePreferences().click();
    homePage.menu().click();
    homePage.top250TvShows().click();

    const top250TvShows = new Top250TvShowsPage();
    top250TvShows.getMovieByName('Breaking Bad').click()

    const moviePage = new MoviewPage()
    moviePage.photos().click()

    const photosPage = new PhotosPage()
    photosPage.gallery().click()
    photosPage.filter().click()
    photosPage.selectPerson('Danny Trejo (6)')
    photosPage.closeFilter().click()
    photosPage.waitPhotosAmount(6)

    const photoPosition = 2
    photosPage.allPhotos().click(photoPosition)
  })
})
