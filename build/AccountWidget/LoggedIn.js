"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FlatButton = _interopRequireDefault(require("material-ui/FlatButton"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n min-width: 30px !important;\n & > div > span {\n   display: inline-block;\n   max-width: 90px;\n   overflow: hidden;\n   text-overflow: ellipsis;\n   text-transform: none !important;\n   white-space: nowrap;\n   font-size: 16px !important;\n   padding-right: 10px !important;\n   padding-left: 0 !important;\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFlatButton = (0, _styledComponents.default)(_FlatButton.default)(_templateObject());

var LoggedIn = function LoggedIn(_ref) {
  var playerId = _ref.playerId,
      style = _ref.style,
      strings = _ref.strings;

  if (!playerId) {
    return _react.default.createElement(_Spinner.default, {
      color: "#fff",
      size: 0.5
    });
  }

  return _react.default.createElement(_reactRouterDom.Link, {
    style: style,
    to: "/players/".concat(playerId)
  }, _react.default.createElement(StyledFlatButton, {
    label: strings.app_my_profile,
    hoverColor: "transparent"
  }));
};

LoggedIn.propTypes = {
  playerId: _propTypes.default.number,
  style: _propTypes.default.shape({}),
  strings: _propTypes.default.shape({})
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    strings: state.app.strings
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(LoggedIn);

exports.default = _default;