class Interfaz{
    constructor(){
        this.init();
        this.listado = document.getElementById('resultado-eventos');
    }
    init(){
        this.imprimirCategorias();
    }
    imprimirCategorias(){
        const listaCategorias = apiCon.obtenerCategorias()
            .then(categorias =>{
                const cats = categorias.categories;

                cats.forEach(e=>{
                    const option = document.createElement('option');
                    option.value = e.id;
                    option.innerText = e.name_localized;
                    document.getElementById('listado-categorias').appendChild(option);
                })
            });       

    }
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');

        div.classList = clases;
        div.innerText = mensaje;

        const buscadorDiv = document.getElementById('buscador');

        buscadorDiv.appendChild(div);

        setTimeout(()=>{div.remove()}, 2000);
    }
    mostrarEvento(eventos){
        console.log(eventos);
    }
}