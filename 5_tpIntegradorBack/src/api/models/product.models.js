/*================================
    Modelos de producto
================================*/

import connection from "../database/db.js";


/////////////////////////////////
// Traer todos los productos
const selectAllProducts = () => {
    // Optimizacion 3: Sacamos * para evitar traer columnas innecesarias -> Mas eficiente en memoria y peticion de red. Ademas separamos la sentencia en una variable
    const sql = "SELECT id, name, price, image FROM products";
    return connection.query(sql);
}



/////////////////////////////////
// Traer producto por id
const selectProductById = (id) => {
    // Optimizacion 4: Guardamos la consulta sql en una variable y la optimizamos pidiendo solo los campos requereidos
    const sql = "SELECT id, name, price, image FROM products where products.id = ?";
    return connection.query(sql, [id]);
}



/////////////////////////////////
// Crear producto
const insertNewProduct = (name, image, category, price) => {
    const sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)";
    
    // Optimizacion 3: Devolvemos la respuesta en un rows para devolver info util como el id asignado al nuevo producto
    return connection.query(sql, [name, image, category, price]);
}



/////////////////////////////////
// Modificar producto
const updateProduct = (name, image, price, category, id) => {
    const sql = "UPDATE products SET name = ?, image = ?, price = ?, category = ? WHERE id = ?";
    
    // Guardamos el resultado de la conexion que nos bridara info para la optimziacion
    return connection.query(sql, [name, image, price, category, id]);
}



/////////////////////////////////
// Eliminar producto
const deleteProduct = (id) => {
    const sql = "DELETE FROM products WHERE id = ?";

    return connection.query(sql, [id]);
}


export default {
    selectAllProducts,
    selectProductById,
    insertNewProduct,
    updateProduct,
    deleteProduct
}