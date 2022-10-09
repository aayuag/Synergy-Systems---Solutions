function swaplastandfirst(num){
    let arr=num.toString().split("")
    let temp=arr[0]
    arr[0]=arr[arr.length-1]
    arr[arr.length-1]=temp
    let number=parseInt(arr.join(""))
    return number
}

let input=23

console.log(swaplastandfirst(input))