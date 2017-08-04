import { LibFinderPage } from './app.po';

describe('lib-finder App', () => {
  let page: LibFinderPage;

  beforeEach(() => {
    page = new LibFinderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
