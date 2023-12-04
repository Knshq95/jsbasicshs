function func1(){
    console.log('this is func1');

    function func2(){
        console.log('this is func2');
        return 0
    }
    return func2()
}
console.log(func1());