const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const btnDespertador = document.getElementById('btnDespertador');
const modalDespertador = document.getElementById('modalDespertador');
const btnConfirmarDespertador = document.getElementById('btnConfirmarDespertador');
const horaDespertador = document.getElementById('horaDespertador');
const minutoDespertador = document.getElementById('minutoDespertador');
const overlay = document.querySelector('#overlay');
const fechar = document.querySelector(".fechar");

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    if (hr === horaDespertadorValor && min === minutoDespertadorValor){
        alert('hora de acordar!');
        horaDespertadorValor = 0;
        minutoDespertadorValor = 0;
    }
}, 1000);

fechar.addEventListener("click", function() {
    modalDespertador.style.display = "none";
    overlay.style.display = 'none';
  });

btnDespertador.addEventListener('click', () => {
    modalDespertador.style.display = 'block';
    overlay.style.display = 'block';
  });

let horaDespertadorValor = 0;
let minutoDespertadorValor = 0;

btnConfirmarDespertador.addEventListener('click', function(){
    horaDespertadorValor = parseInt(horaDespertador.value);
    minutoDespertadorValor = parseInt(minutoDespertador.value);
    modalDespertador.style.display = 'none';
    overlay.style.display = 'none';
});
