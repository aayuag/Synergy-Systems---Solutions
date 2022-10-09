function sortstringalphabetically(str){
    str=str.split("")
    str.sort()
    return str.join("")
}

let input="bca"
console.log(sortstringalphabetically(input))