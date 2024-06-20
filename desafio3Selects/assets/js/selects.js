const btnSelect = document.querySelector('#btnSelect')
btnSelect.addEventListener('click', function () { 

const password = document.querySelector('#numero1').value +
document.querySelector('#numero2').value +
document.querySelector('#numero3').value ;
 

var resultado = document.querySelector('#resultado')

if (password === '911') {
    document.querySelector('#resultado').innerHTML = 'password 1  es correcto';
}
else if (password === '714') {
    document.querySelector('#resultado').innerHTML = 'password 2 es correcto';
}
else {
    document.querySelector('#resultado').innerHTML = 'password incorrecto';

}
});