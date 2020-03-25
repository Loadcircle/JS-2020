//SYMBOL 
//es un valor primitivo 

const simbolo = Symbol();

const simbolo2 = Symbol('Descripcion aqui');

console.log(simbolo2);

//cada simbolo es diferente
console.log(Symbol() === Symbol()); //return false

let nombre = Symbol();
let apellido = Symbol();

let persona = {};

persona.nombre = 'Juan'
persona[apellido] = 'Milano';

console.log(persona);
console.log(persona[apellido]);

// SETS --------------------------------------------

let carrito = new Set([1,2,3,4]);

carrito.add('Camisa');
carrito.add('Polo');
carrito.add('Camisa');

//un set no agrega duplicados

console.log(carrito);

console.log(carrito.has('Camisa'));

carrito.delete('Camisa');
// carrito.clear(); //limpia todo el set

//los sets se pueden iterar

carrito.forEach(e=>console.log(e));

//Agregar un set a un arreglo

const newCarrito = [...carrito];
console.log(newCarrito)

//MAPSSS

let map = new Map();

map.set('nombre', 'Karen');

console.log(map)
map.size;
map.has('valor');


//iteradores
function crearIterador(carrito){
    let i = 0;
    return{
        siguiente: ()=>{
            let fin = (i >= carrito.length);

            let valor = !fin ? carrito[i++] : undefined ;

            return {
                fin: fin,
                valor: valor,
            }
        }
    }
}

const carrito2 = ['producto1', 'producto2', 'producto3', 'producto4'];

const recorrerCarrito = crearIterador(carrito2);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());


//generadores 

function *crearGenerador(){
    //usar palabra reservada yield
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true;

}

const generador = crearGenerador();

console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)