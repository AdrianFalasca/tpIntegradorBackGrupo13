const url = "http://localhost:3000/api";
let getProduct_form = document.getElementById("getProduct-form");
let getId_lista = document.getElementById("getId-list");

getProduct_form.addEventListener("submit", async (event) => {

    event.preventDefault(); // Evitamos el envio por defecto del formulario

    try {

        ///////////////////
        // Optimizacion 1: Mostrar el estado de carga
        getId_lista.innerHTML = "<p>Cargando usuario...</p>";


        // Queremos extraer la informacion de los campos del formulario!
        // Este es un objeto JavaScript especifico de informacion de formularios HTML
        let formData = new FormData(event.target); 

        // Transformamos el objeto FormData en un objeto JS normal
        let data = Object.fromEntries(formData.entries());
        console.log(data);

        // Ahora que obtenemos el objeto con el campo de idProd, vamos a guardarlo en una variable
        

        ///////////////////
        // Optimizacion 2: Eliminamos posibles espacios con .trim()
        let idProd = data.idProd.trim(); 
        console.log(idProd);


        ///////////////////
        // Optimizacion 3: Validacion basica
        if(!idProd) {
            throw new Error(`Error en el envio de datos del formulario`);
        }

        let response = await fetch(`${url}/products/${idProd}`);

        ///////////////////
        // Optimizacion 4: Manejamos el error en una posible respuesta no existosa
        if(!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`); // Error 404: Not Found
        }


        let datos = await response.json();
        console.log(datos);


        ///////////////////
        // Optimizacion 5: Verificamos si existen productos en la respuesta
        if(!datos.payload || datos.payload.length === 0) {
            throw new Error("No se encontro el producto solicitado")
        }
        


        // Guardamos nuestro producto en una variable
        let producto = datos.payload[0];
        console.log(producto); 

        let htmlProducto = `
            <li id="producto-encontrado" class="li-listados productos-listados">
                <img src="${producto.image}" alt="${producto.name}" class="img-listados">
                <p>Id: ${producto.id} / Nombre: ${producto.name} / <strong>Precio: ${producto.price}$</strong></p>
            </li>
        `;

        getId_lista.innerHTML = htmlProducto;

    } catch (error) {
        console.error("Error al obtener el producto: ", error);

        ///////////////////
        // Optimizacion 6: Escribir un mensaje de error
        getId_lista.innerHTML = `<p>${error.message}</p>`
    }
})
