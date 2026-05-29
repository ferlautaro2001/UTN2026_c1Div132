// Importamos el modulo http: que nos permitira crear un servidor web sin tener que instalar nada adicional
const http = require("http");

// Creamos el servidor
const servidor = http.createServer((req, res) => { // Funcion flecha que incorpora objetos req y res

    // Configuramos la respuesta
    res.statusCode = 200; // 200 OK respuesta exitosa

    res.setHeader("Content-Type", "text/plain"); // Indicamos que responderemos con texto

    res.end("Hola mundo desde un servidor en Node.js"); // Mensaje que le enviamos al cliente
});


// Definimos el puerto y arrancamos el servidor
const puerto = 3000;
servidor.listen(puerto, () => {
    console.log(`Servidor Node.js corriendo en http://localhost:${puerto}`);
});

/* ===============
    Explicacion
==================

    1. Importamos el modulo http: Que nos da accesoa  todas las funcionalidades necesarias para crear un servidor

    2. Crear un servidor: Utilizamos el metodo http.createServer para definir un servidor que escuche las solicitudes de los clientes y les responda

    3. Creamos la respuesta del servidor: El servidor siempre respondera con el mensaje "Hola mundo desde un servidor en Node.js"

    4. Escuchar en un puerto: El servidor se ejecuta en el puerto 3000 (puede ser cualquier puerto libre) y muestra un mensaje en la consola cuando esta listo
*/

