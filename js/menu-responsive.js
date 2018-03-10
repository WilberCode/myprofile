/*Codigo Js para menu responsive*/
let navContainerLogo  = document.getElementById('nav-container-logo');
let menuIcon = document.createElement('div');
menuIcon.className = 'menuIcon';
navContainerLogo.appendChild(menuIcon); 
let menu = document.getElementById('menu'); 

menuIcon.addEventListener("click",function(event){  
    if( menu.style.display ==='block'){ 
        menu.style.display='none';     
    }else{
        menu.style.display='block';   
    }  
});
/* Match Media for menu responsive  */
let menuMatch =(x)=>{   
    if(x.matches){ 
        menu.style.display ='none';  
    }else{  
        menu.style.display ='flex';  
    } 
} 
let x = window.matchMedia("(max-width: 1023px)")
menuMatch(x)
x.addListener(menuMatch);  
