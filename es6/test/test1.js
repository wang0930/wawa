'use strict';

function person(name, age) {
    this.name = name;
    this.age = age;
}
person.prototype.say = function () {
    console.log('i am ' + this.name + ' i am ' + this.age);
};
var p1 = new person('wyb', 21);
p1.say();
function coder(name, age) {
    person.call(this, name, age);
}
var c1 = new coder('wyb', 21);
console.log(c1);
