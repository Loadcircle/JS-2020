//MODULE PATTER es cuando encapsulas en modulos
const funct = ()=>{
    //privada
    let variable = 'var';

    //publica
    return {
        mostrarVar: ()=>{
            console.log('publico');
        }
    }
};


//FACTORY es tener una función padre que maneja diferentes directivas a otras funciones o metodos

function factory(val){
    if(val === 1){
        funt1(val);
    }else if(val === 2){
        funt2(val);
    }else if(val === 3){
        funt3(val);
    }
}
function funt1(val){
    return val;
}
function funt2(val){
    return val;
}
function funt3(val){
    return val;
}

//SINGLETON es instaciar todas las acciones y metodos relacionados a algun elemento en una sola clase u objeto 
const alumnos = {
    lista : [],
    
    funct1Alumno:()=>{

    },
    func2Alumno: ()=>{

    }
}