const d = document
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
