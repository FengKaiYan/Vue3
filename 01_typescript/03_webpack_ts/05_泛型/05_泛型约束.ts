// 如果我们对泛型参数取length属性，会报错，因为泛型不知道它有这个属性
(()=>{
    interface ILen{
        length:number
    }
    function getLen<T extends ILen>(x:T):void{
        console.log(x.length) 
    }
    getLen<string>('abcd')
    // getLen<number>(12)
})()
