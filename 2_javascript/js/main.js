/*====================
    Callbacks
======================

Los callbacks son funciones que se pasan como argumentos a otras funciones
y se ejecutan despues de que ocurra algun evento o se complete alguna operacion
*/

// Ejemplo 1 de callback
function saludar(nombre, callback) {
    // Primero consologueo
    console.log(`Holis ${nombre}`);

    // Despues ejecuto la funcion que le pase por parametro
    callback();
}

function despedirse() {
    console.log("Adios muchachos compañeros de mi vidaaa, barra queridaaa de aquellos tiempos");
}


saludar("Lautaro", despedirse);
// Holis Lautaro
// Adios muchachos compañeros de mi vidaaa, barra queridaaa de aquellos tiempos

function presentarse(nombre, callback) {
    console.log(`Como va, me llamo ${nombre}`);

    callback();
}

presentarse("Mauro", function() {
    console.log("Miiiiiiiiii bueeenos aaaaiiress queriiiiiiiiiiido");
});

// Como va, me llamo Mauro
// Miiiiiiiiii bueeenos aaaaiiress queriiiiiiiiiiido


// Ejemplo 2 de callback con temporizador

// Ejemplo de setTimeout con funcion declarada
setTimeout(function() {
    console.log("Esto se ejecuta despues de medio segundo")
}, 500);


// Ejemplo de setTimeout con funcion flecha en una sola linea
setTimeout(() => console.log("Esto se ejecuta despues de un segundo"), 1000);



/*=======================================
    Caracteristicas principales de JS
=========================================

En JavaScript, las funciones son clave, son consideradas "ciudadanos de primera clase" (first class citizens), lo que significa que puede ser:

    - Asignadas a variables
    - Pasadas como argumentos
    - Retornadas desde otras funciones
*/

// Asignamos funcion a variable
const miCallback = function() {
    console.log("Callback ejecutado");
}

// Pasamos esta funcion como argumenot
function ejecutarCallback(callback) {
    console.log("Primera instruccion de la funcion, previa al callback");
    callback();
}

ejecutarCallback(miCallback);


// Sincronia y Asincronia

// Ejemplo de callback sincrono: Este proceso va a demorar muchos segundos el hilo ppal de ejecucion de JS
/*
function procesoPesado(callback) {
    console.log("Iniciando proceso pesado...");

    // Simulamos un procesamiento que tarde en ejecutarse y trabe el hilo de ejecucion de JavaScript
    for (let i = 0; i < 25000; i++) {
        console.log("<- Numero de veces que se imprime este mensaje");
    }

    callback();
}


procesoPesado(() => console.log("Proceso completado"));

console.log("Esto se ejecuta despues del callback");
*/


// Ejemplo de callback asincrono
function procesoAsincrono(callback) {
    console.log("Iniciando el proceso asincrono...");

    // Creamos una funcion asincronica que NO traba el hilo principal sino que se ejecuta en un hilo paralelo
    setTimeout(function() {
        callback();
    }, 5000);
}


procesoAsincrono(function() {
    console.log("Proceso asincrono completado");
});


console.log("Esto se ejecuta inmediatamente, no espera 5 segundos");


/*========================================
    Casos de uso comunes de callbacks
==========================================

1. Temporizadores (timers)

    // Para que el codigo se ejecute una sola vez tenemos setTimeout()
    setTimeout(function() {
        console.log("Esto se ejecuta despues de 3 segundos");
    }, 3000);

    // Para que el codigo se ejecute varias veces tenemos setInterval()



2. Eventos del DOM

    document.getElementById("boton").addEventListener("click", event => {
        
        // Nos interesa para que JS envie los datos y haga mas operaciones y no se envien automaticamente por HTML
        event.preventDefault(); // Evitamos el envio por defecto    

        console.log(`Boton clickeado: ${event.target}`);
    });



3. Operaciones con arrays

    let numeros = [1, 2, 3, 4, 5];

    // forEach
    numeros.forEach(function(numero, indice) {
        console.log(`Indice: ${indice}, numero: ${numero}`);
    });

    // map
    let duplicados = numeros.map(num => num * 2);


4. Peticiones HTTP (JavaScript VIII)


5. Lectura de archivos (Node.js)




================================
    Ventajas y desventajas
================================

Ventajas
    - Simplicidad: Facil de entender para operaciones simples
    - Universidad: Compatible con todos los navegadores
    - Flexibilidad: Permiten crear codigo reutilizable

Desventajas
    - Callback Hell: Anidamiento excesivo que dificulta la lectura
    - Manejo de error: Complicado con callbacks anidados
    - Flujo de control: Dificilisimo de leer y entender con operaciones complejas


// Ejemplo de Callback Hell: https://miro.medium.com/v2/0*iiecmuTLPBqbxd5V.jpeg

function procesoCompleto(callback) {
    paso1(function(error, resultado1) {
        if (error) return callback(error);
        paso2(resultado1, function(error, resultado2) {
            if (error) return callback(error);
                paso3(resultado2, function(error, resultado3) {
                    if (error) return callback(error);
                    paso4(resultado3, function(error, resultadoFinal) {
                        if (error) return callback(error);
                        callback(null, resultadoFinal);
                });
            });
        });
    }
}


// Alternativas Modernas para evitar el callback hell

    - Promesas: .then().catch()
    - Async/Await: Sintaxis mas limpia y legible
    - Lo veremos en JavaScript VIII!


======================
    Conclusion
======================

Los callbacks son fundamentales en JavaScript y se utilizan extensivamente para

    - Manejar eventos del usuario
    - Operaciones asincronas
    - Temporizadores
    - Procesamiento de datos
    - Comunicacion co servidores
    
A pesar de que las promesas y asnyc/await nos ofrecen alternativas mas modernas, entender los callbacks es fundamental en JavaScript
*/



/*===========================
    HOF y Callbacks
=============================

1. Callbacks
    - Un callback es simplemente una funcion que pasamos como argumento a otra funcion y que sera llamada en algun momento dentro de esa funcion.

    - Es el uso concreto de pasar una funcion como parametro


2. High Order Functions (HOF) / Funciones de Alto Nivel

    - Es una funcion que cumple al menos una de estas dos condiciones

        1. Recibe una o mas funciones como argumentos

        2. Devuelve una funcion como resultado


- Callback es la funcion pasada como argumento
- High Order Function es la funcion que recibe o devuelve funciones
- Estan relacionadas pero NO son equivalentes: Un callback es usando dentro de una HOF, pero no todas las HOF usan callbacks, porque pueden devolver funciones en lugar de recibirlas


=====================================
    Funciones de alto nivel
    o
    Funciones de orden superior
=====================================

forEach: Recorre todos los elementos de un array ejecuta una funcion sobre cada uno

map: Crea un nuevo array aplicando una funcion a cada elemento del array original

filter: Crea un nuevo array con los elementos que cumplen una condicion

reduce: Acumula los valores del array en un solo valor, segun una funcion reductora

sort: Ordena los elementos del array segun una funcion de comparacion

find: Devuelve el rpimer elemento del array que cumple una condicion



Ventajas
    - Reduccion de codigo repetitivo
    - Mayor legibilidad y expresividad
    - Podemos encadenar transformaciones como .map().filter().reduce()
*/

// Ejemplo 1 de HOF: map()
let numeros = [1, 2, 3, 4, 5];

let cuadrados = numeros.map(n => n * n); // map es una HOF porque recibe un callback como argumento


// Ejemplo 2 de HOF: devolvemos una funcion
function multiplicador(factor) {
    return function(x) {
        return x * factor;
    }
}

const duplicar = multiplicador(2); // multiplicador es una HOF porque devuelve otra funcion

console.log(duplicar(5)); // 10




/*=======================
    Destructuring
=========================

El destructuring o "desestructuracion" es una sintaxis que permite extraer valores de arrays o propiedades de objetos y asignarlos a variables de forma concisa

Es una forma de descomponer estructura de datos como arrays y objetos en variables individuales, sin necesidad de acceder manualmente a cada elemento o propiedad


Por que usar destructuring?

    1. Mejora la legibilidad del codigo
    2. Facilita el acceso rapido a datos de estructuras complejas
    3. Reduce la verbosidad (menos lineas para obtener lo mismo)
*/

// let numeros = [1, 2, 3, 4, 5];

// Sin destructuring
let primero = numeros[0];
let segundo = numeros[1];
console.log(primero, segundo); // 1 2

// Con destructuring
let [uno, dos] = numeros; // El primer valor del array lo guardamos en uno, el segundo en dos y viceversa
console.log(uno, dos); // 1 2


// Sin destructuring
let alumno = { nombre: "Tadeo", edad: 20 };
let nombreAlumno = alumno.nombre;
let edadAlumno = alumno.edad;

// Con destructuring
let { nombre, edad } = alumno;
console.log(nombre, edad); // Tadeo 20

// Mas adelante en el TP, recibiremos rows y fields de nuestra consulta a la BBDD MySQL -> let [rows] = connection.query

// Caracteristicas y usos avanzados del destructuring

// 1. Asignar a nuevas variables
let { nombre: n, edad: e } = alumno;
console.log(n, e); // Tadeo 20


// 2. Destructuring con valores por defecto
let { apodo, ciudad = "Desconocida" } = { apodo: "Migue" };


// 3. Destructuring en parametros de funcion
function saludar({nombre, edad}) {
    console.log(`Hola ${nombre} tenes ${edad} años!`);
}
saludar(alumno); // Hola Tadeo tenes 20 años!


// 4. Destructuring de arrays con valores omitidos
const [prim, ,terc] = [10, 20, 30];
console.log(prim, terc); // 10 30


// 5. Rest opreator con destructuring
let [a, ...resto] = [1, 2, 3, 4];
console.log(a); // 1
console.log(resto); // [2, 3, 4]

let { apellido, ...otros } = { apellido: "Rossi", edad: 21, pais: "El tricampeon mundial papa, vos cuantas copas tenes" }

console.log(apellido); // Rossi
console.log(otros); // {edad: 21, pais: 'El tricampeon mundial papa, vos cuantas copas tenes'}


/*========================
    Spread Operator
==========================

El Spread Operator o operador de propagacion en JavaScript, denotado por "..." es una sintaxis introducida en ES6 que permite descomponer elementos iterables como arrays, strings y objetos en elementos individuales.

Su comportamiento varia segun el contexto en el que se use, pero su principal funcion es copiar, combinar o expandir estructuras de datos de forma eficiente

El Spread Opreator trabaja a nivel de valores individuales, extrayendo cada elemento de un iterable y colocandolos en el contexto donde se usa

Como lo interpreta JavaScript? Cuando encuentra "...iterable"

    1. Convierte el iterable en una secuencia de valores individuales
    2. Propaga (spread) esos valores en el nuevo contexto (array, objeto, llamada a funcion)
    3. NO modifica el opriginal (es inmutable por defecto)


Donde lo podemos usar?

    - Arrays                [...arr1, ...arr2]  -> Concatena arrays
    - Objetos               {...obj1, ...obj2}  -> Combina objetos
    - Llamadas a funciones  func(...args)       -> Pasa argumentos
    - Strings               [..."Hola"]         -> Convierte en array de caracteres



El Spread Operator nos simplifica

    1. Manipulacion de arrays para copiar y concatenar
    2. Combinacion de objetos
    3. Paso de argumentos a funciones
*/

// 1. Copia superficial / Shallow Copy
let original = [1, 2, 3];
let copia = [...original];
console.log(copia); // [1, 2, 3]

/*  - No es una referencia: Cambios en copia no afecta a original
    - Solo copia un nivel: Si hay objetos anidados, estos si se referencian


Que significa que solo copia un nivel?

Significa que el spread operator copia el array de afuera pero no copia lo que hay adentro si son objetos o arrays
Con numeros simples no hay problema */
copia[0] = 10;
console.log(original); // [1, 2, 3]
console.log(copia); // [10, 2, 3]

let originalObj = [
    { nombre: "Miguel" }
];

let copiaObj = [...originalObj];

// console.log(originalObj); // { "nombre": "Miguel" }
// console.log(copiaObj); // { "nombre": "Miguel" }

copiaObj[0].nombre = "Xabi";

console.log(originalObj[0].nombre); // Xabi
console.log(copiaObj[0].nombre); // Xabi

// Solo un nivel significa que copia el array externo pero NO copia los objetos ni los arrays internos


// 2. Concatenacion de arrays -> Mas eficiente y mejor rendimiento que con .concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
let arrCombinado = [...arr1, ...arr2];
console.log(arrCombinado); // [1, 2, 3, 4]


// 3. Uso con otros iterables -> Convierte strings en arrays sin usar split('')
let string = "holis";
let caracteres = [...string];
console.log(caracteres); // ['h', 'o', 'l', 'i', 's']


// 4. Copia superficial de objetos 
let obj1 = {a: 1, b: 2};
let obj2 = {...obj1};
console.log(obj2); // {a: 1, b: 2}


// 5. Combinacion de objetos
let defaults = { theme: "dark", fontSize: 14 };
let userSettings = { fontSize: 18 };
let finalConfig = {...defaults, ...userSettings}; // Las propiedades posteriores sobreescriben a las anteriores
console.log(finalConfig); // {theme: 'dark', fontSize: 18}


// 6. Spread Operator en funciones pasando argumentos desde un array
let suma = (a, b, c) => a + b + c;
let listaNumeros = [1, 2, 3];

console.log(suma(...listaNumeros)); // 6

// 7. Spread opreator en funciones recogiendo argumentos restantes
function logArgs(first, ...rest) {
    console.log(first);
    console.log(rest);
}

logArgs("a", "b", "c");
// a
// ['b', 'c']




/*===========================
    Funciones anidadas
=============================

En JavaScript una funcion anidada es simplemente una funcion definida dentro de otra funcion.
Es una funcion interna que vive en el ambito lexico (scope) de una funcion externa.
Una funcion anidada es una funcion que

    - Se declara dentro de otra funcion
    - Tiene acceso a todas las variables y parametros de su funcion externa
    - Puede ser utilizada para organizar mejor el codigo, modularizar logica o crear closures


Consideraciones

    - Las funciones anidadas NO estan disponibles fuera del scope donde se definen
    - Demasiadas funciones anidadas puede dificultar la legibilidad si no estan bien organizadas
*/

// Ejemplo basico de funcion anidada
function saludar(nombre) {

    function construirMensaje() { // Anidada dentro de saludar
        // Tiene acceso a nombre, aunque esta variable no se definio aca adentro
        return `Holis, ${nombre}`;  // Esto es posible gracias al scope lexico de JavaScript
    }
    
    return construirMensaje();
}

console.log(saludar("Franco Esposito")); // Holis, Franco Esposito

/* Las funciones anidadas heredan el entorno lexico (lexical scope) de la funcion que las contiene, lo que significa que puede acceder a las variables de la funcion externa pero no al reves


==========================
    Usos comunes
==========================

1. Organizacion del codigo: En lhugar de escribir una gran funcion, se puede definir sub-funciones internas para modularizar la logica */

function procesarTexto(texto) {

    function limpiar(t) {
        return t.trim().toLowerCase();
    }

    function contarPalabras(t) {
        return t.split(/\s+/).length;
    }

    let limpio = limpiar(texto);
    return contarPalabras(limpio);
}

console.log(procesarTexto("        Quien tiene un porque soporta cualquier COMO        ")); // 7 palabras


// 2. Funciones helper privadas: Las funciones internas NO son accesibles desde fuera, lo cual simula privacidad
function crearUsuario(nombre) {

    function validarNombre(n) {
        return typeof n === "string" && n.length > 2;
    }

    // Ampliaremos el manejo de errores en JavaScript VIII
    if(!validarNombre(nombre)) {
        throw new Error("Nombre no valido");
    }


    return { nombre };
}


