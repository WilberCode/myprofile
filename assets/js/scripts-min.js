(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// import {saludo, despedida} from "./modules/example"
// import {activeMenu} from './modules/active-menu'
// import {holaMundo} from './modules/hola-mundo' 

// saludo()
// despedida()
// activeMenu()
// holaMundo('Buenos dias aqui estamos')

// Menu responsive
edgrid.menu('nav', 'menu');

// Animation Card Success
var d = document;
// window.onscroll = function () {
//   animationSuccessWebsite()
// }
// function animationSuccessWebsite () {
//   let containerSuccess = d.getElementById('container-success')
//   let coords = containerSuccess.getBoundingClientRect()
//   if (d.body.scrollTop > coords.top || d.documentElement.scrollTop > coords.top) {
//     let CSWebsite = d.getElementsByClassName('container-success-website')
//     for (let i = 0; i < CSWebsite.length; i++) {
//       CSWebsite[i].style.transform = 'translate(0)'
//       CSWebsite[i].style.opacity = '1'
//     }
//   } else {
//     let CSWebsite = d.getElementsByClassName('container-success-website')
//     for (let i = 0; i < CSWebsite.length; i++) {
//       CSWebsite[i].style.transform = 'translate(100em)'
//       CSWebsite[i].style.opacity = '0'
//     }
//   }
// }


// Color costumizer  Web Page 
var primaryColor = d.getElementById('color-primary');
primaryColor.checked = true;

var changeColorsRadio = d.querySelectorAll('[name=color]');
var rootStyles = d.documentElement.style;

var defaultColor = {
  '--bg-color1': '#128494',
  '--bg-color2': '#00696f'
};

var colorBlue = {
  '--bg-color1': '#1874c3',
  '--bg-color2': '#2931b3'
};
var colorGreen = {
  '--bg-color1': '#0b8457',
  '--bg-color2': '#096c47'
};
var colorOrange = {
  '--bg-color1': '#005585',
  '--bg-color2': '#15005d'
};
var colorDark = {
  '--bg-color1': '#544a6b',
  '--bg-color2': '#2a2438'
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = changeColorsRadio[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var radio = _step.value;

    radio.addEventListener('change', function (e) {
      if (e.target.id === 'color-primary') {
        changeColor(defaultColor);
      } else if (e.target.id === 'color-secondary') {
        changeColor(colorBlue);
      } else if (e.target.id === 'color-tertiary') {
        changeColor(colorGreen);
      } else if (e.target.id === 'color-quaternary') {
        changeColor(colorOrange);
      } else if (e.target.id === 'color-quinary') {
        changeColor(colorDark);
      }
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var changeColor = function changeColor(color) {
  var cssVars = Object.keys(color);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = cssVars[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var cssVar = _step2.value;

      rootStyles.setProperty(cssVar, color[cssVar]);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

var configBtn = d.getElementById('config-btn');
var config = d.getElementById('config');
configBtn.addEventListener('click', function () {
  config.classList.toggle('config-active');
});

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
