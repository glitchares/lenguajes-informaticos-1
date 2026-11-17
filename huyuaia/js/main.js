//index.html

//ciudad.html

//lugares.html

//contacto.html
const formContacto = document.getElementById("form-contacto");

if(formContacto){
    const resultado = document.getElementById("resultado");


    const mostrarMensaje = (texto, tipo) => {
        resultado.textContent = texto;

        resultado.classList.remove("alert", "alert-danger", "alert-success");

        resultado.classList.add("alert");
        
        if(tipo == "error"){
            resultado.classList.add("alert-danger");    
        }else{
            resultado.classList.add("alert-success");
        }
    };

    formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const fecha = document.getElementById("fecha_nacimiento").value;
        const programa = document.getElementById("programa").value

        const disponibilidad = document.querySelector('input[name="disponibilidad"]:checked')

        if(nombre === "" || email === "" || fecha === ""){
            mostrarMensaje("Completá todos los campos obligatorios.", "error");
            return;
        }

        if(programa == ""){
            mostrarMensaje("Elegí un programa de interés.", "error");
            return;
        }

        if (disponibilidad === null){
            mostrarMensaje("Elegí tu disponibilidad", "error");
            return;
        }

        if(!email.includes("@") || !email.includes(".")){
            mostrarMensaje("Ingresá un correo electrónico válido.", "error")
            return;
    }

    mostrarMensaje("Gracias por ser parte! Recibimos tus datos.", "exito");
   formContacto.reset();

});
    
}