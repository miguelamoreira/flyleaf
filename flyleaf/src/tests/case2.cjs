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
        await driver.findElement(By.id('emailLogin')).sendKeys('joca@email.com');
        await driver.sleep(500);
        await driver.findElement(By.id('passwordLogin')).sendKeys('1234');
        await driver.sleep(500);
        await driver.findElement(By.id('btnLogin')).click();

        await driver.sleep(1500);
        
        // Mark the first book as read
        await driver.findElement(By.id('btnReading')).click();
        await driver.findElement(By.id('titleReading')).sendKeys("Normal People");
        await driver.sleep(1500);
        await driver.findElement(By.id('btnNewReading')).click();
        
        await driver.sleep(1500);

        // Redirect to my readings page
        await driver.findElement(By.id('btnMyReadings')).click();

        await driver.sleep(1500);
        // Delete the last reading entry
        const deleteButtons = await driver.findElements(By.className('btnDelete'));

        if (deleteButtons.length > 0) {
          const lastBtnDelete= deleteButtons[deleteButtons.length - 1];
          await lastBtnDelete.click();
        } 
        
        await driver.sleep(3000);
        await driver.quit();
    } catch (error) {
      console.log(error)
    }
  })();
  