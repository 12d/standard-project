module('DOM cases');
test('window is global', function(){
    ok(window === window, 'passed!');
});
test('eval in window', function(){
    ok(!!JSON, 'passed');
})

module('BOM cases');

test('user agent is valid', function(){
    ok(!!window.navigator.userAgent, 'passed!');
});
