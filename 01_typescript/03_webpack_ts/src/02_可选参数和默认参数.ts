// 默认参数 若不传，默认某个值
// 可选参数 ?修饰的参数 可传可不传

(()=>{
    function showName(firstName:string='贾',lastName?:string){
        return firstName+'_'+lastName
    }
    console.log(showName('雪','抱柴'))
})()
