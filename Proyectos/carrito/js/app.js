const carrito = document.getElementById('carrito');
const curso = document.getElementById('lista-cursos');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const LS = localStorage;

(function(){
    curso.addEventListener('click', comprarCurso);
    carrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    document.addEventListener('DOMContentLoaded', cargarCrusosLS);
})();

function comprarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
    }
}

function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
    }
    insertarCarrito(infoCurso);
}

function insertarCarrito(curso, create = true){
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>  
            <img src="${curso.imagen}" alt="img">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
           <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCarrito.appendChild(row);
    
    create ? guardarCursoLS(curso) : '';
}

function eliminarCurso(e){
    e.preventDefault();
    let curso, cursoId;
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
        eliminarCursoLS(cursoId);
    }
}

function vaciarCarrito(){
    listaCarrito.innerHTML = '';

    vaciarLS();
}

function guardarCursoLS(curso){
    let cursos = obtenerCursosLS();

    cursos.push(curso);

    console.log(curso)

    LS.setItem('cursos', JSON.stringify(cursos));
}

function obtenerCursosLS(){
    let cursosLS;

    if(LS.getItem('cursos') === null){
        cursosLS = [];
    }else{
        cursosLS = JSON.parse(LS.getItem('cursos'));
    }

    return cursosLS;
}

function cargarCrusosLS(){
    
    let cursos = obtenerCursosLS();
    cursos.forEach(e=>{
        insertarCarrito(e, false);
    });
}

function eliminarCursoLS(cursoId){
    let cursos = obtenerCursosLS();
    
    cursos.forEach((e, i)=>{
        if(cursoId == e.id){
            cursos.splice(i, 1);
        }
    });

    LS.setItem('cursos', JSON.stringify(cursos));
}

function vaciarLS(){
    LS.clear();
}