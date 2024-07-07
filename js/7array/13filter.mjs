// filter even [1,2,6,3] => [2,6]
let input=[1,2,6,3]
const output = input.filter((value,i)=>{
    if (value%2==0){
        return true
    }else {
        return false
    }
})
console.log(output)

let input1=[1,-12,6,3,-1,0,-3]
const output1 = input1.filter((value,i)=>{
    if (value>=0){
        return true
    }else {
        return false
    }
})
console.log(output1)


let input2=["I am",-12,1,"kritika",0, "Pandey", "1"]
let output2 = input2.filter((value,i)=>{
    if (typeof value == "string"){
        return true
    }else {
        return false
    }
})
console.log(output2)

//we can use different methods or function within a single line