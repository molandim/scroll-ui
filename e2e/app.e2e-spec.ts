import { ScrollUiPage } from './app.po';

describe('scroll-ui App', () => {
  let page: ScrollUiPage;

  beforeEach(() => {
    page = new ScrollUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
