let mybutton=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

mybutton.style.display="block";

}else{

mybutton.style.display="none";

}

};

function topFunction(){

window.scrollTo({
top:0,
behavior:'smooth'
});

}

document.getElementById("contactForm").addEventListener("submit", function(e){

let nombre=document.getElementById("nombre").value;
let email=document.getElementById("email").value;
let tecnologia=document.getElementById("tecnologia").value;
let nivel=document.getElementById("nivel").value;
let comentarios=document.getElementById("comentarios").value;

if(nombre=="" || email=="" || tecnologia=="" || nivel=="" || comentarios==""){

alert("Por favor complete todos los campos");
e.preventDefault();

}else{

alert("Formulario enviado correctamente");

}

});