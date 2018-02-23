//Typing Effect
var i = 0;
var txt ='Técnico egresado de Telemática: Informática y Sistemas con conocimientos en desarrollo web, diseño web, programacion basica, aplicaciones moviles basicas, redes y idioma ingles intermedio.Dispuesto para asumir nuevos retos, aprender y superarse como profesional y como persona.';
var speed = 50;
function typingEffect(){
    if(i < txt.length){
        document.getElementById('typing').innerHTML += txt.charAt(i);
        i++; 
        setTimeout(typingEffect,speed);
    }
}
typingEffect();
