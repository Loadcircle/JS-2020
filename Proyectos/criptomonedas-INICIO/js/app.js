const formulario = document.getElementById('formulario');
const apiKey = '41f81e127a7dcf8abedcb0217ae865c16e99730d60730b9c60b8492e735f846e';
const ApiCon = new API(apiKey);
const ui = new Interfaz();

formulario.onsubmit = (e)=>{
    e.preventDefault();

    const moneda = document.getElementById('moneda').value;
    const criptomoneda = document.getElementById('criptomoneda').value;

    if(moneda === '' || criptomoneda === ''){
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    }else{
        ApiCon.obtenerValores(moneda, criptomoneda)
            .then(data=>{
                ui.mostrarResultado(data.RAW, moneda, criptomoneda);
            })
    }
};