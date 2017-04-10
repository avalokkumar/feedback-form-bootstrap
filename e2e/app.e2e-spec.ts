import { FeedbackFormPage } from './app.po';

describe('feedback-form App', () => {
  let page: FeedbackFormPage;

  beforeEach(() => {
    page = new FeedbackFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
