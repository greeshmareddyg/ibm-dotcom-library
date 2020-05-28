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

var DatePickerSkeleton = function DatePickerSkeleton(_ref) {
  var range = _ref.range,
      id = _ref.id,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["range", "id", "className"]);

  var dateInput = React.createElement("div", {
    className: "".concat(prefix, "--date-picker-container")
  },
  /* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
  React.createElement("label", {
    className: "".concat(prefix, "--label"),
    htmlFor: id
  }), React.createElement("div", {
    className: "".concat(prefix, "--date-picker__input ").concat(prefix, "--skeleton")
  }));

  if (range) {
    return React.createElement("div", {
      className: "".concat(prefix, "--form-item")
    }, React.createElement("div", _extends({
      className: cx("".concat(prefix, "--date-picker"), "".concat(prefix, "--date-picker--range"), "".concat(prefix, "--skeleton"), className)
    }, rest), dateInput, dateInput));
  }

  return React.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, React.createElement("div", _extends({
    className: cx("".concat(prefix, "--date-picker"), "".concat(prefix, "--date-picker--short"), "".concat(prefix, "--date-picker--simple"), "".concat(prefix, "--skeleton"), className)
  }, rest), dateInput));
};

DatePickerSkeleton.propTypes = {
  /**
   * Specify whether the skeleton should be of range date picker.
   */
  range: PropTypes.bool,

  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string
};
export default DatePickerSkeleton;