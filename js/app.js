const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.naveagacion a');

document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
});


function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');
    });
};

function cerrarMenu(){
    enlaces.forEach(enlace => {
        enlace.addEventListener('click',()=>{
            if(e.target.tagname === `A`){
                navegacion.classList.add('ocultar');
            }
        });
    });
};

