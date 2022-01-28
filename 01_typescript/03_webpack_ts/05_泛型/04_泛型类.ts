// 泛型类： 定义一个类，传参、属性与返回值是泛型
(()=>{
    class Generic<T>{
        defaultValue: T
        add:(x:T, y:T) => T
    }

    const g1:Generic<string> = new Generic<string>()
    g1.defaultValue = 'Bonnie'
    g1.add = (x:string, y:string):string => {
        return x+'_'+y
    }
    console.log(g1.add('史','湘云'))
    console.log(g1.add(g1.defaultValue,'湘云'))

    const g2:Generic<number> = new Generic<number>()
    g2.defaultValue = 99
    g2.add = (x:number, y:number):number => {
        return x+y
    }
    console.log(g2.add(1,2))
    console.log(g2.add(g2.defaultValue,3))
})()