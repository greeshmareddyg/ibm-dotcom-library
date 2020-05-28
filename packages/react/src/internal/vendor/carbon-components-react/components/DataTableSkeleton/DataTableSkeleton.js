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

var DataTableSkeleton = function DataTableSkeleton(_ref) {
  var _cx;

  var rowCount = _ref.rowCount,
      columnCount = _ref.columnCount,
      zebra = _ref.zebra,
      compact = _ref.compact,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["rowCount", "columnCount", "zebra", "compact", "className"]);

  var dataTableSkeletonClasses = cx(className, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--skeleton"), true), _defineProperty(_cx, "".concat(prefix, "--data-table"), true), _defineProperty(_cx, "".concat(prefix, "--data-table--zebra"), zebra), _defineProperty(_cx, "".concat(prefix, "--data-table--compact"), compact), _cx));
  var rowRepeat = rowCount;
  var rows = Array(rowRepeat);
  var columnsArray = Array.from({
    length: columnCount
  }, function (_, index) {
    return index;
  });

  for (var i = 0; i < rowRepeat; i++) {
    rows[i] = React.createElement("tr", {
      key: i
    }, columnsArray.map(function (j) {
      return React.createElement("td", {
        key: j
      }, React.createElement("span", null));
    }));
  }

  return React.createElement("div", {
    className: "".concat(prefix, "--skeleton ").concat(prefix, "--data-table-container")
  }, React.createElement("div", {
    className: "".concat(prefix, "--data-table-header")
  }, React.createElement("div", {
    className: "".concat(prefix, "--data-table-header__title")
  }), React.createElement("div", {
    className: "".concat(prefix, "--data-table-header__description")
  })), React.createElement("section", {
    "aria-label": "data table toolbar",
    className: "".concat(prefix, "--table-toolbar")
  }, React.createElement("div", {
    className: "".concat(prefix, "--toolbar-content")
  }, React.createElement("button", {
    className: "".concat(prefix, "--skeleton ").concat(prefix, "--btn ").concat(prefix, "--btn--sm"),
    type: "button"
  }))), React.createElement("table", _extends({
    className: dataTableSkeletonClasses
  }, rest), React.createElement("thead", null, React.createElement("tr", null, columnsArray.map(function (i) {
    return React.createElement("th", {
      key: i
    }, React.createElement("span", null));
  }))), React.createElement("tbody", null, rows)));
};

DataTableSkeleton.propTypes = {
  /**
   * Specify the number of rows that you want to render in the skeleton state
   */
  rowCount: PropTypes.number,

  /**
   * Specify the number of columns that you want to render in the skeleton state
   */
  columnCount: PropTypes.number,

  /**
   * Optionally specify whether you want the DataTable to be zebra striped
   */
  zebra: PropTypes.bool,

  /**
   * Optionally specify whether you want the Skeleton to be rendered as a
   * compact DataTable
   */
  compact: PropTypes.bool,

  /**
   * Optionally specify the displayed headers
   */
  headers: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({
    key: PropTypes.string
  })]),

  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string
};
DataTableSkeleton.defaultProps = {
  rowCount: 5,
  columnCount: 5,
  zebra: false,
  compact: false,
  headers: []
};
export default DataTableSkeleton;