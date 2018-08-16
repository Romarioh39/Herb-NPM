'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterContainer = exports.SectionContainer = exports.AllBtnContainer = exports.HeaderContainer = exports.BodyContainer = exports.Content = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n'], ['\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background-color: #262626;\n  height: 40em;\n  width: 40em;\n  padding: 50px 50px;\n'], ['\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background-color: #262626;\n  height: 40em;\n  width: 40em;\n  padding: 50px 50px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  background-color: darkgray;\n  padding: 20px 0px 10px 0px;\n  border-radius: 6px 6px 0px 0px;\n  > div {\n    position: absolute;\n    margin: 0px 0px 0px 17.5em;\n    background-color: none;\n    cursor: pointer;\n  }\n  > p {\n    color: white;\n    text-shadow: 2px 2px 4px #000000;\n    font-size: 2.5em;\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  background-color: darkgray;\n  padding: 20px 0px 10px 0px;\n  border-radius: 6px 6px 0px 0px;\n  > div {\n    position: absolute;\n    margin: 0px 0px 0px 17.5em;\n    background-color: none;\n    cursor: pointer;\n  }\n  > p {\n    color: white;\n    text-shadow: 2px 2px 4px #000000;\n    font-size: 2.5em;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 15px 30px 15px 30px;\n  background-color: darkgray;\n  border: hidden;\n  font-size: 20px;\n  color: white;\n  text-shadow: 1px 1px 2px #000000;\n  border-radius: 6px;\n'], ['\n  padding: 15px 30px 15px 30px;\n  background-color: darkgray;\n  border: hidden;\n  font-size: 20px;\n  color: white;\n  text-shadow: 1px 1px 2px #000000;\n  border-radius: 6px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  background-color: steelBlue;\n  > input {\n  margin-top: 10px;\n  text-align: center;\n  letter-spacing: 6px;\n  height: 3em;\n  border-radius: 6px;\n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  background-color: steelBlue;\n  > input {\n  margin-top: 10px;\n  text-align: center;\n  letter-spacing: 6px;\n  height: 3em;\n  border-radius: 6px;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-item: center;\n  background-color: steelBlue;\n  padding: 40px 0px 40px 0px;\n  border-radius: 0px 0px 6px 6px;\n'], ['\n  display: flex;\n  justify-content: center;\n  align-item: center;\n  background-color: steelBlue;\n  padding: 40px 0px 40px 0px;\n  border-radius: 0px 0px 6px 6px;\n']);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = (0, _reactEmotion2.default)('div')(_templateObject);

var Content = exports.Content = (0, _reactEmotion2.default)('div')(_templateObject);

var BodyContainer = exports.BodyContainer = (0, _reactEmotion2.default)('div')(_templateObject2);

var HeaderContainer = exports.HeaderContainer = (0, _reactEmotion2.default)('div')(_templateObject3);

var AllBtnContainer = exports.AllBtnContainer = (0, _reactEmotion2.default)('button')(_templateObject4);

var SectionContainer = exports.SectionContainer = (0, _reactEmotion2.default)('div')(_templateObject5);

var FooterContainer = exports.FooterContainer = (0, _reactEmotion2.default)('div')(_templateObject6);