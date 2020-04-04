var meo = require('./Cat.js');
var chuot = require('./Mouse.js');
var cho = require('./Dog.js');
var nguoi = require('./human.js');

var mouse1 = new chuot('Jerry');
var cat1 = new meo('Tom');
var mouse2 = new chuot('Mickey');
var dog1 = new cho('Milu');
var jason = new nguoi('Jason');

//dog1.sayHi();
cat1.eat(mouse1);
cat1.eat(mouse2);
jason.kill(cat1);

console.log(jason);

//console.log(cat1, mouse1, mouse2);
