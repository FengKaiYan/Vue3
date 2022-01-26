(()=>{
    // let 变量名: 变量类型 = 值
    let flag: boolean = true
    console.log(flag)

    let num: number = 1000
    console.log(num)

    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    console.log(a1,a2,a3,a4)

    let str1: string = '锄禾日当午'
    let str2: string = '武松打老虎'
    let str3: string = '老虎打不到'
    let str4: string = '打到小松鼠'
    console.log(str1,str2,str3,str4)

    let und:undefined = undefined
    let nll:null = null
    console.log(und, nll)

    // let numb: number = null
    // console.log(numb)

    // 数组类型
    // let 变量名: 数据类型[] = [值1,值2,值3] 
    let arr1: number[] = [1,2,3,4]
    console.log(arr1)

    // 泛型 let 变量名: Array<数据类型> = [值1,值2,值3] 
    let arr2: Array<number> = [7,8,9]
    console.log(arr2)

    // 元组类型
    let arr3: [string,number,boolean] = ['Bonnie',1.051234,false]
    console.log(arr3[0].split(''))
    console.log(arr3[1].toFixed(2))

    // 枚举
    enum Color {
        red,
        green=9,
        blue
    }
    const color: Color = Color.red
    console.log(color)
    console.log(Color.red,Color.green,Color.blue)
    console.log(Color[0],Color[9],Color[10])

    enum Gender{
        女,
        男
    }
    console.log(Gender.女)

    // any类型
    let any1: any = '~_~'
    any1 = 909
    console.log(any1)

    let any2: any[] = [100,'小妹妹',false]
    console.log(any2[1].split('')) 
    // console.log(any2[0].split('')) //编译不报错 浏览器报错

    // void类型： 与any类型相反 代表没有任何类型
    function fn():void{
        console.log('小米米')
    }
    console.log(fn())

    let vv: void = undefined
    console.log(vv)

    // object
    function fnn(obj:object):object{
        console.log(obj)
        return {
            name:'卡卡西',
            age:16
        }
    }
    console.log(fnn({}))
    console.log(fnn(new String('bilibl')))
    console.log(fnn(String))

    // 联合类型： 表示取值可以是多种类型之一
    function combine(o: number|string){
        // return o.toString()
        if((<string>o).length){
            return (o as string).length
        }else {
            return o.toString().length
        }
    }
    console.log(combine(12))
    console.log(combine('212'))

    // 类型断言: 告诉编译器 我知道我自己在做什么
    // 1. <类型>变量
    // 2. 变量 as 类型

    // 类型推断：TS会在没有明确的指定类型的时候推测出一个类型
    // let n = 124  // => number
    // n = 'aaa'
    // console.log(n)

    // let n // => any
    // n = 123
    // n = 'aaa'
    // console.log(n)
})()