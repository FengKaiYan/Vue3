// 静态成员： 用static修饰的类的属性或者方法 
// 静态成员 不能通过实例对象访问 需要通过 类.静态属性 进行访问 
// 静态方法 需要通过 类.静态方法 进行访问
(()=>{
    class Person {
        // static name 报错   静态属性“name”与构造函数“Person”的内置属性函数“name”冲突。
        static name1: string = '贾宝玉'
        constructor() {
            // this.name1 = name1
        }
        static say(){
            console.log('i"m ',Person.name1)
        }
    }
    const p = new Person()
    console.log(p)
    // p.say()
    // console.log( p.name1)
    // console.log(Person.name1)
    Person.say()
})()