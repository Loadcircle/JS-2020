//Crear Objetos de datos primitivos;

const string = new String('Cadena de caracteres');
const number = new Number(1977);
const boolean = new Boolean(true);
const n_funct = new Function('a','b', 'return a + b');
const objt = new Object({nombre: 'Jesus'});
const array = new Array('1', '2', '3')

const ejemplo = {
    nombre: 'Juan',
    saldo: 200,
    tipoCliente: function(){
        let tipo;
        if(this.saldo > 1000){
            tipo = 'Gold';
        }else{
            tipo = 'Normal';
        }
        return tipo;
    }
}

// Metodo alternativo clasico, se usan mayus para notar clase

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = ()=>{
        let tipo;
        if(this.saldo > 1000){
            tipo = 'Gold';
        }else{
            tipo = 'Normal';
        }
        return tipo;
    }
}

const cliente = new Cliente('Jesus', 23000);

// PROTOTYPE --------------------------------


function Usuario(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
// prototipo -- solo sera accesible por los objetos tipo Usuario; en prototype tampoco pasa el this en el arrow funct
Usuario.prototype.tipoCliente = function(){    
    let tipo;
    if(this.saldo > 1000){
        tipo = 'Gold';
    }else{
        tipo = 'Normal';
    }
    return tipo;
};
Usuario.prototype.NombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}, tipo de cliente ${this.tipoCliente() }.`
};
// Se actualiza el objeto
Usuario.prototype.retirarSaldo = function(monto){
    return this.saldo -= monto;
}

let usuario = new Usuario('jesus', 1500);


//-------------- Heredados 

function Empresa(nombre, saldo, telefono, tipo){
    Usuario.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

Empresa.prototype = Object.create(Usuario.prototype);

const empresa = new Empresa('Udemy', 100000, 123456789, 'Educación');


// --------------------------------- Object.create

const Persona = {
    imprimirSaldo: function(){
        return `hola ${this.nombre} tu saldo es ${this.saldo}`
    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro;
    }
}

const mary = Object.create(Persona);
mary.nombre = 'Mary';
mary.saldo = 5000;