// we can use map when we require same length of array 
// we can use filter when we dont needd same length of array,,filter filtersout the num from the array and change the length of array.catch((err) => {})
    let input = [1,2,3,4,5]
    // output =[3,4,5]
    let output = input.filter((value,i)=>
    {
        if (value >=3){
            return true
        }else {
            return false
        }
    });
    console.log(output)