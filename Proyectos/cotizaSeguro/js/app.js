const max = new Date().getFullYear(),
      min = max - 20;

const selectAnios = document.getElementById('anio');

for(let i = min; i <= max; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}

//Constructores ---------------------

function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}
Seguro.prototype.calcularSeguro = function(){
    /* 
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
    */
   let cantidad;
   const base = 2000;
   switch(this.marca){
       case '1':
            cantidad = base * 1.15;
            break;
       case '2':
            cantidad = base * 1.05;
            break;
       case '3':
           cantidad = base * 1.35;
           break;
   }
   //leer año
   const diferencia = new Date().getFullYear() - this.anio;
   //cada año de difrencia se reduce 3% el valor
   cantidad -= ((diferencia * 3) * cantidad)/100;

   //Si el seguro es basico se multiplica por 30% mas
   //Si es completo 50% mas

   if(this.tipo === 'basico'){
       cantidad *= 1.30;
   }else{
       cantidad *= 1.50;
   }

   return cantidad;
   
};
//-----Interfaz visual
function Interfaz(){}

Interfaz.prototype.mostrarError = function(mensaje, tipo){
    const div = document.createElement('div');
    if(tipo === 'error'){
        div.classList = 'error';
    }else{
        div.classList = 'correcto';
    }
    div.innerHTML = `${mensaje}`;
    form.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(()=>{
        div.remove();
    }, 3000)
}
Interfaz.prototype.mostrarResultado = function(seguro){
    const cantidad = seguro.calcularSeguro();
    const resultado = document.getElementById('resultado');
    let marca;

    switch(seguro.marca){
        case '1':
            marca = 'Americano';
            break
        case '2':
            marca = 'Asiatico';
            break
        case '3':
            marca = 'Europeo';
            break
    }

    const div = document.createElement('div');
    div.innerHTML = `
        <p>Tu resumen: </p>
        <p>Marca ${marca}</p>
        <p>Año: ${seguro.anio}</p>
        <p>Tipo de seguro: ${seguro.tipo}</p>
        <p>Total: $${cantidad.toFixed()}</p>
    `;
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    setTimeout(()=>{
        resultado.appendChild(div);
        spinner.style.display = 'none';
    }, 2000);
    
}

//-- Event Listener 

const form = document.getElementById('cotizar-seguro');

form.onsubmit = (e)=>{
    e.preventDefault();

    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.value;
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.value;
    const tipo = document.querySelector('input[name=tipo]:checked').value;

    //Comprobar que no haya campos vacios
    const interfaz = new Interfaz();

    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
        //Error, mostrar error
        interfaz.mostrarError('Completar todos los datos', 'error');
    }else{
        //Seguro, pasar
        const resultado = document.querySelector('#resultado > div');
        if(resultado){
            resultado.remove();
        }
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
        
        interfaz.mostrarResultado(seguro);
    }
}