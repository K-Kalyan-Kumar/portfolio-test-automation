/**
 * Portfolio Page Object Model (POM)
 * 
 * This file implements the Page Object Model design pattern for Kalyan's Portfolio website.
 * It encapsulates all locators and page interactions in a reusable class structure.
 * 
 * @author Kalyan's Portfolio Test
 * @version 1.0
 */

class PortfolioPage {
  /**
   * Constructor - Initialize all page locators
   * @param {Page} page - Playwright page object
   */
  constructor(page) {
    this.page = page;
    
    // ============ LOCATORS ============
    
    // Header/Navigation
    this.desktopNav = page.locator('#desktop-nav');
    this.hamburgerNav = page.locator('#hamburger-nav');
    this.navLinks = page.locator('.nav-links');
    this.logoText = page.locator('.logo');
    
    // Profile Section (#profile)
    this.profileSection = page.locator('section#profile');
    this.kalyanTitle = page.locator('h1.title').first();
    this.profilePicture = page.locator('img.about-pic').first();
    this.downloadCvBtn = page.locator('button:has-text("Download CV")');
    this.contactInfoBtn = page.locator('button:has-text("Contact Info")');
    this.socialsContainer = page.locator('#socials-container');
    this.linkedinIcon = page.locator('img[alt="My LinkedIn profile"]');
    this.githubIcon = page.locator('img[alt="My Github profile"]');
    
    // About Section (#about)
    this.aboutSection = page.locator('section#about');
    this.aboutTitle = page.locator('section#about h1.title');
    this.aboutDetails = page.locator('.about-details-container');
    this.experienceDetail = page.locator('.details-container').first();
    this.educationDetail = page.locator('.details-container').nth(1);
    
    // Experience Section (#experience)
    this.experienceSection = page.locator('section#experience');
    this.experienceTitle = page.locator('section#experience h1.title');
    this.programmingLanguagesArticles = page.locator('section#experience article');
    
    // Projects Section (#projects)
    this.projectsSection = page.locator('section#projects');
    this.projectsTitle = page.locator('section#projects h1.title');
    this.projectContainers = page.locator('.color-container');
    
    // Food Munch Project Specific
    this.foodMunchContainer = page.locator('.color-container').filter({ hasText: 'Food Munch' });
    this.foodMunchTitle = this.foodMunchContainer.locator('h2.experience-sub-title').first();
    this.foodMunchLiveBtn = this.foodMunchContainer.locator('button:has-text("Live Demo")');
    
    // Joke Generator Project
    this.jokeGenContainer = page.locator('.color-container').filter({ hasText: 'Joke Generator' });
    this.jokeGenLiveBtn = this.jokeGenContainer.locator('button:has-text("Live Demo")');
    
    // Youtube Clone Project
    this.youtubeCloneContainer = page.locator('.color-container').filter({ hasText: 'Youtube Clone' });
    this.youtubeCloneBtn = this.youtubeCloneContainer.locator('button:has-text("Coming Soon")');
    
    // Contact Section (#contact)
    this.contactSection = page.locator('section#contact');
    this.contactTitle = page.locator('section#contact h1.title');
    this.gmailLink = page.locator('a[href*="mailto"]');
    this.linkedinLink = page.locator('a[href*="linkedin"]');
    
    // Footer
    this.footer = page.locator('footer');
    this.footerNavLinks = page.locator('footer .nav-links');
    
    // General
    this.body = page.locator('body');
  }

  // ============ NAVIGATION METHODS ============

  /**
   * Navigate to the portfolio website
   */
  async navigateToPortfolio() {
    await this.page.goto('https://kalyank-portfolio.netlify.app/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Wait for the page to fully load
   */
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  // ============ VERIFICATION METHODS ============

  /**
   * Verify that "Kalyan" text exists on the page
   * @returns {boolean} true if text exists and is visible
   */
  async verifyKalyanTextExists() {
    await this.kalyanTitle.waitFor({ state: 'visible', timeout: 10000 });
    const isVisible = await this.kalyanTitle.isVisible();
    return isVisible;
  }

  /**
   * Verify that a specific element is visible
   * @param {Locator} element - The element to check
   * @returns {boolean} true if element is visible
   */
  async isElementVisible(element) {
    try {
      await element.waitFor({ state: 'visible', timeout: 5000 });
      return await element.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * Get current page URL
   * @returns {string} The current URL
   */
  async getCurrentUrl() {
    return this.page.url();
  }

  // ============ INTERACTION METHODS ============

  /**
   * Scroll to the Projects section
   */
  async scrollToProjects() {
    await this.projectsSection.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
  }

  /**
   * Scroll to a specific section
   * @param {string} sectionId - The section ID (e.g., 'about', 'experience', 'contact')
   */
  async scrollToSection(sectionId) {
    const section = this.page.locator(`section#${sectionId}`);
    await section.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500);
  }

  /**
   * Click on Food Munch Live Demo button
   */
  async clickFoodMunchLiveDemo() {
    await this.foodMunchLiveBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.foodMunchLiveBtn.click();
  }

  /**
   * Click on Joke Generator Live Demo button
   */
  async clickJokeGenLiveDemo() {
    await this.jokeGenLiveBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.jokeGenLiveBtn.click();
  }

  /**
   * Click on a navigation link
   * @param {string} linkText - The text of the link (e.g., 'About', 'Projects')
   */
  async clickNavLink(linkText) {
    const link = this.page.locator(`a:has-text("${linkText}")`);
    await link.click();
    await this.page.waitForTimeout(500);
  }

  /**
   * Click on the Download CV button
   */
  async clickDownloadCvButton() {
    await this.downloadCvBtn.click();
  }

  /**
   * Click on the Contact Info button
   */
  async clickContactInfoButton() {
    await this.contactInfoBtn.click();
  }

  /**
   * Click on LinkedIn icon
   */
  async clickLinkedinIcon() {
    await this.linkedinIcon.click();
  }

  /**
   * Click on GitHub icon
   */
  async clickGithubIcon() {
    await this.githubIcon.click();
  }

  // ============ TEXT RETRIEVAL METHODS ============

  /**
   * Get the text content of an element
   * @param {Locator} element - The element to get text from
   * @returns {string} The text content
   */
  async getElementText(element) {
    return await element.textContent();
  }

  /**
   * Get all project titles visible on the page
   * @returns {Array<string>} Array of project titles
   */
  async getAllProjectTitles() {
    const projectTitles = await this.page.locator('.color-container h2.experience-sub-title').allTextContents();
    return projectTitles;
  }

  /**
   * Get all navigation links text
   * @returns {Array<string>} Array of navigation link texts
   */
  async getNavLinksText() {
    const links = await this.page.locator('.nav-links li a').allTextContents();
    return links;
  }

  // ============ ASSERTION METHODS ============

  /**
   * Verify user is on Food Munch page
   * @returns {boolean} true if URL contains 'foodmunch'
   */
  async verifyFoodMunchPageLoaded() {
    const url = await this.getCurrentUrl();
    return url.includes('foodmunch') || url.includes('ccbp');
  }

  /**
   * Verify Food Munch button is visible
   * @returns {boolean} true if button is visible
   */
  async verifyFoodMunchButtonVisible() {
    return await this.isElementVisible(this.foodMunchLiveBtn);
  }

  /**
   * Verify all projects are displayed
   * @returns {number} The count of project containers
   */
  async verifyProjectsDisplayed() {
    return await this.projectContainers.count();
  }

  /**
   * Verify a specific project is visible
   * @param {string} projectName - The project name (e.g., 'Food Munch', 'Joke Generator')
   * @returns {boolean} true if project is visible
   */
  async isProjectVisible(projectName) {
    const projectContainer = this.page.locator('.color-container').filter({ hasText: projectName });
    return await this.isElementVisible(projectContainer);
  }
}

module.exports = { PortfolioPage };