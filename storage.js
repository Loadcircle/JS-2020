
localStorage.setItem('Nombre', 'Jesus');
localStorage.setItem('Apellido', 'Milano');
sessionStorage.setItem('Nombre', 'Jesus');

localStorage.removeItem('Nombre');

console.log(localStorage.getItem('Apellido'));

localStorage.clear();

