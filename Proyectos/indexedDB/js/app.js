let DB;

const form = document.querySelector('form'),
      nombreMascota = document.getElementById('mascota'),
      nombreCliente = document.getElementById('cliente'),
      telefono = document.getElementById('telefono'),
      fecha = document.getElementById('fecha'),
      hora = document.getElementById('hora'),
      sintomas = document.getElementById('sintomas'),
      citas = document.getElementById('citas'),
      headingAdministra = document.getElementById('administra');

document.addEventListener('DOMContentLoaded', ()=>{
    //CREAR BASE DE DATOS
    let crearDB = window.indexedDB.open('citas', 1);

    crearDB.onerror = function(){
        console.log('hubo un error');
    }
    //esto se ejecuta siempre que carga, asi que reiniciaria la DB
    crearDB.onsuccess = function(){
        console.log('Todo listo');

        //ASIGNAR A LA BASE DE DAATOS

        DB = crearDB.result;
        mostrarCitas();
    }

    //Este metodo solo corre una vez y corre antes que el success
    crearDB.onupgradeneeded = function(e){
        
        //instancia de la base de datos
        let db = e.target.result;
        
        //definir el object store, toma 2 parametros, db y opciones        
        let objectStore = db.createObjectStore('citas', {
            //keypath es la llave primaria
            keypath: 'key',
            autoIncrement: true,
        });

        //crear indices de la db, 3 parametros: nombre, keypath y opciones
        objectStore.createIndex('mascota', 'mascota', { unique: false });
        objectStore.createIndex('cliente', 'cliente', { unique: false });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('hora', 'hora', { unique: false });
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });

    }

    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e){
        e.preventDefault();

        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value,
        }
        //indexDb se utilizan las transacciones 

        let transaccion = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaccion.objectStore('citas');

        let peticion = objectStore.add(nuevaCita);

        console.log(peticion);

        peticion.onsuccess = ()=>{
            form.reset();
        };
        transaccion.oncomplete = ()=>{
            console.log('Cita agregada');
            mostrarCitas();
        }
        transaccion.onerror = ()=>{
            console.log('Hubo un error')
        }
    }
    
    function mostrarCitas(){
        citas.innerHTML = '';

        let objectStore = DB.transaction('citas').objectStore('citas');

        objectStore.openCursor().onsuccess = function(e){
            let cursor = e.target.result;

            if(cursor){
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.key);
                citaHTML.classList.add('list-group-item');

                citaHTML.innerHTML = `
                    <p class="font-weight-bold"> Mascota: 
                        <span class="font-weight-normal"> ${cursor.value.mascota}</span>
                    </p>
                    <p class="font-weight-bold"> Cliente: 
                        <span class="font-weight-normal"> ${cursor.value.cliente}</span>
                    </p>
                    <p class="font-weight-bold"> Fecha: 
                        <span class="font-weight-normal"> ${cursor.value.fecha}</span>
                    </p>
                    <p class="font-weight-bold"> Hora: 
                        <span class="font-weight-normal"> ${cursor.value.hora}</span>
                    </p>
                    <p class="font-weight-bold"> Sintomas: 
                        <span class="font-weight-normal"> ${cursor.value.sintomas}</span>
                    </p>
                `;

                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
                botonBorrar.innerHTML = '<span aria-hidden="true"> Borrar </span>';
                botonBorrar.onclick = ()=>{
                    borrarCita(botonBorrar);
                }; 
                citaHTML.appendChild(botonBorrar);

                citas.appendChild(citaHTML);

                cursor.continue();
            }
        }
    }
    function borrarCita(botonBorrar){
        const key = Number(botonBorrar.parentElement.getAttribute('data-cita-id'));

        let transaccion = DB.transaction(['citas'], 'readwrite');

        let objectStore = transaccion.objectStore('citas');

        let peticion = objectStore.delete(key);

        transaccion.oncomplete = ()=>{
            console.log('elinado')
            mostrarCitas();
        }
    }

});