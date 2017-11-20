import { ZwFrontPage } from './app.po';

describe('zw-front App', () => {
  let page: ZwFrontPage;

  beforeEach(() => {
    page = new ZwFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
