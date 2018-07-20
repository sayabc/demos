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
console.log(`my age is ${myAge}`)

let numberList: number[] = [1,2,3] // 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
console.log(numberList)
let numberList2: Array<number> = [3,4,5]
console.log(numberList2)

let notSure: any = '99'
notSure = 99

let u: undefined = undefined
let n: null = null