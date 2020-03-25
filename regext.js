const exp1 = new RegExp('abc');
const exp2 = /abc/;

console.log(exp1);
console.log(exp2);

let valor, expReg;

expReg = /[0123456789]/;
valor = '1992';

console.log(expReg.test(valor));

expReg = /\d\d-\d\d-\d\d/