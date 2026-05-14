const { test, expect } = require('@playwright/test');
const { PortfolioPage } = require('./portfolioPage');

test.describe('Portfolio Website - POM Test Suite', () => {
  let portfolioPage;

  test.beforeEach(async ({ page }) => {
    portfolioPage = new PortfolioPage(page);
  });

  test('TC001: Navigate to Portfolio, Find Kalyan, and Click Food Munch Live Demo', async ({ page }) => {
    test.step('Step 1: Navigate to Portfolio URL', async () => {
      await portfolioPage.navigateToPortfolio();
      console.log('✅ Navigated to portfolio');
    });

    test.step('Step 2: Wait for page to load', async () => {
      await portfolioPage.waitForPageLoad();
      console.log('✅ Page fully loaded');
    });

    test.step('Step 3: Verify Kalyan text exists', async () => {
      const kalyanExists = await portfolioPage.verifyKalyanTextExists();
      expect(kalyanExists).toBe(true);
      console.log('✅ Kalyan text verified');
    });

    test.step('Step 4: Scroll to Projects section', async () => {
      await portfolioPage.scrollToProjects();
      console.log('✅ Scrolled to projects');
    });

    test.step('Step 5: Verify Food Munch project is visible', async () => {
      const isVisible = await portfolioPage.isProjectVisible('Food Munch');
      expect(isVisible).toBe(true);
      console.log('✅ Food Munch project visible');
    });

    test.step('Step 6: Click Food Munch Live Demo button', async () => {
      await portfolioPage.clickFoodMunchLiveDemo();
      console.log('✅ Clicked Food Munch Live Demo button');
    });

    test.step('Step 7: Wait for Food Munch page to load', async () => {
      await page.waitForLoadState('networkidle');
      console.log('✅ Food Munch page loaded');
    });

    test.step('Step 8: Verify Food Munch page loaded', async () => {
      const pageLoaded = await portfolioPage.verifyFoodMunchPageLoaded();
      expect(pageLoaded).toBe(true);
      const url = await portfolioPage.getCurrentUrl();
      console.log(`✅ Successfully navigated to: ${url}`);
    });
  });

  test('TC002: Verify all projects are displayed on portfolio', async () => {
    test.step('Navigate to portfolio', async () => {
      await portfolioPage.navigateToPortfolio();
    });

    test.step('Scroll to projects section', async () => {
      await portfolioPage.scrollToProjects();
    });

    test.step('Verify project count', async () => {
      const projectCount = await portfolioPage.verifyProjectsDisplayed();
      expect(projectCount).toBe(3);
      console.log(`✅ Found ${projectCount} projects`);
    });

    test.step('Verify each project', async () => {
      expect(await portfolioPage.isProjectVisible('Food Munch')).toBe(true);
      expect(await portfolioPage.isProjectVisible('Joke Generator')).toBe(true);
      expect(await portfolioPage.isProjectVisible('Youtube Clone')).toBe(true);
      console.log('✅ All projects verified');
    });
  });

  test('TC003: Verify Kalyan text is visible on page load', async () => {
    test.step('Navigate to portfolio', async () => {
      await portfolioPage.navigateToPortfolio();
    });

    test.step('Verify Kalyan text', async () => {
      const exists = await portfolioPage.verifyKalyanTextExists();
      expect(exists).toBe(true);
      console.log('✅ Kalyan text is visible');
    });
  });

  test('TC004: Verify navigation links are accessible', async () => {
    test.step('Navigate to portfolio', async () => {
      await portfolioPage.navigateToPortfolio();
    });

    test.step('Get navigation links', async () => {
      const navLinks = await portfolioPage.getNavLinksText();
      expect(navLinks.length).toBeGreaterThan(0);
      console.log(`✅ Found ${navLinks.length} navigation links: ${navLinks.join(', ')}`);
    });
  });

  test('TC005: Retrieve all project titles', async () => {
    test.step('Navigate to portfolio', async () => {
      await portfolioPage.navigateToPortfolio();
    });

    test.step('Scroll to projects', async () => {
      await portfolioPage.scrollToProjects();
    });

    test.step('Get all project titles', async () => {
      const projectTitles = await portfolioPage.getAllProjectTitles();
      expect(projectTitles.length).toBe(3);
      console.log(`✅ Projects found: ${projectTitles.join(', ')}`);
    });
  });
});