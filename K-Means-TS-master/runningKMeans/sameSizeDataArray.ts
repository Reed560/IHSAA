/*
    This file takes in data and outputs a text file that contains data in a form 
    that will run in sameSize.ts, the same size k-means implementation we are 
    currently working with
*/
import fs = require('fs');
var text = fs.readFileSync('2A_Baseball_Teams.txt','utf8');

var stringData = text.split('\r').join(",").split('\t').join(",").split("\n");

const data = stringData.map((i) => Number(i));

console.log(stringData)

fs.writeFileSync("sameSizeData.txt","");
for(let i = 0; i<data.length-1; i++){
    if(i<data.length-2){
        var temp = stringData[i].split(",")
        fs.writeFileSync("sameSizeData.txt", "{ school: \""+temp[0]+ "\" , x: "+temp[1]+" , y:"+ temp[2] +"}, \n", 
        {
        encoding: "utf8",
        flag: "a+",
        mode: 0o666
        });
    }
    else{
        var temp = stringData[i].split(",")
        fs.writeFileSync("sameSizeData.txt", "{ school: \""+temp[0]+ "\" , x: "+temp[1]+" , y:"+ temp[2] +"} \n", 
        {
        encoding: "utf8",
        flag: "a+",
        mode: 0o666
        });
    }
    
    
}
// fs.writeFileSync("sameSizeData.txt","]",{
//     encoding: "utf8",
//     flag: "a+",
//     mode: 0o666
//     });