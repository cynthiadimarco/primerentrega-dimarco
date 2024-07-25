//info de empresa

let nombredeEmpresa = 'Herrerías Rojas';
let direcciondeEmpresa = 'Av. Siempre viva 123';
let trabajosRealizados = ['Escaleras', 'Ventanas', 'Puertas corredizas', 'Mesas', 'Rejas'];
console.log(nombredeEmpresa);
console.log(direcciondeEmpresa);
const horarioDeatencion = '8 a 18';
console.log(horarioDeatencion);
console.log("-");

//interaccion con el usuario

let nombreDeUsuario; 

if (confirm('¿Quieres ingresar tu información?')) {
    nombreDeUsuario = prompt('Ingrese su nombre y apellido');
    let producto = prompt('Ingrese el producto que le interesa');
    let ciudad = prompt('Ingrese la ciudad donde se haría el trabajo');
    if (confirm('¿Deseas confirmar la información ingresada? \nNombre: ' + nombreDeUsuario + '\nProducto: ' + producto + '\nCiudad: ' + ciudad)) {
        console.log('El cliente ' + nombreDeUsuario + ' está interesado por ' + producto + ' y se encuentra en ' + ciudad);
    } else {
        console.log('Su información ha sido cancelada.');
        alert('Su información ha sido cancelada.')
    }
} else {
    console.log('Ingreso de información inicial cancelado.');
    alert('Su información ha sido cancelada.')
}

function saludar(nombreDeUsuario) {
    return 'Hola ' + nombreDeUsuario + ', bienvenido/a a nuestra página web.';
}

if (nombreDeUsuario) { 
    let mensaje = saludar(nombreDeUsuario);
    console.log(mensaje);
    alert(mensaje) 
}

//info de los trabajos que realizamos

const trabajo1 = {
    trabajo: "puerta",
    estructura: "hierro",
    color: "blanco o negro",
    tamaño: "a eleccion"
}
const trabajo2 = {
    trabajo: "ventana",
    estructura: "hierro",
    color: "blanco o negro",
    tamaño: "130 x 80",
    vidrio: true
}
const trabajo3 = {
    trabajo: "reja",
    estructura: "hierro",
    color: "a eleccion",
    tamaño: "a eleccion"
}
const trabajo4 = {
    trabajo: "mesa",
    estructura: "hierro",
    color: "blanco o negro",
    tamaño: "180 x 90",
    tapa: "madera"

}

//funcion para mostrar la info de cada trabajo

function mostrarTrabajo(trabajo) {
    console.log("Trabajo:", trabajo.trabajo);
    console.log("Estructura:", trabajo.estructura);
    console.log("Color:", trabajo.color || "No especificado");
    console.log("Tamaño:", trabajo.tamaño || "No especificado");
    if (trabajo.hasOwnProperty('vidrio')) {
        console.log("Vidrio:", trabajo.vidrio ? "Sí" : "No");
    }
    if (trabajo.hasOwnProperty('tapa')) {
        console.log("Tapa:", trabajo.tapa);
    }
    console.log("-");
}

//info trabajos

mostrarTrabajo(trabajo1);
mostrarTrabajo(trabajo2);
mostrarTrabajo(trabajo3);
mostrarTrabajo(trabajo4);

//boton despedida

document.addEventListener("DOMContentLoaded", function() {
    const welcomeButton = document.getElementById('welcomeButton');
    const additionalMessage = document.getElementById('additionalMessage');

    welcomeButton.addEventListener('click', function() {
        additionalMessage.style.display = 'block';
    });
});








