const KmeansLib = require('kmeans-same-size');
var kmeans = new KmeansLib();
const k = 16; // Groups Number
const size = 6 // Group size

import fs = require('fs');

type lonlat = {
    school: string;
    x: number;
    y: number;
    k?: number;
}

var text = fs.readFileSync('sameSizeData.txt','utf8');


var stringData = text.split('\n');

// console.log(stringData)

let data = stringData.map((i) => Number(i));

export let dataArray: number[] = [];

for(let i = 0; i<data.length-1; i++){
    dataArray.push( data[i]);
}

// console.log(dataArray)

let vectors = [
    { school: "AdamsCentral" , x: 40.7461276 , y:-84.9424082}, 
{ school: "Alexandria" , x: 40.2521566 , y:-85.6783201}, 
{ school: "Austin" , x: 38.6282793 , y:-85.7753886}, 
{ school: "Blackford" , x: 40.0510064 , y:-86.1304132}, 
{ school: "Bluffton" , x: 40.7255618 , y:-85.1638208}, 
{ school: "BooneGrove" , x: 41.395982 , y:-87.1658174}, 
{ school: "BowmanAcademy" , x: 41.6011394 , y:-87.3838638}, 
{ school: "Bremen" , x: 41.4435666 , y:-86.152644}, 
{ school: "Carroll(Flora)" , x: 40.5458593 , y:-86.4805419}, 
{ school: "Cascade" , x: 39.665807 , y:-86.559061}, 
{ school: "Centerville" , x: 39.8131337 , y:-84.9991623}, 
{ school: "CentralNoble" , x: 41.398205 , y:-85.418563}, 
{ school: "Churubusco" , x: 41.2318166 , y:-85.3242078}, 
{ school: "Clarksville" , x: 38.298365 , y:-85.7681357}, 
{ school: "ClintonPrairie" , x: 40.251284 , y:-86.5920069}, 
{ school: "Cloverdale" , x: 39.5119646 , y:-86.7911159}, 
{ school: "CovenantChristian(Indianapolis)" , x: 39.7929437 , y:-86.2931356}, 
{ school: "CrawfordCounty" , x: 38.3193875 , y:-86.3528504}, 
{ school: "DelphiCommunity" , x: 40.5764436 , y:-86.6647018}, 
{ school: "Eastbrook" , x: 40.5462021 , y:-85.5079116}, 
{ school: "Eastern(Greentown)" , x: 40.473575 , y:-85.9722795}, 
{ school: "Eastern(Pekin)" , x: 38.514589 , y:-86.002289}, 
{ school: "EasternGreene" , x: 39.0312243 , y:-86.7376298}, 
{ school: "EasternHancock" , x: 39.8224805 , y:-85.6577423}, 
{ school: "Eastside" , x: 41.4321074 , y:-84.8623311}, 
{ school: "Elwood" , x: 40.2900924 , y:-85.8353459}, 
{ school: "EvansvilleMaterDei" , x: 37.9888227 , y:-87.6158605}, 
{ school: "Fairfield" , x: 41.5177497 , y:-85.7677859}, 
{ school: "ForestPark" , x: 38.228591 , y:-86.8564879}, 
{ school: "FountainCentral" , x: 40.1063712 , y:-87.2271677}, 
{ school: "Frankton" , x: 40.2199448 , y:-85.7723113}, 
{ school: "Hagerstown" , x: 40.0104107 , y:-86.0878736}, 
{ school: "HammondBishopNoll" , x: 41.6180157 , y:-87.5235886}, 
{ school: "Hebron" , x: 39.2926055 , y:-85.7700062}, 
{ school: "Henryville" , x: 41.3128296 , y:-87.1996494}, 
{ school: "HeritageChristian" , x: 40.975684 , y:-84.962507}, 
{ school: "IndianapolisCrispusAttucks" , x: 39.8520967 , y:-86.0798184}, 
{ school: "IndianapolisHowe" , x: 39.7333845 , y:-86.1521237}, 
{ school: "IndianapolisScecinaMemorial" , x: 39.7740683 , y:-86.1913858}, 
{ school: "IndianapolisShortridge" , x: 39.7868616 , y:-86.0853726}, 
{ school: "Knightstown" , x: 39.7982497 , y:-86.1306833}, 
{ school: "LafayetteCentralCatholic" , x: 41.32 , y:-86.89}, 
{ school: "LakeStationEdison" , x: 41.4658068 , y:-87.4730886}, 
{ school: "Lanesville" , x: 41.3294601 , y:-85.0506417}, 
{ school: "Lapel" , x: 38.2394083 , y:-85.9888677}, 
{ school: "LaVille" , x: 41.6011891 , y:-86.7268627}, 
{ school: "LewisCass" , x: 41.2200549 , y:-85.0178239}, 
{ school: "LighthouseCPA" , x: 39.1138334 , y:-86.5453533}, 
{ school: "Linton?Stockton" , x: 41.5982845 , y:-87.3920034}, 
{ school: "Madison?Grant" , x: 38.7728199 , y:-85.4020839}, 
{ school: "Manchester" , x: 40.384526 , y:-85.6763689}, 
{ school: "Milan" , x: 41.6778243 , y:-86.8624962}, 
{ school: "Mitchell" , x: 40.4987152 , y:-85.6128418}, 
{ school: "MonroeCentral" , x: 38.7366461 , y:-86.4800423}, 
{ school: "Monrovia" , x: 40.19159 , y:-85.1675489}, 
{ school: "MuncieBurris" , x: 39.8171446 , y:-86.2437147}, 
{ school: "NorthDecatur" , x: 38.8474324 , y:-87.0621139}, 
{ school: "NorthJudson?SanPierre" , x: 38.322028 , y:-86.1441722}, 
{ school: "NorthKnox" , x: 41.2141338 , y:-86.7869553}, 
{ school: "NorthNewton" , x: 40.1260147 , y:-86.9067265}, 
{ school: "NorthPosey" , x: 41.0348281 , y:-87.4250106}, 
{ school: "NorthPutnam" , x: 38.1424196 , y:-87.8015383}, 
{ school: "Northeastern" , x: 38.4509433 , y:-86.7964178}, 
{ school: "Paoli" , x: 39.288654 , y:-86.781547}, 
{ school: "ParkTudor" , x: 38.5506576 , y:-86.477224}, 
{ school: "PerryCentral" , x: 41.6790759 , y:-86.108057}, 
{ school: "PrairieHeights" , x: 41.5521309 , y:-87.1683276}, 
{ school: "RensselaerCentral" , x: 40.052241 , y:-84.9455942}, 
{ school: "Rochester" , x: 39.6977697 , y:-87.3221118}, 
{ school: "Roosevelt-Gary" , x: 39.6906434 , y:-86.1078183}, 
{ school: "Seeger" , x: 40.2986123 , y:-87.3864527}, 
{ school: "Shenandoah" , x: 40.0059557 , y:-85.5245303}, 
{ school: "SouthAdams" , x: 40.6473144 , y:-84.9602961}, 
{ school: "SouthDecatur" , x: 39.3084449 , y:-85.5789}, 
{ school: "SouthKnox" , x: 38.6348312 , y:-87.4205388}, 
{ school: "SouthPutnam" , x: 39.6444898 , y:-86.8647316}, 
{ school: "SouthRipley" , x: 39.0510358 , y:-85.2483537}, 
{ school: "SouthSpencer" , x: 37.9034486 , y:-87.106274}, 
{ school: "Southmont" , x: 39.75457 , y:-86.8781882}, 
{ school: "Southwestern(Hanover)" , x: 38.7102179 , y:-85.471719}, 
{ school: "Speedway" , x: 39.80084 , y:-86.252904}, 
{ school: "SwitzerlandCounty" , x: 38.7412863 , y:-85.0799978}, 
{ school: "Taylor" , x: 40.4353277 , y:-86.0547709}, 
{ school: "TellCity" , x: 37.9544498 , y:-86.7634769}, 
{ school: "Tipton" , x: 40.2725473 , y:-86.0395754}, 
{ school: "TritonCentral" , x: 39.6117983 , y:-85.8734102}, 
{ school: "UnionCounty" , x: 39.6345265 , y:-84.9212607}, 
{ school: "University" , x: 39.9548397 , y:-86.2126732}, 
{ school: "Wabash" , x: 40.806979 , y:-85.825089}, 
{ school: "Wapahani" , x: 40.1685329 , y:-85.2634822}, 
{ school: "WesternBoone" , x: 40.057381 , y:-86.619751}, 
{ school: "Westview" , x: 41.617463 , y:-85.538989}, 
{ school: "Wheeler" , x: 41.4792721 , y:-87.1792137}, 
{ school: "Whiting" , x: 41.6810164 , y:-87.4937826}, 
{ school: "Whitko" , x: 41.082914 , y:-85.6352871}, 
{ school: "Winamac" , x: 41.045947 , y:-86.596304}, 
{ school: "WinchesterCommunity" , x: 40.1813877 , y:-84.9747648}, 
{ school: "Woodlan" , x: 41.1235004 , y:-84.9191272}
    
  ]

kmeans.init({k: k, runs: 50, equalSize: true, normalize: false });

const sum = kmeans.calc(vectors);
// The vector is mutated
console.log(vectors);