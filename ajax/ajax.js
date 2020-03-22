const btn_agregar = document.getElementById('btn_agregar');
const div_agregar = document.getElementById('agregar_archivo');

btn_agregar.onclick = cargarDatos;

function cargarDatos(){
    //crear objeto xmlhttp
    const xhr = new XMLHttpRequest();

    //abrir conexión
    xhr.open('GET', 'ajax/texto.txt', true);

    //Una vez cargado
    //Si uso arrow function, no funciona el this, se debe usar el xhr
    xhr.onload = function(){
        //checar estatus
        if(this.status === 200){
            div_agregar.innerHTML = this.responseText;
        }
    }

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
        }
    }

    /* onready status
        0 - No inicializado
        1 - Conexión establecida
        2 - Recibido
        3 - Procesando
        4 - Respuesta lista
    */

    //enviar el request
    xhr.send();
}