import AdvancedNameSearchPage from "../pages/advancedNameSearchPage";
import HomePage from "../pages/homePage";
import { getDateFromTodayInFormat } from "../support/utils";

describe('Born today spec', () => {
  it('Users are able to find a celebrity which was born yesterday and take a screenshot', () => {
    const homePage = new HomePage();
    homePage.visit();
    homePage.declinePreferences().click();
    homePage.menu().click();
    homePage.bornToday().click();

    const advancedSearchPage = new AdvancedNameSearchPage();
    advancedSearchPage.filter().click();
    advancedSearchPage.birthday().click();

    const yesterday = getDateFromTodayInFormat(-1, 'en-ca', { month: '2-digit', day: '2-digit' });
    advancedSearchPage.birthdayDate().type(yesterday);
    advancedSearchPage.birthday().click();
    advancedSearchPage.search().click();
    const numberOfThePerson = 3;
    advancedSearchPage.allPeople().click(numberOfThePerson);

    cy.screenshot(`born-today-spec-find-celebrity/${new Date().toISOString()}`);
  })

  it('Users are able to find a celebrity who was born 40 years ago and open links from the description', () => {
    const homePage = new HomePage();
    homePage.visit();
    homePage.declinePreferences().click();
    homePage.menu().click();
    homePage.bornToday().click();

    const advancedSearchPage = new AdvancedNameSearchPage();
    advancedSearchPage.filter().click();
    advancedSearchPage.birthDate().click();

    const fortyYearsAgo = new Date();
    fortyYearsAgo.setFullYear(fortyYearsAgo.getFullYear() - 40);
    advancedSearchPage.birthdayDateStartDatePicker().type(fortyYearsAgo.toLocaleDateString('en-ca'));
    
    advancedSearchPage.birthdayDateToInput().type(fortyYearsAgo.toLocaleDateString('en-ca', { month: '2-digit', year: 'numeric' }));
    advancedSearchPage.search().click();

    try {
      // very unlikely this code can be reused somewhere else so I prefer to keep it here
      cy.get('[data-testid="dli-bio"]').first().find('a').first().click();
      cy.screenshot(`born-today-spec-celebrity-born-40-years-ago/${new Date().toISOString()}`);
    } catch(e) {
      console.log('No links were found in the description for the first actor 40 years ago.');
    }
  })
})
