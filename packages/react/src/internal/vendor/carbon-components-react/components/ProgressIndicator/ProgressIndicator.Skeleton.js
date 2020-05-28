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
var step = React.createElement("li", {
  className: "".concat(prefix, "--progress-step ").concat(prefix, "--progress-step--incomplete")
}, React.createElement("div", {
  className: "".concat(prefix, "--progress-step-button ").concat(prefix, "--progress-step-button--unclickable")
}, React.createElement("svg", null, React.createElement("path", {
  d: "M 7, 7 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0"
})), React.createElement("p", {
  className: "".concat(prefix, "--progress-label")
}), React.createElement("span", {
  className: "".concat(prefix, "--progress-line")
})));

function ProgressIndicatorSkeleton(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement("ul", _extends({
    className: cx("".concat(prefix, "--progress"), "".concat(prefix, "--skeleton"), className)
  }, rest), step, step, step, step);
}

ProgressIndicatorSkeleton.propTypes = {
  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string
};
export default ProgressIndicatorSkeleton;