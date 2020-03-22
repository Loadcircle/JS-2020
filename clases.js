class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
    tipoCliente(){
        let tipo;
        if(this.saldo > 1000){
            tipo = 'Gold';
        }else{
            tipo = 'Normal';
        }
        return tipo;
    }
    retirarSaldo(monto){
        this.saldo -= monto;
        return this.saldo;
    }
    //Atributo estatico, no requiere instancia

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const maria = new Cliente('Maria', 12500);
//llamar metodo estatico
console.log(Cliente.bienvenida()); 


//Extenciones, heredando de la clase Cliente
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, tipo){
        //va hacia el constructor padre
        super(nombre, saldo);
        //No existen en el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }
    //Se puede reusar, pero si quieres cambiar usar el mismo nombre
    static bienvenida(){
        return `Bienvenido al cajero para Empresas`;
    }
}

const empresa = new Empresa('Empresa1', 10000, 123456789, 'Construcción');