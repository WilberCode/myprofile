//Typing Effect
let i = 0;
let txt ='Técnico egresado de Telemática: Informática y Sistemas con conocimientos en desarrollo web, diseño web, programacion basica, aplicaciones moviles basicas y idioma ingles intermedio. Dispuesto a laborar como practicante con muchas ganas de aprender y superarse como profesional';
let speed = 50;
function typingEffect(){
    if(i < txt.length){
        document.getElementById('typing').innerHTML += txt.charAt(i);
        i++; 
        setTimeout(typingEffect,speed);
    }
}
typingEffect();
