/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */
// CommonJS Export
// Unnamed Export
// take a string, the button label, and return an Element

// module.exports = buttonName => {
//   return `Button: ${buttonName}`;
// };

// We can Destructure this
const makeButton = buttonName => {
  return `Button: ${buttonName}`;
};

module.exports = makeButton;
