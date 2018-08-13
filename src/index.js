import nav from './nav';
import {
  top,
  bottom
} from './footer';
import makeButton from './button';
import {
  red,
  blue,
  makeColor
} from './button-styles';

console.log(nav(), top, bottom, makeButton('My First Button!'), makeColor("cyan"));