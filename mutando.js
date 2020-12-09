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

//POP
function popSomenthing(arr) {
	const RESULT = arr.pop();
	console.log(RESULT);
	console.log(arr);
}
popSomenthing(arrayA);
//Por consola: 3 - (2) [1, 2]

//PUSH
function pushSomenthing(arr, obj) {
	const RESULT = arr.push(obj);
	console.log(RESULT);
	console.log(arr);
}
pushSomenthing(arrayA, 4);
//Por consola: 3 - (3) [1, 2, 4]

//SHIFT
function shiftSomenthing(arr) {
	const RESULT = arr.shift();
	console.log(RESULT);
	console.log(arr);
}
shiftSomenthing(arrayB);
//Por consola: 4 - (2) [5, 6]

//UNSHIFT
function unshiftSomenthing(arr, obj) {
	const RESULT = arr.unshift(obj);
	console.log(RESULT);
	console.log(arr);
}
unshiftSomenthing(arrayB, 7);
//Por consola: 3 - (2) [7, 5, 6]

//REVERSE
function reverse(arr) {
	const RESULT = arr.reverse();
	console.log(RESULT);
}
reverse(arrayC);
//Por consola: (15) [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
