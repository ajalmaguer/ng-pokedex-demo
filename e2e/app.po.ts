import { browser, element, by } from 'protractor';

export class NgPokedexPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('poke-root h1')).getText();
  }
}
