let arr=[4,9,16,25,0]
console.log("array Value:"+arr)
//Finding Square root using map
console.log("Array value after finding Square root using map")
let output=arr.map(Math.sqrt)
console.log(output)
console.log("Array after filtering odd number using filter")
//Filtering the values which are odd using filter
output=arr.filter(isOdd=(num)=>{
    return num%2==1;
}
)
console.log(output)

console.log("Array value after dinding Square rooting using filter")


//Finding Square root using filter
output=arr.filter(Math.sqrt)
console.log(output)

//Filtering the values which are odd using map
output=arr.map(isOdd=(num)=>{
    return num%2==1;
}
)
console.log("Array after filtering odd number using map")
console.log(output)