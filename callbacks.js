const paises = ['Venezuela', 'Peru', 'Argentina', 'Mexico'];

//Se agrega un nuevo pais despues de 2 segundos

function nuevoPais(pais, callback){
    setTimeout(()=>{
        paises.push(pais);
        //se le puede llamar como sea
        callback();
    }, 2000);
}

//agregar nuevo pais
const interval = setInterval(() => {
                    nuevoPais('Alemania', mostrarPaises);
                }, 1500);

setTimeout(()=>{
    clearInterval(interval);
},6100)


//Los paises s emuestran luego de 1 s
function mostrarPaises(){
    setTimeout(()=>{
        let html = '';
        paises.forEach(e=>{
            html += `${e}`;
        });
        document.getElementById('agregar_archivo').innerHTML = html;
    }, 1000);
}

mostrarPaises();

