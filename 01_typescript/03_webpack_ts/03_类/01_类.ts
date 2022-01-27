// 类： 模板 通过模板实例化对象
// 面向对象编程思想
(()=>{
    // ts中类的定义
    class Person {
        // 属性
        name: string
        age: number
        gender: string

        // 构造方法: 初始化对象属性
        constructor(name: string='Bonnie',age: number=18,gender: string='girl'){
            this.name = name
            this.age = age
            this.gender = gender
        }

        // 实例方法
        sayHi(str: string) {
            console.log(`my name is ${this.name},i'm ${this.age} & i'm a ${this.gender},${str}`)
        }
    } 

    const person = new Person()
    person.sayHi('马萨赛季')
})()