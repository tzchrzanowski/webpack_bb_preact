import './components/bb_comp.js';
import './components/preact_comp.jsx'
import './stylesheets/style.css'

function component() {
  let element = document.createElement('div');
  element.setAttribute("id", "bbHere");

  return element;
}
document.body.appendChild(component());