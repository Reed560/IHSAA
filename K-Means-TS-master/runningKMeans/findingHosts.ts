import {try3} from './kMeansTesting2';
import {centroids} from './kMeansTesting2';

//console.log(try3);
//console.log(centroids);

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

export const host = new Array(20);

for(let i = 0; i<host.length; i++){
    host[i] = closest(centroids[i], try3[i]);
}

console.log(host);