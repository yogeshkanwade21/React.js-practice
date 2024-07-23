// jest-puppeteer.config.js
export default {
    launch: {
    headless: false,
    product: 'chrome',
    args: ['--start-maximized'],
    defaultViewport :{width: 1700, height: 800 }
    
    },
    browserContext: 'default',
    }