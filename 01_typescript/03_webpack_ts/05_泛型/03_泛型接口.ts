// 泛型接口：在定义接口时，为属性或方法指定泛型类型，在使用时，才确定具体的泛型类型
(()=>{

    interface IBaseCRUD<T> {
        data: Array<T>
        add:(user: T) => T
        getUserById:(id: number) => T
    }

    class User {
        id?: number
        name: string
        age: number
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
    }

    class UserCRUD implements IBaseCRUD<User>{
        data: Array<User> = []

        add(user: User):User{
            user.id = Date.now()+Math.random()
            this.data.push(user)
            return user
        }

        getUserById(id: number): User{
            return this.data.find(e=>e.id===id)
        }
    }

    const ucrud = new UserCRUD()
    ucrud.add(new User('andy',1))
    ucrud.add(new User('bonnie',12))
    ucrud.add(new User('kitty',31))

    console.log(ucrud.data)
    
    const {id} =  ucrud.add(new User('billy',2))

    const u1 = ucrud.getUserById(id)
    console.log(u1)
})()