const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('chromedriver');

(async function openChromeTest() {
    try {
        let driver = await new Builder()
                    .setChromeOptions(service)
                    .forBrowser('chrome')
                    .build();

        // Landing Page
        await driver.get('http://localhost:5173/');

        // Redirect to signup page
        await driver.findElement(By.id('btnLogin')).click();

        await driver.sleep(1500);
        // Fill and confirm login form
        await driver.findElement(By.id('emailLogin')).sendKeys('ines@email.com');
        await driver.sleep(500);
        await driver.findElement(By.id('passwordLogin')).sendKeys('1234');
        await driver.sleep(500);
        await driver.findElement(By.id('btnLogin')).click();

        await driver.sleep(1500);
        
        // Redirect to the settings' page
        await driver.findElement(By.id('btnSettings')).click();

        await driver.sleep(1500);

        // Update user's data
        await driver.findElement(By.id('usernameSettings')).sendKeys('ines12');
        await driver.sleep(500);
        await driver.findElement(By.id('emailSettings')).sendKeys('ines@email.com');
        await driver.sleep(500);
        await driver.findElement(By.id('passwordSettings')).sendKeys('1234');
        await driver.sleep(500);
        await driver.findElement(By.id('confirmSettings')).sendKeys('1234');
        await driver.sleep(500);
        await driver.findElement(By.id('btnUpdate')).click();
        
        await driver.sleep(3000);
        await driver.quit();
    } catch (error) {
      console.log(error)
    }
  })();
  