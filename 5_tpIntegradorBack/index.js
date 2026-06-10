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



/////////////////////
// Endpoints
app.get("/", (req, res) => {
    res.send("Hola mundo");
});

// GET all products
app.get("/api/products", async (req, res) => {
    // const sql = "SELECT * FROM products";
    // aca traere la conexion para tirarle sentencias
    const [rows, fields] = await connection.query("SELECT * FROM products");

    // console.log(rows);

    res.status(200).json({
        payload: rows
    });
});

// GET by id
app.get("/api/products/:id", async (req, res) => {

    const id = req.params.id; // Obtendo el valor que paso por la URL

    const [rows] = await connection.query("SELECT * FROM products where products.id = ?", [id]);

    // console.log(rows);

    res.status(200).json({
        payload: rows
    });
});


// POST product
app.post("/api/products", async (req, res) => {
    // Gracias al middleware app.use(express.json()); recibo el JSON como objeto JS al que le puedo aplicar el siguiente destrucuring
    console.log(req.body);
    /*{
        name: 'Milanesa con pure',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcomoquiero-uploads.s3-accelerate.amazonaws.com%2Fimages%2Frecipes%2F6348.webp&f=1&nofb=1&ipt=b5ddc310e8f55d56e45b50cd5d36060579357952f993b359785aa40496b7b8cd',
        category: 'food',
        price: '123'
    }*/
    
    const { name, image, category, price } = req.body;

    console.log(name);
    
    const sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)";

    await connection.query(sql, [name, image, category, price]);

    res.status(200).json({
        message: "Producto creado con exito"
    });
});


// UPDATE product
app.put("/api/products", async (req, res) => {
    const { id, name, image, price, category } = req.body;

    const sql = "UPDATE products SET name = ?, image = ?, price = ?, category = ?, WHERE id = ?";

    await connection.query(sql, [name, image, price, category, id]);

    return res.status(200).json({
        message: "Producto actualizado correctamente"
    });
});


// DELETE product
app.delete("/api/products/:id", async (req, res) => {
    const id = req.params.id;

    await connection.query("DELETE FROM products WHERE id = ?", [id]);

    res.status(200).json({
        message: `Producto con id ${id} eliminado exitosamente`
    });
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});