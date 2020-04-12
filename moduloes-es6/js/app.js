//para ller una variable que fue exportada se debe importar
// import {nombreCliente, ahorro} from './cliente.js';
//se agrega * para importar todo
import * as cliente from './cliente.js';
import {ahorro as ahorroEmpresa} from './empresa.js';

console.log(cliente);

console.log(cliente.mostrarInfo(cliente.nombreCliente, cliente.ahorro));

const nc = new cliente.Cliente(cliente.nombreCliente, cliente.ahorro);

console.log(nc)

console.log(ahorroEmpresa);