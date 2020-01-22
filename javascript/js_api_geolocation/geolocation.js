addEventListener('DOMContentLoaded', function() {

/*let obj = {

a: '1',

b: '2',

c: '4'

};

localStorage.setItem('some_key', JSON.stringify(obj));

localStorage.setItem('another_key', 'любой текст');

let ourDB = localStorage.getItem('some_key');

//console.log(typeof ourDB);

ourDB = JSON.parse(ourDB);

console.log(ourDB);*/

/*window.addEventListener('popstate', function(event) {

alert("location: " + document.location + "\nstate: " + JSON.stringify(event.state));

});

let counter_global = 0;

document.getElementById('push').addEventListener('click', function() {

counter_global++;

history.pushState({counter: counter_global}, "", "?page="+counter_global);

});*/

/*

document.getElementById('replace').addEventListener('click', function() {

counter_global++;

history.replaceState({counter: counter_global}, "", "?page="+counter_global);

});*/

/*document.getElementById('back').addEventListener('click', function() {

history.back();

});

document.getElementById('forward').addEventListener('click', function() {

history.forward();

});*/

let wc = [

{

"address": "Беларусь, Минск, Жилуновича, 4",

"latitude": 53.8765128,

"longitude": 27.6303336

},

{

"address": "Беларусь, Минск, Комсомольская, 25",

"latitude": 53.8988815,

"longitude": 27.5565205

},

{

"address": "Беларусь, Минск, К. Маркса, 7",

"latitude": 53.8995601,

"longitude": 27.5622108

},

{

"address": "Беларусь, Минск, Партизанский пр-т, 19",

"latitude": 53.8753467,

"longitude": 27.6350556

},

{

"address": "Беларусь, Минск, Коржа, 11",

"latitude": 53.894464,

"longitude": 27.5213045

},

{

"address": "Беларусь, Минск, Бобруйская, 2А",

"latitude": 53.8912208,

"longitude": 27.551027

},

{

"address": "Беларусь, Минск, Могилёвская, 6А",

"latitude": 53.8826098,

"longitude": 27.542097

},

{

"address": "Беларусь, Минск, Свердлова, 22",

"latitude": 53.8936147,

"longitude": 27.5532288

},

{

"address": "Беларусь, Минск, Свердлова, 24",

"latitude": 53.8930894,

"longitude": 27.5542432

},

{

"address": "Беларусь, Минск, Авангардная, 56",

"latitude": 53.9070591,

"longitude": 27.6282683

},

{

"address": "Беларусь, Минск, Долгобродская, 12",

"latitude": 53.899064,

"longitude": 27.6037448

},

{

"address": "Беларусь, Минск, Долгобродская, 26",

"latitude": 53.8888218,

"longitude": 27.6155532

},

{

"address": "Беларусь, Минск, Козлова, 2",

"latitude": 53.9096724,

"longitude": 27.578998

},

{

"address": "Беларусь, Минск, Калиновского, 6А",

"latitude": 53.9464824,

"longitude": 27.6285976

},

{

"address": "Беларусь, Минск, Калиновского, 105А",

"latitude": 53.9431674,

"longitude": 27.6422588

},

{

"address": "Беларусь, Минск, Славинского, 45Б",

"latitude": 53.938787,

"longitude": 27.6420012

},

{

"address": "Беларусь, Минск, Гамарника, 16А",

"latitude": 53.9571737,

"longitude": 27.6142805

},

{

"address": "Беларусь, Минск, Широкая, 3А",

"latitude": 53.9503763,

"longitude": 27.6027926

},

{

"address": "Беларусь, Минск, Гикало, 2А",

"latitude": 53.9130346,

"longitude": 27.5922317

},

{

"address": "Беларусь, Минск, Каховская, 31А",

"latitude": 53.9294116,

"longitude": 27.5561759

},

{

"address": "Беларусь, Минск, Киселёва, 3",

"latitude": 53.9096362,

"longitude": 27.5733204

},

{

"address": "Беларусь, Минск, Купалы, 6А",

"latitude": 53.906098,

"longitude": 27.5651089

},

{

"address": "Беларусь, Минск, Ленина, 5",

"latitude": 53.9014747,

"longitude": 27.55849

},

{

"address": "Беларусь, Минск, Берута,",

"latitude": 53.9099632,

"longitude": 27.4991333

},

{

"address": "Беларусь, Минск, Сердича, 7А",

"latitude": 53.9112735,

"longitude": 27.4869227

},

{

"address": "Беларусь, Минск, Ольшевского, 63А",

"latitude": 53.9200643,

"longitude": 27.4985915

}

];

const earthRadius = 6371000; // in meters

function DTR(degree) {

return Math.PI*degree/180;

}

function getDistance(a, b) {

return 2*earthRadius*Math.asin(Math.sqrt(Math.sin((DTR(b.latitude) - DTR(a.latitude))/2)**2 +

Math.cos(DTR(a.latitude))*Math.cos(DTR(b.latitude))*Math.sin((DTR(b.longitude) - DTR(a.longitude))/2)**2));

}

function calculateDistance(userPosition) {

wc.forEach(function(toiletPosition, idx, arr) {

arr[idx].distance = getDistance(userPosition.coords, toiletPosition);

});

console.log(wc.sort(function(a,b) {

return a.distance - b.distance;

})[0]);

console.dir(wc);

}

/*if (navigator.geolocation) {

navigator.geolocation.getCurrentPosition(calculateDistance);

} else {

console.log("Geolocation is not supported by this browser");

}*/

let realCoordinates = {

coords: {

latitude: 53.903239,

longitude: 27.550929

}

}

calculateDistance(realCoordinates);

})
