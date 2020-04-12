const ui = new UI();

// document.addEventListener('DOMContentLoaded', ()=>{
//     ui.mostrarEstablecimientos();
// });

const buscador = document.querySelector('#buscar input');

buscador.addEventListener('input', ()=>{
    console.log(buscador.value);

    if(buscador.value.length > 4){
        ui.obtenerSugerencias(buscador.value);
    }else{
        ui.mostrarEstablecimientos();
    }
})