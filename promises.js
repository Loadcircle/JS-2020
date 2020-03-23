//Promesa
const esperando = new Promise(function(resolve, reject){

    setTimeout(()=>{
        resolve('Se ejecuto');
    }, 5000);

});

esperando.then(function(mensaje){
    console.log(mensaje);
});

esperando.catch(function(mensaje){
    console.log(mensaje)
});

// -------------------

const aplicarDescuento = new Promise((resolve, reject)=>{

    const descuento = false;

    if(descuento){
        resolve('Descuento aplicado');
    }else{
        reject('No se puede aplicar el descuento');
    }

});

aplicarDescuento.then(resultado=>{
    console.log(resultado);
}).catch(error=>{
    console.log(error);
});