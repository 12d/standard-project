var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    driver = new webdriver.Builder().
        usingServer('http://localhost:4444/wd/hub').
        withCapabilities({
            'browserName': 'chrome',
            'version': '',
            'platform': 'ANY',
            'javascriptEnabled': true
        }).
        build();

jasmine.getEnv().defaultTimeoutInterval = 5000;
describe('test jasmine', function(){
    it('1 3case:', function(){
        expect(true).toBeTruthy();
    })
});
describe('test jasmine', function(){
    it('22 case:', function(){
        expect(true).toBeTruthy();
    })
});
describe('test jasmine', function(){
    it('22 case:', function(){
        expect(false).toBeTruthy();
    })
});


describe('basic test', function () {
    it('should be on correct page', function (done) {
        driver.get('http://www.baidu.com');
        driver.getTitle().then(function(title) {
            expect(title).toBe('百度一下，你就知道');
            //ck to be called before proceeding to next specification.
            done();
        });
    });
});

