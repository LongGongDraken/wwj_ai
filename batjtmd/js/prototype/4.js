function Person(name,age){
    // this 指向实例化的对象
    this.name = name;
    this.age = age;
}


Person.prototype.sayHello = {
    function(){
        console.log(`hello my name is ${this.name}`);
    }
}
var hxt = new Person('hxt',18); 
console.log(hxt.__proto__);
var a ={
    neme : 'kongzi',
    country : 'china'
}
hxt.__proto__ = a
console.log(hxt.__proto__);
console.log(hxt.country);
console.log(Person.prototype);
console.log(Person.prototype.constructor == Person);
console.log(hxt.eee, hxt.name);