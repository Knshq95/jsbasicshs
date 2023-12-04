let a = 'hello'

function func1(){
    let c = "again"
    console.log(a);// a is in global scope, hence it is accessible here.
    func2()
    function func2(){
        let b = 'world'
        console.log(b);//b is in local scope
        console.log(a);// a is again in global scope
    }
    console.log(b)//will generate error as b is in local scope of func2 and cannot be accessed outside.
}

func1()