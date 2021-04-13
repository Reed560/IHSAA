/*
This takes text file latLongCoords and puts it in array
Order is from Google Sheets, or order from Excel file of schools.
Eventually, instead of pulling from txt file, we would want to pull from IHSAA database
This is array is exported to use in kMeansTesting2 and findingHosts
*/

import fs = require('fs');

var text = fs.readFileSync('latLongCoords.txt','utf8');

var stringData = text.split(' ');

const data = stringData.map((i) => Number(i));

export const dataArray: number[][] = [];

for(let i = 0; i<data.length-1; i++){
	if(i%2 == 0)
    dataArray.push( [data[i], data[i+1]] );
}
