function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Wang', lastName: '周五' };
document.body.innerHTML = greeter(user);
// some test
var isDone = false;
var myName = '9';
var myAge = 99;
// console.log(`my age is ${myAge}`)
var numberList = [1, 2, 3]; // 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
// console.log(numberList)
var numberList2 = [3, 4, 5];
// console.log(numberList2)
var notSure = '99';
notSure = 99;
var u = undefined;
var n = null;
// 结构
var input = [1, 2];
var fir = input[0], sec = input[1];
// console.log('fir sec', fir, sec)
function f(_a) {
    var firset = _a[0], second = _a[1];
    console.log('first', firset);
    console.log('second', second);
}
// f(input)
{
    var _a = [1, 2, 3, 4], fir_1 = _a[0], others = _a.slice(1);
    // console.log('fir', fir, ' others', others)
}
{
    var o = {
        a: 'foo',
        b: 99
    };
    // let {a: name1, b: name2} = o
    // console.log('oo> ',name1, name2)
    // let {a, b}: {a: string,b: number} = o
    // console.log('==> ', a, b)
}
{
    // let fir = [1,2]
    // let sec = [6,7]
    // let res = [3, ...fir, ...sec,8]
    // let res1= {
    //   a: 1,
    //   ...fir,
    //   ...sec,
    //   d: 9
    // }
    // console.log('res',res) // 展开操作创建了 first和second的一份浅拷贝。 它们不会被展开操作所改变。
    // console.log('res1',res1)
}
{
    // let defaults = {
    //   food: 'spicy',
    //   price: '$$',
    //   ambiance: 'noisy'
    // }
    // let search = {food: 'rice', ...defaults}
    // let search1 = {...defaults, food: 'change'}
    // console.log('search: ', search)
    // console.log('search1: ', search1)
}
{
    // 首先，它仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法：
    // TypeScript编译器不允许展开泛型函数上的类型参数。 这个特性会在TypeScript的未来版本中考虑实现。
    // class C {
    //   p = 12;
    //   m () {
    //     console.log('this is m function')
    //   }
    // }
    // let c = new C();
    // let clone = { ...c }
    // clone.p
    // clone.m();
}
{
    function printLabel(labelledObj) {
        console.log('print: ', labelledObj.value);
    }
    var myObj = {
        size: 10,
        value: 'this is interface check'
    };
    printLabel(myObj);
}
