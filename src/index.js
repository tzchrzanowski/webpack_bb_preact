import './components/bb_comp.js';
import './components/preact_comp.jsx';
import './stylesheets/style.css';
import nav from './nav.js';
import { footer } from './footer.js';
import makeButton from './components/button.js';
import { makeColorStyle } from './components/button-styles';
import "./stylesheets/footer.css";


const button = makeButton('a button');
button.style = makeColorStyle('cyan');
document.body.appendChild(button);
document.body.appendChild(footer);


function component() {
  let element = document.createElement('div');
  element.setAttribute("id", "bbHere");

  return element;
}
document.body.appendChild(component());