// 函数重载 名字相同 参数返回值不同
(()=>{
    // 函数重载声明
    function add(x:number,y:number): number
    function add(x:string,y:string): string
    function add(x:number|string,y:number|string){
        if(typeof x === 'number' && typeof y === 'number')
        return x+y
        else if (typeof x === 'string' && typeof y === 'string')
        return x+y
    }
    console.log(add(1,4))
    console.log(add('1','4'))
    // console.log(add(1,'4'))
    // console.log(add('1',4))
})()