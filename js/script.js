let nombredeEmpresa = 'Herrerías Rojas';
let direcciondeEmpresa = 'Av. Siempre viva 123';
let trabajosRealizados = ['Escaleras', 'Ventanas', 'Puertas corredizas', 'Mesas', 'Rejas'];
console.log(nombredeEmpresa);
console.log(direcciondeEmpresa);

const horarioDeatencion = '8 a 18';
console.log(horarioDeatencion);

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




