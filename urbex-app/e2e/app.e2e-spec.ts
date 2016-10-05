import { UrbexAppPage } from './app.po';

describe('urbex-app App', function() {
  let page: UrbexAppPage;

  beforeEach(() => {
    page = new UrbexAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
