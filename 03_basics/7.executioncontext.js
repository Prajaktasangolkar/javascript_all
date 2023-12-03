/*
Javascript Execution Context
// when u execeute the code there will be global execution context will be generated
inside this whatever global EC made this will be refer by using "this" 
brower and nodejs execution context is different
brower global EC value is window 

js is single threaded 

1.global Execution context
2.function EC
3.Eval EC //property for global object



*/
let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2 
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)

/*
phases after code executing
1.global execution save in 'this'
2.memory creation phase -->take all the varibale and save this in the memory with undefined value 

val1=undefined
val2=undefined
addNum=defination
result1=undefined
result2=undefined

3.execution phase
val1=10
val2=5
addNum= new varibale env + execution thread (every time during execeution this sand box will be created)
_________________________|______________________________________________________________________________________________________________________________________________
|                                    |                   |             |                  |                     |                 |                  |                 |
Memory phase                Exeecution context          Delete     result1=15        then go for result2----->new varibale env -->memory phase --->executionphase--->delete
val1=undefinde              num1=10
val2=undefined              num2=5
total=undefined             total=15
*/