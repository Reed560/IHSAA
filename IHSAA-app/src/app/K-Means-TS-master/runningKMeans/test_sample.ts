import KMEANS from "../kmeans";
import { KMeans, Vectors } from "../kmeans";


const sample_input_data: Vectors = [
	[38.7102179, 39.885702,	39.6906434, 39.2247317, 41.3467725,	39.8301525,	39.3039397,	39.8897639, 38.2987932, 40.8354409, 41.6391921],
	[-85.471719, -86.148265, -86.1078183, -85.9111673, -85.1268665, -86.028578, -85.7713722, -86.1209724, -85.8110215, -84.9097075, -86.0242741]
];
var sample_output: KMeans = KMEANS(sample_input_data, 2, "kmeans");
//console.log(JSON.stringify(output));

const generateRandomArray = (w: number, h: number) =>
	Array.from({ length: h }, () =>
		Array.from({ length: w }, () => Math.floor(Math.random() * 2))
	);

/*const input_data = generateRandomArray(15, 20);
console.log(JSON.stringify(input_data));*/

var kmeans: KMeans = KMEANS(sample_input_data, 5, "kmeans++");
//console.log(JSON.stringify(kmeans));

const input_data: Vectors = [
	[38.7102179, -85.471719],
	[39.885702, -86.148265],
	[39.6906434, -86.1078183],
	[39.2247317, -85.9111673],
	[41.3467725, -85.1268665],
	[39.8301525, -86.028578],
	[39.3039397, -85.7713722],
	[39.8897639, -86.1209724],
	[38.2987932, -85.8110215],
	[40.8354409, -84.9097075],
]

var output: KMeans = KMEANS(input_data, 10, "kmeans");

console.log("k means++");
var kmeans1: KMeans = KMEANS(input_data, 2, "kmeans++");
console.log(JSON.stringify(kmeans1));

console.log("k means");
var kmeans2: KMeans = KMEANS(input_data, 2, "kmeans");
console.log(JSON.stringify(kmeans2));

console.log("iterations w kmeans++");
var kmeans3: KMeans = KMEANS(input_data, 2, "kmeans++", 15);
console.log(JSON.stringify(kmeans3));



