function findsmallest(arr){
    arr.sort((a,b)=>a-b)
    let res=[]
    res.push(arr[0])
    res.push(arr[1])
    return res
}

console.log(findsmallest([23,32,45,21,12]))