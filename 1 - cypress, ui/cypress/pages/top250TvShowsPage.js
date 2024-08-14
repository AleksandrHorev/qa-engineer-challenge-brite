class Top250TvShowsPage {
  constructor() {
    this.moviesSelector = '.ipc-poster';
    this.movieTitleSelector = 'h3.ipc-title__text';
  }

  getMovieByName(name) {
    return cy.get(this.movieTitleSelector).contains(name);
  }
}

export default Top250TvShowsPage;