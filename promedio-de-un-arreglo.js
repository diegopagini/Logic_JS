const myArray = [0, 2, 5, 7, 12, 49, 101, 55, 55, 40, 2, 8, 26, 77, 63, 23];
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

function getAverage(arr) {
	let accum = 0; //Creo una variable que acumule los valores del array.
	arr.forEach((element) => {
		accum += element;
	});
	//Creo otra variable que calcula lo acumulado, dividio la cantidad de items del array.
	const average = accum / arr.length;
	console.log('Lo acumulado hasta el momento es:', accum);
	console.log('El promedio es:', average); //En este caso el promedio es: 32.8125
}
getAverage(myArray);

function getAverageWithReduce(arr) {
	//Hecho con reduce, necesita un acumulador y un elemento, se puede hacer lo mismo que en la anterior funcion, pero en una sola linea
	let average =
		arr.reduce((accumulator, element) => accumulator + element, 0) / arr.length;
	console.log('El promedio es de: ', Math.round(average)); //Tambien se puede redondear con Math.round.
}
getAverageWithReduce(myArray);
//En este caso el promedio es: 32.8125

function getAverageInArrayWithObjects(arr) {
	let accum = 0;
	arr.forEach((el) => {
		accum += el.pts;
	});
	console.log('Lo acumulado es: ', accum);
	const average = accum / arr.length;
	console.log('El promedio de puntos es: ', average);
}
getAverageInArrayWithObjects(myObjectArray);
//En este caso el total es: 70.9

function getgetAverageInArrayWithObjectsReduce(arr) {
	let average = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue.pts,
		0
	);
	console.log('El total al momento es de : ', average);
	average = average / arr.length; // O se puede hacer en la misma linea, poniendo la division al final.
	console.log('El promedio es de : ', average);
}
getgetAverageInArrayWithObjectsReduce(myObjectArray);
