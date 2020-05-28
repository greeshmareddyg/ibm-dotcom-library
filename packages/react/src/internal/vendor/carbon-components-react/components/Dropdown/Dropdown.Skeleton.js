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
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import settings from 'carbon-components/es/globals/js/settings';
var prefix = settings.prefix;

var DropdownSkeleton = function DropdownSkeleton(_ref) {
  var _cx;

  var inline = _ref.inline,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["inline", "className"]);

  var wrapperClasses = cx(className, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--skeleton"), true), _defineProperty(_cx, "".concat(prefix, "--dropdown-v2"), true), _defineProperty(_cx, "".concat(prefix, "--list-box"), true), _defineProperty(_cx, "".concat(prefix, "--form-item"), true), _defineProperty(_cx, "".concat(prefix, "--list-box--inline"), inline), _cx));
  return React.createElement("div", _extends({
    className: wrapperClasses
  }, rest), React.createElement("div", {
    className: "".concat(prefix, "--list-box__field")
  }, React.createElement("span", {
    className: "".concat(prefix, "--list-box__label")
  })));
};

DropdownSkeleton.propTypes = {
  /**
   * Specify whether you want the inline version of this control
   */
  inline: PropTypes.bool,

  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string
};
DropdownSkeleton.defaultProps = {
  inline: false
};
export default DropdownSkeleton;