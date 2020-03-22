const btn_agregar = document.getElementById('btn_agregar');
const div_agregar = document.getElementById('agregar_archivo');
let persona;

btn_agregar.onclick = cargarDatos;

function cargarDatos(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'ajax/datos.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            persona = JSON.parse(this.responseText);
            imprimir();
        }
    };

    xhr.send();

}

function imprimir(){
    let html = `<ul>`;
    for(let e in persona){
        html += `<li>${e}: ${persona[e]}</li>`;
    }
    html += `</ul>`;
    div_agregar.innerHTML = html;
}

const btn_agregar2 = document.getElementById('btn_agregar2');
const agregar_archivo_varios = document.getElementById('agregar_archivo_varios');
let personas;

btn_agregar2.onclick = cargarDatos2;

function cargarDatos2(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'ajax/multiples_datos.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            personas = JSON.parse(this.responseText);
            imprimir2();
        }
    };

    xhr.send();
}

function imprimir2(){
    

    personas.forEach(e=>{
        
        let html = `<ul>`;
        for(let p in e){
            html += `<li>${p}: ${e[p]}</li>`;
        }
        html += `</ul>`;

        agregar_archivo_varios.innerHTML += html;

    });
    
}
