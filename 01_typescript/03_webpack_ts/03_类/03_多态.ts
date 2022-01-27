// 多态： 父类的引用指向子类的对象 不同类型的对象针对相同的方法，产生不同的行为
(()=>{
    class Animal {
        name: string
        constructor(name: string){
            this.name = name
        }
        run(distance:number=0){
            console.log(`${this.name}跑了${distance}米`)
        }
    }

    class Dog extends Animal{
        constructor(name: string){
            super(name)
        }
        run(distance:number=5){
            console.log(`${this.name}跑了${distance}米`)
        }
    }

    class Pig extends Animal {
        constructor(name: string){
            super(name)
        }
        run(distance:number=10){
            console.log(`${this.name}跑了${distance}米`)
        }
    }

    const ani: Animal = new Animal('动物')
    const dog: Animal = new Dog('狗')
    const pig: Animal = new Pig('猪')

    ani.run()
    dog.run()
    pig.run()

    const dog1: Animal = new Dog('gou')
    const pig1: Animal = new Pig('zhu')
    dog1.run()
    pig1.run()

    function showRun(ani: Animal){
        ani.run()
    }

    console.log('==========')
    
    showRun(dog1)
    showRun(pig1)
})()