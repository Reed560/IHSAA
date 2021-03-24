import fs = require('fs');

var text = fs.readFileSync('latLongCoords.txt','utf8');

var stringData = text.split(' ');
//console.log(stringData);

//var myFloat = parseFloat(data);
const data = stringData.map((i) => Number(i));
//console.log(data);

export const dataArray: number[][] = [];

for(let i = 0; i<data.length-1; i++){
	if(i%2 == 0)
    dataArray.push( [data[i], data[i+1]] );
}

//console.log(dataArray);

