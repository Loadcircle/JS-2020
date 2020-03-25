const apiCon = new API();
const ui = new Interfaz();

document.getElementById('buscarBtn').onclick = (e)=>{
    e.preventDefault();
    
    const nombre = document.getElementById('evento').value;
    const categoria = document.getElementById('listado-categorias').value;

    if(nombre === '' || categoria === ''){
        ui.mostrarMensaje('Escribe algo para buscar', 'alert-danger alert mt-4');
    }else{
        apiCon.obtenerEventos(nombre, categoria)
            .then(res=> ui.mostrarEvento(res));
    }
}