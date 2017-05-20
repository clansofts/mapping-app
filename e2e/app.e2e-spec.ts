import { MappingAppPage } from './app.po';

describe('mapping-app App', () => {
  let page: MappingAppPage;

  beforeEach(() => {
    page = new MappingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
