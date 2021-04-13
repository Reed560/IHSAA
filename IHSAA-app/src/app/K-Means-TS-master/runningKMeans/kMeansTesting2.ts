//To use kMeans++ algorithm, must import these 2 lines
import KMEANS from "../kmeans";
import { KMeans, Vectors } from "../kmeans";

//array of all schools
import {dataArray} from './dataCoordsArr';

//k = # of centroids. Should be input pulled from website
// OR k = (average size of sectional)/(school array length)
var k = 20;
var kmeans: KMeans = KMEANS(dataArray, k, "kmeans++");

//index is 1-k, group number for each element in school array
export const indexes = kmeans.indexes;

//coordinates for centroids
export const centroids = kmeans.centroids;

//creates dynamic array
export const sortedArray = new Array();
for (let i = 0; i < k; i++)
sortedArray[i] = new Array();

//sorts array
for(let i = 0; i<indexes.length; i++){
    let group = indexes[i];
    sortedArray[group].push(dataArray[i]);
}
