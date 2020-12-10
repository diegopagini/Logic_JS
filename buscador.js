const personajes = [
	{
		id: 1,
		nombre: 'Mr Increible',
		biografia:
			'Robert "Bob" Parr es el personaje principal de la película Los Increíbles. Trabaja en una empresa, aunque anteriormente llevaba una doble vida secreta y era conocido como Mr. Increíble, un superhéroe con gran fuerza. ... Bob está casado con Helen, la cual también era una superheroína llamada Elastigirl.',
		foto: 'mr-increible.png',
		banner: '',
		cantidadPeliculas: 3,
		tieneVideojuego: false,
		soloPeliculaAnimada: true,
	},
	{
		id: 2,
		nombre: 'Dory',
		biografia:
			'Dory, la pez azul que ayuda a Merlin a encontrar a su hijo Nemo indagará en su olvidado pasado en "Buscando a Dory", película que toma lugar seis meses después de las aventuras que vivió a lado de los recién encontrados peces payasos. Ella es una pez cirujano azul y negro muy divertida. Sufre de amnesia anterógrada.',
		foto: 'dory.png',
		banner: '',
		cantidadPeliculas: 4,
		tieneVideojuego: false,
		soloPeliculaAnimada: true,
	},
	{
		id: 3,
		nombre: 'Aladin',
		biografia:
			'Aladdín es un joven pobre que, junto con su mono Abú, se dedica a robar y engañar a la gente de Agrabah para poder sobrevivir. ... Luego, estando bajo tierra, Abú le enseña la lámpara, que había recuperado. Al frotarla, descubre que en ella reside un genio que le concederá tres deseos.',
		foto: 'aladdin.png',
		banner: '',
		cantidadPeliculas: 2,
		tieneVideojuego: false,
		soloPeliculaAnimada: false,
	},
	{
		id: 4,
		nombre: 'Woody',
		biografia: `Woody es un muñeco de vaquero. Su caja de voz que se activa con una cuerda de tracción con la que es capaz de decir muchas frases simples como "¡Eres mi alguacil preferido!", "¡Hay una serpiente en mi bota!" Y "Alguien ha envenenado el abrevadero!". Como se menciona en Toy Story 2, su construcción incluye una "cara pintada a mano, chaleco teñido con pigmento natural" y un "sombrero de polivinilo cosido a mano". Woody lleva una funda de pistola vacía en su cinturón. Es el juguete favorito de Andy desde el jardín de infantes, con un lugar especial en la cama, y ​​es el líder y el cerebro de los juguetes en la habitación de Andy. En Toy Story 2, se revela que se basa en el personaje principal de un popular programa de televisión de 1950, Woody's Roundup. Cuando Al está negociando con la madre de Andy en un intento de llevarse a Woody, la madre de Andy rechaza la oferta de Al, afirmando que Woody es "un viejo juguete familiar"`,
		foto: 'boody.png',
		banner: '',
		cantidadPeliculas: 6,
		tieneVideojuego: true,
		soloPeliculaAnimada: true,
	},
	{
		id: 5,
		nombre: 'Mickey',
		biografia:
			'Mickey Mouse es un personaje ficticio de la serie del mismo nombre, emblema de la compañía Disney. Creado el 18 de noviembre de 1928, este ratón tiene un origen disputado. La leyenda oficial explica que fue creado por Walt Disney durante un viaje en tren y que su nombre inicial fue Mortimer, pero que cambió a Mickey a petición de su esposa, Lillian. Según Bob Thomas, la leyenda del nombre es ficticia, y cita el caso de un personaje llamado Mortimer Mouse, que nació en 1936, tío de Minnie Mouse.1​ La versión más verosímil es que el personaje fue creado por el dibujante Ub Iwerks, a petición de Disney, para compensar la pérdida de los derechos de Oswald, el conejo afortunado, a manos de Universal. Lo cierto es que Mickey no es más que una variación del personaje Oswald.2​ A Walt Disney hay que atribuirle tanto la voz del personaje, como la personalidad y el carácter del ratón',
		foto: 'mickey.png',
		banner: '',
		cantidadPeliculas: 12,
		tieneVideojuego: true,
		soloPeliculaAnimada: false,
	},
	{
		id: 6,
		nombre: 'Pinocho',
		biografia: `Pinocho (en italiano Pinocchio) es un personaje de la literatura italiana y universal. Se trata de una marioneta de madera, protagonista del libro "Las aventuras de Pinocho", escrito por Carlo Collodi, seudónimo de Carlo Lorenzini (Florencia 1826-1890), y publicado en un periódico italiano entre 1882 y 1883, con los títulos "Storia di un Burattino" ("Historia de un títere") y "Le avventure di Pinocchio" ("Las aventuras de Pinocho'"), libro ilustrado por Enrico Mazzanti.`,
		foto: 'pinocho.png',
		banner: '',
		cantidadPeliculas: 1,
		tieneVideojuego: false,
		soloPeliculaAnimada: true,
	},
	{
		id: 7,
		nombre: 'Sirenita',
		biografia: `La sirena Ariel está fascinada por el mundo de los humanos, pero su padre le prohíbe relacionarse con ellos. En un viaje secreto, se enamora de un humano y recurre a una perversa hechicera para que, mediante un conjuro, su amor triunfe.`,
		foto: 'sirenita.png',
		banner: '',
		cantidadPeliculas: 3,
		tieneVideojuego: false,
		soloPeliculaAnimada: false,
	},
	{
		id: 8,
		nombre: 'pluto',
		biografia: `Pluto generalmente caracteriza al perro de Mickey Mouse, aunque también ha sido la mascota del Pato Donald y de Goofy o Tribilín.
  De forma inusual para los personajes creados por Disney para la serie Mickey Mouse, Pluto no está antropomorfizado, tan solo posee un amplio rango de expresiones faciales.
  En las animaciones que lo tienen como protagonista, sus amigos son Fifi (perro pequinés), Dina y el San Bernardo Ronnie. Entre sus enemigos se encuentran Butch (un perro bulldog) y las ardillas Chip y Dale (Chip y Chop en España) entre otros personajes.
  En el año 1942 se hizo una animación en la que se presentaba al hijo de Pluto, aunque no fue un personaje que se desarrollara mucho más.
  En algunas ocasiones se menciona que Pluto fue creado cuando se descubrió el planeta Plutón (de allí su nombre "Pluto", el nombre en inglés de Plutón). Sin embargo, hasta la fecha, esto no ha sido confirmado.`,
		foto: 'pluto.png',
		banner: '',
		cantidadPeliculas: 1,
		tieneVideojuego: true,
		soloPeliculaAnimada: true,
	},
	{
		id: 9,
		nombre: 'Moana',
		biografia: `Moana, una adolescente de las islas del sur del Pacífico, atraviesa el océano y explora el mundo para demostrar que es tan valiente como el resto de su familia. En su periplo se encontrará con Maui, quien en el pasado fue un semidios poderoso.`,
		foto: 'moana.png',
		banner: '',
		cantidadPeliculas: 1,
		tieneVideojuego: false,
		soloPeliculaAnimada: true,
	},
	{
		id: 10,
		nombre: 'Stich',
		biografia: `El experimento 626, más conocido como Stitch, es un personaje ficticio, el protagonista de la serie animada Lilo & Stitch: The Series y las películas Lilo & Stitch, Stitch! The Movie, Lilo & Stitch 2: Stitch Has a Glitch y Leroy & Stitch.`,
		foto: 'stich.png',
		banner: '',
		cantidadPeliculas: 4,
		tieneVideojuego: false,
		soloPeliculaAnimada: true,
	},
];
let personajesBuscados = '';
const buscador = document.getElementById('search');

function showNames() {
	let mostrar = '';
	personajes.forEach((el) => {
		mostrar += `
    <div>${el.nombre}</div>
    `;
	});
	document.getElementById('buscador').innerHTML = mostrar;
}
showNames();

function showNamesSearch() {
	let mostrar = '';
	personajesBuscados.forEach((el) => {
		mostrar += `
    <div>${el.nombre}</div>
    `;
	});
	document.getElementById('buscador').innerHTML = mostrar;
}

function buscar() {
	personajesBuscados = personajes.filter((el) => {
		return el.nombre.toLocaleLowerCase().includes(buscador.value.trim());
	});
	console.log(buscador.value);
	showNamesSearch();
}

document.getElementById('buscar').addEventListener('click', function () {
	buscar();
});
