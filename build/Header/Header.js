"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _search = _interopRequireDefault(require("material-ui/svg-icons/action/search"));

var _Toolbar = require("material-ui/Toolbar");

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _settings = _interopRequireDefault(require("material-ui/svg-icons/action/settings"));

var _bugReport = _interopRequireDefault(require("material-ui/svg-icons/action/bug-report"));

var _powerSettingsNew = _interopRequireDefault(require("material-ui/svg-icons/action/power-settings-new"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Localization = _interopRequireDefault(require("../Localization"));

var _Dropdown = _interopRequireDefault(require("../Header/Dropdown"));

var _constants = _interopRequireDefault(require("../constants"));

var _AccountWidget = _interopRequireDefault(require("../AccountWidget"));

var _SearchForm = _interopRequireDefault(require("../Search/SearchForm"));

var _AppLogo = _interopRequireDefault(require("../App/AppLogo"));

var _BurgerMenu = _interopRequireDefault(require("./BurgerMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", " !important;\n  padding: 8px !important;\n  & a {\n    color: ", ";\n    &:hover {\n      color: ", ";\n      opacity: 0.6;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", " !important;\n  display: flex;\n  align-items: center;\n  margin-top: 2px;\n  margin-right: 15px;\n  & svg {\n    margin-right: 5px;\n    /* Override material-ui */\n    color: currentColor !important;\n    width: 18px !important;\n    height: 18px !important;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var REPORT_BUG_PATH = '//github.com/odota/web/issues';
var VerticalAlignToolbar = (0, _styledComponents.default)(_Toolbar.ToolbarGroup)(_templateObject());
var VerticalAlignDropdown = (0, _styledComponents.default)(_Dropdown.default)(_templateObject2());

var VerticalAlignDiv = _styledComponents.default.div(_templateObject3());

var TabContainer = _styledComponents.default.div(_templateObject4());

var BugLink = _styledComponents.default.a(_templateObject5(), _constants.default.fontSizeMedium, _constants.default.fontWeightLight, _constants.default.colorMutedLight);

var ToolbarHeader = (0, _styledComponents.default)(_Toolbar.Toolbar)(_templateObject6(), _constants.default.defaultPrimaryColor, _constants.default.primaryTextColor, _constants.default.primaryTextColor);

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this));
    _this.state = {};
    import('../Announce').then(function (ann) {
      return _this.setState({
        Announce: ann.default
      });
    });
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          location = _this$props.location,
          small = _this$props.small,
          user = _this$props.user,
          strings = _this$props.strings,
          navbarPages = _this$props.navbarPages;
      var burgerItems = [_react.default.createElement(_AccountWidget.default, {
        key: 0
      })].concat(_toConsumableArray(navbarPages));
      var buttonProps = {
        children: _react.default.createElement(_settings.default, null)
      };

      var LogoGroup = function LogoGroup(_ref) {
        var small = _ref.small;
        return _react.default.createElement(VerticalAlignToolbar, null, !small && _react.default.createElement(_BurgerMenu.default, {
          menuItems: burgerItems
        }), _react.default.createElement(_AppLogo.default, {
          style: {
            marginRight: 18
          }
        }));
      };

      LogoGroup.propTypes = {
        small: _propTypes.default.bool
      };

      var LinkGroup = function LinkGroup() {
        return _react.default.createElement(VerticalAlignToolbar, null, navbarPages.map(function (Page) {
          return _react.default.createElement(TabContainer, {
            key: Page.key
          }, _react.default.createElement("div", {
            style: {
              margin: '0 10px',
              textAlign: 'center',
              fontWeight: "".concat(_constants.default.fontWeightNormal, " !important")
            }
          }, Page));
        }));
      };

      var SearchGroup = function SearchGroup() {
        return _react.default.createElement(VerticalAlignToolbar, {
          style: {
            marginLeft: 20
          }
        }, _react.default.createElement(_search.default, {
          style: {
            marginRight: 6,
            opacity: '.6'
          }
        }), _react.default.createElement(_SearchForm.default, null));
      };

      var AccountGroup = function AccountGroup() {
        return _react.default.createElement(VerticalAlignToolbar, null, _react.default.createElement(_AccountWidget.default, null));
      };

      var SettingsGroup = function SettingsGroup(_ref2) {
        var user = _ref2.user;
        return _react.default.createElement(VerticalAlignDropdown, {
          Button: _IconButton.default,
          buttonProps: buttonProps
        }, _react.default.createElement(_Localization.default, null), _react.default.createElement(ReportBug, null), user ? _react.default.createElement(LogOut, null) : null);
      };

      SettingsGroup.propTypes = {
        user: _propTypes.default.shape({})
      };

      var ReportBug = function ReportBug() {
        return _react.default.createElement(BugLink, {
          href: REPORT_BUG_PATH,
          target: "_blank",
          rel: "noopener noreferrer"
        }, _react.default.createElement(_bugReport.default, null), _react.default.createElement("span", null, strings.app_report_bug));
      };

      var LogOut = function LogOut() {
        return _react.default.createElement(BugLink, {
          href: "".concat(process.env.REACT_APP_API_HOST, "/logout"),
          rel: "noopener noreferrer"
        }, _react.default.createElement(_powerSettingsNew.default, null), _react.default.createElement("span", null, strings.app_logout));
      };

      var Announce = this.state.Announce;
      return _react.default.createElement("div", null, _react.default.createElement(ToolbarHeader, null, _react.default.createElement(VerticalAlignDiv, null, _react.default.createElement(LogoGroup, {
        small: small
      }), small && _react.default.createElement(LinkGroup, null), _react.default.createElement(SearchGroup, null)), _react.default.createElement(VerticalAlignDiv, {
        style: {
          marginLeft: 'auto'
        }
      }, small && _react.default.createElement(AccountGroup, null), _react.default.createElement(SettingsGroup, {
        user: user
      }))), location.pathname !== '/' && Announce && _react.default.createElement(Announce, null));
    }
  }]);

  return Header;
}(_react.default.Component);

_defineProperty(Header, "propTypes", {
  location: _propTypes.default.shape({}),
  small: _propTypes.default.bool,
  user: _propTypes.default.shape({}),
  strings: _propTypes.default.shape({})
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    small: state.browser.greaterThan.small,
    user: state.app.metadata.data.user,
    strings: state.app.strings
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(Header);

exports.default = _default;