import KMEANS from "../kmeans";
import { KMeans, Vectors } from "../kmeans";

import {dataArray} from './dataCoordsArr';
//console.log(dataArray);


var k = 20;
var kmeans1: KMeans = KMEANS(dataArray, k, "kmeans++");

//console.log(JSON.stringify(kmeans1));

export const indexes = kmeans1.indexes;
//console.log(indexes);
export const centroids = kmeans1.centroids;
//console.log(centroids);

//console.log(groupedArray);
//d2 will always be k
//d1 will be roughly 500/d1 for safety
function makeArray(d1, d2) {
    var arr = new Array(d1), i, l;
    for(i = 0, l = d2; i < l; i++) {
        arr[i] = new Array(d1);
    }
    return arr;
}

//500 can be replaced with variable that's schools +30 or something
var x = 500/k;
export const groupedArray = makeArray(x, k);
for(let i = 0; i< indexes.length; i++){
    for(let j = 0; j<groupedArray.length; j++){
        groupedArray[indexes[i]][j] = dataArray[j];
    }
}
//console.log(groupedArray);