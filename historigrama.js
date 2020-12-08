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

function histogram(arr) {
	//Primero: crea un nuevo array vacio:
	let index = new Array(arr.length); // De esta forma creo un nuevo array vacio, pero con el largo del array original
	console.log(index); //Me da que tengo un array vacio de 17 de largo.
	index.fill(0);
	console.log(index); // Con fill, lo "lleno" el nuevo array, en este caso con "0"

	for (let i = 0; i < index.length; i++) {
		//Hago un primer bucle, que recorra el nuevo array
		for (let j = 0; j < arr.length; j++) {
			//ago un segundo bucle, que recorra el array original
			if (i == arr[j]) {
				// Le estoy diciendo, que si en un momento, i es igual j en el array original haga lo siguiente:
				index[i] = index[i] + 1; //De esta forma, el nuevo array va a empezar a sumar por cadad uno que se repita en la posicion que lo haga

				// index[i]++; Tambien se puede hacer asi.
			}
		}
	}
	console.log('Los que se repiten son: ', index);
}
histogram(myArray);
//Esta forma es creando un nuevo array.

function histogramWithObject(arr) {
	let repeated = {}; //Creo un objeto vacio
	arr.forEach(function (number) {
		//Lo recorro, y paso una funcion como parametro, que hace que:
		repeated[number] = (repeated[number] || 0) + 1; //Se cree una key en el objecto, con cada elemento que recorre, y hace que se le sume 1 en la cantidad por cada vez que esta en el arreglo
	});
	console.log('Objecto con la cantidad de numeros que aparece: ', repeated);
}
histogramWithObject(myArray);
//Esta forma es mas visual.

function histogramOfArrayWithObjects(arr) {
	let index = new Array(arr.length);
	index.fill(0);
	for (let i = 0; i < index.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (i == arr[j].pts) {
				index[i]++;
			}
		}
	}
	console.log(index);
}
histogramOfArrayWithObjects(myObjectArray);

function histogramOfArrayWithObjectsObject(arr) {
	let repeated = {};
	arr.forEach(function (number) {
		repeated[number.pts] = (repeated[number.pts] || 0) + 1;
	});
	console.log(repeated);
}
histogramOfArrayWithObjectsObject(myObjectArray);
//Funciona a la perfeccion
