/*Codigo Js para menu responsive*/
let modoDev = document.querySelector('.modoDev');
let navContainerLogo  = document.getElementById('nav-container-logo');
let menuIcon = document.createElement('div'); 
menuIcon.className = 'menuIcon';
navContainerLogo.appendChild(menuIcon); 
let menu = document.getElementById('menu'); 
//opacity
let opacity = document.createElement('div');
opacity.className = 'opacity';


menuIcon.addEventListener("click",function(event){ 
    menu.appendChild(opacity);  
    if( menu.style.display ==='block'){ 
        menu.style.display='none';  
        modoDev.style.display='block'; 
        opacity.style.display ='none';  
    }else{
        menu.style.display='block';   
        modoDev.style.display='none'; 
        opacity.style.display ='block';   
    }  
    window.onclick = function(event){ 
        if(event.target ==  opacity){
            menu.style.display='none';   
    } 
    };
  
});  



/* Match Media for menu responsive  */
let menuMatch =(x)=>{   
    if(x.matches){ 
        menu.style.display ='none';  
    }else{  
        menu.style.display ='flex';
        opacity.style.display ='none';     
    } 
} 
let x = window.matchMedia("(max-width: 1023px)")
menuMatch(x)
x.addListener(menuMatch);  
