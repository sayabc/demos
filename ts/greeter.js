function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Wang', lastName: '周五' };
document.body.innerHTML = greeter(user);
// some test
var isDone = false;
var myName = '9';
var myAge = 99;
console.log("my age is " + myAge);
var numberList = [1, 2, 3]; // 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
console.log(numberList);
var numberList2 = [3, 4, 5];
console.log(numberList2);
var notSure = '99';
notSure = 99;
var u = undefined;
var n = null;
