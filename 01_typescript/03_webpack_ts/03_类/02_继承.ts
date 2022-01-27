// 类与类之间的继承关系
// A继承了B
// A => 子类 -> 派生类 
// B => 基类 -> 超类（父类）

// 继承用extends
// 子类用super继承父类的构造器，属性，方法
// 子类可以重写父类 
(()=> {
    class Person {
        name: string
        age: number

        constructor(name:string='人', age:number=0){
            this.name = name
            this.age = age
        }

        sayHi(str: string){
            console.log(`哇哇哇，${str},我是${this.name}`)
        }
    }

    class Student extends Person{
        constructor(name:string, age:number) {
            super(name,age)
        }

        // 重写
        sayHi() {
            console.log('i"m student')
            super.sayHi('嘟嘟嘟')
        }
    }

    const person = new Person()
    console.log(person)
    person.sayHi('ccc')
    const stu = new Student('Bonnie',16)
    console.log(stu)
    stu.sayHi()

})()