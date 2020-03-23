document.querySelector('#generar-nombre').onsubmit = cargarNombre;
let nombres;

function cargarNombre(e){
    e.preventDefault();

    const origen = document.getElementById('origen').value;
    const genero = document.getElementById('genero').value;
    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += 'http://uinames.com/api/?';

    if(origen !== ''){
        url += `region=${origen}&`;
    }
    if(genero !== ''){
        url += `gender=${genero}&`;
    }
    if(cantidad !== ''){
        url += `amount=${cantidad}&`;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function(){
        if(this.status === 200){
           nombres = JSON.parse(this.responseText);
           imprimir();
        }
    }

    xhr.send();

}

function imprimir(){
    let htmlNombres = '<h2>Nombres Generados</h2>';

    htmlNombres += '<ul class="lista">';

    nombres.forEach(nombre => {
        htmlNombres += `<li>${nombre.name} ${nombre.surname}</li>`
    });

    htmlNombres += '</ul>';

    document.getElementById('resultado').innerHTML = htmlNombres;
}