
// confirm('Deseas continuar?');

const nombre = 'Jesus', 
apellido = 'Milano';

console.time('Duración');
console.log('log simple');
console.table([1, 2, 3, 4]);
console.warn('warning');
console.error('Error');
console.timeEnd('Duración');

console.log(`Mi nombre es ${nombre} ${apellido}`);

const funct = ()=>{
    console.log('Esto es una funcion');
}
console.log(typeof nombre);
console.log(typeof funct);

//ARREGLOS  -----------------------------------------------------------------------------

//Moderno 
const new_array = new Array(1,2,3,4);
//Igual a 
const array = [1,2,3,4];

console.log(Array.isArray(array));
console.log(Array.isArray(new_array));
//Agregar al final
array.push(5);
//Agregar en la posición
array[6] = 6;
//Agregar al inicio
array.unshift('00');
//Eliminar al final de un arreglo
array.pop();
//Eliminar al inicio
array.shift();
//Eliminar por rango 
array.splice(2,1);
//Revertir orden
array.reverse();
//Unir arreglos

array.concat(new_array);

console.log(array.indexOf(5));
console.log(array);


//Ordenar arreglo por letras, funciona para string de numeros
let string_array = new Array('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes');
string_array.sort();
console.log(string_array);
//Ordenar por Numero
let number_array = [2,3,65,1,4,8,9,54,0,3];
number_array.sort((a,b)=>{
    return a - b;
    //Ordenar descendente
    // return b - a;
});
console.log(number_array);

//Objetos ----------------------------

const persona = {
    nombre: 'Jesus',
    apellido: 'Milano',
    edad: 24,
    profesion: 'Programador',
    lenguajes: ['Español', 'Ingles'],
    direccion: {
        pais: 'Perú',
        ciudad: 'Lima',
        distrito: 'Magdalena'
    },
    nacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
}
//Arrow function no pueden recibir 'this'
console.table(persona);

console.log(persona.nacimiento());

let contenido = `<ul>`;

for (let p in persona){
    if(p != 'direccion' && p != 'nacimiento'){
        contenido += `<li>${p}: ${persona[p]}</li>`;
    }
}
contenido += `</ul>`

document.body.innerHTML = contenido;

//TRY - CATCH - FINALLY

try{
    console.log(algo);
}catch(error){
    console.log(error);
}finally{
    console.log('esto se ejecuta siempre');
}



//Metodos recorrer arreglos

const pendientes = ['Tarea', 'Arriendo', 'Vida', 'Trabajo'];

pendientes.forEach((e, i)=>{
    console.log(`Indice: ${i}, elemento: ${e}`);
});

const carrito = [
    {id: 1, producto: 'libro'},
    {id: 2, producto: 'camisa'},
    {id: 3, producto: 'guitarra'},
    {id: 4, producto: 'carro'},
];

const nombreProducto = carrito.map((e)=>{
    return e.producto;
});

console.log(nombreProducto);


const automovil = {
    modelo: 'chevro',
    anio: 2012,
    motor: 6.2,
}

for (let auto in automovil){
    console.log(`${auto}: ${automovil[auto]}`);
}


////------------------ 
const ciudades = ['londres', 'paris', 'newyork', 'madrid'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map();

datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador');

console.log(ciudades);
console.log(ordenes);
console.log(datos);

console.log(datos);

const just_string = 'Un string cualquiera para iterar'

for(let e of just_string){
    console.log(e);
}
for(let e of datos.entries()){
    console.log(e);
}
for(let e of datos.values()){
    console.log(e);
}
for(let e of datos.keys()){
    console.log(e);
}

console.log(window.location);
console.log(window.navigator);
//go back
// window.history.go(-1);

let ul = document.getElementsByTagName('ul');

ul[0].lastChild

ul[0].lastElementChild

ul[0].lastChild.classList

ul[0].firstElementChild

ul[0].firstChild

ul[0].childElementCount

padre.replaceChild(NuevoElemento, ElementoExistente);

elemento.remove();

padre.removeChild(elemento);

elemento.hasAttribute('attr');


//convierte el objeto a un arreglo
console.log( Object.entries(monedas.Data) )