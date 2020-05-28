function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import classnames from 'classnames';
import settings from 'carbon-components/es/globals/js/settings';
import { composeEventHandlers } from '../../tools/events';
var prefix = settings.prefix;
export default function Copy(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      feedback = _ref.feedback,
      feedbackTimeout = _ref.feedbackTimeout,
      onAnimationEnd = _ref.onAnimationEnd,
      onClick = _ref.onClick,
      other = _objectWithoutProperties(_ref, ["children", "className", "feedback", "feedbackTimeout", "onAnimationEnd", "onClick"]);

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      animation = _useState2[0],
      setAnimation = _useState2[1];

  var classNames = classnames(className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--copy-btn--animating"), animation), _defineProperty(_classnames, "".concat(prefix, "--copy-btn--").concat(animation), animation), _classnames));
  var handleFadeOut = useCallback(debounce(function () {
    setAnimation('fade-out');
  }, feedbackTimeout), [feedbackTimeout]);
  var handleClick = useCallback(function () {
    setAnimation('fade-in');
    handleFadeOut();
  }, [handleFadeOut]);

  var handleAnimationEnd = function handleAnimationEnd(event) {
    if (event.animationName === 'hide-feedback') {
      setAnimation('');
    }
  };

  useEffect(function () {
    return function () {
      handleFadeOut.cancel();
    };
  }, [handleFadeOut]);
  return React.createElement("button", _extends({
    type: "button",
    className: classNames,
    onClick: composeEventHandlers([onClick, handleClick]),
    onAnimationEnd: composeEventHandlers([onAnimationEnd, handleAnimationEnd])
  }, other, {
    "aria-live": "polite",
    "aria-label": animation ? feedback : other['aria-label']
  }), children, React.createElement("span", {
    className: "".concat(prefix, "--assistive-text ").concat(prefix, "--copy-btn__feedback")
  }, feedback));
}
Copy.propTypes = {
  /**
   * Pass in content to be rendred in the underlying <button>
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the underlying <button>
   */
  className: PropTypes.string,

  /**
   * Specify the string that is displayed when the button is clicked and the
   * content is copied
   */
  feedback: PropTypes.string,

  /**
   * Specify the time it takes for the feedback message to timeout
   */
  feedbackTimeout: PropTypes.number,

  /**
   * Specify an optional `onClick` handler that is called when the underlying
   * <button> is clicked
   */
  onClick: PropTypes.func
};
Copy.defaultProps = {
  feedback: 'Copied!',
  feedbackTimeout: 2000,
  onClick: function onClick() {}
};