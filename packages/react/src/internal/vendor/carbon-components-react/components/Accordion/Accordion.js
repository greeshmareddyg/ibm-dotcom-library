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

function Accordion(_ref) {
  var align = _ref.align,
      children = _ref.children,
      customClassName = _ref.className,
      rest = _objectWithoutProperties(_ref, ["align", "children", "className"]);

  var className = cx("".concat(prefix, "--accordion"), customClassName, _defineProperty({}, "".concat(prefix, "--accordion--").concat(align), align));
  return React.createElement("ul", _extends({
    className: className
  }, rest), children);
}

Accordion.defaultProps = {
  align: 'end'
};
Accordion.propTypes = {
  /**
   * Pass in the children that will be rendered within the Accordion
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify the alignment of the accordion heading title and chevron.
   */
  align: PropTypes.oneOf(['start', 'end'])
};
export default Accordion;