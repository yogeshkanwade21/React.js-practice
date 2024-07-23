// Puppeteer - App.test.js
const puppeteer = require('puppeteer');

describe('React To-Do App', () => {
  let browser;
  let page;

  jest.setTimeout(50000);

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    page = await browser.newPage();
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' }); // Adjust the URL to where your React app is running
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display the correct heading', async () => {
    const headingText = await page.$eval('h1', el => el.innerText);
    expect(headingText).toBe('To Do List');
  });

  it('should allow adding a new to-do', async () => {
    await page.waitForSelector('input[placeholder="Enter To do"]');
    await page.type('input[placeholder="Enter To do"]', 'Test ToDo');
    // Click the Add button using text content
    await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const addButton = buttons.find(button => button.innerText.includes('Add'));
        if (addButton) addButton.click();
    });

    await page.waitForSelector('li');
    const todoText = await page.$eval('li', el => el.innerText);
    expect(todoText).toContain('Test ToDo');
  });
  it('should clear the input field after adding a to-do', async () => {
    const inputValue = await page.$eval('input[placeholder="Enter To do"]', el => el.value);
    expect(inputValue).toBe('');
  });

  it('should remove a to-do when the "Remove" button is clicked', async () => {
    await page.waitForSelector('li');
    await page.evaluate(() => {
      const removeButtons = Array.from(document.querySelectorAll('button'));
      const removeButton = removeButtons.find(button => button.innerText.includes('Remove'));
      if (removeButton) removeButton.click();
    });

    const todoItems = await page.$$eval('li', items => items.map(item => item.innerText));
    expect(todoItems).not.toContain('Test ToDo');
  });

  it('should display the correct number of to-dos after adding and removing to-dos', async () => {
    await page.type('input[placeholder="Enter To do"]', 'Todo 1');
    await page.evaluate(() => {
      const addButtons = Array.from(document.querySelectorAll('button'));
      const addButton = addButtons.find(button => button.innerText.includes('Add'));
      if (addButton) addButton.click();
    });
    await page.type('input[placeholder="Enter To do"]', 'Todo 2');
    await page.evaluate(() => {
      const addButtons = Array.from(document.querySelectorAll('button'));
      const addButton = addButtons.find(button => button.innerText.includes('Add'));
      if (addButton) addButton.click();
    });
    await page.waitForSelector('li');

    const todoItems = await page.$$eval('li', items => items.map(item => item.innerText));
    expect(todoItems).toHaveLength(2);

    await page.evaluate(() => {
      const removeButtons = Array.from(document.querySelectorAll('button'));
      const removeButton = removeButtons.find(button => button.innerText.includes('Remove'));
      if (removeButton) removeButton.click();
    });
    const updatedTodoItems = await page.$$eval('li', items => items.map(item => item.innerText));
    expect(updatedTodoItems).toHaveLength(1);
  });
});