//This con implicit binding

const usuario = {
    nombre: 'Jesus',
    edad: 24,
    presentacion(){
        console.log(`mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        presentacion(){
            //imprime hook y 1
            console.log(`mi nombre es ${this.nombre} y tengo ${this.edad} años`)
        }
    }
        
}

//this con explicit binding

function persona(){
    console.log(`hola soy ${this.nombre}`);
}
//metodo call
persona.call({nombre: 'Jesus'});


//window binding

window.autoNuevo = 'BWM'
function auto(){
    console.log(this.autoNuevo)
}

auto();