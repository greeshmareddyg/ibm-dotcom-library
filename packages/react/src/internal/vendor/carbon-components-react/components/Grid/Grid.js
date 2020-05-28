function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var prefix = settings.prefix;

function Grid(_ref) {
  var _cx;

  var _ref$as = _ref.as,
      BaseComponent = _ref$as === void 0 ? 'div' : _ref$as,
      _ref$condensed = _ref.condensed,
      condensed = _ref$condensed === void 0 ? false : _ref$condensed,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      containerClassName = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["as", "condensed", "fullWidth", "className", "children"]);

  var className = cx(containerClassName, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--grid"), true), _defineProperty(_cx, "".concat(prefix, "--grid--condensed"), condensed), _defineProperty(_cx, "".concat(prefix, "--grid--full-width"), fullWidth), _cx));
  return React.createElement(BaseComponent, _extends({
    className: className
  }, rest), children);
}

Grid.propTypes = {
  /**
   * Provide a custom element to render instead of the default <div>
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),

  /**
   * Collapse the gutter to 2px. Useful for fluid layouts.
   * Rows have 2px of margin between them to match gutter.
   */
  condensed: PropTypes.bool,

  /**
   * Remove the default max width that the grid has set
   */
  fullWidth: PropTypes.bool,

  /**
   * Specify a custom className to be applied to the `Grid`
   */
  className: PropTypes.string,

  /**
   * Pass in content that will be rendered within the `Grid`
   */
  children: PropTypes.node
};
export default Grid;