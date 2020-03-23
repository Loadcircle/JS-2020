document.getElementById('txtBtn').onclick = cargarTXT;
document.getElementById('jsonBtn').onclick = cargarJSON;
document.getElementById('apiBTN').onclick = cargarAPI;

function cargarTXT(){
    fetch('datos.txt')
        .then(res=>{ res.text() })
        .then(data=>{ document.getElementById('resultado').innerHTML = data })
        .catch(error=>{ console.log(error) });
}

function cargarJSON(){
    fetch('empleados.json')
        .then(res=>{ return res.json() })
        .then(data=>{
            let html = '';
            data.forEach(e=>{
                html += `
                    <li>${e.nombre} ${e.puesto}</li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        });
}

function cargarAPI(){
    fetch('https://picsum.photos/list')
        .then(res=>{ return res.json() })
        .then(data=>{
            let html = '';
            data.forEach(e=>{
                html += `
                    <li>
                        <a href="${e.post_url}">Ver imagen</a>
                        ${e.author}
                    </li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error=>{ console.log(error)});
}