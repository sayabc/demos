// 参考资料 https://www.tslang.cn/docs/handbook/interfaces.html
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = {firstName: 'Wang', lastName: '周五'};

document.body.innerHTML = greeter(user)

// some test
let isDone: boolean = false
let myName: string = '9'
let myAge: number = 99
// console.log(`my age is ${myAge}`)

let numberList: number[] = [1,2,3] // 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
// console.log(numberList)
let numberList2: Array<number> = [3,4,5]
// console.log(numberList2)

let notSure: any = '99'
notSure = 99

let u: undefined = undefined
let n: null = null

// 结构
let input = [1,2]
let [fir, sec] = input
// console.log('fir sec', fir, sec)
function f([firset,second]: Array<number>){
    console.log('first', firset)
    console.log('second', second)
}
// f(input)

{
  let [fir, ...others] = [1,2,3,4]
  // console.log('fir', fir, ' others', others)
}

{
  let o = {
    a: 'foo',
    b: 99
  }
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

{ // 对象展开
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
  interface LabelledValue {
    value: string
  }

  function printLabel (labelledObj: LabelledValue) {
    console.log('print: ', labelledObj.value)
  }
  const myObj = {
    size: 10,
    value: 'this is interface check'
  }
  printLabel(myObj)
}
