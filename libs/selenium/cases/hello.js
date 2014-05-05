var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

test.describe('Google Search', function() {
    test.it('should work', function() {
        var driver = new webdriver.Builder().build();

        var searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('webdriver');
        searchBox.getAttribute('value').then(function(value) {
            assert.equal(value, 'webdriver');
        });

        driver.get('http://www.google.com');
        driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
        driver.findElement(webdriver.By.name('btnG')).click();
        driver.getTitle().then(function(title) {
            if (title !== 'webdriver - Google Search') {
                throw new Error(
                    'Expected "webdriver - Google Search", but was "' + title + '"');
            }
        });

        driver.quit();
    });
});