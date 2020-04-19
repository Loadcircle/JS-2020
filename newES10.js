//FLAT es para aplanar arreglos segun niveles
const flatArray = [1,2,3,4,[5,6,7], [8,9,10,[11,12,13,14]]];
console.log(flatArray.flat(2));
//flatArray.flat(Infinity) full flat

//FLAT MAP  ejecuta el map sobre un arreglo

//FROM ENTRIES convierte un map en objeto

//TRIM elimina los espacios en blanco

const string = '   jesusmilano@gmail.com    '

string.trimStart();
string.trimEnd();
string.trim();


//toString retorna en texto cualquier elemento o función completa

//NEW TRY CATCH

try{
    throw new Error('Algo salio mál');
}catch(error){
    console.log(error)
}