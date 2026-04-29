/*=====================================
    Introduccion a arrays y objetos
=======================================

En JavaScript, los arrays y objetos son estructuras de datos fundamentales.
    - Los arrays se utilizan para almacenar una lista ORDENADA de elementos
    - Los objetos son idedales para almacenar datos con propiedades clave-valor


===========================
    Arrays en JavaScript
===========================

Un array es una lista ORDENADA de elementos, donde cada uno tiene su posicion o indice.
Los arrays en JavaScript son muy flexibles, pueden contener cualquier tipo de dato (numeros, strings, booleanos, otros arrays, objetos, funciones, etc) y los elementos no tienen que ser del mismo tipo */

let colores = ["rojo", "verde", "azul"];
console.log(colores[0]); 
console.log(colores[2]); 

/* ===========================
    Objetos en JavaScript
==============================

Un objeto en JavaScript es una coleccion de pares clave-valor.
Las claves son strings que identifican a cada valor, lo que permite un acceso rapido y estructurado a los datos.

Los objetos son utiles cuando deseamos representar una entidad con multiples propiedades.
Podemos acceder a sus propiedades mediante dos notaciones
    - Notacion de punto
    - Notacion de corchete
*/

// Objeto literal
let alumno = {
    nombre: "Mauro",
    edad: 25,
    ciudad: "CABA"
}

// Accededemos a la propiedad nombre con la notacion de punto
console.log(alumno.nombre);

// Accedemos a la propiedad ciudad con la notacion de corchete
console.log(alumno["ciudad"]);


// Los objetos tambien pueden tener metodos, que son funciones almacenadas en una propiedad
const persona = {
    nombre: "Lautaro",
    saludar: function() {
        console.log(`Hola! Me llamo ${this.nombre}`);
    }
}

persona.saludar();


// Agregamos una propiedad
alumno.pais = "Argentina";
console.log(alumno);

// Eliminamos una propiedad
delete alumno.edad;
console.log(alumno);


/*=========================
    Metodos de Strings
==========================*/

// length: Devuelve la longitud del string
console.log("Hola".length); // 4

// charAt(index): Devuelve el caracter en la posicion especificada
console.log("Hola".charAt(1)); // "o"

// concat(str1, str2, ...): Concatena strings
console.log("Hola".concat(" ", "Mundo!")); // Hola Mundo!

// includes(substring): Devuelve true si el substring se encuentra dentro del string
console.log("JavaScript".includes("Script")); // true (es case-sensitive)

// startsWith(substring): Comprueba si el string comienza con el substring

// endsWith(substring): Comnprueba si el string termina con el substring

// indexOf(substring): Devuelve el indice de la primera aparicion del substring
console.log("banana".indexOf("a")); // 1

// lastIndexOf(substring): Devuelve el indice de la ultima aparicion del substring
console.log("banana".lastIndexOf("a")); // 5

// replace(searchValue, newValue): Reemplaza una parte del string
console.log("Hola mundo".replace("mundo", "JavaScript! Ahre")); // Hola JavaScript! Ahre

// replaceAll(searchValue, newValue): Reemplaza TODAS las apariciones
console.log("1,2,3,4,5".replaceAll(",", " ")); // 1 2 3 4 5

// toLowerCase(): Convierte a minusculas
console.log("HOLA".toLowerCase()); // hola

// toUpperCase(): Convierte a mayusculas
console.log("aguante lanus".toUpperCase()); // AGUANTE LANUS

// trim(): Elimina espacios en blanco al inicio y al final
console.log("       Hola     ".trim()); // Hola

// trimStart(): Elimina espacios al principio

// trimEnd(): Elimina espacios al final

// slice(start, end): Extrae parte del string
console.log("JavaScript".slice(-6)); // Script

// substring(start, end): Similar a slice, pero NO acepta negativos
console.log("Hola".substring(0, 2)); // Ho

// split(separator): Divide el string en un array
console.log("rojo,verde,azul".split(',')); // ["rojo", "verde", "azul"]
console.log("Hola".split("")); // ["H", "o", "l", "a"]

// repeat(count): Repite el string
console.log("ji".repeat(3)); // jijiji

// match(regex): Devuelve coincidencias con una expresion regular
console.log("abc123".match(/\d+/)); // ['123']


/*=========================
    Metodos de Arrays
==========================*/

// length: Devuelve la longitud del array
console.log([1, 2, 3].length); // 3

// Final del array
// push(element): Agregamos un elemento al final del array
const arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]

// pop(): Elimina el ultimo elemento y lo devuelve
console.log(arr.pop()); //3

// Principio del array
// unshift(element): Agregamos un elemento al inicio del array
arr.unshift(0);
console.log(arr);

// shift(): Elimina el primer elemento y lo devuelve
console.log(arr.shift());

// concat(array): Concatena arrays
console.log([1, 2].concat([3, 4]));

// join(separator): Une los elementos en un string
console.log([1, 2, 3].join("-")); // 1-2-3

// slice(start, end): Extrae una copia parcial del array
console.log([1, 2, 3, 4].slice(1, 3)); // [2, 3]

// splice(start, deleteCount, ...items): Modifica el array in situ, puede borrar y agregar
const nuevoArr = [1, 2, 3];

// En la posicion 1, eliminamos 1 elemento y lo reemplazo por el caracter "a"
nuevoArr.splice(1, 1, "a");
console.log(nuevoArr); // [1, "a", 3]


// indexOf(element): Devuelve la primera posicion del elemento o -1 si no existe
console.log([1, 2, 3].indexOf(2)); // 1

// lastIndexOf(element): Devuelve la ultima posicion del elemento
console.log([1, 2, 3, 2].lastIndexOf(2)); // 3

// includes(element): Devuelve true si el elemento existe
console.log([1, 2, 3].includes(2)); // true