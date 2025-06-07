// 没有class 的js 如何在苦苦追求 OOP
// 首字母大写 约定 1.类的概念
// 2. 构造函数
function Person(name,age){
    // this 指向实例化的对象
    this.name = name;
    this.age = age;
}
// new 一下 实例化对象 
// new 运行 构造函数
console.log(new Person('hxt',18));
console.log(new Person('路明非',18))
// 函数对象  原型对象
// 类的方法
Person.prototype = {
    sayHello:function(){
        console.log(`hello my name is ${this.name}`);
    }
}
let lmf = new Person('路明非',18)
lmf.sayHello()
// 原型对象
console.log(lmf.__proto__)