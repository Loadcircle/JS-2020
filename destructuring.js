//extras de ecmascript DESTRUCTURING A OBJETOS-------------------------------------------------
//destructuring

const cliente = {
    nombre: 'Jesus',
    tipo: 'Premium'
}

var nombre = 'CARLOS'
//No importa si existe una variable de igual nombre, el destructuring busca al arreglo asignado
//hace un mapeo por orden, el primero con el primero, 2do con 2do y asi
var {nombre,tipo} = cliente;

console.log(nombre,tipo)

//OBJETO COMPLETO

const persona = {
    nombre: 'Jesus',
    datos: {
        ubicacion: {
            ciudad: 'lima',
            distrito: 'magdalena'
        },
        cuenta: {
            tipo: 'ahorro',
            tarjeta: 'visa',
        }
    }
}

// le decimos que busque en el campo "datos" y asignamos por orden: ubicacion, cuenta del obejto persona;
//se le puede asignar valor por defecto (null)
const {datos: {ubicacion, cuenta = null}} = persona;

console.log(ubicacion);
console.log(cuenta);

//DESTRUCTURING A ARREGLOS-------------------------------------------------

const arreglo = [1,2,3,4,5,6,7];

const [arreglo1, arreglo2] = arreglo;

//si solo quiero los ultimos o uno del medio 

const [ , , , arreglo4] = arreglo

//ejemplo avanzado

const ejemplo = {
    tipo2: 'Premium',
    saldo: 3000,
    datos: {
        nombre: 'Pedro',
        apellido: 'Perez',
        direccion: {
            ciudad : 'Lima'
        }
    },
    movimientos: [12,13,15]
}
//debe hacer match el nombre
let {tipo2,
    saldo,
    datos,
    datos: {direccion} ,
    movimientos,
    movimientos: [uno, dos]
} = ejemplo;


//Destructuring a funciones


function reservacion(completo, opciones){
    opciones = opciones || {};
    
    //forma anterior
    // let metodo = opciones.metodoPago,
    //     cantidad = opciones.monto,
    //     dias = opciones.dias;
    //forma nueva
    let {metodoPago, monto, dias} = opciones;
    console.log(metodoPago, monto, dias)

}

reservacion(
    true,
    {
        metodoPago: 'visa',
        monto: '2000',
        dias: 3,
    }
);