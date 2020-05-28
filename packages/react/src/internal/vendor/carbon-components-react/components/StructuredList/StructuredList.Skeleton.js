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

var StructuredListSkeleton = function StructuredListSkeleton(_ref) {
  var _cx;

  var rowCount = _ref.rowCount,
      border = _ref.border,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["rowCount", "border", "className"]);

  var StructuredListSkeletonClasses = cx(className, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--skeleton"), true), _defineProperty(_cx, "".concat(prefix, "--structured-list"), true), _defineProperty(_cx, "".concat(prefix, "--structured-list--border"), border), _cx));
  var rows = [];

  for (var i = 0; i < rowCount; i++) {
    rows.push(React.createElement("div", {
      className: "".concat(prefix, "--structured-list-row"),
      key: i
    }, React.createElement("div", {
      className: "".concat(prefix, "--structured-list-td")
    }), React.createElement("div", {
      className: "".concat(prefix, "--structured-list-td")
    }), React.createElement("div", {
      className: "".concat(prefix, "--structured-list-td")
    })));
  }

  return React.createElement("section", _extends({
    className: StructuredListSkeletonClasses
  }, rest), React.createElement("div", {
    className: "".concat(prefix, "--structured-list-thead")
  }, React.createElement("div", {
    className: "".concat(prefix, "--structured-list-row ").concat(prefix, "--structured-list-row--header-row")
  }, React.createElement("div", {
    className: "".concat(prefix, "--structured-list-th")
  }, React.createElement("span", null)), React.createElement("div", {
    className: "".concat(prefix, "--structured-list-th")
  }, React.createElement("span", null)), React.createElement("div", {
    className: "".concat(prefix, "--structured-list-th")
  }, React.createElement("span", null)))), React.createElement("div", {
    className: "".concat(prefix, "--structured-list-tbody")
  }, rows));
};

StructuredListSkeleton.propTypes = {
  /**
   * number of table rows
   */
  rowCount: PropTypes.number,

  /**
   * Specify whether a border should be added to your StructuredListSkeleton
   */
  border: PropTypes.bool,

  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string
};
StructuredListSkeleton.defaultProps = {
  rowCount: 5,
  border: false
};
export default StructuredListSkeleton;