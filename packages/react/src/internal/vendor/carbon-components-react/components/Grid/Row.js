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

function Row(_ref) {
  var _cx;

  var _ref$as = _ref.as,
      BaseComponent = _ref$as === void 0 ? 'div' : _ref$as,
      _ref$condensed = _ref.condensed,
      condensed = _ref$condensed === void 0 ? false : _ref$condensed,
      containerClassName = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["as", "condensed", "className", "children"]);

  var className = cx(containerClassName, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--row"), true), _defineProperty(_cx, "".concat(prefix, "--row--condensed"), condensed), _cx));
  return React.createElement(BaseComponent, _extends({
    className: className
  }, rest), children);
}

Row.propTypes = {
  /**
   * Provide a custom element to render instead of the default <div>
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),

  /**
   * Specify a single row as condensed.Rows that are adjacent
   * and are condensed will have 2px of margin between them to match gutter.
   */
  condensed: PropTypes.bool,

  /**
   * Specify a custom className to be applied to the `Row`
   */
  className: PropTypes.string,

  /**
   * Pass in content that will be rendered within the `Row`
   */
  children: PropTypes.node
};
export default Row;