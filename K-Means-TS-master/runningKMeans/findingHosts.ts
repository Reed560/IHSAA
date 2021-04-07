import {sortedArray} from './kMeansTesting2';
import {centroids} from './kMeansTesting2';

//finds schools closest to centroid in each cluster
function closest(needle, haystack) {
    return haystack.reduce((a, b) => {
        let aDiff = Math.abs(a - needle);
        let bDiff = Math.abs(b - needle);

        if (aDiff == bDiff) {
            return a > b ? a : b;
        } else {
            return bDiff < aDiff ? b : a;
        }
    });
}


export const hostArray = new Array(20);

for(let i = 0; i<hostArray.length; i++){
    hostArray[i] = closest(centroids[i], sortedArray[i]);
}

//console.log(host);