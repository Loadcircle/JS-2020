import '../css/style.css';
import '../scss/style.scss';

const carrito = ['Producto 1','Producto 2','Producto 3','Producto 4','Producto 5'];

class Cliente{
    constructor(nombre){
        this.nombre = nombre;
    }
}

const cliente = new Cliente('Jesus');

console.log('desde el inicio' + carrito);
