var _defineProperty2;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import settings from 'carbon-components/es/globals/js/settings';
var prefix = settings.prefix;

var ToggleSmallSkeleton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToggleSmallSkeleton, _React$Component);

  function ToggleSmallSkeleton() {
    _classCallCheck(this, ToggleSmallSkeleton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToggleSmallSkeleton).apply(this, arguments));
  }

  _createClass(ToggleSmallSkeleton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          labelText = _this$props.labelText,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["id", "labelText", "className"]);

      return React.createElement("div", _extends({
        className: cx("".concat(prefix, "--form-item"), className)
      }, rest), React.createElement("input", {
        type: "checkbox",
        id: id,
        className: "".concat(prefix, "--toggle ").concat(prefix, "--toggle--small ").concat(prefix, "--skeleton")
      }), React.createElement("label", {
        className: "".concat(prefix, "--toggle__label ").concat(prefix, "--skeleton"),
        htmlFor: id
      }, labelText && React.createElement("span", {
        className: "".concat(prefix, "--toggle__label-text")
      }, labelText), React.createElement("span", {
        className: "".concat(prefix, "--toggle__appearance")
      }, React.createElement("svg", {
        className: "".concat(prefix, "--toggle__check"),
        width: "6px",
        height: "5px",
        viewBox: "0 0 6 5"
      }, React.createElement("path", {
        d: "M2.2403 2.7299L4.9245 0 6 1.1117 2.2384 5 0 2.6863 1.0612 1.511z"
      })))));
    }
  }]);

  return ToggleSmallSkeleton;
}(React.Component);

_defineProperty(ToggleSmallSkeleton, "propTypes", (_defineProperty2 = {
  /**
   * Provide an id that unique represents the underlying <input>
   */
  id: PropTypes.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   * `aria-label` is always required but will be null if `labelText` is also
   * provided
   */
  labelText: PropTypes.string
}, _defineProperty(_defineProperty2, 'aria-label', PropTypes.string.isRequired), _defineProperty(_defineProperty2, "className", PropTypes.string), _defineProperty2));

_defineProperty(ToggleSmallSkeleton, "defaultProps", _defineProperty({}, 'aria-label', 'Toggle is loading'));

export { ToggleSmallSkeleton as default };