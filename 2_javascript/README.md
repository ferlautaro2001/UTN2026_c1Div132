# JavaScript

---

## JavaScript V / Objetos globales y almacenamiento persistente. Iteracion en arrays, objetos y arrays de objetos

Los objetos globales son aquellos que estan disponibles en todo el entorno de ejecucion sin necesidad de importarlos o declararlos explicitamente.

Varian depende del contexto de ejecucion (el lugar donde se ejecuta JavaScript), el navegador o `Node.js` y **su proposito es facilitar el acceso a ciertas funciones y valores predeterminados**

#### Objetos globales en el navegador
- En el entorno del navegador, los objetos globales incluyen todos los objetos estandar de JavaScript, como `String`, `Array`, `Object`, etc. Asi como un conjunto de objetos especificos para la interaccion con la pagina web y su entorno

- El objeto global principal del navegador es `window`. Este objeto representa toda la ventana del navegador y actua como el contenedor global para todas las variables, funciones y objetos globales en una pagina web. Todos los objetos, variables y funciones definidos en el ambito global estan autoaticamente disponibles como propiedades del objeto window.

#### Objetos y metodos importantes que vienen de `window`
- `document`: Representa el DOM de la pagina web actual, permitiendo al acceso y la manipulacion de elementos HTML. `document` lo vemos en JavaScript VI.
```html
<p id="parrafo">soy un parrafo</p>
```
```js
let parrafo = document.getElementById("parrafo")
```

- `alert()`, `prompt()` y `confirm()`: Metodos que permiten mostrar dialogos al usuario y recoger input

- `setTimeout()` y  `setInterval()`: Metodos para programar la ejecucion de codigo despues de un tiempo (setTiemout) o en intervalos regulares (setInterval)

```js
// Muestra un mensaje por consola despues de 2 segs
setTimeout(() => {
    console.log("Hola despues de 2 segundos")
}, 2000);
```

- `location`: Proporciona informacion sobre la URL actual de la pagina y permite redireccionar a otras URL

```js
// URL actual
console.log(window.location.href)
```

- `navigator`: Contiene info sobre el navegador, la version, agente de usuario y geolocalizacion

```js
// Info sobre el navegador
console.log(navigator.userAgent);

// Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36
```

- `console`: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion

```js
console.log("Mensaje en la consola");
```

- `localStorage` y `sessionStorage`: Permiten almacenar datos en el navegador de manera persistente o temporal

```js
// Seteamos una nueva clave con info
localStorage.setItem("nombre", "Miguel");

console.log(localStorage.getItem("nombre")); 
// El valor Miguel queda guardado permanentemente en el navegador hasta que se borre
```

- `history`: Proporciona acceso al historial de navegacion del navegador

```js
history.back(); // Va a la pagina anterior
```

- El viejo `XMLHttpRequest` o el moderno `fetch`: Un objeto para realizar solicitudes HTTP asincronicas

---


## JavaScript IV / Introduccion a arrays y objetos. Metodos de strings y arrays
```js
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
```


---


## JavaScript III / Scope y ambito funciones y tipos de funciones
```js
/*===================
    Scope o Ambito
=====================

El scope o Ambito se refiere al contexto en el cual las variables y funciones son accesibles y pueden ser referenciadas.
En JavaScript tenemos distintos tipos de scope:


==================================
1. Global Scope o Ambito global
    - Las variables declaradas fuera de cualquier funcion o bloque tienen alcance global y son accesibles desde cualquier parte del codigo. Esto incluye var, let, const

    - En un navegador, las variables globales var se adjuntan al objeto global window.
    
*/

var globalVar = "Soy global";

function mostrarGlobal() {
    console.log(globalVar);
}

mostrarGlobal();
console.log(globalVar);

/*===============================
2. Local Scope / Function Scope (Ambito local o Ambito de funcion)
    - Las variables declaradas dentro de una funcion solo son accesibles dentro de esa funcion. Estas variables tienen un ambito local
*/

function mostrarLocal() {
    var localVar = "Soy local";
    console.log(localVar);
}

mostrarLocal(); // Soy local
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined


/*===============================
3. Block Scope o Ambito de bloque
    - A partir de ES6 2015, las variables declaradas con let y const tienen alcance de bloque por lo que solo son accesibles adentro del bloque en el que se declararon -> { }
*/

if (true) {
    let bloqueLet = "Soy de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined



/*=================================================
    Function/Local Scope vs Block Scope
    Ambito de funcion/ local vs Ambito de bloque
===================================================

Function Scope
    Las variables declaradas con var tienen ambito de funcion
    Esto significa qque si se declaran dentro de una funcion, no son accesibles fuera de esa funcion
    NO estan limitadas por bloques
*/

function scopeFunction() {
    if (true) {
        var funcionVar = "Soy una var de funcion";
    }
    console.log(funcionVar);
}


scopeFunction(); // Soy una var de funcion


/*Block Scope
    Las variables declaradas con let y const estan LIMITADAS por el bloque en el que se declaran
*/

function scopeBloque() {
    if (true) {
        let bloqueLet = "Soy una let de bloque";
        const bloqueConst = "Soy una const de bloque";
    }

    // console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined
    // console.log(bloqueConst); // Uncaught ReferenceError: bloqueConst is not defined
}

scopeBloque();


/*========================
    Hoisting o Elevacion
==========================

Las declaraciones de variables y funciones en JavaScript se mueven "hacia arriba" de su contexto de ejecucion (scope).
Solo las declaraciones son elevadas, no las inicializaciones

////////////////////////
//Variables con var: Se elevan y se inicializan con undefined
*/
console.log(elevadaVar); // undefined
var elevadaVar = "Soy una var elevada";
console.log(elevadaVar);


/*///////////////////////
//Variables con let y const: Se elevan pero NO se inicializan, lo que lleva a un error si se accede antes de la declaracion
*/
// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada";
console.log(elevadaLet);


/*==========================================
    Diferencias entre var, let y const
============================================

- var: 
    Tiene ambito de funcion -> function() { }
    Permite la redeclaracion y la reasignacion

- let: 
    Tiene ambito de bloque -> { }
    No permite la redeclaracion pero SI la reasignacion
    Tiene elevacion a nivel de bloque, por lo que NO es accesible antes de la declaracion
*/

let x = 10;
x = 20;
console.log(x);
// let x = 30; // let NO permite la redeclaracion

/* 
- const: 
    Tiene ambito de bloque -> { }
    No permite la redeclaracion y tampoco la reasignacion
    En arrays y objetos si podremos cambiar sus valores (porque estos no alteran su posicion en memoria)
    Tiene elevacion a nivel de bloque, por lo que NO es accesible antes de la declaracion


====================
    Diferencias
====================

- let y const se introdujeron en ES6 para mejorar el ambito de las variables y reducir la probabilidad de anulaciones accidentales de variables

- Tanto let como const no permiten la elevacion mientras que var si


=======================
    Buenas practicas
=======================

- Usa const para variables de solo lectura, como constantes u objetos inmutables
- Usa let para variables que peudan cambiar con el tiempo
- Evita usar var por su ambito de funcion, lo que puede dar lugar a conflictos y bugs
- Cuando importemos una libreria y la instalemos, usemos const para asegurarnos de que la instancia no es reasignada
*/



/*=============================
    Funciones en JavaScript
===============================

Una funcion es un bloque de codigo reutilizable que se puede ejecutar cuando se llama por su nombre

Las funciones son fundamentales para la modularidad y la reutilizacion del codigo

Por que usar funciones?
    - Facilitan la organizacion del codigo
    - Permite la reutilizacion (DRY o Don't Repeat Yourself / No te repitas)
    - Mejora la legibilidad y el mantenimiento


La forma mas comun de declarar una funcion en JavaScript es usando la palabra clave funcion
    
    function nombreFuncion() {
        // Bloque de codigo que se ejecuta cuando se llame a la funcion
    }


Tambien se pueden definir variables en las funciones que acepten valores cuando se les llama
    - Los parametros son los nombres de las variables que definimos en la declaracion de la funcion
    - Los argumentos son los valores qque pasamos a la funcion cuando la llamamos
*/

// Ejemplo de funcion con parametros

// Los parametros son los nombres de las variables que definimos en la declaracion de la funcion
function sumar(a, b) { 
    let resultado = a + b;
    console.log(`El resultado es: ${resultado}`);
}

sumar(5, 3); // Los argumentos son los valores qque pasamos a la funcion cuando la llamamos


// Las funciones pueden devolver un valor utilizando la keyword return
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(4, 5)); // Como esta funcion retorna un valor pero no consologuea nada tenemos que invocarla adentro de un console.log para poder visualizar su valor


/*=============================
    Tipos de funciones en JS
===============================

1. Funcion declarada o Named function / Basic function

    Es la declaracion basica de JavaScript, usa la keyword function

    Se recomienda para funciones con nombre o cuando se necesite hoisting.
    Las funciones declaradas con la keyword function se pueden elevar  ala parte superior de su ambito (del scope que las contiene).
    Esto permite llamar a la funcion antes de ser declarada!
*/

saludar();

function saludar() {
    console.log("Holis!")
}

/* 2. Funcion expresada / Function expression

    Es la funcion que esta dentro de una variable
    Son utiles para funciones anonimas, para cuando se quiere controlar donde va a estar disponible la funcion 
*/

const saludame = function() {
    console.log("Holis! Como te va?");
}

saludame();


/* 3. Funcion anonima / Anonymous function

    No tiene nombre y se usa como callback generalmente 
*/

setTimeout(function() {
    console.log("Hola mundo dentro de 1s");
}, 1000);



/* 4. Funcion de flecha / Arrow function

    Especialmente utiles para escribir funciones de una linea
    Las vemos mas abajo!
*/

// Aca el return esta implicito y si es 1 sola instruccion, no hacen falta {}
const sumame = (a, b) => a + b; 

console.log(sumame(2, 3));



/* 5. Funcion de metodos / Method function

    Son las funciones definidas dentro de un objeto o clase
*/

const persona = {
    nombre: "Lautaro",
    saludar() {
        console.log(`Hola! Me llamo ${this.nombre}`);
    }
}

persona.saludar();



/* 6. Funcion de constructor / Constructor function

    Son las funciones definidas dentro de un objeto o claseSe usan para crear objetos se invocan usando el keyword new
*/

function Usuario(nombre, id) {
    this.nombre = nombre;
    this.id = id;
}

const valentin = new Usuario("Valentin", 12345);
console.log(valentin.id);



/* 7. Expresion de funcion ejecutada inmediatamente / IIFE - Immediately Invoked Function Expressions

    Las IIFE son funciones que se ejecutan inmediatamente despues de haberse definido
*/

(function() {
    console.log("Holis, soy una IIFE");
})();



/* 8. Funcion generadora o Generadores / Generator function

    Son un tipo especial de funciones que sirven como una fabrica de iteradores.
    Es decir, pausan su ejecucion y continuan mas tarde

    Se definen con la expresion function*
*/

function* crearId() {
    let index = 0;
    while(true) {
        yield index++;
    }
}

const generador = crearId();

console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);


/* 9. Funcion de orden superior o Funcion de alto nivel / High order function

    Las vemos en JavaScript V!
    Las continuamos en JavaScript VII
*/

// Ejemplo de HOF / array.map() -> devuelve un nuevo array con los resultados de aplicar esa funcion a cada uno de los elementos del array original
let lista = [1, 2, 3, 4, 5];
let duplicar = lista.map(num => num * 2);
console.log(duplicar); // [2, 4, 6, 8, 10]


/* 10. Funcion asincronica o Async function

    Las vemos en JavaScript VII y VIII
    Las funciones asincronicas se declaran con la keyword async
    Devuelve un objeto Promise que representa la terminacion o el fracaso de una operacion asincrona

    Se usa el operador await para esperar a la operacion asincronica
*/



/*====================================
    Tipos de funciones flecha en JS
======================================

1. Sin parametros

    Si la funcion no lleva parametros se pueden usar parentess vacias
*/

const saludoPortenio = () => console.log("Como le va, maestro!");
saludoPortenio();

/*
2. Un solo parametro

    Si hay un solo parametro, las parentesis son opcionales
*/

const cuadrado = x => x * x;
console.log(cuadrado(4));


/*
3. Mas de un parametro
*/

const restar = (a, b) => a - b;
console.log(restar(5, 3));

// Ojo! Hasta ahora solo tenemos una instruccion simple, por eso se escriben en una sola linea



/*
4. Mas de una instruccion en la funcion

    Si el cuerpo de la funcion tiene mas de una instruccion, necesitamos usar {} y la palabra clave return si necesitamos devolver un valor
*/

const saludoPersonalizado = (nombre, apellido) => {
    const saludo = `Hola ${nombre} ${apellido}!`;
    return saludo;
}

console.log(saludoPersonalizado("Miguel", "Chavez"));


/*
5. Devolviendo un objeto

    Para devolver un objeto literal debe estar envuelto en parentesis para que no se confunda con el cuerpo de la funcion
*/

const creaPersona = (nombre, edad) => ({nombre: nombre, edad: edad});

console.log(creaPersona("Nicolas", 20));

/* 
6. Funciones de orden superior y callbacks

    Las funciones de flecha son especialmente populares cuando se usan como callbacks
    
    let lista = [1, 2, 3, 4, 5];
    let duplicar = lista.map(num => num * 2);
*/
```

---

## JavaScript II / Control de flujo, estructuras de control, condicionales y bucles I

```js
/*=========================
    Control de flujo
===========================

El control de flujo determina como se ejecutan las instrucciones de un programa.
Cuando diseñamos un programa, es importante estbalecer que partes del codigo se ejcutan y bajo que condiciones. Esto lo logramos con estructuras de contorl que permiten ejecutar secuencias de codigo basadas en decisiones, repeticiones o condiciones especificas

1. Condicionales
    - if, else if, else
    - Operadores logicos: &&, ||, !
    - Operadores ternarios

2. Bucles
    for, while, do...while

3. Control de flujo avanzado
    - break
    - continue
    - switch
*/

/*
let edad = parseInt(prompt("Introduci tu edad"));
console.log(typeof edad);

let tieneLicencia = confirm("Tenes carnet, pibe?");

if (edad >= 18) {
    console.log("Sos mayor de edad");
    
} else if (edad < 18 && edad > 0) {
    console.log("Sos menor de edad");
    
} else {
    console.log("Edad invalida");
}

if(edad >= 18 && tieneLicencia) {
    console.log("Podes manejar, anda nomas maquina");
}

if(edad < 18 || !tieneLicencia) {
    console.log("Para pichon, no podes manejar");
}
*/

// Ejemplo de toggle o "alternador"
let estado = true;

function alternarEstado() {
    estado = !estado; // Invertimos el valor de "estado"
    console.log("Nuevo estado:", estado);
}

alternarEstado(); // false
alternarEstado(); // true
alternarEstado(); // false


// Operador ternario: Una forma mas compacta de escribir una condicion if...else
let edad = 20;

let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";
console.log(mensaje);


/*===============
    Bucles
=================

Bucle for: Se usa cuando conocemos de antemano el numero de iteraciones

    for (inicializacion; condicion; incremento) {
        // Codigo a ejecutar en cada iteracion
    }



Bucle while: Ejecuta el bloque de codigo mientras la condicion sea verdadera
    while (condicion) {
        // Codigo a ejecutar mientras la condicion sea verdadera
    }


Bucle do.. while: Similar al while, pero la condicion se evalua despues de ejecutar el bloque de codigo, lo que garantiza que el codigo se ejecutara al menos una vez

    do {
        // Codigo a ejecutar
    } while (condicion)

*/

for (let i = 0; i < 5; i++) {
    console.log("Iteracion: ", i);
    // Aca ejecuta el incremento
}

// EJERCICIO 1
// Practica sugerida! Creen un bucle anidado para hacer una tabla de multiplicacion del 5
for (let i = 1; i <= 5; i++) {

    // El primer bucle va a ejecutar el bucle de abajo hasta que termine

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`); // al terminar la instruccion
        // se incrementa el valor de "j"
    }

    // Cuando termina este bucle y se continua la ejecucion "i" se incrementa
}
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 2 x 1 = 2
// 2 x 2 = 4



let i = 0;
while (i < 5) {
    console.log("Iteracion while: ", i);
    i++;
}


let x = 0;

do {
    console.log("Iteracion do while: ", x);
    x++;

} while (x < 5);


/*==============================
    Control de flujo avanzado
================================

break: Para salir inmediatamente de un bucle o estructura de control

continue: Salta a la siguiente iteracion del bucle, omitiendo el codigo restante dentro del bucle para esa iteracion

switch: Permite evaluar una expresion y ejecutar el bloque de codigo correspondiente al caso que coincide

    switch (expresion) {
        case valor1:
            // Codigo que se ejecuta si la expresion es igual a valor1
            break;

        case valor2:
            // Codigo que se ejecuta si la expresion es igual a valor2
            break;

        default:
            // Codigo que se ejecuta si ninguno de los casos coincide
    }
*/

for(let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Salimos del bucle cuando i es 5
    }

    console.log("Iteracion: ", i);
}


for(let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta las iteraciones en las que i es par
    }

    console.log("Numero impar: ", i);
}


// EJERCICIO 2
// Practica sugerida! Usando prompt para recibir input, pidan el dia de la semana y devuelvan: "Lunes", "Martes", "Miercoles", "Jueves", "Viernes" o "Fin de Semana"

/*
let diaSemana = parseInt(prompt("Introduci dia de la semana"));
console.log(typeof diaSemana);

// Verificamos que dia de la semana es
switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miercoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    default:
        console.log("Fin de semana");
}
*/

// EJERCICIO 3
// Hagan una calculadora del IMC, Indice de masa corporal y devuelvan las categorias que tienen abajo, pueden devolverlo por consola con console.log() o devolver el resultado con un alert()

/* Data sobre el IMC
Índice de Masa Corporal

El **Índice de Masa Corporal (IMC)** es un indicador matemático que relaciona el peso y la altura de una persona para estimar su composición corporal y clasificar el riesgo de salud. Se calcula dividiendo el peso en kilogramos entre la altura en metros al cuadrado ($$IMC = \frac{peso (kg)}{altura (m)^2}$$).

Según los estándares de la **Organización Mundial de la Salud (OMS)** para adultos, las categorías son:

*   **Bajo peso:** IMC inferior a **18.5**.
*   **Peso normal:** IMC entre **18.5 y 24.9**.
*   **Sobrepeso:** IMC entre **25.0 y 29.9**.
*   **Obesidad:** IMC igual o superior a **30.0** (clasificada en clases I, II y III según los rangos 30-34.9, 35-39.9 y >40, respectivamente).

El IMC es una herramienta de **cribado** útil para identificar riesgos de enfermedades cardiovasculares, diabetes tipo 2 y hipertensión, pero **no mide directamente la grasa corporal**. Tiene limitaciones importantes: no distingue entre masa muscular y grasa, por lo que puede sobreestimar el riesgo en atletas o personas con gran musculatura, y no considera la distribución de la grasa, la edad, el sexo o la etnia. Por esta razón, no es aplicable directamente a niños, adolescentes, embarazadas o personas con alta masa muscular sin ajustes específicos.
*/
```

---


## JavaScript I / Conceptos elementales, sintaxis básica, variables, tipos de datos y operadores
```js
// Mensaje por consola
console.log("Hola holiiita veciniiiiito!");

/* La consola de JavaScript es una herramienta de depuracion en nuestro navegador web

Nos permite ejecutar comandos de JS, ver mensajes de registros y errores, y hace pruebas interactivas de código.

La consola la abriremos pulsando F12 o click derecho + inspeccionar + pestaña consola*/

/*=========================
    Variables en JS
===========================

var: NO RECOMENDADA. Declaración histórica para las variables.

let: Declaración moderna, ES6. Permiten declarar variables que pueden cambiar y tiene un alcance de bloque

const: Declaración moderna, ES6. Permite declarar variables que NO se deben reasignar. El valor en const puede ser modificado si es un objeto o un array, pero la referencia no puede cambiar. */

var nombre = "Luciano";

let edad = 25;

const pi = 3.1416;

console.log(nombre);
console.log(edad);
console.log(pi);



/*=============================
    Tipos de datos primitivos
===============================

Numeros:    Valores numericos
Cadenas:    Texto encerrado entre '' o ""
Booleanos:  true / false
null:       Representa un valor intencionalmente vacio
undefined:  Una variable que fue declarada pero que no tiene valor
*/

let numero = 42;
let texto = "Holis";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(indefinido);



/*=============================
    Operadores en JavaScript
===============================

https://www.w3schools.com/js/js_operators.asp


Operadores Aritmeticos
    Para realizar operaciones matematicas sobre valores numericos

Operadores de incremento/decremento
    Para aumentar o disminuir el valor de una variable numerica

Operadores de asignacion
    Asignan valores a las variables. El mas comun es =

Operadores de comparacion
    Para comparar valores y devuelven un resultado booleano

Operadores logicos
    Se usan para combinar expresiones booleanas
*/

// Ejemplo incremento y decremento
let x = 10;
x++; // 11
x--; // 10


/* Ejemplo operadores de comparacion 
Igualdad simple "==", compara el valor

Igualdad estricta "===", compara valor y tipo */

let a = 5; // Number
let b = "5"; // String

console.log(a == b); // true (internamente, cuando necesita, hace un parseo, que es una conversion de datos)

console.log(a === b); // false, compara valor y tipo


// Ejemplo operadores logicos
let c = true;
let d = false;

console.log(c && d); // false, porque ambos deben ser true
console.log(c || d); // true, al menos uno es true
console.log(!c);    // false, porque invierte el true

// Ejemplo operador de tipo permite verificar el tipo de un valor
console.log(typeof 42);
console.log(typeof "Holi");
```