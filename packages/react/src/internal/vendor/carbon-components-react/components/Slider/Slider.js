function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import settings from 'carbon-components/es/globals/js/settings';
import throttle from 'lodash.throttle';
import * as keys from '../../internal/keyboard/keys';
import { matches } from '../../internal/keyboard/match';
import deprecate from '../../prop-types/deprecate';
var prefix = settings.prefix;

var defaultFormatLabel = function defaultFormatLabel(value, label) {
  return typeof label === 'function' ? label(value) : "".concat(value).concat(label);
};
/**
 * Minimum time between processed "drag" events.
 */


var EVENT_THROTTLE = 16; // ms

/**
 * Event types that trigger "drags".
 */

var DRAG_EVENT_TYPES = new Set(['mousemove', 'touchmove']);
/**
 * Event types that trigger a "drag" to stop.
 */

var DRAG_STOP_EVENT_TYPES = new Set(['mouseup', 'touchend', 'touchcancel']);

var Slider =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.value,
      left: 0,
      needsOnRelease: false
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (evt) {
      // Do nothing if component is disabled
      if (_this.props.disabled) {
        return;
      } // Register drag stop handlers


      DRAG_STOP_EVENT_TYPES.forEach(function (element) {
        _this.element.ownerDocument.addEventListener(element, _this.onDragStop);
      }); // Register drag handlers

      DRAG_EVENT_TYPES.forEach(function (element) {
        _this.element.ownerDocument.addEventListener(element, _this.onDrag);
      }); // Perform first recalculation since we probably didn't click exactly in the
      // middle of the thumb

      _this.onDrag(evt);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function () {
      // Do nothing if component is disabled
      if (_this.props.disabled) {
        return;
      } // Remove drag stop handlers


      DRAG_STOP_EVENT_TYPES.forEach(function (element) {
        _this.element.ownerDocument.removeEventListener(element, _this.onDragStop);
      }); // Remove drag handlers

      DRAG_EVENT_TYPES.forEach(function (element) {
        _this.element.ownerDocument.removeEventListener(element, _this.onDrag);
      }); // Set needsOnRelease flag so event fires on next update

      _this.setState({
        needsOnRelease: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onDrag", function (evt) {
      // Do nothing if component is disabled or we have no event
      if (_this.props.disabled || !evt) {
        return;
      }

      var clientX;

      if ('clientX' in evt) {
        clientX = evt.clientX;
      } else if ('touches' in evt && 0 in evt.touches && 'clientX' in evt.touches[0]) {
        clientX = evt.touches[0].clientX;
      } else {
        // Do nothing if we have no valid clientX
        return;
      }

      var _this$calcValue = _this.calcValue({
        clientX: clientX
      }),
          value = _this$calcValue.value,
          left = _this$calcValue.left;

      _this.setState({
        value: value,
        left: left
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", throttle(_this._onDrag, EVENT_THROTTLE, {
      leading: true,
      trailing: false
    }));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (evt) {
      // Do nothing if component is disabled or we don't have a valid event
      if (_this.props.disabled || !('which' in evt)) {
        return;
      }

      var which = Number.parseInt(evt.which);
      var delta = 0;

      if (matches(which, [keys.ArrowDown, keys.ArrowLeft])) {
        delta = -_this.props.step;
      } else if (matches(which, [keys.ArrowUp, keys.ArrowRight])) {
        delta = _this.props.step;
      } else {
        // Ignore keys we don't want to handle
        return;
      } // If shift was held, account for the stepMultiplier


      if (evt.shiftKey) {
        var stepMultiplier = _this.props.stepMultiplier || _this.props.stepMuliplier;
        delta *= stepMultiplier;
      }

      Math.floor(_this.state.value / _this.props.step) * _this.props.step;

      var _this$calcValue2 = _this.calcValue({
        // Ensures custom value from `<input>` won't cause skipping next stepping point with right arrow key,
        // e.g. Typing 51 in `<input>`, moving focus onto the thumb and the hitting right arrow key should yield 52 instead of 54
        value: (delta > 0 ? Math.floor(_this.state.value / _this.props.step) * _this.props.step : _this.state.value) + delta
      }),
          value = _this$calcValue2.value,
          left = _this$calcValue2.left;

      _this.setState({
        value: value,
        left: left
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (evt) {
      // Do nothing if component is disabled
      if (_this.props.disabled) {
        return;
      } // Do nothing if we have no valid event, target, or value


      if (!evt || !('target' in evt) || typeof evt.target.value !== 'string') {
        return;
      }

      var targetValue = Number.parseFloat(evt.target.value); // Avoid calling calcValue for invaid numbers, but still update the state

      if (isNaN(targetValue)) {
        _this.setState({
          value: evt.target.value
        });
      } else {
        // Recalculate the state's value and update the Slider
        var _this$calcValue3 = _this.calcValue({
          value: targetValue,
          useRawValue: true
        }),
            value = _this$calcValue3.value,
            left = _this$calcValue3.left;

        _this.setState({
          value: value,
          left: left,
          needsOnRelease: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "calcValue", function (_ref) {
      var _ref$clientX = _ref.clientX,
          clientX = _ref$clientX === void 0 ? null : _ref$clientX,
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? null : _ref$value,
          _ref$useRawValue = _ref.useRawValue,
          useRawValue = _ref$useRawValue === void 0 ? false : _ref$useRawValue;
      var range = _this.props.max - _this.props.min;

      var boundingRect = _this.element.getBoundingClientRect();

      var totalSteps = range / _this.props.step;
      var width = boundingRect.right - boundingRect.left; // Enforce a minimum width of at least 1 for calculations

      if (width <= 0) {
        width = 1;
      } // If a clientX is specified, use it to calculate the leftPercent. If not,
      // use the provided value or state's value to calculate it instead.


      var leftPercent;

      if (clientX != null) {
        var leftOffset = clientX - boundingRect.left;
        leftPercent = leftOffset / width;
      } else {
        if (value == null) {
          value = _this.state.value;
        }

        leftPercent = value / (range - _this.props.min);
      }

      if (useRawValue) {
        // Adjusts only for min/max of thumb position
        return {
          value: value,
          left: Math.min(1, Math.max(0, leftPercent)) * 100
        };
      }

      var steppedValue = Math.round(leftPercent * totalSteps) * _this.props.step;

      var steppedPercent = _this.clamp(steppedValue / range, 0, 1);

      steppedValue = _this.clamp(steppedValue + _this.props.min, _this.props.min, _this.props.max);
      return {
        value: steppedValue,
        left: steppedPercent * 100
      };
    });

    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",

    /**
     * Sets up initial slider position and value in response to component mount.
     */
    value: function componentDidMount() {
      var _this$calcValue4 = this.calcValue({
        useRawValue: true
      }),
          value = _this$calcValue4.value,
          left = _this$calcValue4.left;

      this.setState({
        value: value,
        left: left
      });
    }
    /**
     * Handles firing of `onChange` and `onRelease` callbacks to parent in
     * response to state changes.
     *
     * @param {*} _ Unused (prevProps)
     * @param {*} prevState The previous Slider state, used to see if callbacks
     * should be called.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      // Fire onChange event handler if present, if there's a usable value, and
      // if the value is different from the last one
      if (this.state.value !== '' && prevState.value !== this.state.value && typeof this.props.onChange === 'function') {
        this.props.onChange({
          value: this.state.value
        });
      } // Fire onRelease event handler if present and if needed


      if (this.state.needsOnRelease && typeof this.props.onRelease === 'function') {
        this.props.onRelease({
          value: this.state.value
        }); // Reset the flag

        this.setState({
          needsOnRelease: false
        });
      }
    }
    /**
     * Synonymous to ECMA2017+ `Math.clamp`.
     *
     * @param {number} val
     * @param {number} min
     * @param {number} max
     *
     * @returns `val` if `max>=val>=min`; `min` if `val<min`; `max` if `val>max`.
     */

  }, {
    key: "clamp",
    value: function clamp(val, min, max) {
      return Math.max(min, Math.min(val, max));
    }
    /**
     * Sets up "drag" event handlers and calls `this.onDrag` in case dragging
     * started on somewhere other than the thumb without a corresponding "move"
     * event.
     *
     * @param {Event} evt The event.
     */

  }, {
    key: "render",
    value: function render() {
      var _classNames3,
          _this2 = this;

      var _this$props = this.props,
          ariaLabelInput = _this$props.ariaLabelInput,
          className = _this$props.className,
          hideTextInput = _this$props.hideTextInput,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? this.inputId = this.inputId || "__carbon-slider_".concat(Math.random().toString(36).substr(2)) : _this$props$id,
          min = _this$props.min,
          minLabel = _this$props.minLabel,
          max = _this$props.max,
          maxLabel = _this$props.maxLabel,
          _this$props$formatLab = _this$props.formatLabel,
          formatLabel = _this$props$formatLab === void 0 ? defaultFormatLabel : _this$props$formatLab,
          labelText = _this$props.labelText,
          step = _this$props.step,
          stepMuliplier = _this$props.stepMuliplier,
          stepMultiplier = _this$props.stepMultiplier,
          inputType = _this$props.inputType,
          required = _this$props.required,
          disabled = _this$props.disabled,
          name = _this$props.name,
          light = _this$props.light,
          other = _objectWithoutProperties(_this$props, ["ariaLabelInput", "className", "hideTextInput", "id", "min", "minLabel", "max", "maxLabel", "formatLabel", "labelText", "step", "stepMuliplier", "stepMultiplier", "inputType", "required", "disabled", "name", "light"]);

      delete other.onRelease;
      var _this$state = this.state,
          value = _this$state.value,
          left = _this$state.left;
      var labelClasses = classNames("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--label--disabled"), disabled));
      var sliderClasses = classNames("".concat(prefix, "--slider"), _defineProperty({}, "".concat(prefix, "--slider--disabled"), disabled), className);
      var inputClasses = classNames("".concat(prefix, "--text-input"), "".concat(prefix, "--slider-text-input"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "--text-input--light"), light), _defineProperty(_classNames3, "".concat(prefix, "--text-input--invalid"), this.props.invalid), _classNames3));
      var filledTrackStyle = {
        transform: "translate(0%, -50%) scaleX(".concat(left / 100, ")")
      };
      var thumbStyle = {
        left: "".concat(left, "%")
      };
      var hiddenInputStyle = {
        display: 'none'
      };
      return React.createElement("div", {
        className: "".concat(prefix, "--form-item")
      }, React.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText), React.createElement("div", {
        className: "".concat(prefix, "--slider-container")
      }, React.createElement("span", {
        className: "".concat(prefix, "--slider__range-label")
      }, formatLabel(min, minLabel)), React.createElement("div", _extends({
        className: sliderClasses,
        ref: function ref(node) {
          _this2.element = node;
        },
        onMouseDown: this.onDragStart,
        onTouchStart: this.onDragStart,
        onKeyDown: this.onKeyDown,
        role: "presentation",
        tabIndex: -1
      }, other), React.createElement("div", {
        className: "".concat(prefix, "--slider__thumb"),
        role: "slider",
        id: id,
        tabIndex: 0,
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        style: thumbStyle
      }), React.createElement("div", {
        className: "".concat(prefix, "--slider__track"),
        ref: function ref(node) {
          _this2.track = node;
        }
      }), React.createElement("div", {
        className: "".concat(prefix, "--slider__filled-track"),
        style: filledTrackStyle
      })), React.createElement("span", {
        className: "".concat(prefix, "--slider__range-label")
      }, formatLabel(max, maxLabel)), React.createElement("input", {
        type: hideTextInput ? 'hidden' : inputType,
        style: hideTextInput ? hiddenInputStyle : null,
        id: "".concat(id, "-input-for-slider"),
        name: name,
        className: inputClasses,
        value: value,
        "aria-label": ariaLabelInput,
        disabled: disabled,
        required: required,
        min: min,
        max: max,
        step: step,
        onChange: this.onChange
      })));
    }
  }]);

  return Slider;
}(PureComponent);

_defineProperty(Slider, "propTypes", {
  /**
   * The CSS class name for the slider.
   */
  className: PropTypes.string,

  /**
   * `true` to hide the number input box.
   */
  hideTextInput: PropTypes.bool,

  /**
   * The ID of the `<input>`.
   */
  id: PropTypes.string,

  /**
   * The callback to get notified of change in value.
   */
  onChange: PropTypes.func,

  /**
   * The callback to get notified of value on handle release.
   */
  onRelease: PropTypes.func,

  /**
   * The value.
   */
  value: PropTypes.number.isRequired,

  /**
   * The minimum value.
   */
  min: PropTypes.number.isRequired,

  /**
   * The label associated with the minimum value.
   */
  minLabel: PropTypes.string,

  /**
   * The maximum value.
   */
  max: PropTypes.number.isRequired,

  /**
   * The label associated with the maximum value.
   */
  maxLabel: PropTypes.string,

  /**
   * The callback to format the label associated with the minimum/maximum value.
   */
  formatLabel: PropTypes.func,

  /**
   * The label for the slider.
   */
  labelText: PropTypes.node,

  /**
   * A value determining how much the value should increase/decrease by moving the thumb by mouse.
   */
  step: PropTypes.number,

  /**
   * A value determining how much the value should increase/decrease by Shift+arrow keys,
   * which will be `(max - min) / stepMuliplier`.
   */
  stepMuliplier: deprecate(PropTypes.number, ' The `stepMuliplier` prop has been deprecated in favor of `stepMultiplier`. It will be removed in the next major release.'),

  /**
   * A value determining how much the value should increase/decrease by Shift+arrow keys,
   * which will be `(max - min) / stepMultiplier`.
   */
  stepMultiplier: PropTypes.number,

  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * `true` to disable this slider.
   */
  disabled: PropTypes.bool,

  /**
   * The `name` attribute of the `<input>`.
   */
  name: PropTypes.string,

  /**
   * The `type` attribute of the `<input>`.
   */
  inputType: PropTypes.string,

  /**
   * The `ariaLabel` for the `<input>`.
   */
  ariaLabelInput: PropTypes.string,

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool
});

_defineProperty(Slider, "defaultProps", {
  hideTextInput: false,
  step: 1,
  stepMultiplier: 4,
  disabled: false,
  minLabel: '',
  maxLabel: '',
  inputType: 'number',
  ariaLabelInput: 'Slider number input',
  light: false
});

export { Slider as default };