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
        await driver.findElement(By.id('btnSignup')).click();

        await driver.sleep(1500);
        // Fill and confirm signup form
        await driver.findElement(By.id('usernameSignup')).sendKeys('teste');
        await driver.sleep(500);
        await driver.findElement(By.id('emailSignup')).sendKeys('teste@email.com');
        await driver.sleep(500);
        await driver.findElement(By.id('passwordSignup')).sendKeys('1234');
        await driver.sleep(500);
        await driver.findElement(By.id('confirmSignup')).sendKeys('1234');
        await driver.sleep(500);
        await driver.findElement(By.id('btnRegister')).click();

        await driver.sleep(1500);
        // Fill and confirm login form
        await driver.findElement(By.id('emailLogin')).sendKeys('teste@email.com');
        await driver.sleep(500);
        await driver.findElement(By.id('passwordLogin')).sendKeys('1234');
        await driver.sleep(500);
        await driver.findElement(By.id('btnLogin')).click();

        await driver.sleep(1500);
        
        // Redirect to catalogue
        await driver.findElement(By.id('btnCatalogue')).click();

        await driver.sleep(1500);

        // Search a book by its name
        await driver.findElement(By.id('searchBook')).sendKeys('normal');
        
        await driver.sleep(1500);
        // Redirect to the book's page
        await driver.findElement(By.className('book')).click();
        
        await driver.sleep(2000);
        await driver.quit();
    } catch (error) {
      console.log(error)
    }
  })();
  