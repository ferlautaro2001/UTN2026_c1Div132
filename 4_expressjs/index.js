// Importamos Express
const express = require("express");

// Creamos una aplicacion de Express
const app = express(); // Creamos una instancia de la app express

// Definimos la ruta principal
app.get("/", (req, res) => {
    res.send("Hola mundo desde Express.js");
});

app.get("/api/products", async (req, res) => {
    const conexion = await db.connection("SELECT * FROM products")

    res.status(200).json({
        productos: conexion
    })
})

app.delete("/api/products")

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