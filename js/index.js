
// Menu responsive
edgrid.menu('nav', 'menu')

// Aimation Card Success
let d = document
window.onscroll = function () {
  animationSuccessWebsite()
}
function animationSuccessWebsite () {
  let containerSuccess = d.getElementById('container-success')
  let coords = containerSuccess.getBoundingClientRect()
  if (d.body.scrollTop > coords.top || d.documentElement.scrollTop > coords.top) {
    let CSWebsite = d.getElementsByClassName('container-success-website')
    for (let i = 0; i < CSWebsite.length; i++) {
      CSWebsite[i].style.transform = 'translate(0)'
      CSWebsite[i].style.opacity = '1'
    }
  } else {
    let CSWebsite = d.getElementsByClassName('container-success-website')
    for (let i = 0; i < CSWebsite.length; i++) {
      CSWebsite[i].style.transform = 'translate(100em)'
      CSWebsite[i].style.opacity = '0'
    }
  }
}



// Color costumizer  Web Page

const changeColorsRadio = d.querySelectorAll('[name=color]')
const rootStyles = d.documentElement.style

const defaultColor = {
  '--bg-color1': '#128494',
  '--bg-color2': '#00696f'
}

const colorBlue = {
  '--bg-color1': '#1874c3',
  '--bg-color2': '#2931b3'
}
const colorGreen = {
  '--bg-color1': '#0b8457',
  '--bg-color2': '#096c47'
}
const colorOrange = {
  '--bg-color1': '#005585',
  '--bg-color2': '#15005d'
}
const colorDark = {
  '--bg-color1': '#544a6b',
  '--bg-color2': '#2a2438'
}
for (let radio of changeColorsRadio) {
  radio.addEventListener('change', (e) => {
    if (e.target.id === 'color-primary') {
      changeColor(defaultColor)
    } else if (e.target.id === 'color-secondary') {
      changeColor(colorBlue)
    } else if (e.target.id === 'color-tertiary') {
      changeColor(colorGreen)
    } else if (e.target.id === 'color-quaternary') {
      changeColor(colorOrange)
    } else if (e.target.id === 'color-quinary') {
      changeColor(colorDark)
    }
  })
}

const changeColor = color => {
  let cssVars = Object.keys(color)
  for (let cssVar of cssVars) {
    rootStyles.setProperty(cssVar, color[cssVar])
  }
}

const configBtn = d.getElementById('config-btn')
const config = d.getElementById('config')
configBtn.addEventListener('click', () => {
  config.classList.toggle('config-active')
})

