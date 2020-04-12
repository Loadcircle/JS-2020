class Api{
    constructor(){
        this.url = 'https://api.datos.gob.mx/v1/precio.gasolina.publico';
    }

    async obtenerDatos(){
        const total = 1000;

        const datos = await fetch(this.url+`?pageSize=${total}`);

        const respuesta = await datos.json();

        return respuesta;
    }

}