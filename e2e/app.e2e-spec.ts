import { UploadFirebasePage } from './app.po';

describe('upload-firebase App', function() {
  let page: UploadFirebasePage;

  beforeEach(() => {
    page = new UploadFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
