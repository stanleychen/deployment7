import { Deployment7Page } from './app.po';

describe('deployment7 App', function() {
  let page: Deployment7Page;

  beforeEach(() => {
    page = new Deployment7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
