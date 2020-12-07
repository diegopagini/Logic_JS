//Como encontrar el mayor numero de un array:
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

function getMinOfArray(arr) {
	const minOfArray = Math.min(...arr); //Se usan los "..." para hacer una copia del mismo y no una referencia.
	console.log('El numero minimo del array es:', minOfArray);
}
getMinOfArray(myArray);
//Por consola: 0

//Como encontrar el mayor numero pero de un array de objetos:
function getMinOfArrayOfObjects(arr) {
	const minOfArrayOfObjects = arr.map((el) => el.pts); //Creo un nuevo array, pero solo de los elementos que estoy necesitando
	console.log(
		'Creo un array solo de la propiedad que estoy necesitando:',
		minOfArrayOfObjects
	);
	const minOfArrayOfObjectsNumber = Math.min(...minOfArrayOfObjects);
	console.log('El minimo del array es:', minOfArrayOfObjectsNumber);
}
getMinOfArrayOfObjects(myObjectArray);
//Por consola: 0

//Como encontrar el mayor numero pero de un array de objetos (version 2):
function getMinOfArrayOfObjects2(arr) {
	const minObjectArray = Math.min(
		//Como en la funcion anterior, pero se busca en el mismo momento que se hace un nuevo array, queda mas prolijo
		...arr.map((el) => {
			return el.pts;
		})
	);
	console.log('Otra forma de hacerlo, en una sola linea es:', minObjectArray);
}
getMinOfArrayOfObjects2(myObjectArray);
//Por consola: 0
