function removeduplicates(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(res.includes(arr[i])){
            continue
        }else{
            res.push(arr[i])
        }
    }
    return res
}

function seperateEvenOdd(arr){
    arr=removeduplicates(arr)
    // console.log(arr)
    var left = 0, right =arr.length-1;
    while (left < right){
        while (arr[left]%2 == 0 && left < right){
            left++;
        }   
        while (arr[right]%2 == 1 && left < right){
            right--;
        }
        if (left < right){
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr
}

let input=[2,4,3,5,7,1,2,5,10]

console.log(seperateEvenOdd(input))