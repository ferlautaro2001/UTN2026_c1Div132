/////////////////////
// Importaciones
import express from "express";
const app = express();
import environments from "./src/api/config/environments.js";
import connection from "./src/api/database/db.js";
import cors from "cors";


/////////////////////
// Config
const PORT = environments.port;



/////////////////////
// Middlewares
app.use(cors()); // Middleware basico para permitir todas las solicitudes

// Middleware logger para analizar todas las solicitudes por consola (tener el historial del consumo de nuestra Api REST en la consola)
app.use((req, res, next) => {
    let fecha = new Date();
    console.log(`[${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}] ${req.method} ${req.url}`);
    
    next(); // next() da paso a que continue la respuesta o el siguiente middleware (en caso de haberlo)
});

// Middleware para parsear JSON en las solcitudes POST y PUT
app.use(express.json()); // sin esto, recibe como undefined

/* Para un eventual envio nativo de datos con HTML <form>
app.use(
    express.urlencoded({
        extended: true,
        inflate: true,
        limit: "1mb",
        parameterLimit: 5000,
        type: "application/x-www-form-urlencoded",
    })
);*/


// Middleware de ruta (se aplica en ciertos endpoints)
const validateId = (req, res, next) => {
    const id = Number(req.params.id); // Transformo el id a un numbero

    // Si no es un entero o es 0 o inferior, devuelvo una respuesta 400 (Bad Request)
    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            error: "El id debe ser un numero entero positivo"
        });
    }

    // Incorporo el id a la req
    req.id = id;

    next(); // Damos paso al siguiente middleware o a procesar la respuesta
}

// Middleware de ruta para validar los campos de un formulario POST
const categoriasValidas = ["food", "drink"];
const validateProduct = (req, res, next) => {

    // Recogemos los datos del body
    const { name, price, category } = req.body;

    // Array vacio de errores
    const errores = [];

    // Validamos si se recibieron todos del body
    if (!name || !category || !price) {
        errores.push("Datos invalidos, asegurate de incluir todas las categorias");
    }

    if (typeof name !== "string" || name.trim().length < 2) {
        errores.push("El nombre debe tener al menos 2 caracteres");
    }

    if (typeof price !== "number" || price <= 0) {
        errores.push("El precio debe ser un numero mayor a 0");
    }

    if(!categoriasValidas.includes(category)) {
        errores.push("Categoria invalida");
    };

    // Detectamos si existe algun error en la lista y lo devolvemos en un 400
    if (errores.length > 0) {
        return res.status(400).json({
            message: "Datos invalidos", errores
        });
    }

    next();
}





/////////////////////
// Endpoints
app.get("/", (req, res) => {
    res.send("Hola mundo");
});


// GET all products
app.get("/api/products", async (req, res) => {

    // Optimizacion 1: Manejo de errores con try...catch
    try {
        // Optimziacion 3: Sacamos * para evitar traer columnas innecesarias -> Mas eficiente en memoria y peticion de red. Ademas separamos la sentencia en una variable
        const sql = "SELECT id, name, price, image FROM products";
        const [rows, fields] = await connection.query(sql);

        // Optimizacion 4: En caso de no haber productos, devolvemos un 404
        if (rows.length === 0) {
            return res.status(404).json({
                message: "No se encontraron productos"
            });
        }
    
        res.status(200).json({
            payload: rows,
            total: rows.length // Optimizacion 5: Tambien enviamos el total de productos
        });

    } catch (error) {
        console.log("Error obteniendo los productos: ", error);

        // Optimizacion 2: Devolvemos un codigo de estado 500
        res.status(500).json({
            message: "Error interno al obtener productos"
        });
    }
});


// GET by id
app.get("/api/products/:id", validateId, async (req, res) => {

    // Optimizacion 1: Manejamos errores con try...catch
    try {
        // Optimizacion 2: Delegamos al middleware validateId recoger el valor y limpiarlo
        //const id = req.params.id; // Obtendo el valor que paso por la URL
    
        // Optimizacion 4: Guardamos la consulta sql en una variable y la optimizamos pidiendo solo los campos requereidos
        const sql = "SELECT id, name, price, image FROM products where products.id = ?";
        const [rows] = await connection.query(sql, [req.id]);
    
        // Optimizacion 5: Devolveremos un codigo de estado 404 (Not Found) si no existe ningun producto con ese id
        if (rows.length === 0) {
            return res.status(404).json({
                message: `No se encontró producto con id ${req.id}`
            });
        }
    
        res.status(200).json({
            payload: rows
        });

    } catch (error) {
        console.log(`Error obteniendo producto con id ${req.id}`, error.message);

        // Optimizacion 3: Devolvemos un error 500
        res.status(500).json({
            message: `Error interno al obtener un producto con id ${req.id}`
        });
    }
});


// POST product
app.post("/api/products", validateProduct, async (req, res) => {

    // Optimizacion 1: Validamos los campos en el middleware validateProduct

    // Optimizacion 2: Manejamos los errores en un bloque try...catch

    try {
        // Gracias al middleware app.use(express.json()); recibo el JSON como objeto JS al que le puedo aplicar el siguiente destrucuring
        console.log(req.body);
        /*{
            name: 'Milanesa con pure',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcomoquiero-uploads.s3-accelerate.amazonaws.com%2Fimages%2Frecipes%2F6348.webp&f=1&nofb=1&ipt=b5ddc310e8f55d56e45b50cd5d36060579357952f993b359785aa40496b7b8cd',
            category: 'food',
            price: '123'
        }*/
        
        // Recogemos los datos limpios del body
        const { name, image, category, price } = req.body;


        const sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)";
    
        // Optimizacion 3: Devolvemos la respuesta en un rows para devolver info util como el id asignado al nuevo producto
        const [rows] = await connection.query(sql, [name, image, category, price]);
    
        // Optimizacion 4: En lugar de 201, devolvemos un 201 "Created"
        res.status(200).json({
            message: "Producto creado con exito",
            productId: rows.insertId
        });

    } catch (error) {
        console.log(error);

        // Optimizacion 5: Devolvemos un codigo de estado 500
        res.status(500).json({
            message: "Error interno del servidor"
        })
    }
});


// UPDATE product
app.put("/api/products", async (req, res) => {
    // Gracias al middleware app.use(express.json()); ahora en lugar de un JSON, nuestro endpoint recibe un objeto
    const { id, name, image, price, category } = req.body;

    const sql = "UPDATE products SET name = ?, image = ?, price = ?, category = ? WHERE id = ?";

    await connection.query(sql, [name, image, price, category, id]);

    return res.status(200).json({
        message: "Producto actualizado correctamente"
    });
});


// DELETE product
app.delete("/api/products/:id", validateId, async (req, res) => {

    // Optimizacion 1: Manejamos los errores en un bloque try catch
    try {
        // Optimizacion 2: Reaprovechamos el middleware de ruta validateId
        // const id = req.params.id;
    
        await connection.query("DELETE FROM products WHERE id = ?", [req.id]);
    
        // OPCIONAL, la convencion REST habria que devolver para un DELETE exitoso, un codigo 204 No Content
        res.status(200).json({
            message: `Producto con id ${req.id} eliminado exitosamente`
        });

    } catch (error) {
        console.log(`Error en peticion DELETE`, error);

        // Optimizacion 3: Enviamos una respuesta 500 al cliente
        res.status(500).json({
            message : "Error interno del servidor"
        });
    }
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});