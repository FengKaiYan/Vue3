// 泛型：在定义函数、接口、类时不确定使用的数据类型，只有在使用函数、接口、类时才确定
(()=>{
    // const getArr = <T>(value:T, num:number):T[]=>{
    //     const arr: T[] =  new Array(num).fill(value)
    //     return arr
    // }
    function getArr<T>(value:T, num:number):T[]{
        const arr: T[] =  new Array(num).fill(value)
        return arr
    }

    console.log(getArr<number>(123,3))
    console.log(getArr<string>('ccc',8))
})()