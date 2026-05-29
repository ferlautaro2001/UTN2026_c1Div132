# [Express.js](https://www.npmjs.com/package/express)
`Express.js` es una libreria que funciona sobre Node.js, diseñada para facilitar la creacion de servidores web y aplicaciones mas robstas. Simplifica el manejo de rutas, peticiones HTTP, respuestas y otras tareas comunes en el desarrollo de backend.

Basicamente, un framework minimalista que nos permite crear servidores de manera mas rapida y con menos lineas de codigo que usando el modulo nativo de Node.js. Entre sus ventajas destacamos

- Es ligero y flexible
- Permite manejar rutas facilmente
- Simplifica el manejo de middlewares (funciones intermedias entre la req y la res)
- Cuenta con un gran ecositema de modulos y herramientas

## Instalando [Express.js](https://www.npmjs.com/package/express)
Para comenzar a usar `Express.js`, teemos que instalarlo en nuestro proyecto. Supongamos que ya tenemos Node.js y npm instalados, seguiremos los siguientes pasos

#### 1. Creamos un proyecto Node.js
Abrimos la terminal y navegamos hasta la carpeta donde querramos crear el proyecto y ejecutamos

```sh
npm init -y
```

Esto nos generara un archivo `package.json` con la configuracion inicial, que hará de librito de instrucciones o mapa de nuestro proyecto

#### 2. Creamos el `index.js` e instalamos Express
```sh
touch index.js # Creamos el archivo principal de la app

npm i express # Instalamos el framework Express
```

#### 3. Evitamos el envio de git de todos los modulos que usa el framework Express
```sh
# Creamos un archivo .gitignore
touch .gitignore
```
Dentro de `.gitignore` pegamos la instruccion node_modules para evitar que git pushee esta carpeta
```
node_modules
```

Cuando clonen o traigan los cambios de estre proyecto y quieran usar todas las dependencias, instalenlas con `npm install` o `npm i`

#### 4. Creamos nuestro servidor con `Express.js`
```js
// Importamos Express
const express = require("express");

// Creamos una aplicacion de Express
const app = express(); // Creamos una instancia de la app express

// Definimos la ruta principal
app.get("/", (req, res) => {
    res.send("Hola mundo desde Express.js");
});

// Escuchamos en el puerto 3000
const puerto = 3000;
app.listen(puerto, () => {
    console.log(`Servidor Express corriendo en el puerto ${puerto}`)
});

/* ===============
    Explicacion
==================

    1. Importar Express: Traemos la libreria Express al archivo

    2. Creamos una aplicacion: Llamamos a la funcion express() que devuelve una instancia de la aplicacion

    3. Definimos una ruta: Usamos app.get para definir que hacer cuando alguien visite la raiz "/" de nuestro servidor. Aca responderemos con un simple "Hola mundo desde Express.js"

    4. Escuchar en un puerto: Igual que hicimos en Node.js con el modulo http nativo, nuestro servidor Express esta escuchando en el puerto 3000 y listo para aceptar conexiones
*/
```