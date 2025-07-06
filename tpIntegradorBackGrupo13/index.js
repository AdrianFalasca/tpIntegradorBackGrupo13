////////////////////
// Importaciones //
import express from "express";
import environments from "./src/api/config/environments.js";
import cors from "cors";
import { productRoutes, viewRoutes } from "./src/api/routes/index.js";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { __dirname, join } from "./src/api/utils/index.js";


const app = express();
const PORT = environments.port;


// Configuramos EJS como motor de plantillas
app.set("view engine", "ejs");

// Le indicamos a la aplicacion desde que ruta va a servir vistas desde raizProyecto/src/views
app.set("views", join(__dirname, "src/views"));

// Middleware para servir archivos estaticos
app.use(express.static(join(__dirname, "src/public")));


//////////////////
// Middlewares //

// Middlewares de aplicacion: Aplicados a nivel global para todas las solicitudes: autenticacion, registro de solicitudes o logging, analisis del cuerpo de la solicitud body parsing
// Middleware para parsear el JSON del body en peticiones POST, PUT o PATCH
app.use(express.json()); 

// Middleware CORS basico que permite todas las solicitudes
app.use(cors()); 

// Middleware logger para analizar y logear todas las solicitudes
app.use(loggerUrl);


////////////
// Rutas //

// Rutas de productos de nuestra API Rest
app.use("/api/products", productRoutes);

// Rutas de las vistas EJS
app.use("/dashboard", viewRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})