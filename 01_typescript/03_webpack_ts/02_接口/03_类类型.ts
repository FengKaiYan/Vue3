// 类类型： 用接口约束类
// 一个类可以实现多个接口
// 类与类是继承(extends) 接口与类是实现（implements）
(()=>{
    interface IFly {
        fly()
    }
    interface ISwim {
        swim()
    }
    interface IFlyAISwim extends IFly,ISwim{}

    class Person implements IFlyAISwim{
        fly(){
            console.log('fly')
        }
        swim(){
            console.log('swim')
        }
    }

    // class Person1 implements IFly,ISwim{
    //     fly(){
    //         console.log('fly')
    //     }
    //     swim(){
    //         console.log('swim')
    //     }
    // }
    const person = new Person()
    person.fly()
    person.swim()

})()