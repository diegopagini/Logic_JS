const myArray = [0, 2, 5, 7, 7, 12, 49, 101, 55, 55, 40, 2, 8, 26, 77, 63, 23];
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

function howMuchAppears(arr) {
	let index = new Array(arr.length); //Creo un nuevo array
	index.fill(0); //Lo lleno con "0"
	for (let i = 0; i < index.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (i == arr[j]) {
				//Recoro los dos arrays, el nuevo y el original y si en algun momento se repite algo del array original:
				index[i]++; //Lo suma al nuevo array en la posicion que se repitio.
			}
		}
	}
	console.log(Math.max(...index)); //Calculo el que aprecio la cantidad que se repitio mas veces.
}
howMuchAppears(myArray);
//Esto solo me dice cuantas veces se repitio, el elemento que se repitio mas.

function appearsMoreTimes(arr) {
	let repeated = {};
	arr.forEach(function (number) {
		repeated[number] = (repeated[number] || 0) + 1;
	});
	console.log(Object.keys(repeated));
}
appearsMoreTimes(myArray);
//No funciona del todo, quiero saber que "key" aparece mas veces
