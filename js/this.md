
1. 
```js
var a = 10;
foo = {a:20,bar:function(){var a = 30;return this.a}};
console.log(this.a);
console.log(foo.a);
console.log(foo.bar());
console.log((foo.bar = foo.bar)());
console.log((foo.bar,foo.bar)());
// 10 20 20 10 10
```

2. 
```js
var my = {
  a: 'bar',
  fun: function(){
    var self = this
    console.log(this.a);
    console.log(self.a);
    (function(){
      console.log(this.a);
      console.log(self.a)
    }())
  }
};
my.fun();
// bar bar undefined bar (当this传入自执行函数时候，打印出 bar bar  bar  bar)
```
