// readonly修饰符：  readonly修饰的属性成员，在外部无法修改，只可读; 
// 在类内部的普通函数也无法修改；只能在构造函数内部进行赋值
(()=>{
    // class Person {
    //     readonly name: string = 'moren'
    //     constructor(name:string){
    //         this.name = name
    //     }
    //     changeName(){
    //         this.name = 'xxx'
    //     }
    // }

    // const p1 = new Person('bonnie')
    // p1.name = 'ccc'
    // console.log(p1.name)

    // readonly修饰构造器的参数，该类就有了一个只读的属性成员，外部可访问但无法修改
    // 使用public private protected修饰构造器的参数,该类就有了一个或公共或私有或受保护的属性成员

    class Person {
        constructor(public name:string){
            this.name = name
        }
    }

    const p1 = new Person('bonnie')
    p1.name = 'ccc'
    console.log(p1.name)
})()