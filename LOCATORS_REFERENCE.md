# 🎓 Complete Element Reference Guide

This document contains all website locators, CSS selectors, and Playwright examples.

## 📍 Navigation Section

```javascript
// Desktop Navigation
const desktopNav = '#desktop-nav';
const navLogo = '.logo';
const navLinks = '.nav-links';

// Hamburger Menu (Mobile)
const hamburgerNav = '#hamburger-nav';
const hamburgerIcon = '.hamburger-icon';
const menuLinks = '.menu-links';
```

## 👤 Profile Section (#profile)

```javascript
const profileSection = 'section#profile';
const kalyanTitle = 'h1.title'; // First occurrence
const profileImage = 'img.about-pic';

// Buttons
const downloadCvBtn = 'button:has-text("Download CV")';
const contactInfoBtn = 'button:has-text("Contact Info")';

// Social Icons
const linkedinIcon = 'img[alt="My LinkedIn profile"]';
const githubIcon = 'img[alt="My Github profile"]';
```

## 📖 About Section (#about)

```javascript
const aboutSection = 'section#about';
const aboutTitle = 'section#about h1.title';
const experienceCard = '.details-container'; // First
const educationCard = '.details-container'; // Second
const bioText = '.text-container p';
```

## 🛠️ Experience Section (#experience)

```javascript
const experienceSection = 'section#experience';
const experienceTitle = 'section#experience h1.title';

// Skills
const htmlSkill = 'h3:has-text("HTML")';
const cssSkill = 'h3:has-text("CSS")';
const pythonSkill = 'h3:has-text("Python")';
const serviceNowSkill = 'h3:has-text("ServiceNow")';
```

## 🎨 Projects Section (#projects) ⭐

```javascript
const projectsSection = 'section#projects';
const allProjects = '.color-container'; // All 3 projects

// Food Munch Project
const foodMunchContainer = '.color-container:has-text("Food Munch")';
const foodMunchLiveBtn = 'button:has-text("Live Demo")'; // Inside Food Munch

// Using Playwright Locator
const foodMunch = page.locator('.color-container')
  .filter({ hasText: 'Food Munch' });
const foodMunchBtn = foodMunch.locator('button:has-text("Live Demo")');
```

## 📧 Contact Section (#contact)

```javascript
const contactSection = 'section#contact';
const gmailLink = 'a[href="mailto:kalyankumarkuruva@gmail.com"]';
const linkedinContactLink = 'a[href="https://www.linkedin.com/in/1-kalyankumar/"]';
```

## 🔗 URL Navigation

```javascript
// Initial Page
https://kalyank-portfolio.netlify.app/

// After Clicking Food Munch
https://my1foodmunch.ccbp.tech/

// Joke Generator
http://jokegenerator1.ccbp.tech
```

## 📋 Common POM Methods

```javascript
// Navigation
await portfolioPage.navigateToPortfolio();
await portfolioPage.scrollToProjects();
await portfolioPage.scrollToSection('about');

// Verification
await portfolioPage.verifyKalyanTextExists();
await portfolioPage.isProjectVisible('Food Munch');
await portfolioPage.verifyFoodMunchPageLoaded();

// Interaction
await portfolioPage.clickFoodMunchLiveDemo();
await portfolioPage.clickNavLink('About');
await portfolioPage.clickDownloadCvButton();

// Text Retrieval
await portfolioPage.getElementText(element);
await portfolioPage.getAllProjectTitles();
await portfolioPage.getNavLinksText();
```

---

**For complete documentation, see README.md**
