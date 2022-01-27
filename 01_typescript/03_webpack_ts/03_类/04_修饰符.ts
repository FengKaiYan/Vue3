// 修饰符：修饰类内部属性成员的可访问性
// 类的属性方法构造器 默认用public修饰
// public -- 公共类 修饰的成员 任何位置都能访问
// private -- 私有类 修饰的成员 在类外部不能访问, 子类也无法访问
// protected -- 受保护类 修饰的成员 在类外部不能访问, 子类可访问
(()=>{
    class Person {
        public name: string
        // private name: string
        // protected name: string
        public constructor(name: string){
            this.name = name
        }
        public eat(){
            console.log(this.name,'eat')
        }
    }
    class Stu extends Person{
        constructor(name: string){
            super(name)
        }
        public eat(){
            console.log(this.name,'eat')
        }
    }
    const person = new Person('bonnie')
    console.log(person.name)
    person.eat()
    const stu = new Stu('andy')
    console.log(stu.name)
})()