
window.onscroll = function () {
  animationSuccessWebsite()
}
function animationSuccessWebsite () {
  let containerSuccess = document.getElementById('container-success')
  let coords = containerSuccess.getBoundingClientRect()
  if (document.body.scrollTop > coords.top || document.documentElement.scrollTop > coords.top) {
    let CSWebsite = document.getElementsByClassName('container-success-website')
    for (let i = 0; i < CSWebsite.length; i++) {
      CSWebsite[i].style.transform = 'translate(0)'
    }
  }
}

// let gallery = d.getElementById('gallery')
// gallery.onmouseover = e => {
//   if (e.target.classList.contains('gallery-color')) {
//     let i = galleryImage.indexOf(e.target)
//     galleryImage.map(tab => tab.classList.remove('active-gallery'))
//     galleryImage[i].classList.add('active-gallery')
//   }
// }
// gallery.onmouseout = e => {
//   if (e.target.classList.contains('gallery-color')) {
//     galleryImage.map(tab => tab.classList.remove('active-gallery'))
//   }
// }
/* Animation Gallery */
