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
// console.log(centroids);

//d2 will always be k (centroids)
//d1 will be roughly 500/d1 for safety
export function makeArray(d1, d2) {
    var arr = new Array(d1), i, l;
    for(i = 0, l = d2; i < l; i++) {
        arr[i] = new Array(d1);
    }
    return arr;
}

//500 can be replaced with variable that's schools +30 or something
var x = 500/k;

//export const groupedArray = makeArray(x, k);
//const groupArr = Array.from(Array(k).keys())

const try2 = new Array(k).fill([]);
//console.log(try2);
//try2[5].push(5);

//for(let i = 0; i<indexes.length; i++){
    //let group = indexes[i];
    //let z = i;
    //try2[group].push(dataArray[z]);
//}
//console.log(try2);

export const try3 = new Array();
for (let i = 0; i < k; i++)
    try3[i] = new Array();

//console.log(try3);

for(let i = 0; i<indexes.length; i++){
    let group = indexes[i];
    //let z = i;
    try3[group].push(dataArray[i]);
}

// console.log(try3);