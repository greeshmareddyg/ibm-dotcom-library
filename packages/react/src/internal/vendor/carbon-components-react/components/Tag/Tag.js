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
import classNames from 'classnames';
import settings from 'carbon-components/es/globals/js/settings';
import Close16 from '@carbon/icons-react/es/close/16';
import setupGetInstanceId from '../../tools/setupGetInstanceId';
var prefix = settings.prefix;
var getInstanceId = setupGetInstanceId();
var TYPES = {
  red: 'Red',
  magenta: 'Magenta',
  purple: 'Purple',
  blue: 'Blue',
  cyan: 'Cyan',
  teal: 'Teal',
  green: 'Green',
  gray: 'Gray',
  'cool-gray': 'Cool-Gray',
  'warm-gray': 'Warm-Gray'
};

var Tag = function Tag(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      type = _ref.type,
      filter = _ref.filter,
      title = _ref.title,
      disabled = _ref.disabled,
      onClose = _ref.onClose,
      other = _objectWithoutProperties(_ref, ["children", "className", "id", "type", "filter", "title", "disabled", "onClose"]);

  var tagId = id || "tag-".concat(getInstanceId());
  var tagClasses = classNames("".concat(prefix, "--tag"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--tag--disabled"), disabled), _defineProperty(_classNames, "".concat(prefix, "--tag--filter"), filter), _defineProperty(_classNames, "".concat(prefix, "--tag--").concat(type), type), _classNames));

  var handleClose = function handleClose(event) {
    event.stopPropagation();
    onClose(event);
  };

  return filter ? React.createElement("div", _extends({
    className: tagClasses,
    "aria-label": title !== undefined ? "".concat(title, " ").concat(children) : "Clear filter ".concat(children),
    id: tagId,
    disabled: disabled
  }, other), React.createElement("span", {
    className: "".concat(prefix, "--tag__label")
  }, children !== null && children !== undefined ? children : TYPES[type]), React.createElement("button", {
    className: "".concat(prefix, "--tag__close-icon"),
    onClick: handleClose,
    "aria-labelledby": tagId
  }, React.createElement(Close16, null))) : React.createElement("span", _extends({
    className: tagClasses
  }, other), children !== null && children !== undefined ? children : TYPES[type]);
};

Tag.propTypes = {
  /**
   * Provide content to be rendered inside of a <Tag>
   */
  children: PropTypes.node,

  /**
   * Provide a custom className that is applied to the containing <span>
   */
  className: PropTypes.string,

  /**
   * Specify the type of the <Tag>
   */
  type: PropTypes.oneOf(Object.keys(TYPES)),

  /**
   * Specify if the <Tag> is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Determine if <Tag> is a filter/chip
   */
  filter: PropTypes.bool,

  /**
   * Text to show on clear filters
   */
  title: PropTypes.string,

  /**
   * Click handler for filter tag close button.
   */
  onClose: PropTypes.func
};
export var types = Object.keys(TYPES);
export default Tag;