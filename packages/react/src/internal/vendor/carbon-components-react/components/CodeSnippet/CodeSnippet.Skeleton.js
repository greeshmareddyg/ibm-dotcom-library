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

function CodeSnippetSkeleton(_ref) {
  var _cx;

  var containerClassName = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'single' : _ref$type,
      rest = _objectWithoutProperties(_ref, ["className", "type"]);

  var className = cx(containerClassName, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--snippet"), true), _defineProperty(_cx, "".concat(prefix, "--skeleton"), true), _defineProperty(_cx, "".concat(prefix, "--snippet--single"), type === 'single'), _defineProperty(_cx, "".concat(prefix, "--snippet--multi"), type === 'multi'), _cx));

  if (type === 'single') {
    return React.createElement("div", _extends({
      className: className
    }, rest), React.createElement("div", {
      className: "".concat(prefix, "--snippet-container")
    }, React.createElement("span", null)));
  }

  if (type === 'multi') {
    return React.createElement("div", _extends({
      className: className
    }, rest), React.createElement("div", {
      className: "".concat(prefix, "--snippet-container")
    }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)));
  }
}

CodeSnippetSkeleton.propTypes = {
  /**
   * The type of the code snippet, including single or multi
   */
  type: PropTypes.oneOf(['single', 'multi']),

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string
};
export default CodeSnippetSkeleton;