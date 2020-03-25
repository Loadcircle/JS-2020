//todos los async son promises
async function leerTodos(){
    //esperar respuesta, recordar que fetch es una promesa
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    //procede cuando la respuesta este lista, multiple await

    const datos = await respuesta.json();

    return datos;

}

leerTodos()
    .then(res=> console.log(res))


//PRUEBA -----------------

setTimeout(()=>{
    const div = document.createElement('div');
    div.id = 'elemento-creado';
    document.body.appendChild(div);
    console.log('creado');
},5000);

//para que se cumpla el await, debe haber un resolve
function buscador(){
    let div;
    const promise = new Promise(resolve=>{

        const interval = setInterval(() => {        
            if(div = document.getElementById('elemento-creado')){
                clearInterval(interval);
                resolve(div);
            }
            console.log('buscando...');
        }, 500);

    })
    return promise;
}

async function buscarElemento(){

    const div = await buscador();

    console.log(div);

}

buscarElemento()
//     .then(res => console.log(res));