import { NgPokedexPage } from './app.po';

describe('ng-pokedex App', () => {
  let page: NgPokedexPage;

  beforeEach(() => {
    page = new NgPokedexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('poke works!');
  });
});
