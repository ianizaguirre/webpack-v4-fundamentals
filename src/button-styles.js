// CommonJS Export
// Named Export

const red = 'color: red;';
const blue = 'color: blue;';

const makeColorStyle = color => `color: ${color};`;

// Common JS Exports WONT allow Tree Shaking to Work
// https://github.com/TheLarkInn/webpack-workshop-2018/pull/24/files

// exports.red = red;
// exports.blue = blue;
// exports.makeColor = makeColorStyle;


// ESM Modules Allow Tree Shaking
export {
  red,
  blue,
  makeColorStyle
}