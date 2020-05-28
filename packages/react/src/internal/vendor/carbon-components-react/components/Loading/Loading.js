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
import React, { useRef } from 'react';
import setupGetInstanceId from '../../tools/setupGetInstanceId';
var prefix = settings.prefix;
var getInstanceId = setupGetInstanceId();

function Loading(_ref) {
  var _cx, _cx2;

  var id = _ref.id,
      active = _ref.active,
      customClassName = _ref.className,
      withOverlay = _ref.withOverlay,
      small = _ref.small,
      description = _ref.description,
      rest = _objectWithoutProperties(_ref, ["id", "active", "className", "withOverlay", "small", "description"]);

  var _useRef = useRef(getInstanceId()),
      instanceId = _useRef.current;

  var loadingClassName = cx(customClassName, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--loading"), true), _defineProperty(_cx, "".concat(prefix, "--loading--small"), small), _defineProperty(_cx, "".concat(prefix, "--loading--stop"), !active), _cx));
  var overlayClassName = cx((_cx2 = {}, _defineProperty(_cx2, "".concat(prefix, "--loading-overlay"), true), _defineProperty(_cx2, "".concat(prefix, "--loading-overlay--stop"), !active), _cx2));
  var loadingId = id || "loading-id-".concat(instanceId);
  var spinnerRadius = small ? '26.8125' : '37.5';
  var loading = React.createElement("div", _extends({}, rest, {
    "aria-atomic": "true",
    "aria-labelledby": loadingId,
    "aria-live": active ? 'assertive' : 'off',
    className: loadingClassName
  }), React.createElement("label", {
    id: loadingId,
    className: "".concat(prefix, "--visually-hidden")
  }, description), React.createElement("svg", {
    className: "".concat(prefix, "--loading__svg"),
    viewBox: "-75 -75 150 150"
  }, React.createElement("title", null, description), small ? React.createElement("circle", {
    className: "".concat(prefix, "--loading__background"),
    cx: "0",
    cy: "0",
    r: spinnerRadius
  }) : null, React.createElement("circle", {
    className: "".concat(prefix, "--loading__stroke"),
    cx: "0",
    cy: "0",
    r: spinnerRadius
  })));
  return withOverlay ? React.createElement("div", {
    className: overlayClassName
  }, loading) : loading;
}

Loading.propTypes = {
  /**
   * Provide an `id` to uniquely identify the label
   */
  id: PropTypes.string,

  /**
   * Specify whether you want the loading indicator to be spinning or not
   */
  active: PropTypes.bool,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Specify whether you want the loader to be applied with an overlay
   */
  withOverlay: PropTypes.bool,

  /**
   * Specify whether you would like the small variant of <Loading>
   */
  small: PropTypes.bool,

  /**
   * Specify an description that would be used to best describe the loading state
   */
  description: PropTypes.string
};
Loading.defaultProps = {
  active: true,
  withOverlay: true,
  small: false,
  description: 'Active loading indicator'
};
export default Loading;