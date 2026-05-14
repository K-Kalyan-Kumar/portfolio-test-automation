const { test, expect } = require('@playwright/test');
const { PortfolioPage } = require('./portfolioPage');

test.describe('Portfolio Website Test Suite', () => {
  let portfolioPage;

  test.beforeEach(async ({ page }) => {
    portfolioPage = new PortfolioPage(page);
  });

  test('Should navigate to portfolio, find Kalyan text, scroll to projects, and click Food Munch Live Demo', async ({ page }) => {
    // Step 1: Navigate to portfolio URL
    test.step('Navigate to Portfolio URL', async () => {
      await portfolioPage.navigateToPortfolio();
    });

    // Step 2: Wait for page load
    test.step('Wait for page to fully load', async () => {
      await portfolioPage.waitForPageLoad();
    });

    // Step 3: Verify Kalyan text exists
    test.step('Verify Kalyan text is visible', async () => {
      const kalyanExists = await portfolioPage.verifyKalyanTextExists();
      expect(kalyanExists).toBe(true);
      console.log('✓ Kalyan text found on the page');
    });

    // Step 4: Scroll to projects section
    test.step('Scroll to Projects section', async () => {
      await portfolioPage.scrollToProjects();
      console.log('✓ Scrolled to Projects section');
    });

    // Step 5: Click on Food Munch Live Demo button
    test.step('Click on Food Munch Live Demo button', async () => {
      await portfolioPage.clickFoodMunchLiveDemo();
      console.log('✓ Clicked on Food Munch Live Demo button');
    });

    // Step 6: Wait for the new page/redirect to load
    test.step('Wait for Food Munch page to load', async () => {
      await page.waitForLoadState('networkidle');
      console.log('✓ Food Munch page loaded successfully');
    });

    // Verification
    test.step('Verify we are on Food Munch page', async () => {
      const currentUrl = page.url();
      console.log(`Current URL: ${currentUrl}`);
      expect(currentUrl).toContain('foodmunch');
    });
  });
});