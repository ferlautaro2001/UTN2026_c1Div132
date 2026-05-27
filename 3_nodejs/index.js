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
