//Typing Effect
let i = 0;
let txt ='Técnico egresado de Telemática: Informática y Sistemas con conocimientos en desarrollo web, diseño web, programacion básica, aplicaciones moviles básica. Dispuesto a laborar como desarrollador web y con muchas ganas de aprender nuevas tecnologías.';
let speed = 50;
function typingEffect(){
    if(i < txt.length){
        document.getElementById('typing').innerHTML += txt.charAt(i);
        i++; 
        setTimeout(typingEffect,speed);
    }
}
typingEffect();
