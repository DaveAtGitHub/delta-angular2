import { DeltaAngular2Page } from './app.po';

describe('delta-angular2 App', () => {
  let page: DeltaAngular2Page;

  beforeEach(() => {
    page = new DeltaAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
