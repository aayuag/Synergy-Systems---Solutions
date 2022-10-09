let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
let lines = data.split('\n');

let num=lines.length-1

let wordcount=-1

for(let i=0;i<lines.length;i++){

        let adding=lines[i].split(" ")
        
        wordcount=wordcount+adding.length
    
}

// console.log(wordcount)
let lines1="No of lines is "+ num +" " +"No. of words is " +wordcount
fs.writeFile("sampke.txt", lines1,
  {
    encoding: "utf8",
    flag: "w",
    mode: 0o666
  },
  (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("sampke.txt", "utf8"));
    }

  }
)