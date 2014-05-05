/**
 * Created with JetBrains WebStorm.
 * User: chen
 * Date: 4/27/14
 * Time: 10:23 PM
 * To change this template use File | Settings | File Templates.
 */

var SELENIUM_DRIVER_JAR = '/Users/chen/WebstormProjects/selenium/selenium-server-standalone-2.41.0.jar',
    webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;

var server = new SeleniumServer(SELENIUM_DRIVER_JAR, {
    port: 4444
});

server.start();

var driver = new webdriver.Builder().
    usingServer(server.address()).
    withCapabilities(webdriver.Capabilities.firefox()).
    build();
/*
driver.get('http://www.baidu.com');
driver.findElement(webdriver.By.id('kw')).sendKeys('webdriver');
driver.findElement(webdriver.By.id('su')).click();
driver.getTitle().then(function(title) {
    if (title !== 'webdriver - Google Search') {
        console.log('ok!!!!');
    }
});
*/
driver.get('http://hotel.ctrip.com');
driver.findElement(webdriver.By.id("txtCity")).clear();
driver.findElement(webdriver.By.id("txtCity")).sendKeys("beijing").then(function(){
    driver.findElement(webdriver.By.xpath('//body')).click();
    driver.findElement(webdriver.By.id("btnSearch")).click();
    //driver.findElement(webdriver.By.id("txtCity")).clear();
}, 2000);

/*
driver.getTitle().then(function(title) {
    if (title !== 'webdriver - Google Search') {
        throw new Error(
            'Expected "webdriver - Google Search", but was "' + title + '"');
    }
});
*/
//driver.wait(function(){
    driver.findElement(webdriver.By.id("txtCity")).getAttribute("value").then(function(value){
        if(value=="北京"){
            driver.quit();
            //console.log('ok');
        }
        //
    })
//});
/*
assert.equal("北京", driver.findElement(webdriver.By.id("txtCity")).getAttribute("value"));
*/

