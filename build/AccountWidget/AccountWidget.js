"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icons = require("../Icons");

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _Error = _interopRequireDefault(require("../Error"));

var _LoggedIn = _interopRequireDefault(require("./LoggedIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 !important;\n  height: auto !important;\n  width: auto !important;\n\n  & svg:hover {\n    opacity: 1;\n  }\n\n  &[data-hint-position=\"bottom\"] {\n    &::before {\n      bottom: -9px;\n      left: 8px;\n    }\n\n    &::after {\n      margin-top: 9px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconButtonLink = _styledComponents.default.a(_templateObject());

var AccountWidget = function AccountWidget(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      user = _ref.user,
      style = _ref.style,
      strings = _ref.strings;
  return _react.default.createElement("div", {
    style: style
  }, loading && !error && _react.default.createElement(_Spinner.default, null), error && _react.default.createElement(_Error.default, null), !error && !loading && user ? _react.default.createElement(_LoggedIn.default, {
    style: style,
    playerId: user.account_id
  }) : _react.default.createElement(IconButtonLink, {
    href: "".concat(process.env.REACT_APP_API_HOST, "/login")
  }, _react.default.createElement(_Icons.IconSteam, null), strings.app_login));
};

AccountWidget.propTypes = {
  loading: _propTypes.default.bool,
  error: _propTypes.default.string,
  user: _propTypes.default.shape({}),
  style: _propTypes.default.string,
  strings: _propTypes.default.shape({})
};

var mapStateToProps = function mapStateToProps(state) {
  var _state$app$metadata = state.app.metadata,
      error = _state$app$metadata.error,
      loading = _state$app$metadata.loading,
      data = _state$app$metadata.data;
  return {
    loading: loading,
    error: error,
    user: data.user,
    strings: state.app.strings
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(AccountWidget);

exports.default = _default;