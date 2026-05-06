/*========================================
    Almacenamiento de datos en JS
==========================================

En JavaScript, almacenar datos implica elegir la estructura adecuada de acuerdo con el tipo de info que se desea guardar y como se desea manipular.

JavaScript proporciona varios tipos de estructuras para almacenar datos:

    - Variables simples: Para valores unicos como numeros y strings

    - Objetos: Para representar datos complejos con propiedades

    - Arrays: Para almacenar una lista ordenada de elementos idealmente del mismo tipo

    - Arrays de objetos: Para manejar listas de elementos complejos que contienen multiples propiedades


==================================
    Almacenamiento en objetos
==================================

Un objeto en JS es una coleccion de propiedades, donde cada propiedad tiene un nombre clave o "key" y un valor.
Los objetos son ideales para representar una unica entidad o elemento que tiene varias propiedades o atributos

En el siguiente caso, persona es un objeto que almacena varias propiedades de una persona.
Este tipo de almacenamiento es util cuando queremos acceder a atributos especificos de una unica entidad. 
Muy util para representar conceptos unicos en la app, como UN usuario, UN producto en particular o UNA configuracion del sistema.

Cuando usar objetos?

    - Cuando deseamos representar una entidad UNICA con multiples atributos
    - Cuando sabemos que no habra multiples instancias o copias de estos datos en la aplicacion
    - Cuando necesitamos acceder a propiedades especificas mediante sus nombres
*/

let persona = {
    nombre: "Axel",
    edad: 25,
    ocupacion: "Arquitecto"
}

/*========================
    Arrays de objetos
==========================

Fundamental para almacenamiento de multiples elementos similares.
Cuando necesitamos almacenar varias instancias del mismo tipo de entidad (lista de personas, productos o pedidos) es comun usar un array de objetos.

Un array de objetos es una estructura que permite almacenar multiples objetos, donde cada objeto tiene la misma estructura o contiene atributos similares.

Cuando usar arrays de objetos?

    - Cuando necesitamos almacenar multiples instancias de la misma entidad o estructura de datos
    - Cuando planeamos realizar operaciones sobre una lista de elementos, como iteraciones, filtrados o agrupaciones
    - Si necesitamos aplicar metodos de los arrays como map, filter, find, reduce, ble


Tipicos casos de uso:
    - Listado de usuarios registrado en una plataforma
    - Inventario de productos en una tienda
    - Historial de transacciones o registros
*/

// Ahora personas es un array de objetos que almacena multiples elementos (cada uno representando una persona con sus propiedades)
let personas = [
    { nombre: "Axel", edad: 25, ocupacion: "Arquitecto" },
    { nombre: "Nicolas", edad: 22, ocupacion: "Albañil" },
    { nombre: "Lautaro", edad: 20, ocupacion: "Pintor" },
];


/*==============================
    Cuando elegir cada uno?
================================

La decision de cual estructura utilizar depende de las necesidades del proyecto y el tipo de manipulacion de datos que planeamos realizar

    - Objeto simple: 
        Si solo tenemos una entidad (config de usuario) o un unico elemento que contiene datos con varias propiedades. Acceder a propiedaes individuales es rapido y sencillo

    - Array simple:
        Para una lista ordenada de elementos individuales (lista de nombres o ids), donde cada elemento no require atributos adicionales. Aca un array simple de valores primitivos es suficiente
        Podremos manipular esta lista con metodos de array (sort, reverse, push, sarasa)

    - Array de objetos:
        Cuando tenemos una lista de entidades complejas, cada una con multiples propiedades
        Esta configuracion permite realizar operaciones en lote y mantener una coleccion de elementos relacionados de forma organizada
*/



/*======================================
    Almacenamiento persistente en JS
========================================

El almacenamiento persistente en JS nos permite crear aplicaciones wbe que recuerden informacion del usuario entre sesiones o durante la navegacion.

Tenemos a disposicion distintos mecanismos como cookies, sessionStorage o localStorage para lmacenar datos del lado del cliente, pero cada uno tiene un proposito distinto.


=====================
    localStorage
=====================

localStorage es una API web que permite almacenar datos de manera persistente en el navegador.

Los datos almacenados en localStorage no tienen una fecha de expieracion, por lo que estan disponibles incluso despues de que el usuario cierre el navegador o apague la compu

Uso principal
    - Guardar datos que deben persistir incluso al cerrar el navegador
    - Almacenar configuraciones de usuario, temas, carrito de compras, etc

Caracteristicas tecnicas
    - Tamaño maximo 5-10mb
    - Persistente (no tiene expiracion)
    - Accesible solo desde JS (no se envia al servidor)
    - Sincrono


Metodos de localStorage

    1. Guardar datos:       localStorage.setItem(key, value)
    2. Leer datos:          localStorage.getItem(key)
    3. Eliminar un dato:    localStorage.removeItem(key)
    4. Borrar todo:         localStorage.clear()


=====================
    sessionStorage
=====================

sessionStorage es muy similar a localStorage pero con una diferencia clave: Los datos almacenados en session solo se mantienene disponibles durante la sesion del navegador

Cuando cerramos la pestaña o ventana del navegador, los datos se eliminan automaticamente

Uso principal
    - Guardar datos temporales mientras la pestaña del navegador este abierta
    - Informacion de formularios o pasos de navegacion en una misma sesion

Caracteristicas tecnicas
    - Tamaño maximo 5-10mb
    - Se borra al cerrar la pestaña
    - Accesible solo desde JS (no se envia al servidor)
    - Sincrono


Metodos de localStorage

    1. Guardar datos:       sessionStorage.setItem(key, value)
    2. Leer datos:          sessionStorage.getItem(key)
    3. Eliminar un dato:    sessionStorage.removeItem(key)
    4. Borrar todo:         sessionStorage.clear()



====================================
    Como parsear los datos?
====================================

Para convertir objetos, arrays o arrays de objetos a texto plano JSON
    JSON.stringify(datos)

Para convertir texto plano JSON a objetos JS y poder usarlos e iterarlos
    JSON.parse(datosJSON)

*/

// localStorage.clear(); // Aca borramos todo

// Guardamos datos de configuracion del usuario
localStorage.setItem("tema", "oscuro");
localStorage.setItem("idioma", "es");


// Obtener datos del localStorage
let tema = localStorage.getItem("tema");
console.log(tema);

localStorage.setItem("nombre", "Lautaro");
localStorage.removeItem("nombre");

// Tenemos un carrito de compra en un array de objetos
let miCarrito = [
    { id: 1, nombre: "teclado", cantidad: 3, precio: 30000 },
    { id: 2, nombre: "mouse", cantidad: 2, precio: 15000 },
    { id: 3, nombre: "monitor", cantidad: 1, precio: 100000 },
    { id: 4, nombre: "laptop", cantidad: 5, precio: 300000 },
];


// Ojo! Para guardar en localStorage, solo puedo guardar texto plano (string)
console.log(miCarrito); // Asi NO puedo guardar los datos en localStorage!
/* [
    {
        "id": 1,
        "nombre": "teclado",
        "cantidad": 3
    },
    {
        "id": 2,
        "nombre": "mouse",
        "cantidad": 2
    },
    {
        "id": 3,
        "nombre": "monitor",
        "cantidad": 1
    }
]*/

// Tengo que transformar los datos en texto plano JSON
let miCarritoJSON = JSON.stringify(miCarrito);
console.log(miCarritoJSON); // Ahora SI puedo guardar los datos en localStorage porque son texto plano!
// [{"id":1,"nombre":"teclado","cantidad":3},{"id":2,"nombre":"mouse","cantidad":2},{"id":3,"nombre":"monitor","cantidad":1}]


// Convertidos mis datos (array objetos) en texto plano, ahora SI puedo guardarlos en el local
localStorage.setItem("carrito", miCarritoJSON); // Guardo la info de mi carrito con la clave "carrito"

console.log(localStorage.getItem("carrito"));


// Para poder trabajar con estos datos en texto plano JSON, necesito parsearlos de vuelta para que sean nuevamente objetos JS
let carritoParseado = JSON.parse(miCarritoJSON);
console.log(carritoParseado);


// PRACTIQUEN a guardar cosas en el local, COMPROBAR si existen en el local, y si existen parsearlos para mostrar esta info por pantalla



/*==============================================
    Iteracion en arrays y arrays de objetos
================================================

Metodos de iteracion en arrays

    - for tradicional
    - for...of
    - Metodos de iteracion avanzados: forEach, map, filter, reduce, etc
*/

// Metodos clasicos (ES5 y anteriores)

/*////////////////
// for clasico

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

Ventajas: Maximo control, podemos break y continue
Desventajas: Mas verboso (mas dificil de leer)
*/

// Ejemplo 1: Sumar numeros
const numeros = [1, 2, 3, 4, 5];
let suma = 0; // Declaramos el valor inicial de la suma

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log(suma); // 15

// Ejemplo 2: Buscar elemento (buscar el que empiece con "ban")
const frutas = ["manzana", "banana", "naranja"];
let frutaEncontrada;

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].startsWith("ban")) {
        frutaEncontrada = frutas[i];
        break;
    }
}

console.log(frutaEncontrada); // banana


/* Ejemplo 3: Filtrar objetos, buscaremos productos caros (> 50000)
let miCarrito = [
    { id: 1, nombre: "teclado", cantidad: 3, precio: 30000 },
    { id: 2, nombre: "mouse", cantidad: 2, precio: 15000 },
    { id: 3, nombre: "monitor", cantidad: 1, precio: 100000 },
    { id: 4, nombre: "laptop", cantidad: 5, precio: 300000 },
];*/

let productosCaros = [];

for (let i = 0; i < miCarrito.length; i++) {
    if (miCarrito[i].precio > 50000) {
        productosCaros.push(miCarrito[i]);
    }
}

console.log(productosCaros);


/*////////////////
// forEach()

    array.forEach((elemento, indice, arrayOriginal) => {
        console.log(elemento, indice)
    });

Ventajas: Sintaxis limpia, no necesita contador -> array[i]
Desventajas: No podemos romper el bucle con break
*/

// Ejemplo 1: Imprimir elementos
const colores = ["rojo", "verde", "azul"];

colores.forEach(color => console.log(color)); // rojo verde azul

colores.forEach((color, indice, array) => {
    console.log(`
    Elemento: ${color}
    Indice: ${indice}
    Array: ${array}`)
});
/*
    Elemento: azul
    Indice: 2
    Array: rojo,verde,azul
*/


// Ejemplo 2: Modificar array externo y guardar los dobles
// const numeros = [1, 2, 3, 4, 5];
let numerosDobles = [];
numeros.forEach(numero => numerosDobles.push(numero * 2));
console.log(numerosDobles);


// Ejemplo 3: Actualizar propiedades -> Añadirle la propiedad aprobado a aquellos con > 6
let alumnos = [
    { nombre: "Axel", edad: 25, ocupacion: "Arquitecto", nota: 8 },
    { nombre: "Nicolas", edad: 22, ocupacion: "Albañil", nota: 9 },
    { nombre: "Lautaro", edad: 20, ocupacion: "Pintor", nota: 6 },
    { nombre: "Valentin", edad: 24, ocupacion: "Fisico cuantico", nota: 4 },
    { nombre: "Luciano", edad: 40, ocupacion: "Gamer profesional", nota: 7 },
];

alumnos.forEach(alumno => {
    alumno.aprobado = alumno.nota >= 6;
});

console.log(alumnos);

// Expresion booleana
console.log(5 > 8); // false



// Metodos funcionales ES5+

/*////////////////
// map()

    const nuevosValores = array.map(elemento => elemento * 2);

Proposito: Transforma cada elemento
Retorna: Nuevo array con los resultados
*/

// Ejemplo 1: Crear array de cuadrados
// const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados); // [1, 4, 9, 16, 25]


// Ejemplo 2: Convertir a strings valores numericos -> "Tengo x años"
let edades = [25, 22, 20, 24, 40];

// Opcion 1: funcion flecha una sola linea
let edadesStrings = edades.map(edad => `Tengo ${edad} años`);

// Opcion 2: funcion flecha mas de una linea
let edadesStr2 = edades.map(edad => {
    return `Tengo ${edad} años`;
});

// Opcion 3: funcion declarada
let edadesStr3 = edades.map(function(edad) {
    return `Tengo ${edad} años`;
});

console.log(edadesStrings); // ['Tengo 25 años', 'Tengo 22 años', 'Tengo 20 años', 'Tengo 24 años', 'Tengo 40 años']
console.log(edadesStr2); // ['Tengo 25 años', 'Tengo 22 años', 'Tengo 20 años', 'Tengo 24 años', 'Tengo 40 años']


/* Ejemplo 3: Extraemos los nombres de los alumnos
let alumnos = [
    { nombre: "Axel", edad: 25, ocupacion: "Arquitecto", nota: 8 },
    { nombre: "Nicolas", edad: 22, ocupacion: "Albañil", nota: 9 },
    { nombre: "Lautaro", edad: 20, ocupacion: "Pintor", nota: 6 },
    { nombre: "Valentin", edad: 24, ocupacion: "Fisico cuantico", nota: 4 },
    { nombre: "Luciano", edad: 40, ocupacion: "Gamer profesional", nota: 7 },
];
*/

let nombresAlumnos = alumnos.map(alumno => alumno.nombre);
console.log(nombresAlumnos); // ["Axel", "Nicolas", "Lautaro", "Valentin","Luciano"]


/*////////////////
// filter()

    const filtrados = array.filter(elemento => elemento > 10)

Proposito: Selecciona los elementos que cumplan una condicion
Retorna: Nuevo array con los elementos filtrados
*/
// Ejemplo 1: Filtrar numeros pares
let nuevosNumeros = [1, 2, 3, 4, 5, 6];

let numerosPares = nuevosNumeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); // [2, 4, 6]


// Ejemplo 2: Filtrar strings largos (mayores a 4 caracteres)
let palabras = ["holi", "chauchi", "bienvenido", "ok", "ndeah", "XD", "LOL", ":P"];

let palabrasLargas = palabras.filter((palabra) => palabra.length > 4);
console.log(palabrasLargas); // ['chauchi', 'bienvenido', 'ndeah']

/* Ejemplo 3: Filtramos personas que superen el cuarto de siglo (1/4 de 100) 25
let alumnos = [
    { nombre: "Axel", edad: 25, ocupacion: "Arquitecto", nota: 8 },
    { nombre: "Nicolas", edad: 22, ocupacion: "Albañil", nota: 9 },
    { nombre: "Lautaro", edad: 20, ocupacion: "Pintor", nota: 6 },
    { nombre: "Valentin", edad: 24, ocupacion: "Fisico cuantico", nota: 4 },
    { nombre: "Luciano", edad: 40, ocupacion: "Gamer profesional", nota: 7 },
]; */

let alumnosMasDeUnCuartoDeSiglo = alumnos.filter((alumno) => alumno.edad >= 25);
console.log(alumnosMasDeUnCuartoDeSiglo);


// Continuar desde reduce()