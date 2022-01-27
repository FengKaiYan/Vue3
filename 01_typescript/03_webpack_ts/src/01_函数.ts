// 函数： 重复代码的整合 功能的实现
(()=>{
    // 函数声明 命名函数
    function add(x: string, y: string): string {
        return x+y
    }

    // 函数表达式 匿名函数
    let add2 = function (x: number, y: number): number {
        return x+y
    }

    console.log(add('a','b'))
    console.log(add2(1,2))

    // ts函数完整写法
    let add3:(x: number, y: number)=> number = function (x: number, y: number): number {
        return x+y
    }
    console.log(add2(99,88))

})()