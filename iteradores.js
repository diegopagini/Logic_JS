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

//CONCAT
function concatArrays(arr1, arr2) {
	const arraysConcat = arr1.concat(arr2);
	console.log('arraysConcat', arraysConcat);
	//Por consola = arraysConcat: (6) [1, 2, 3, 4, 5, 6]
}
concatArrays(arrayA, arrayB);

//JOIN
function joinArrays(arr, separator) {
	const arraysJoined = arr.join(separator);
	console.log('arraysJoined', arraysJoined);
}
joinArrays(arrayA, '-');
//Por consola: arraysJoined 1-2-3

//SLICE
function sliceArray(arr, start, end) {
	const arraySliced = arr.slice(start, end);
	//Crea un nuevo arreglo, partiendo desde "start" (incluido) hasta "end" (no incluido)
	console.log('arraySliced', arraySliced);
}
sliceArray(arrayC, 0, 5);
//Por consola: arraySliced (5) [1, 2, 3, 4, 5]

//INDEXOF
function indexOfArray(arr, obj) {
	const indexOfObj = arr.indexOf(obj);
	console.log('indexOfObj', indexOfObj);
}
indexOfArray(arrayC, 7);
//Por consola: indexOfArray 6

//LASTINDEXOF
function lastIndexOfArray(arr, obj) {
	const lastIndexObj = arr.indexOf(obj);
	console.log('lastIndexObj', lastIndexObj);
}
lastIndexOfArray(arrayC, 5);
//Por consola: lastIndexOfArray 4

//INDEXOF pero de algo en particular.
function getIndexOfAObjectsArray(arr, obj) {
	const result = arr.map((el) => el.id);
	console.log(result);
	const index = result.indexOf(obj);
	console.log('index', index);
}
getIndexOfAObjectsArray(myObjectArray, 7);
//Por consola: index 6
