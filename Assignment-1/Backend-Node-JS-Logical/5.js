function capitalize(str,char){
    str=str.split("")
    for(let i=0;i<str.length;i++){
        if(str[i].toUpperCase()===char.toUpperCase()){
            str[i]=str[i].toUpperCase()
        }
    }
    return str.join("")
}

let str="tit for tat"
let char="T"

console.log(capitalize(str,char))