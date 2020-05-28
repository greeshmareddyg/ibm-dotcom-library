function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var SelectSkeleton = function SelectSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["hideLabel", "className"]);

  return React.createElement("div", _extends({
    className: cx("".concat(prefix, "--form-item"), className)
  }, rest), !hideLabel && React.createElement("span", {
    className: "".concat(prefix, "--label ").concat(prefix, "--skeleton")
  }), React.createElement("div", {
    className: "".concat(prefix, "--select ").concat(prefix, "--skeleton")
  }, React.createElement("div", {
    className: "".concat(prefix, "--select-input")
  })));
};

SelectSkeleton.propTypes = {
  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify an optional className to add to the form item wrapper.
   */
  className: PropTypes.string
};
export default SelectSkeleton;