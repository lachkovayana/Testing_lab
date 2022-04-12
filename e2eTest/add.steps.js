
import { defineFeature, loadFeature } from 'jest-cucumber';
import { getDocument } from 'pptr-testing-library';

const feature = loadFeature('./features/add.feature');

defineFeature(feature, test => {
  test('Addition task result', ({ given, when, then }) => {
    given(/^I've got opened page "(.*)"$/, async (url) => {
      await page.goto(url)
      await page.waitForTimeout(3000);
    });

    when(/^When i submit form with entered text "(.*)"$/, async (text) => {
      const $document = await getDocument(page);
      await page.type('input[id=input_text]', text)
      await page.waitForTimeout(1000);
      await page.click('#btn_save');
    });
    
    then(/^The new element appears on page$/, async (text) => {
      await page.waitForTimeout(3000);
    });
  });

  test('Clearing all elements on the page', ({ given, when, then }) => {
    given(/^I've got opened page "(.*)"$/, async (url) => {
      await page.goto(url)
      await page.waitForTimeout(2000);
    });

    when(/^When I click the Clear button/, async (text) => {
      await page.click('#btn_clear');
    });
    
    then(/^All elements disappear$/, async (text) => {
      await page.waitForTimeout(2000);
    });
  });
});