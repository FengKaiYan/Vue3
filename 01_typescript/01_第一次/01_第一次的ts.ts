(()=>{
    function sayHi(str: string) {
        return '您好呀' + str
    }

    let text = '小甜甜'
    console.log(sayHi(text))
})()

// 浏览器可以运行ts文件，但是ts里面必须是js代码

// 用tsc编译ts，生成js文件，就可以在浏览器运行

// 生成的文件，被修饰的入参类型将去掉
// let修饰的变量，tsc编译后变成var修饰