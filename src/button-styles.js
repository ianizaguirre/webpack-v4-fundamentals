// CommonJS Export
// Named Export

const red = 'color: red;';
const blue = 'color: blue;';

const makeColorStyle = color => `color: ${color};`;

exports.red = red;
exports.blue = blue;
exports.makeColor = makeColorStyle;
