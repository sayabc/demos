// setTimeout 假装 setInterval
function testT2I(){
  console.log('testT2I') // 首次进来执行 然后过3s开始
  setTimeout(function(){
    testT2I()
  },3000)
}
// testT2I()
// 模拟 setInterval() ：将 setTimeout() 包含在一个执行函数A中，而setTimeout() 自己的code执行函数又是A，然后在函数A外将函数A执行一次，即达到了循环执行的目的。


// setInterval 假装 setTimeout
function testI2T(){
  var t = setInterval(function(){
    console.log('testI2t')
    clearInterval(t)
  },1000)
}
// testI2T()
// 模拟 setTimeout() ：
// 用 setInterval() 模拟 setTimeout() 很简单，在 setInterval() 执行一次后，立刻关闭窗口(当然这是耍无赖)或者执行 clearInterval() 方法(这个靠谱点)。
// clearInterval() 需要在 setInterval()执行code方法内或其他地方执行，不能紧接着 setInterval() 后面执行，那样setInterval() 还没等到执行，就已经被干掉了。



// setTimeout()、setInterval() 允许传入一个JS代码字符串并执行，然而在JS代码中执行另一段JS代码时，代码首先会以正常的方式求值，然后在执行过程中对包含于字符串中的代码发起另一个求值运算，从而造成双重求值。
// 它比直接包含的代码执行速度慢很多，原因在于， 每次调用setTimeout()、setInterval()都会创建一个新的解释器/编译器实例。这必然使得代码执行速度变慢，效率降低，从而造成性能的浪费。所以建议传入函数而不是字符串来作为第一个参数。



// [参考链接](https://blog.csdn.net/tianp576507773/article/details/80366245)