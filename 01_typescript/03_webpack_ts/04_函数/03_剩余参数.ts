// 剩余参数（rest参数）
// 在函数声明的时候，只能放在所有参数的最后
(()=>{
    function add (n1: number,n2: number,...ns:number[]): void{
        console.log(n1)
        console.log(n2)
        console.log(ns)
    }
    add(1,2,3,4,5,5)
})()