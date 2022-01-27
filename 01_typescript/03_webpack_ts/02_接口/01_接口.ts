// 接口： 对象的状态（属性）和行为（方法）的抽象
// 是一种规范 一种约束 一种功能

// 需求: 创建人的对象, 需要对人的属性进行一定的约束
// id是number类型, 必须有, 只读的
// name是string类型, 必须有
// age是number类型, 必须有
// sex是string类型, 可以没有

(()=>{
    interface IPerson{
        readonly id:number
        name:string
        age:number
        sex?:string
    }

    const person: IPerson = {
        id:1,
        name:'bonnie',
        age:17,
        sex:'女'
    }

    console.log(person)
})()