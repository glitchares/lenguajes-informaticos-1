// =====================================================
// 1) MODO OSCURO / MODO CLARO
// Bootstrap 5.3 cambia los colores segun el atributo
// data-bs-theme de la etiqueta <html> ("light" u "dark").
// =====================================================
const html = document.documentElement;
const botonModo = document.getElementById("btn-modo");

function aplicarTema(tema) {
    html.setAttribute("data-bs-theme", tema);

    if (tema === "dark") {
        botonModo.textContent = "Modo claro";
    } else {
        botonModo.textContent = "Modo oscuro";
    }
}

if (botonModo) {
    // Si el usuario ya eligio un tema antes, se vuelve a usar
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado) {
        aplicarTema(temaGuardado);
    }

    botonModo.addEventListener("click", function () {
        let nuevoTema = "dark";
        if (html.getAttribute("data-bs-theme") === "dark") {
            nuevoTema = "light";
        }
        aplicarTema(nuevoTema);
        localStorage.setItem("tema", nuevoTema);
    });
}


// =====================================================
// 2) ACORDEON: boton "Abrir todas / Cerrar todas"
// Cada pregunta se abre y cierra con Bootstrap.
// Este boton usa la clase Collapse de Bootstrap desde JS.
// =====================================================
const botonFaq = document.getElementById("btn-toggle-faq");
const paneles = document.querySelectorAll("#accordionFaq .accordion-collapse");
let todasAbiertas = false;

if (botonFaq) {
    botonFaq.addEventListener("click", function () {
        todasAbiertas = !todasAbiertas;

        paneles.forEach(function (panel) {
            const collapse = bootstrap.Collapse.getOrCreateInstance(panel, { toggle: false });
            if (todasAbiertas) {
                collapse.show();
            } else {
                collapse.hide();
            }
        });

        if (todasAbiertas) {
            botonFaq.textContent = "Cerrar todas";
        } else {
            botonFaq.textContent = "Abrir todas";
        }
    });
}


// =====================================================
// 3) VALIDACION DEL FORMULARIO DE CONTACTO
// Solo se usa en contacto.html. Si falta algun campo
// obligatorio muestra un error, si no muestra exito.
// =====================================================
const formulario = document.getElementById("form-contacto");
const resultado = document.getElementById("resultado");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        // Evita que la pagina se recargue
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const fecha = document.getElementById("fecha_nacimiento").value;
        const programa = document.getElementById("programa").value;
        const disponibilidad = document.querySelector('input[name="disponibilidad"]:checked');

        const faltantes = [];

        if (nombre === "") {
            faltantes.push("Nombre completo");
        }
        if (email === "") {
            faltantes.push("Correo electrónico");
        } else if (!email.includes("@")) {
            faltantes.push("Correo electrónico válido");
        }
        if (telefono === "") {
            faltantes.push("Teléfono");
        }
        if (fecha === "") {
            faltantes.push("Fecha de nacimiento");
        }
        if (programa === "") {
            faltantes.push("Programa de interés");
        }
        if (disponibilidad === null) {
            faltantes.push("Disponibilidad");
        }

        if (faltantes.length > 0) {
            resultado.innerHTML =
                '<div class="alert alert-danger">Revisá estos campos: ' + faltantes.join(", ") + ".</div>";
        } else {
            resultado.innerHTML =
                '<div class="alert alert-success">¡Gracias, ' + nombre + "! Recibimos tu formulario.</div>";
            formulario.reset();
        }
    });
}