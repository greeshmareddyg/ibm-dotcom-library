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
import React, { useRef } from 'react';
import uid from '../../tools/uniqueId';
import classNames from 'classnames';
import settings from 'carbon-components/es/globals/js/settings';
import CheckmarkFilled from '@carbon/icons-react/es/checkmark--filled/16';
import { keys, matches } from '../../internal/keyboard';
import deprecate from '../../prop-types/deprecate';
var prefix = settings.prefix;

function RadioTile(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      iconDescription = _ref.iconDescription,
      light = _ref.light,
      checked = _ref.checked,
      name = _ref.name,
      value = _ref.value,
      id = _ref.id,
      onChange = _ref.onChange,
      tabIndex = _ref.tabIndex,
      other = _objectWithoutProperties(_ref, ["children", "className", "iconDescription", "light", "checked", "name", "value", "id", "onChange", "tabIndex"]);

  var _useRef = useRef(id || uid()),
      inputId = _useRef.current;

  var classes = classNames(className, "".concat(prefix, "--tile"), "".concat(prefix, "--tile--selectable"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--tile--is-selected"), checked), _defineProperty(_classNames, "".concat(prefix, "--tile--light"), light), _classNames));

  function handleOnChange(evt) {
    onChange(value, name, evt);
  }

  function handleOnKeyDown(evt) {
    if (matches(evt, [keys.Enter, keys.Space])) {
      evt.preventDefault();
      onChange(value, name, evt);
    }
  }

  return React.createElement(React.Fragment, null, React.createElement("input", _extends({}, other, {
    type: "radio",
    checked: checked,
    name: name,
    value: value,
    className: "".concat(prefix, "--tile-input"),
    onChange: handleOnChange,
    id: inputId
  })), React.createElement("label", {
    htmlFor: inputId,
    className: classes,
    tabIndex: tabIndex,
    onKeyDown: handleOnKeyDown
  }, React.createElement("span", {
    className: "".concat(prefix, "--tile__checkmark")
  }, React.createElement(CheckmarkFilled, null)), React.createElement("span", {
    className: "".concat(prefix, "--tile-content")
  }, children)));
}

RadioTile.propTypes = {
  /**
   * `true` if this tile should be selected.
   */
  checked: PropTypes.bool,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * `true` if the `<input>` should be checked at initialization.
   */
  defaultChecked: PropTypes.bool,

  /**
   * The ID of the `<input>`.
   */
  id: PropTypes.string,

  /**
   * The `name` of the `<input>`.
   */
  name: PropTypes.string,

  /**
   * The description of the tile checkmark icon.
   */
  iconDescription: deprecate(PropTypes.string, 'The `iconDescription` prop for `RadioTile` is no longer needed and has ' + 'been deprecated. It will be moved in the next major release.'),

  /**
   * The handler of the massaged `change` event on the `<input>`.
   */
  onChange: PropTypes.func,

  /**
   * The `value` of the `<input>`.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /**
   * Specify the tab index of the wrapper element
   */
  tabIndex: PropTypes.number,

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool
};
RadioTile.defaultProps = {
  onChange: function onChange() {},
  tabIndex: 0,
  light: false
};
export default RadioTile;