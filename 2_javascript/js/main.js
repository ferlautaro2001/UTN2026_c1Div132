/*=======================
    Asincronia en JS
=========================

La asincronia es la capacidad de un programa de ejecutar tareas que toman tiempo (como accceder a una API o esperar un temporizador) sin bloquear la ejecucion del resto del codigo.

En JavaScript, esto es clave porque es un lenguaje "single-threaded" (de un solo hilo), lo que significa que solo puede ejecutar una tarea a la vez.
Para Por eso, para evitar que el hilo principal se bloquee, se introducen mecanismos asincronicos que permiten "delegar" operaciones que tomaran tiempo y continuar ejecutando el resto del codigo mientras esas tareas se completan.



===================================================
    Herramientas en JS para asincronia
===================================================

1. Callbacks: Funcion que se pasa como argumento para ejecutasre despues de completar una operacion

    - Ventajas: Flexibilidad, compatibilidad
    - Desventajas: Callback hell, dificil manejo de errores



2. Promises: Objeto que representa un valor que puede estar disponible ahora, mas adelante o nunca. Sus estados correspondientes son:

    - pending -> Pendiente
    - fulfilled -> Completado
    - rejected -> Rechazado

    Ojota! la API fetch NO es una promesa, pero devuelve una promesa

        fetch("http://ejemplo.com/datos")
            .then(response => response.json)
            .then(data => console.log(data))
            .catch(error => console.error(error));


    Que pasa aca? fetch hace una peticion HTTP y devuelve una promesa que
        - Se resuelve con una Response -> "response" (respuesta del servidor)
        - O se rechaza si hay un error de red y se devuelve con "error"


===================================
    Relacion fetch y promesas
===================================

- fetch(): Es una funcion Web API, que devuelve una promesa y siempre trabaja de forma asincronica
- Promesa: Es un objeto nativo de JS, puede ser usada en fetch() y controla valores futuros

Que es?
    - fetch:    Una funcion para hacer peticiones HTTP. Una funcion que provee el navegador (Web API)
    - Promise:  Un objeto para manejar resultados asincronicos. Es interna al lenguaje JavaScript

Que devuelve?
    - fetch:    Una promesa (Promise)
    - Promise:  Un valor, exito o error futuro
*/


/*==========================
    fetch en JavaScript
============================

fetch es una funcion que nos provee el navegador (Una API Web) que permite realizar peticiones HTTP (y HTTPS) de forma asincronica usando promesas.

Forma parte de las Web APIs proporcionadas por el navegador, no del lenguaje JavaScript en si.
Fue introducida como parte del Fetch API para reemplazar al viejo y complejo XMLHttpRequest


/////////////////////////////
// Caracteristicas Tecnicas

    - Devuelve un objeto Promise que se resuelve con un objeto Response
    - Usa el estandar HTTP: metodos como GET, POST, PUT, DELETE, etc
    - Funciona bien con async/await
    - Es mas limpia y moderna que XMLHttpRequest
    - Soporta CORS, headers (cabeceras), envio de JSON, y mas


///////////////////////
// Sintaxis basica

Parametros:
    - url: string -> La URL a la que queremos hacer la solicitud
    - options (opcional): un objeto qque especifica configuracion adicional como method (metodo), headers (cabecera), cuerpo (body), etc

    fetch(url, options)
        .then(response => {
            // respuesta cruda del servidor
        })
        .catch(error => {
            // error de red o fallo total
        })

- Ojo! catch solo captura errores reales de red, como servidor caido o no hay internet!
*/


// Ejemplo de peticion de datos GET con fetch

// Bloque 1 -> realizo la solicitud HTTP y no paso al then hasta que se haya completado
fetch("https://jsonplaceholder.typicode.com/users") // Por defecto, la solicitud es GET

    // Bloque 2 -> Aguardamos a recibir la Response del servidor para procesar
    .then(response => {
        // En el caso de un codigo de estado distinto a 200 OK, creamos un nuevo error
        if(!response.ok) { // response.ok quiere decir que el codigo de estado es 200 y proporcionamos el recurso solicitado
            throw new Error("Error HTTP: ", response.status); // Se guarda en el objeto "error" en el bloque catch
        }
        console.log(response); // Aca vemos el objeto Response que nos da el servidor con el contenido que solicitamos (que parseamos abajo) y mas info sobre la respuesta
        return response.json(); // En caso de recibir correctamente los datos 200 -> OK, parseo este JSON y lo devuelvo en el objeto "data"
    })

    // Bloque 3 -> Ya con la respuesta parseada, tenemos nuestros datos listos para poder trabajar con ellos
    .then(data => console.table(data)) // Mostramos los datos por la consola con el metodo table

    // Bloque error: Si hubiera algun error en alguna de las fases anteriores, se guardara aca en el objeto "error"
    .catch(error => console.error("Error al obtener los datos:", error));


/*
// Ejemplo con opciones (POST)
fetch("http://ejemplo.com/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        titulo: "Holis",
        contenido: "Me presento, soy el usuario Johnny Melavo"
        })
    })
    // Aca termino la peticion, el .then() espera que haya terminado la solicitud de mi navegador y que haya recibido la respuesta del servidor
    .then(response => response.json()) // Aca tratamos la Response 200 OK, puede ser 404 recurso no encontrado, 500 error interno del servidor

    // Aca transformo el mensaje de respuesta que devuelvo desde mi servidor
    .then(data => console.log("Respuesta del servidor", data))  // "Post creado con exito" o "Recurso no encontrado" o "Servidor caido"

    .catch(error => console.error("Error:", error));
*/



/*===========================
    El objeto Response
=============================

La promesa devuelta por fetch() se resuelve con un objeto Response que tiene:

    - .ok -> booleano (true si status esta entre 200 y 299)
    - .status -> codigo HTTP (200, 404, 500)
    - .statusText -> texto del estado ("OK", "Not Found", "Internal Server Error")
    - .headers -> cabeceras HTTP de la respuesta
    - .json(), .text(), .blob(), .formData() -> para leer el contenido de la respuesta



=========================
    Resumen fetch
=========================

//////////////////////
// Manejo de errores

    - fetch() solo rechaza la promesa en errores de red reales (sin internet, servidor caido), la captura el catch
    - NO rechaza codigos de error HTTP (como 404 o 500), por eso debemos revisar response.ok


//////////////////////
// Casos de uso comunes

    - Consumir APIs REST (para obtener datos de usuarios, productos, etc)
    - Enviar info de formulario con POST
    - Cargar contenido dinamico en una SPA (Single Page Application)
    - Interacciones cliente-servidor en tiempo real junto con WebSockets o SSE


//////////////////////
// En resumen

    - Que es? Funcion Web API que permite hacer peticiones HTTP
    - Que devuelve? Un objeto Promise
    - Es sincronica? NO, es asincronica
    - Reemplaza al viejo XMLHttpRequest
    - Que recibe? Una URL y un objeto options (opcional)
    - Como se usa? Con .then() o async/await
    - Que devuelve? Un objeto Response con metodos para acceder al cuerpoo
    - Rechaza en errores HTTP? No, solo rechaza errores reales de red -> revisar reponse.ok
*/


/*=============================
    asnyc/await en JS
===============================

async/await es "syntactic sugar", es decir, una forma mas sencilla y simple de trabajar con Promises en JavaScript.
Introducidas en ES8 (ECMAScript 2017) quqe permite escribir codigo asincrono con una sintaxis similar al codigo sincrono.

El objetivo es hacer el manejo de la asincronia mas legible, estructurado y facil de depurar.


// Como funciona async?

    La palabra clave async se usa para declarar una funcion asincrona, la cual siempre devuelve una Promesa

        asnyc function obtenerUsuarios() {

            const response = await fetch("https://jsonplaceholder.typicode.com/users");
        }


// Que hace await?

    La palabra clave (keyword) PAUSA la ejecucion de la funcion async hasta que una Promesa sea resuelta (fulfilled) o rechazada (rejected)
*/

// Con async, indicamos que esta funcion sera asincronica y correra paralela al hilo principal de ejecucion
async function obtenerDatos() {

    // Manejo de errores con try...catch
    try {
        // Con await, detenemos la ejecucion del codigo hasta que se haya completado la solicitud y hayamos recibido el objeto Response
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        // el await vendria a reemplazar al .then() -> espero a que se ejecute una operacion y despues (en ingles then) continuo la ejecucion
    
        if (!respuesta.ok) {
            throw new Error("Error HTTP: ", response.status);
        }
    
        // El parseo de datos de JSON a objetos JavaScript tambien es otra operacion que lleva una demora y que puede fallar, por eso la marcamos como asincronica
        const datos = await respuesta.json(); // Transformamos la respuesta que trae la response
    
        console.log(datos);

        imprimirDatos(datos)


    } catch (error) {
        console.error("Error al obtener los datos:", error)
    }

}

function imprimirDatos(datos) {
    let htmlDatos = "<ul>";

    datos.forEach(dato => htmlDatos+= `<li>${dato.title}</li>`);

    htmlDatos += "</ul>";

    let divPadre = document.getElementById("padre");

    divPadre.innerHTML = htmlDatos;
}

obtenerDatos();


/*==============================
    Comparacion con .then()
================================

fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => {
        if(!response.ok) {
            throw new Error("Error HTTP: ", response.status);
        }
        
        return response.json(); 
    })

    .then(data => console.table(data)) 

    .catch(error => console.error("Error al obtener los datos:", error));
*/