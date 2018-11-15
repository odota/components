"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Drawer = _interopRequireDefault(require("material-ui/Drawer"));

var _Menu = _interopRequireDefault(require("material-ui/Menu"));

var _MenuItem = _interopRequireDefault(require("material-ui/MenuItem"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _menu = _interopRequireDefault(require("material-ui/svg-icons/navigation/menu"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = _interopRequireDefault(require("../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", " !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDrawer = (0, _styledComponents.default)(_Drawer.default)(_templateObject(), _constants.default.defaultPrimaryColor);
var StyledMenuItem = (0, _styledComponents.default)(_MenuItem.default)(_templateObject2());

var BurgerMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BurgerMenu, _React$Component);

  function BurgerMenu() {
    var _this;

    _classCallCheck(this, BurgerMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BurgerMenu).call(this));
    _this.state = {
      open: false
    };

    _this.handleToggle = function () {
      return _this.setState({
        open: !_this.state.open
      });
    };

    _this.handleClose = function () {
      return _this.setState({
        open: false
      });
    };

    return _this;
  }

  _createClass(BurgerMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", null, _react.default.createElement(_IconButton.default, {
        onClick: this.handleToggle
      }, _react.default.createElement(_menu.default, null)), _react.default.createElement(StyledDrawer, {
        docked: false,
        width: 260,
        open: this.state.open,
        onRequestChange: function onRequestChange(open) {
          return _this2.setState({
            open: open
          });
        }
      }, _react.default.createElement(_Menu.default, null, this.props.menuItems.map(function (item) {
        var linkElement = _react.default.cloneElement(item, {
          style: {
            width: '100%',
            display: 'block'
          }
        });

        return _react.default.createElement(StyledMenuItem, {
          key: item.key,
          onClick: _this2.handleClose
        }, linkElement);
      }))));
    }
  }]);

  return BurgerMenu;
}(_react.default.Component);

exports.default = BurgerMenu;

_defineProperty(BurgerMenu, "propTypes", {
  menuItems: _propTypes.default.arrayOf({})
});