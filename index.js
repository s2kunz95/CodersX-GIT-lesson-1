var meo = require('./Cat.js');
var chuot = require('./Mouse.js');

var mouse1 = new chuot('Jerry');
var cat1 = new meo('Tom');

cat1.eat(mouse1);

console.log(cat1, mouse1);