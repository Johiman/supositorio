function cambiarTexto() {
    document.getElementById("texto").textContent = "¡Hola Mundo!";
}

function cambiarFondo() {
    let div = document.getElementById("fondo");
        div.style.backgroundColor = "yellow";
    }

function mostrarAlerta() {
        alert("¡Haz hecho clic!");
    }    
    
    function ocultarTexto() {
        let texto1 = document.getElementById('texto1');
        let boton = document.getElementById('boton');
        
        if (boton.textContent == 'Ocultar') {
            boton.textContent = 'Mostrar';
            texto1.style.display='none';
        }
        else {
            boton.textContent = 'Ocultar';
            texto1.style.display = 'block';
            texto1.textContent = 'Hola';
        } 
    }