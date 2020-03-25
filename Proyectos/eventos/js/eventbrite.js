class API{
    constructor(){
        this.tokenAuth = 'V2TR3Y46QOPJHGDB3EUS';
        //para ordenar por defecto pro fecha
        this.ordenar = 'date';
    }
    async obtenerCategorias(){
        //Consultar categorías 
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.tokenAuth}`)

        const respuesta = await respuestaCategorias.json();

        return respuesta;
    }
    async obtenerEventos(nombre, categoria){
        const url = ``;
        
        const respuestaEventos = await fetch(url);

        const respuesta = await respuestaEventos.json();

        return respuesta;
    }
}