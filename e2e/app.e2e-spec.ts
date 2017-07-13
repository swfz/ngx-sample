import { NgxSamplePage } from './app.po';

describe('ngx-sample App', () => {
  let page: NgxSamplePage;

  beforeEach(() => {
    page = new NgxSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
