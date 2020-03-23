const button = document.getElementById('button');
let resultados;

button.onclick = cargarAPI;

function cargarAPI(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function(){
        if(this.status === 200){
            resultados = JSON.parse(this.responseText);
            imprimir();
        }
    }

    xhr.send();
}

function imprimir(){
    resultados.forEach(objeto=>{

        let div = document.createElement('div');

        for(key in objeto){
            div.innerHTML += `<p>${key}: ${objeto[key]}</p>`
        }

        div.innerHTML += `<hr>`
        document.body.appendChild(div);
    });
}