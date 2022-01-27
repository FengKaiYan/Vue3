// 存取器：在类中，对类中的属性进行有效的控制  通过getter setter进行实现
(()=>{
    class Person {
        firstName: string
        lastName: string

        constructor(firstName:string, lastName:string){
            this.firstName = firstName
            this.lastName = lastName
        }
        
        get fullName(){
            console.log('get....')
            return this.firstName+'_'+this.lastName
        }

        set fullName(val){
            console.log('set....',val)
            const n = val.split('_')
            this.firstName = n[0]
            this.lastName = n[1]
        }

    }

    const p = new Person('上官','婉儿')
    console.log(p.fullName)
    p.fullName = '薛_宝钗'
    console.log(p.fullName)
})()