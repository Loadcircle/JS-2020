class API {
    constructor(apiKey){
        this.apiKey = apiKey;
    }
    //optener monedas

    async obtenerMonedasAPI(){
        const url = 'https://min-api.cryptocompare.com/data/all/coinlist?api_key='+this.apiKey;

        const urlObtenerMonedas = await fetch(url);

        const monedas = await urlObtenerMonedas.json();

        return monedas;
    }

    async obtenerValores(moneda, criptomoneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apiKey}`
        
        const convertir = await fetch(url);

        const resultado = await convertir.json();

        return resultado;
    }
}