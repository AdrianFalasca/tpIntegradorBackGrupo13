const url = "http://localhost:3000/api";
let altaProducts_form = document.getElementById("altaProducts-form");

altaProducts_form.addEventListener("submit", async(event) => {

    event.preventDefault(); // Evitamos el envio por defecto del formulario

    let formData = new FormData(event.target); // Obtenemos la data del formulario

    let data = Object.fromEntries(formData.entries()); // Convertimos a objeto JS nuestro objeto formulario

    // Validamos datos previamente en el cliente
    if(!data.name || !data.image || !data.price) {
        alert("Todos los campos son obligatorios!");
        return;
    }

    try {
        let response = await fetch(`${url}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        if(response.ok) {

            let result = await response.json();
            alert(result.message);

            altaProducts_form.reset(); 
            window.location.href = "/dashboard";

        } else {
            let error = await response.json();
            console.log("Error:", error.message);
        }

    } catch(error) {
        console.error("Error al enviar los datos", error);
        alert("Error al enviar la solicitud");
    }

})
