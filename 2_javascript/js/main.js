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