//ASYNC AWAIT, una funcioon asincrona siempre requiere un promise
async function obtenerClientes(){
    //primise
    const clientes = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Clientes descargados');
        }, 2000)
    });

    const error = false;

    if(!error){
        const respuesta = await clientes;
        return respuesta;
    }else{
        //el codigo se detiene hasta que haya respuesta
        await Promise.reject('Hubo un error...');
    }
}
//luego de que se cumple se envia la respuesta
obtenerClientes()
    .then(res=> console.log(res))
    .catch(error => console.log(error) );