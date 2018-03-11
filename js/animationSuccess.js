 
window.onscroll = function(){
    animationSuccessWebsite();
}
function animationSuccessWebsite(){
    let containerSuccess = document.getElementById('container-success');
    let coords = containerSuccess.getBoundingClientRect();
    if(document.body.scrollTop > coords.top || document.documentElement.scrollTop > coords.top){
        let CSWebsite = document.getElementsByClassName('container-success-website');
        for(let i = 0; i < CSWebsite.length;i++){
            CSWebsite[i].style.transform ='translate(0)';
        }
    }
}