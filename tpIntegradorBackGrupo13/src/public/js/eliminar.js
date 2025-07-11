const url = "http://localhost:3000/api";
let getProduct_form = document.getElementById("getProduct-form");
let getId_lista = document.getElementById("getId-list");

getProduct_form.addEventListener("submit", async (event) => {

    event.preventDefault(); // Evitamos el envio por defecto del formulario

    try {

        ///////////////////
        // Optimizacion 1: Mostrar el estado de carga
        getId_lista.innerHTML = "<p>Cargando producto...</p>";


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
            throw new Error(`Error ${response.status}: ${response.statusText}. Id no encontrado`); // Error 404: Not Found
        }


        let datos = await response.json();
        console.log(datos);


        ///////////////////
        // Optimizacion 5: Verificamos si existen productos en la respuesta
        if(!datos.payload || datos.payload.length === 0) {
            throw new Error("No se encontro el producto solicitado")
        }
        

        let producto = datos.payload[0];

        mostrarProducto(producto);

    } catch (error) {
        console.error("Error al obtener el producto: ", error);

        ///////////////////
        // Optimizacion 6: Escribir un mensaje de error
        getId_lista.innerHTML = `<p>${error.message}</p>`
    }
});

function mostrarProducto(producto) {
    // Le agregamos el boton que permita actualizar este producto encontrado
    let htmlProducto = `
            <li class="li-listados productos-listados">
                <div class="li-listados_datos">
                    <p>Id: ${producto.id} / Nombre: ${producto.name} / <strong>Precio: $${producto.price}</strong></p>
                    <img src="${producto.image}" alt="${producto.nombre}" class="img-listados">
                </div>
                <div class="li-listados_boton">
                    <input class="listados_boton" id="deleteProduct_button" type="button" value="Eliminar producto">
                </div>
            </li>
        `;

        getId_lista.innerHTML = htmlProducto;

        let idProd = producto.id;
        let deleteProduct_button = document.getElementById("deleteProduct_button");

        deleteProduct_button.addEventListener("click", function(event) {

            event.stopPropagation();

            let confirmacion = confirm("Querés eliminar este producto?");

            if(!confirmacion) {
                alert("Eliminacion cancelada")
            } else {
                eliminarProducto(idProd);
            }
        });
}

async function eliminarProducto(id) {
    try {
        let response = await fetch(`${url}/products/${id}`, {
            method: "DELETE"
        });

        let result = await response.json();

        if(response.ok) {
            alert(result.message);
            getId_lista.innerHTML = ""; 
            window.location.href = "/dashboard";
            return true;

        } else {
            console.error("Error:", result.message);
            alert("Ocurrio un error al eliminar un producto");
            return false;
        }

    } catch (error) {
        console.error("Error en la solicitud DELETE:", error);
        alert("Ocurrio un error al eliminar un producto");
        return false;
    }
}

