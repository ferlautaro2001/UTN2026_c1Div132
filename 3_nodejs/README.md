# [`Node.js`](https://es.wikipedia.org/wiki/Node.js)

## Introduccion a `Node.js`

Cuando programamos en JavaScript en el navegador y en `Node.js` el lenguaje es el mismo, lo que cambia es el entorno de ejecucion y las herramientas disponibles.

JavaScript es solamente el lenguaje. Para que el codigo funcione, necesita un entorno que:

- lea el codigo
- lo ejecute
- le proporcione APIs para interactuar con algo

El navegador nos sirve para crear paginas web interactivas y `Node.js` nos permite ejecutar JS afuera del navegador

### [Que es `Node.js`?](https://www.youtube.com/watch?v=SfWPqr04srM)
`Node.js` es un **entorno** que permite ejecutar JavaScript fuera del navegador. Fue creado para usar JavaScript en

- Servidores
- Backend
- Scripts
- Automatizacion
- Herramientas de desarrollo
- APIs
- terminal, etc

Ahora con  no solo vamos a trabajar con la logica de presentacion sino con la gestion de datos, archivos, bases de datos y demas.

### [`npm`](https://www.npmjs.com/)
Un punto clave en el desarrollo con `Node.js` es [`npm`](https://www.npmjs.com/).
Es el gestor de paquetes que viene integrado con `Node.js` y su proposito es facilitar la instalacion y gestion de bibliotecas y herramientas desarrolladas por la comunidad o por otros desarrolladores.
`npm` nos ahorra tiempo, porque no tenemos que construir todo desde cero, en lugar de eso, podemos aprovechar codigo de terceros que ya esta probado y optimizado.

Por ejemplo, si necesitamos hacer validaciones complejas de datos, en lugar de escribir todo el codigo manualmente, podemos buscar un paquete en `npm` para que lo haga, instalarlo y usarlo en nuestro proyecto `Node.js`
`npm` permite compartir, descargar y actualizar estos paquetes de forma sencilla.

La estructura basica al trabajar con npm consiste en inicializar un archivo `package.json` que es como el "libreto de instrucciones" de nuestro proyecto. Este archivo lista las dependencias que instalamos, los scripts utiles, version de la aplicacion entre otros datos importantes.

Para empezar a usar npm, l primero que haremos en cualquier proyecto es ejecutar el comando 
```sh
npm init
```
que crea el archivo package.json y nos guia en la configuracion inicial. Despues podemos instalar paquetes con `npm install` y listarlos como dependencias de nuestro proyecto.

### Que podemos construir con `Node.js`?
Antes de `Node.js`, JavaScript solo se usaba en el frontend, pero con esta tecnologia podemos construir aplicaciones completas usando JavaScript en el backend tambien. Algunas de las aplicaciones mas comunes de Node.js son:

- Aplicaciones en tiempo real: Chats o videojuegos en linea que requieren actualizaciones constantes sin recargar la pagina
- APIs REST: Para conectar el frontend de una aplicacion con una BBDD o un servicio de terceros

- Aplicaciones basadas e eventos: `Node.js` es ideal para manejar acciones como notificaciones o procesamiento en segundo plano

### Por que es tan importante `Node.js` en el desarrollo moderno?
- **Velocidad**: Al estar basado en un solo hilo y ser no bloqueante, permite manejar muchas solicitudes simultaneas de forma eficiente.

- **Ecosistema**: Tiene una amplia biblioteca de paquetes y herramientas disponibles a traves de `npm` (Node Package Manager), lo que facilita integrar nuvas funcionalidades

- **Escalabilidad**: Es ieal para aplicaciones que necesitan crecer rapidamente como plataformas de streaming o redes sociales.

---

## Conceptos fundamentales
Mientras que el navegador nos proporciona APIs relacionadas con la web, como `document`, `fetch()`, `alert()`, `localStorage()`.

`Node.js` agrega APIs para el sistema operativo
- `fs` **File System** para leer archivos
- `path` Manejar rutas
- `http`: Modulo HTTP nativo de Node.js para crear servidores
- `os`: **Operative System** informacion del Sistema Operativo
- `process`: Proceso actual


Tanto los navegadores basados en Chromium, como Google Chrome, Brave, etc usan el motor V8.
V8 es el motor de ejecucion de JavaScript, que es el programa que interpreta y ejecuta JavaScript.
Node.js por tanto consiste en
- V8
- APIs de Servidor
- Sistema de modulos
- Herramientas backend

El objeto principal el navegador es `window`.
Mientras que en `Node.js`, el objeto global es `global`.
```js
console.log("Hola mundo desde Node.js");

// Es lo mismo que poner
global.console.log("Hola mundo desde Node.js");
```


---

## Modulos en `Node.js`
Los modulos permiten dividir el codigo en archivos reutilizables.
Sin modulos, todo quedaria en un solo archivo gigante.

`Node.js` usa modulos porque las aplicaciones backend suelen ser enormes:

- rutas
- controladores
- bases de datos
- autenticacion
- middlewares
- servicios
- utilidades

Los modulos ayudan a separar responsabilidades.
**En Node.js importaremos las funcionalides de forma explicita, mientras que el navegador nos las provee sin tener que importar nada**.

Node historicamente tuvo su propio sistema, `CommonJS`
```js
// Opcion 1: Importar modulo fs con la sintaxis vieja CommonJS
// Importamos el modulo File System que nos permite interactuar con el sistema de archivo
const fs = require("fs");

module.exports = coso;
```

Para JavaScript moderno, usamos `ECMAScript Modules`, `ESM` o `ES Modules`, una sintaxis mas moderna
```js
// Opcion 2: Importar modulo fs con la sintaxis moderna ESM
// Importamos el modulo File System que nos permite interactuar con el sistema de archivo
import fs from "fs";

export default coso;
```


## Practica en clase
```js
console.log("Hola mundo desde Node.js");

/*===========================
    Modulos en Node.js
=============================

Node.js tiene varios modulos integrados (nativos) que ya vienen listos para usar y nos permiten hacer cosas como trabajar con el sistema de archivos, manejar rutas o realizar tareas en red
*/

///////////////////////
// fs: File System -> Modulo que nos permite interactuar con el sistema de archivos, podremos leer, escribir, actualizar o borrar archivos de forma sencilla

// Hacemos como con las APIs Web, lo unico primero las importamos y luego podremos acceder a todos sus metodos
const fs = require("fs");

// Parametro 1: ruta al archivo, Parametro 2: tipo de encodificado, Parametro 3: funcionalidad una vez leido el archivo
fs.readFile("archivos/texto.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Ocurrio un error: ", err);
        return; // Terminamos la ejecucion de este bloque (no sigue ejecutando las siguientes lineas)
    }

    console.log("Contenido del archivo: ", data); 
});

// Caso de que exista el archivo:
// Contenido del archivo:  Holis! Soy un archivo de texto .txt
 
/*Caso de error, escribi archivosss.txt en lugar de archivo.txt

Ocurrio un error:  [Error: ENOENT: no such file or directory, open 'archivosss.txt'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'archivosss.txt'
}
*/


///////////////////////
/* path: Modulo que nos ayuda a manejar y manipular rutas de archivos y directorios de forma mas segura y comoda

Windows usa:
C:\carpeta\archivo.txt

Linux/macOS (ambos basados en UNIX) usan:
/carpeta/archivo.txt

path viene a resolver esas diferencias

    join()      une rutas
    basename()  obtiene nombre del archivo
    extname()   obtiene extension
    dirname()   obtiene carpeta
*/

// Obtener el nombre del archivo de una ruta completa
const path = require("path");

// Esto nos provee la ruta completa a un recurso en mi computadora
const ruta = path.join(__dirname, "archivos", "texto.txt");

// Esto sera fundamental mas adelante en nuestro proyecto cuando le indiquemos a nuestro proyecto la ruta para poder servir archivos estaticos .css, .js, img, etc
console.log(ruta); // /home/xabier/Escritorio/Docencia/2026/UTN2026_c1Div132/3_nodejs/archivos/texto.txt



///////////////////////
// os: Operative System -> Modulo que nos permite obtener info del sistema operativo
const os = require("os");

const memoriaLibre = os.freemem();
const tipoSistema = os.type();

console.log("Memoria libre: ", memoriaLibre); // Memoria libre:  6387765248
console.log("Tipo de Sistema Operativo: ", tipoSistema); // Tipo de Sistema Operativo:  Linux
```