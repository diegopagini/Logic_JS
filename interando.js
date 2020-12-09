const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
const arrayC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const myObjectArray = [
	{
		id: 1,
		name: 'Alexander Albon',
		pts: 70,
	},
	{
		id: 2,
		name: 'Antonio Giovinazzi',
		pts: 4,
	},
	{
		id: 3,
		name: 'Carlos Sainz',
		pts: 75,
	},
	{
		id: 4,
		name: 'Charles Leclerc',
		pts: 97,
	},
	{
		id: 5,
		name: 'Daniil Kyvat',
		pts: 26,
	},
	{
		id: 6,
		name: 'Daniel Ricciardo',
		pts: 96,
	},
	{
		id: 7,
		name: 'Esteban Ocon',
		pts: 40,
	},
	{
		id: 8,
		name: 'George Russsel',
		pts: 0,
	},
	{
		id: 9,
		name: 'Kevin Magnussen',
		pts: 1,
	},
	{
		id: 10,
		name: 'Kimi Raikkonen',
		pts: 4,
	},
	{
		id: 11,
		name: 'Lance Stroll',
		pts: 59,
	},
	{
		id: 12,
		name: 'Lando Norris',
		pts: 74,
	},
	{
		id: 13,
		name: 'Lewis Hamilton',
		pts: 307,
	},
	{
		id: 14,
		name: 'Max Verstappen',
		pts: 170,
	},
	{
		id: 15,
		name: 'Nicholas Latifi',
		pts: 0,
	},
	{
		id: 16,
		name: 'Pierre Gasly',
		pts: 63,
	},
	{
		id: 17,
		name: 'Romain Grosjean',
		pts: 2,
	},
	{
		id: 18,
		name: 'Sebastian Vettel',
		pts: 33,
	},
	{
		id: 19,
		name: 'Sergio Perez',
		pts: 100,
	},
	{
		id: 20,
		name: 'Valtteri Bottas',
		pts: 197,
	},
];

//FOREACH
function forEachElement(arr) {
	arr.forEach((el) => {
		console.log(el);
	});
	//Por consola: 1 2 3

	arr.forEach((element) => {
		element = element * element;
		console.log(element);
	});
	//Por consola: 1 4 9
}
forEachElement(arrayA);

function forEachDoSomenthig(arr) {
	arr.forEach((el) => {
		el.name = `Driver: ${el.name}`;
		console.log(el);
	});
}
forEachDoSomenthig(myObjectArray);
//Por consola: "Driver: Alexander Albon", "Driver: Antonio Giovinazzi", etc...

//MAP
function mapArray(arr) {
	const RESULT = arr.map((el) => el * 2);
	console.log(RESULT);
	//Por consola: (3) [2, 4, 6]
}
mapArray(arrayA);

//FILTER
function filterArray(arr) {
	const EVEN = arr.filter((el) => el % 2 === 0);
	console.log('Los pares son:', EVEN);

	const ODD = arr.filter((el) => el % 2 !== 0);
	console.log('Los impares son:', ODD);
}
filterArray(arrayC);
//Por consola: Los pares son: (7) [2, 4, 6, 8, 10, 12, 14]
//Por consola: Los impares son: (7) [2, 4, 6, 8, 10, 12, 14]

//REDUCE
function reduceArray(arr) {
	const TOTAL = arr.reduce((acumulator, currentValue) => {
		return acumulator + currentValue;
	});
	console.log(TOTAL);
}
reduceArray(arrayC);
//Por consola: 120

//SOME
function someOfTheArray(arr) {
	const RESULT = arr.some((el) => el == 5);
	console.log(RESULT);
}
someOfTheArray(arrayC);
//Por consola: true

//EVERY
function everyIsSomenthing(arr) {
	const RESULT = arr.every((el) => el % 2 == 0);
	console.log(RESULT);
}
everyIsSomenthing(arrayB);
//Por consola: false
