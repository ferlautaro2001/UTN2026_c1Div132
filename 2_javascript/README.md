# JavaScript

## JavaScript VI / Manipulacion del DOM y Eventos

### [Que es el DOM?](https://www.w3schools.com/js/js_htmldom.asp)
El DOM HTML o Modelo de Objetos del Documento (Document Object Model) es una estructura que representa un documento HTML como una estructura jerarquica de objetos, conocida como arbol DOM. Esta estructura o representacion en memoria de una pagina web, permite a los programas, en nuestro caso con JavaScript, acceder, modificar añadir o eliminar elementos, contenido, estilos y atributos del documento de forma dinamica.

De esta manera, cada elemento HTML se convierte en un nodo dentro de este arbol y todos los elementos estan relacionados entre si mediante padres, hijos y hermanos, creando una representacion en memoria del documento que el navegador puede manipular.

#### En resumen

- DOM: es una representacion en memoria de la estructura de una pagina web. Transforma el HTML en una estructura de nodos y objetos que puede ser manipulada con JavaScript.

- Cada etiqueta HTML es un nodo en el DOM

- El DOM permite que JavaScript modifique el contenido, estructura y estilo de una pagina

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mi pagina</title>
    </head>
    <body>
        <h1>Bienvenidos</h1>
        <p>Esto es un parrafo</p>
    </body>
</html>
```
Este HTML sera representado en el DOM como una estructura en forma de arbol. `document` es el objeto que representa toda la pagina web

#### Diagrama de arbol del DOM
- document
    - html
        - head
            - title
        - body
            - h1
            - p


### Como funciona la manipulacion del DOM?
- JavaScript puede acceder y modificar cualquier elmeneto del DOM utilizando el objeto global `document`
- Gracias a este objeto `document`
    - **Modificar el contenido** (texto, atributos, clases)
    - **Añadir o eliminar elementos** del DOM
    - **Escuchar eventos** del usuario (clicks, teclas, etc)

```js
/*======================================
    Seleccion de elementos en el DOM
========================================

    getElementById()

- Este metodo selecciona un unico elemento por su id. Si no se encuentra devuelve null
- Solo selecciona el primer elemento que coincida con el id
*/

// Selecciono el titulo y lo guardo en una variable
let titulo = document.getElementById("titulo");
console.log(titulo); // <h1 id="titulo">Titulo principal</h1>
console.log(`El texto de mi titulo es: ${titulo.textContent}`);

/*
    querySelector()
    querySelectorAll()


- querySelector(): Selecciona el PRIMER elemento que coincida con un selector CSS (clase, id, etiqueta)

- querySelectorAll(): Selecciona TODOS los elementos que coincidan con el selector CSS y devuelve un array de elementos del DOM, una NodeList -> muy similar a un array
*/

// Selecciono el primer parrafo con querySelector
let primerParrafo = document.querySelector(".mensaje");
console.log(primerParrafo.textContent); // Primer parrafo

// Selecciono todos los elementos que comparten una clase
let parrafos = document.querySelectorAll(".mensaje");

// Me muestra mi array de elementos del DOM
console.log(parrafos); // NodeList(2) [p.mensaje, p.mensaje]

// Ahora podre iterar mi array con los metodos que aprendimos en JavaScript V
parrafos.forEach(parrafo => console.log(parrafo.textContent));
// Primer parrafo
// Segundo parrafo


/* EXTRA -> otros metodos mas viejos son 
    getElementsByClassName() 
    getElementsByTagName()

La realidad es que el nuevo metodo querySelector() vino a desplazar y a combinar ambos

En la practica, casi siempre vamos a usar de forma exclusiva getElementById


=========================================
    Modificar contenido y atributos
========================================

Una vez que seleccionamos un elemento, podremos modificar su contenido, atributos o estilo.

    - textContent: Modifica el texto dentro de un elemento
    - innerHTML: Modifica el contenido HTML dentro de un elemento
    - setAttribute(): Modifica los atributos de un elemento
    - style: Permite cambiar el estilo CSS en linea de un elmeento
*/

let parrafo = document.getElementById("miParrafo");

// Cambiar el texto
parrafo.textContent = "Nuevo texto desde JS";

// Modificamos el contenido HTML -> introducimos etiquetas
parrafo.innerHTML = `<strong>Nuevo texto en negrita</strong>`;

let boton = document.getElementById("boton");

// Cambiamos el atributo "id"
boton.setAttribute("id", "nuevoId");

// Cambiamos el estilo
boton.style.backgroundColor = "#00FF41";
boton.style.border = "2px solid";
boton.style.borderRadius = "5px";
boton.style.padding = "5px";

/* EXTRA -> ademas de innerHTML, tambien podemos crear, insertar o elminiar elementos del DOM
    
    - createElement(): Crea un nuevo elemento HTML
    - appendChild(): Añade un elemento como hijo de otro
    - removeChild(): Elimina un elemento hijo de su nodo padre

- con innerHTML tenemos la forma mas usada para isnertar contenido con etiquetas (podria llegar a meter algun script dentro de esas etiquetas)

- Una forma mas segura de manipular el DOM seria crearElement + appendChild. Con segura nos referimos a que de esta manera no podemos inyectar un script adentro de innerHTML
*/


/*========================
    Que es un evento?
==========================

Un evento es una señal que se envia cuando ocurre una interaccion o cambio en el documento, como un click o una pulsacion de tecla.

JavaScript nos permite escuchar estos eventos y ejecutar funciones cuando ocurren.

- Eventos de mouse: click, mouseover, mouseout, mousemove
- Eventos de teclado: keydown, keyup
- Eventos de formulario: submit, change, input, focus
- Eventos de ventana: resize, scroll, load, unload

Para poder asignar eventos a nuestros elementos HTML, tendremos que añadirle un escuchador de eventos
    addEventListener()
        Add / añadir
        Event / evento
        Listener / escuchador

El escuchador o listener de eventos es un PROCESO que esta en ejecucion permanente, esta constantemente activo escuchando que se produzcan estas interacciones.

Veremos mas adelante que es un proceso muy parecido al que hará nuestro servidor cuando este continuamente escuchando peticiones HTTP
*/

// Vamos a asignarle a nuestro boton un evento click
/* Opcion 1: escribimos directamente la funcion adentro del addEventListener

boton.addEventListener("click", function() {
    console.log("Hiciste click!");
});
*/

// Opcion 2: Escribimos la funcion afuera y la llamamos en el addEventListener
function mensajeConsola() {
    console.log("Hiciste click");
}

boton.addEventListener("click", mensajeConsola);


// Le asignamos a nuestro input un evento de teclado
let entrada = document.getElementById("entrada");

// entrada.addEventListener("keydown", () => console.log("tecla presionada"));

// Si yo quiero asignarle un evento y obtener informacion de ese envento, que tecla se pulso, que valor, que codigo tiene, necesito un objeto llamado event

entrada.addEventListener("keyup", event => {
    console.log(`Valor tecla: ${event.key}`); // Valor tecla: 1
    
    // Ejemplo sin backticks, contatenando con +
    // console.log("Aca arranco: " + event.key + ", sigo concatenando" + event.code + "!");
    
    // Ejemplo con backticks ` conatenando con ${}
    // console.log(`Aca arranco: ${event.key}, sigo concatenando ${event.code}!`)
    
    console.log(`Codigo de tecla: ${event.code}`); // Codigo de tecla: Digit1 o Numpad1

    // Con keyup, al levantar la tecla puedo mostrar el valor una vez que termino de escibir, si quisiera buscar valores que empiezen por a, con keydown tendria que escribir un a y otra tecla mas
    console.log(`Valor del campo de texto: ${entrada.value}`);
});

// El objeto event no es necesario si no queremos obtener info del evento!

/*=============================
    Propagacion de eventos
*==============================

Cuando ocurre un evento, este se propaga a traves del DOM en dos fases:

    - Fase de captura: De arriba hacia abajo
    - Fase de burbuja: De abajo hacia arriba

Gracias al objeto event, podemos detener la propagacion de un evento
    event.stopPropagation()


Mas adelante, cuando enviemos informacion de un formulario HTML a nuestro servidor en el TP Integrador, usaremos otro para evitar el envio por defecto de un formulario HTML

    event.preventDefault()

En HTML, cuando le damos al boton de submit de un formulario, este se envia a la url o al script que definamos en el atributo action. Pero la mayoria de las veces, queremos limpiar la info del formulario, optimizar los valores, evitar caracteres sospechosos, etc. En resumen, queremos aplicar JavaScript para preparar y sanear los datos.

botonEnvio.addEventListener("submit", event => {
    event.preventDefault();
    // Todas las operaciones en JS que necesitemos, como operaciones de JavaScript para poder preparar los datos
    
    // Enviamos la info con un fetch
})
*/
let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

// Escuchamos el click en el div padre
padre.addEventListener("click", () => console.log("Click en el div padre"));

// Escuchamos el click en el boton hijo y vemos como el evento se propaga
// hijo.addEventListener("click", () => console.log("Se hizo click en el boton hijo"));

// Modificamos la funcion de arriba
hijo.addEventListener("click", event => {
    // Ahora detenemos la propagacion de eventos, Siempre debe ser la primera instruccion
    event.stopPropagation(); // Ahora el evento del hijo no detona el evento del padre

    console.log("Se hizo click en el boton hijo");
});
```


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

```js
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


/*////////////////
// reduce()

    const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0)

Proposito: Reduce el array a un unico vlaor
Retorna: Valor acumulado
*/

// Ejemplo 1: Sumar decenas
let decenas = [10, 20, 30];
let sumaDecenas = decenas.reduce((suma, num) => suma + num, 0);
console.log(sumaDecenas); // 60

// Ejemplo 2: Sumar propiedades
let ventas = [
    { producto: "Camisa", cantidad: 3, precio: 25 },
    { producto: "Pantalon", cantidad: 2, precio: 40 },
    { producto: "Zapatos", cantidad: 1, precio: 80 },
];

let totalVentas = ventas.reduce((total, item) => {
    return total + (item.cantidad * item.precio);
}, 0);

console.log(totalVentas); // 235


/*////////////////
// find() y findIndex()

    const encontrado = array.find(elemento => elemento.id === 123);
    const indice = array.findIndex(elemento => elemento.id === 123);

Proposito: Busca el primer elemento que cumpla una condicion
Retorna: Elemento o indice (o undefined/-1 si no lo encuentra)
*/

// Ejemplo 1: Buscar numero
let numerosRandom = [5, 12, 8, 130, 44];
let encontrado = numerosRandom.find(num => num > 10);
console.log(encontrado); // 12

let indiceEncontrado = numerosRandom.findIndex(num => num > 100);
console.log(indiceEncontrado); // 3

// Ejemplo 2: Buscar usuario activo
let usuarios = [
    { id: 1, nombre: "Lautaro", activo: true },
    { id: 2, nombre: "Nicolas", activo: false },
    { id: 3, nombre: "Valentin", activo: true },
];

let usuarioActivo = usuarios.find(user => user.activo);
console.log(usuarioActivo);

// Ejemplo 3: Encontrar indice de objeto
let tareas = [
    { id: 1, descripcion: "Comprar pan", completada: false },
    { id: 2, descripcion: "Ir a la ferreteria", completada: true },
    { id: 3, descripcion: "Salir a correr", completada: false },
];

let indiceTarea = tareas.findIndex(tarea => tarea.completada);
console.log(indiceTarea); // 1


/*////////////////
// for...of

    for (let elemento of array) {
    console.log(elemento)
        if(elemento === "stop") {
            break;
        }
    }

Ventajas: Sintaxis limpia, permite break y continue
Desventajas: No provee indice automatico
*/

// Ejemplo 1: Iterar array con posibilidad de break
const simbolos = ['€', '$', '¥', '£'];

for (let simbolo of simbolos) {
    if (simbolo === '¥') {
        break
    }
    console.log(simbolo);
}


/*////////////////
// some() y every()

    let algunoCumple = array.some(elemento => elemento > 0);
    let todosCumplen = array.every(elemento => elemento > 0)

Proposito: Verifica si alguno/todos cumplen una condicion
Retorna: Booleano
*/

let nums = [1, 3, 5, 7, 8];
let hayPares = nums.some(num => num % 2 === 0);
console.log(hayPares); // true

let todosPositivos = nums.every(num => num > 0);
console.log(todosPositivos); // true

let estudiantes = [
    { nombre: "Axel", nota: 8 },
    { nombre: "Lucas", nota: 7 },
    { nombre: "Nicolas", nota: 10 },
];

let todosAprobaron = estudiantes.every(est => est.nota >= 6);
console.log(todosAprobaron); // true


/*==================================
    Comparacion de rendimiento
====================================

1. Bucles clasicos (for, while) -> Son los mas rapidos

2. Metodos funcionales (map, filter) -> Son mas lentos pero mas faciles de leer

3. for...of -> ofrece un buen equilibrio entre rendimiento y legibilidad


========================
    Recomendaciones
========================

- Transformar array:    map()
- Filtrar elementos:    filter()
- Reducir a un valor:   reduce()
- Buscar elemento:      find() y findIndex()
- Iterar y sencillo:    forEach()
- Necesidad romper:     for clasico y for...of


Los metodos modernos de JavaScript (map, filter, reduce) ofrecen una forma mas declarativa de trabajar con arrays mientras que los bucles tradicionales le dan mas control

1. Legibilidad: Los metodos funcionales suelen ser mas faciles de entender
2. Rendimiento: Si nos preocupa la velocidad y optimizar el rendimiento, los bucles clasicos son los mejores
3. Inmutabilidad: Los metodos funcionales no modifican el array original

En proyectos modernos, podemos combinar map, filter, reduce, etc porque resulta mas claro y tiene capacidad para encadenarse
*/
```

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