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
var tab = React.createElement("li", {
  className: "".concat(prefix, "--tabs__nav-item")
}, React.createElement("div", {
  className: "".concat(prefix, "--tabs__nav-link")
}, "\xA0"));

function TabsSkeleton(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement("div", _extends({
    className: cx("".concat(prefix, "--tabs"), "".concat(prefix, "--skeleton"), className)
  }, rest), React.createElement("div", {
    className: "".concat(prefix, "--tabs-trigger")
  }, React.createElement("div", {
    className: "".concat(prefix, "--tabs-trigger-text")
  }, "\xA0"), React.createElement("svg", {
    width: "10",
    height: "5",
    viewBox: "0 0 10 5",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M10 0L5 5 0 0z"
  }))), React.createElement("ul", {
    className: "".concat(prefix, "--tabs__nav ").concat(prefix, "--tabs__nav--hidden")
  }, tab, tab, tab, tab));
}

TabsSkeleton.propTypes = {
  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string
};
export default TabsSkeleton;