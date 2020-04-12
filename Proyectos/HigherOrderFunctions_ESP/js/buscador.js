// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function obtenerAutos(){
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}

let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

const autos = obtenerAutos();

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos);
});

const marca = document.getElementById('marca');
marca.oninput = (e)=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
};
const year = document.getElementById('year');
year.oninput = (e)=>{
    datosBusqueda.year = Number(e.target.value);
    filtrarAuto();
};
const minimo = document.getElementById('minimo');
minimo.oninput = (e)=>{
    datosBusqueda.minimo = Number(e.target.value);
    filtrarAuto();
};
const maximo = document.getElementById('maximo');
maximo.oninput = (e)=>{
    datosBusqueda.maximo = Number(e.target.value);
    filtrarAuto();
};
const puertas = document.getElementById('puertas');
puertas.oninput = (e)=>{
    datosBusqueda.puertas = Number(e.target.value);
    filtrarAuto();
};
const transmision = document.getElementById('transmision');
transmision.oninput = (e)=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
};
const color = document.getElementById('color');
color.oninput = (e)=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
};



function mostrarAutos(autos){

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    autos.forEach(e=>{
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
        ${e.marca} ${e.modelo} - ${e.year}
         - ${e.puertas} Puertas - Precio: ${e.precio} 
         - ${e.color} - ${e.transmision}`;
        resultado.appendChild(autoHTML);
    });

}
function noResultados(){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h2>Lo sentimos, no tenemos autos diponibles con esas caracteristicas</h2>`;

}
function filtrarAuto(){
    //automaticamente esta enviando obtenerAutos como parametro a filtrar marca
    const resultado = obtenerAutos()
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuerta)
        .filter(filtrarTransmision)
        .filter(filtrarColor);

    console.log(resultado);

    if(resultado.length > 0){
        mostrarAutos(resultado);
    }else{
        noResultados();
    }
}

function filtrarMarca(auto){
    //auto recibe el arreglo que se ejecuto el filter
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    } else {
        return auto;
    }
}
function filtrarYear(auto){
    //auto recibe el arreglo que se ejecuto el filter
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    } else {
        return auto;        
    }
}
function filtrarMinimo(auto){
    //auto recibe el arreglo que se ejecuto el filter
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    } else {
        return auto;        
    }
}
function filtrarMaximo(auto){
    //auto recibe el arreglo que se ejecuto el filter
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    } else {
        return auto;        
    }
}
function filtrarPuerta(auto){
    //auto recibe el arreglo que se ejecuto el filter
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    } else {
        return auto;        
    }
}
function filtrarTransmision(auto){
    //auto recibe el arreglo que se ejecuto el filter
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } else {
        return auto;        
    }
}
function filtrarColor(auto){
    //auto recibe el arreglo que se ejecuto el filter
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    } else {
        return auto;        
    }
}