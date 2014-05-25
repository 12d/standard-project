var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({
        'browserName': 'internet explorer',
        'version': '',
        'platform': 'ANY',
        'javascriptEnabled': true
    }).
    build();

driver.get('http://www.baidu.com').then(function(){
    driver.findElement(webdriver.By.id('kw1')).sendKeys('webdriver');
    driver.findElement(webdriver.By.id('su1')).click();
   // driver.getTitle().then(function(title) {
        //console.log(title);
        //driver.quit();
        driver.findElement(webdriver.By.id('kw')).getAttribute('value').then(function(value){
            console.log(assert.equal(value, 'webdriver'));
            //console.log(value);
            driver.quit();
        });


   // });


});
