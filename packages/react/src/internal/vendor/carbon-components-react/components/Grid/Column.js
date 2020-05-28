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

function Column(_ref) {
  var _ref$as = _ref.as,
      BaseComponent = _ref$as === void 0 ? 'div' : _ref$as,
      children = _ref.children,
      containerClassName = _ref.className,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xlg = _ref.xlg,
      max = _ref.max,
      rest = _objectWithoutProperties(_ref, ["as", "children", "className", "sm", "md", "lg", "xlg", "max"]);

  var columnClassName = getClassNameForBreakpoints([sm, md, lg, xlg, max]);
  var className = cx(containerClassName, columnClassName, _defineProperty({}, "".concat(prefix, "--col"), columnClassName.length === 0));
  return React.createElement(BaseComponent, _extends({
    className: className
  }, rest), children);
}

var spanPropType = PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.shape({
  span: PropTypes.number,
  offset: PropTypes.number
})]);
Column.propTypes = {
  /**
   * Provide a custom element to render instead of the default <div>
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),

  /**
   * Specify column span for the `sm` breakpoint (Default breakpoint up to 672px)
   * This breakpoint supports 4 columns by default.
   *
   * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
   */
  sm: spanPropType,

  /**
   * Specify column span for the `md` breakpoint (Default breakpoint up to 1056px)
   * This breakpoint supports 8 columns by default.
   *
   * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
   */
  md: spanPropType,

  /**
   * Specify column span for the `lg` breakpoint (Default breakpoint up to 1312px)
   * This breakpoint supports 16 columns by default.
   *
   * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
   */
  lg: spanPropType,

  /**
   * Specify column span for the `xlg` breakpoint (Default breakpoint up to
   * 1584px) This breakpoint supports 16 columns by default.
   *
   * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
   */
  xlg: spanPropType,

  /**
   * Specify column span for the `max` breakpoint. This breakpoint supports 16
   * columns by default.
   *
   * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
   */
  max: spanPropType,

  /**
   * Specify a custom className to be applied to the `Column`
   */
  className: PropTypes.string,

  /**
   * Pass in content that will be rendered within the `Column`
   */
  children: PropTypes.node
};
var breakpointNames = ['sm', 'md', 'lg', 'xlg', 'max'];
/**
 * @typedef {object} Breakpoint
 * @property {boolean|number} [span]
 * @property {number} [offset]
 */

/**
 * Build the appropriate className for the given set of breakpoints.
 * @param {Array<boolean|number|Breakpoint>} breakpoints
 * @returns {string}
 */

function getClassNameForBreakpoints(breakpoints) {
  var classNames = [];

  for (var i = 0; i < breakpoints.length; i++) {
    var breakpoint = breakpoints[i];

    if (!breakpoint) {
      continue;
    }

    var name = breakpointNames[i]; // If our breakpoint is a boolean, the user has specified that the column
    // should be "auto" at this size

    if (breakpoint === true) {
      classNames.push("".concat(prefix, "--col-").concat(name));
      continue;
    } // If our breakpoint is a number, the user has specified the number of
    // columns they'd like this column to span


    if (typeof breakpoint === 'number') {
      classNames.push("".concat(prefix, "--col-").concat(name, "-").concat(breakpoint));
      continue;
    }

    var span = breakpoint.span,
        offset = breakpoint.offset;

    if (typeof span === 'number') {
      classNames.push("".concat(prefix, "--col-").concat(name, "-").concat(span));
    }

    if (span === true) {
      classNames.push("".concat(prefix, "--col-").concat(name));
    }

    if (typeof offset === 'number') {
      classNames.push("".concat(prefix, "--offset-").concat(name, "-").concat(offset));
    }
  }

  return classNames.join(' ');
}

export default Column;