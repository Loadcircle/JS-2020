//Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;

//Clases
//Calse presupuesto

class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    presupuestoRestante(cantidad = 0){        
        this.restante -= Number(cantidad);        
        return this.restante;
    }
}

//interfaz
class Interfaz{
    insertarPresupuesto(cantidad){
        const pre = document.getElementById('total'),
              rest = document.getElementById('restante');
        
        pre.innerHTML = `${cantidad}`;
        rest.innerHTML = `${cantidad}`;
    }
    imprimirMensaje(mensaje, tipo){
        const div = document.createElement('div');
        div.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            div.classList.add('alert-danger');
        }else{
            div.classList.add('alert-success');
        }
        div.appendChild(document.createTextNode(mensaje));
        document.querySelector('.primario').insertBefore(div, formulario);
        formulario.reset();
        setTimeout(()=>{
            div.remove();
        },2000)
    }
    agregarGasto(nombre, gasto){
        const lista = document.querySelector('#gastos ul');

        const li = document.createElement('li');
        li.classList = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${nombre}
                        <span class="badge badge-primary">${gasto}</span>`;
        lista.appendChild(li);
    }
    actualizarPresupuesto(restante){
        const rest = document.getElementById('restante');
        rest.innerHTML = `${restante}`;

        this.comprobarPresupuesto();
    }
    comprobarPresupuesto(){
        const resto = cantidadPresupuesto.restante;
        const presu = cantidadPresupuesto.presupuesto;
        const divRestante = document.querySelector('.restante');
        //25%
        if((presu/4) > resto){
            divRestante.classList.remove('alert-success', 'alert-warning');
            divRestante.classList.add('alert-danger');
        }else if((presu/2) > resto){
            divRestante.classList.remove('alert-success');
            divRestante.classList.add('alert-warning');
        }
        
    }
}

//Event Listeners

document.addEventListener('DOMContentLoaded', ()=>{
    if(presupuestoUsuario === null || presupuestoUsuario === ''){
        window.location.reload();
    }else{
        //instancia
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

        //interfaz
        const interfaz = new Interfaz();
        interfaz.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});

formulario.onsubmit = (e)=>{
    e.preventDefault();
    const nombreGasto = document.getElementById('gasto').value;
    const gasto = document.getElementById('cantidad').value;
    const interfaz = new Interfaz();

    if(nombreGasto === '' || gasto === ''){
        interfaz.imprimirMensaje('Hubo un error', 'error');
    }else{
        interfaz.imprimirMensaje('Agregado', 'exito');
        const restante = cantidadPresupuesto.presupuestoRestante(gasto);
        interfaz.agregarGasto(nombreGasto, gasto);        
        interfaz.actualizarPresupuesto(restante);
    }
}