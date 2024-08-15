import Input from "../components/input";
import Button from "../components/button";
import { baseUrl } from '../support/consts'

class HomePage {
  constructor() {
    this.menuButtonSelector = '#imdbHeader-navDrawerOpen';
    this.searchInputSelector = '#suggestion-search';
    this.searchButtonSelector = '#suggestion-search-button';
    this.firstSearchResultSelector = '.searchResult__constTitle';
    this.topBoxOfficeLinkSelector = 'a[href="/chart/boxoffice/?ref_=nv_ch_cht"]';
    this.top250TvShowsSelector = 'a[href="/chart/toptv/?ref_=nv_tvv_250"]';
    this.bornTodaySelector = 'a[href="/feature/bornondate/?ref_=nv_cel_brn"]';
    this.declinePreferencesSelector = '[data-testid="reject-button"]';
  }

  visit() {
    cy.visit(baseUrl);
  }

  menu() {
    return new Button(this.menuButtonSelector);
  }

  searchFor(value) {
    new Input(this.searchInputSelector).type(value); 
    new Button(this.firstSearchResultSelector).click();
    
  }

  topBoxOffice() {
    return new Button(this.topBoxOfficeLinkSelector);
  }

  top250TvShows() {
    return new Button(this.top250TvShowsSelector);
  }

  declinePreferences() {
    return new Button(this.declinePreferencesSelector);
  }

  bornToday() {
    return new Button(this.bornTodaySelector);
  }
}

export default HomePage;