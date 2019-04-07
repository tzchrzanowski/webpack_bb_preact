/**
 * 
 * @param {string} buttonName 
 * @returns {Element}
 */

// take a str, the button label and return an element;

const makeButton = (buttonName) => {
  const buttonLabel = `${buttonName}`;

  const button = document.createElement("button");
  button.innerText = buttonLabel;
  return button;
}

module.exports = makeButton; 