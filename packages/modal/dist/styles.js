'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseContainer = exports.FooterContainer = exports.BodyContainer = exports.HeaderContainer = exports.Content = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left 0;\n  z-index: 5;\n  background-color: rbg(1, 1, 1, 0.7);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n'], ['\n  position: absolute;\n  top: 0;\n  left 0;\n  z-index: 5;\n  background-color: rbg(1, 1, 1, 0.7);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 10;\n  background-color: white;\n  width: 40em;\n  height: 40em;\n  border-radius: 20px;\n'], ['\n  position: relative;\n  z-index: 10;\n  background-color: white;\n  width: 40em;\n  height: 40em;\n  border-radius: 20px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  align-content: space-between;\n  position: top;\n  text-size: 5em;\n  font-family: ariel;\n  align-item: center;\n  padding-top: 1em;\n  padding-botton: 5.1em;\n  background-color: #ddd;\n  opacity: 0.7;\n  border-radius: 15px 15px 0px 0px;\n  > div {\n    display: flex;\n    position: absolute;\n    margin-left: 14.5em;\n    font-family: Arial;\n    font-size: 20px;\n  }\n'], ['\n  display: flex;\n  align-content: space-between;\n  position: top;\n  text-size: 5em;\n  font-family: ariel;\n  align-item: center;\n  padding-top: 1em;\n  padding-botton: 5.1em;\n  background-color: #ddd;\n  opacity: 0.7;\n  border-radius: 15px 15px 0px 0px;\n  > div {\n    display: flex;\n    position: absolute;\n    margin-left: 14.5em;\n    font-family: Arial;\n    font-size: 20px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  background-color: steelBlue;\n  > div {\n    display: flex;\n    justify-content: center;\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  background-color: steelBlue;\n  > div {\n    display: flex;\n    justify-content: center;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  position: bottom;\n  text-size: 1em;\n  font-family: ariel;\n  align-item: center;\n  background-color: #ddd;\n  padding-top: 1em;\n  padding-botton: 1em;\n  border-radius: 0px 0px 15px 15px ;\n'], ['\n  display: flex;\n  justify-content: center;\n  position: bottom;\n  text-size: 1em;\n  font-family: ariel;\n  align-item: center;\n  background-color: #ddd;\n  padding-top: 1em;\n  padding-botton: 1em;\n  border-radius: 0px 0px 15px 15px ;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\nbackground-color: none;\nwidth: auto;\nheight: auto;\nmargin: 1em;\ntext-align: center;\ncursor: pointer;\nmargin-left: 1em;\nborder-radius: 6px;\n'], ['\nbackground-color: none;\nwidth: auto;\nheight: auto;\nmargin: 1em;\ntext-align: center;\ncursor: pointer;\nmargin-left: 1em;\nborder-radius: 6px;\n']);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = (0, _reactEmotion2.default)('div')(_templateObject);

var Content = exports.Content = (0, _reactEmotion2.default)('div')(_templateObject2);

var HeaderContainer = exports.HeaderContainer = (0, _reactEmotion2.default)('div')(_templateObject3);

var BodyContainer = exports.BodyContainer = (0, _reactEmotion2.default)('div')(_templateObject4);

var FooterContainer = exports.FooterContainer = (0, _reactEmotion2.default)('div')(_templateObject5);

var CloseContainer = exports.CloseContainer = (0, _reactEmotion2.default)('button')(_templateObject6);