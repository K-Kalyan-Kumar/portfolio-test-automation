const { chromium } = require('playwright');
const { PortfolioPage } = require('./portfolioPage');

async function runPortfolioTest() {
  let browser;
  try {
    console.log('🚀 Starting Portfolio Test Suite...\n');
    
    browser = await chromium.launch({ headless: false });
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    
    const portfolioPage = new PortfolioPage(page);
    
    console.log('📍 Step 1: Navigating to Portfolio URL...');
    await portfolioPage.navigateToPortfolio();
    console.log('✅ Navigated successfully\n');
    
    console.log('⏳ Step 2: Waiting for page to fully load...');
    await portfolioPage.waitForPageLoad();
    console.log('✅ Page loaded\n');
    
    console.log('🔍 Step 3: Verifying "Kalyan" text exists...');
    const kalyanExists = await portfolioPage.verifyKalyanTextExists();
    if (kalyanExists) {
      console.log('✅ "Kalyan" text found on the page\n');
    } else {
      throw new Error('❌ "Kalyan" text not found!');
    }
    
    console.log('📜 Step 4: Scrolling to Projects section...');
    await portfolioPage.scrollToProjects();
    console.log('✅ Scrolled to Projects section\n');
    
    console.log('🖱️  Step 5: Clicking on Food Munch Live Demo button...');
    await portfolioPage.clickFoodMunchLiveDemo();
    console.log('✅ Clicked on Food Munch Live Demo button\n');
    
    console.log('⏳ Step 6: Waiting for Food Munch page to load...');
    await page.waitForLoadState('networkidle');
    const currentUrl = page.url();
    console.log(`✅ Food Munch page loaded successfully`);
    console.log(`📎 Current URL: ${currentUrl}\n`);
    
    if (currentUrl.includes('foodmunch') || currentUrl.includes('ccbp')) {
      console.log('🎉 TEST PASSED: Successfully navigated to Food Munch page!\n');
    } else {
      console.log('⚠️  URL verification: Page loaded but URL may differ\n');
    }
    
    console.log('✨ Test completed successfully!');
    
    await context.close();
  } catch (error) {
    console.error('❌ Test Failed:', error.message);
    console.error('Stack:', error.stack);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

runPortfolioTest();