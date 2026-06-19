/////////////////////
// Importaciones
import express from "express";
const app = express();
import environments from "./src/api/config/environments.js";
import { productRoutes } from "./src/api/routes/index.js";
import cors from "cors";
import { loggerURL } from "./src/api/middlewares/middlewares.js";


/////////////////////
// Config
const PORT = environments.port;



/////////////////////
// Middlewares
app.use(cors()); // Middleware basico para permitir todas las solicitudes

// Middleware para parsear JSON en las solcitudes POST y PUT
app.use(express.json()); // sin esto, recibe como undefined

app.use(loggerURL);




/////////////////////
// Endpoints
app.get("/", (req, res) => {
    res.send("Hola mundo");
});

//////////
// Rutas
app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);
// app.use("/login", authRoutes);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});