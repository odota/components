"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = _interopRequireDefault(require("material-ui/Menu"));

var _MenuItem = _interopRequireDefault(require("material-ui/MenuItem"));

var _Popover = _interopRequireDefault(require("material-ui/Popover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import styled from 'styled-components';
// import constants from '../constants';
// TODO doesn't work with styled-components right now since overwriting the Button element causes material-ui to lose anchor context

/*
const StyledButton = styled(Button)`
  & svg {
    transform: rotate(${props => props.open ? '90deg' : '0deg'});
    fill: ${props => props.open ? `${constants.colorGolden} !important;` : ''}
    transition: ${constants.linearTransition};
  }
`;
*/
var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRequestClose", function () {
      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTouchTap", function (event) {
      event.preventDefault();

      _this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Button = _this$props.Button,
          buttonProps = _this$props.buttonProps,
          className = _this$props.className,
          children = _this$props.children;
      var open = this.state.open;
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement(Button, _extends({
        onClick: this.handleTouchTap,
        open: open
      }, buttonProps)), _react.default.createElement(_Popover.default, {
        autoCloseWhenOffScreen: false,
        open: open,
        anchorEl: this.state.anchorEl,
        anchorOrigin: {
          horizontal: 'left',
          vertical: 'bottom'
        },
        targetOrigin: {
          horizontal: 'left',
          vertical: 'top'
        },
        onRequestClose: this.handleRequestClose // className={styles.popoverContainer}

      }, _react.default.createElement(_Menu.default, null, _react.default.Children.map(children, function (child) {
        return child ? _react.default.createElement(_MenuItem.default, null, child) : null;
      }))));
    }
  }]);

  return Dropdown;
}(_react.Component);

_defineProperty(Dropdown, "propTypes", {
  Button: _propTypes.default.func,
  buttonProps: _propTypes.default.shape({}),
  className: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf({}), _propTypes.default.node])
});

var _default = Dropdown;
exports.default = _default;