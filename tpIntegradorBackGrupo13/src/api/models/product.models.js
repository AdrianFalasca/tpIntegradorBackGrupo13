import connection from "../database/db.js";


//////////////////////////
// Select all products //
const selectAllProducts = async () => {
    let sql = `SELECT * FROM products`;
    
    // Al usar [rows] la desestructuracion extrae directamente las filas, que es el primer resultado de la consulta, esto hace el codigo mas legible y explicito
    return await connection.query(sql);
}


/////////////////////////////
// Select product from id //
const selectProductFromId = async (id) => {
    let sql  = `SELECT * FROM products where id = ?`;

    return await connection.query(sql, [id]);
}


/////////////////////////
// Insert new product //
const insertNewProduct = async (category, image, name, price) => {
    let sql = `INSERT INTO products (category, image, name, price) VALUES (?, ?, ?, ?)`;

    return await connection.query(sql, [category, image, name, price]);
}


/////////////////////
// Update product //
const updateProduct = async (id, category, image, name, price) => {
    let sql = `
        UPDATE products
        SET name = ?, image = ?, price = ?, category = ?
        WHERE id = ?
    `;

    return await connection.query(sql, [name, image, price, category, id]);
}


/////////////////////
// Delete product //
const deleteProduct = async (id) => {
    let sql = `DELETE FROM products WHERE id = ?`;

    return await connection.query(sql, [id]);
}

export default {
    selectAllProducts,
    selectProductFromId,
    insertNewProduct,
    updateProduct,
    deleteProduct
}