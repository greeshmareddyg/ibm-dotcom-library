function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import Link, { LinkPropTypes } from './Link';
var prefix = settings.prefix;
var HeaderMenuItem = React.forwardRef(function HeaderMenuItem(_ref, ref) {
  var _cx;

  var className = _ref.className,
      isCurrentPage = _ref.isCurrentPage,
      ariaCurrent = _ref['aria-current'],
      children = _ref.children,
      role = _ref.role,
      rest = _objectWithoutProperties(_ref, ["className", "isCurrentPage", "aria-current", "children", "role"]);

  var linkClassName = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--header__menu-item"), true), _defineProperty(_cx, "".concat(prefix, "--header__menu-item--current"), isCurrentPage && ariaCurrent !== 'page'), _cx));
  return React.createElement("li", {
    className: className,
    role: role
  }, React.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: linkClassName,
    ref: ref,
    tabIndex: 0
  }), React.createElement("span", {
    className: "".concat(prefix, "--text-truncate--end")
  }, children)));
});
HeaderMenuItem.propTypes = _objectSpread({}, LinkPropTypes, {
  /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: PropTypes.string,

  /**
   * Pass in children that are either a string or can be read as a string by
   * screen readers
   */
  children: PropTypes.node.isRequired,

  /**
   * Optionally supply a role for the underlying <li> node. Useful for resetting
   * <ul> semantics for menus.
   */
  role: PropTypes.string,

  /**
   * Applies selected styles to the item if a user sets this to true and aria-current !== 'page'.
   */
  isCurrentPage: PropTypes.bool
});
export default HeaderMenuItem;