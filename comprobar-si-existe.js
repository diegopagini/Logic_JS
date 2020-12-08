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

function checkIfItExists(arr, search) {
	const found = arr.find((element) => element == search); //Creo una variable, que guarda el dato que estoy buscando, si existe, sino, me da undefined
	console.log(found);
}
checkIfItExists(myArray, 55);

function checkIfItExistsWithSome(arr, search) {
	const found = arr.some((element) => element == search); //Con "some" devuelve un booleano, true si aparece, o false si no.
	console.log(found);
}
checkIfItExistsWithSome(myArray, 10);
