import {API} from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.onsubmit = (e)=>{
    e.preventDefault();

    const artista = document.getElementById('artista').value,
          cancion = document.getElementById('cancion').value;

    if(artista === '' || cancion === ''){
        UI.divMensaje.innerText = 'Error... Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');
        
        setTimeout(()=>{
            UI.divMensaje.innerText = '';
            UI.divMensaje.classList.remove('error');
        }, 2000);
    }else{
        UI.formularioBuscar.reset();
        const api = new API(artista, cancion);
        api.consultarAPI()
            .then(res => {
                if(res.error){
                    UI.divMensaje.innerText = 'La canción no existe';
                    UI.divMensaje.classList.add('error');
                    setTimeout(()=>{
                        UI.divMensaje.innerText = '';
                        UI.divMensaje.classList.remove('error');
                    }, 2000);
                }else{
                    UI.divResultado.innerText = res.lyrics;
                }
            })
    }
}