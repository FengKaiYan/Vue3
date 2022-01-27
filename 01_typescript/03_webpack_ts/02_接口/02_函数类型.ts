// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
(()=>{   
    interface SearchFunc {
        // 定义一个调用签名
        (source:string, subString:string): boolean
    } 

    const fn: SearchFunc = function (source:string, subString:string): boolean {
        return source.search(subString) > -1
    }

    console.log(fn('我是Bonnie','我'))

})()