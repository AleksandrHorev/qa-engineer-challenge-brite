import Button from "../components/button";

class TopBoxOfficePage {
  constructor() {
    this.moviesSelector = '.ipc-poster';
  }

  getAllMovies() {
    return new Button(this.moviesSelector);
  }
}

export default TopBoxOfficePage;