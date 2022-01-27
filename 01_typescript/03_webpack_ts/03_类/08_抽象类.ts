// 抽象类：abstract 包含抽象方法（一般没有任何功能的具体实现）不能实例化抽象类 只能给子类实例化和让子类实现内部的抽象方法
// 抽象类服务于派生类
(()=>{
    abstract class Animal {
        
        abstract eat()

        // 报错 astract标记的抽象类，不能有代码的实现
        // abstract eat(){}

        sayHi(){
            console.log('hi')
        }
    }

    // 不能实例化抽象类
    // const dog = new Animal()

    class Dog extends Animal {
        eat() {
            console.log('汪汪 骨头')
        }
    }

    const dog = new Dog()
    dog.eat()  // 抽象类的实现
    dog.sayHi() //调用抽象类的实例方法

})()