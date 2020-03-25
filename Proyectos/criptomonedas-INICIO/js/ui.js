class Interfaz{
    //el constructor se inicializa al llamar
    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 2000);
    }

    construirSelect(){
        ApiCon.obtenerMonedasAPI()
            .then(monedas => {
                //convierte el objeto a un arreglo
                const data =  Object.entries(monedas.Data);
                const select = document.getElementById('criptomoneda');
                for(const [key, value] of data){
                    const option = document.createElement('option');
                    option.value = value.Symbol;
                    option.innerText = value.CoinName;
                    
                    select.appendChild(option);
                }
            })
    }

    mostrarResultado(resultado, moneda, crypto){
        const data =resultado[crypto][moneda];

        let html = `
                <div class="card bg-warning">
                    <div class="card-body text-light">
                        <h2 class="card-title">Resultado:</h2>
                        <p>El precio de ${data.FROMSYMBOL} a moneda ${data.TOSYMBOL} 
                        es de: ${data.PRICE}</p>
                    </div>
                </div>
        `;

        document.getElementById('resultado').innerHTML = html;
    }
}