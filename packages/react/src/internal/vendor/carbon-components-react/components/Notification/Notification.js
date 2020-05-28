function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import settings from 'carbon-components/es/globals/js/settings';
import Close20 from '@carbon/icons-react/es/close/20';import ErrorFilled20 from '@carbon/icons-react/es/error--filled/20';import CheckmarkFilled20 from '@carbon/icons-react/es/checkmark--filled/20';import WarningFilled20 from '@carbon/icons-react/es/warning--filled/20';import InformationFilled20 from '@carbon/icons-react/es/information--filled/20';
import Button from '../Button';
var prefix = settings.prefix;
export function NotificationActionButton(_ref) {
  var children = _ref.children,
      customClassName = _ref.className,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["children", "className", "onClick"]);

  var className = cx(customClassName, "".concat(prefix, "--inline-notification__action-button"));
  return React.createElement(Button, _extends({
    className: className,
    kind: "ghost",
    onClick: onClick,
    size: "small"
  }, rest), children);
}
NotificationActionButton.propTypes = {
  /**
   * Specify an optional className to be applied to the notification action button
   */
  className: PropTypes.string,

  /**
   * Specify the content of the notification action button.
   */
  children: PropTypes.node,

  /**
   * Optionally specify a click handler for the notification action button.
   */
  onClick: PropTypes.func
};
export function NotificationButton(_ref2) {
  var _cx, _cx2;

  var ariaLabel = _ref2.ariaLabel,
      className = _ref2.className,
      iconDescription = _ref2.iconDescription,
      type = _ref2.type,
      IconTag = _ref2.renderIcon,
      name = _ref2.name,
      notificationType = _ref2.notificationType,
      rest = _objectWithoutProperties(_ref2, ["ariaLabel", "className", "iconDescription", "type", "renderIcon", "name", "notificationType"]);

  var buttonClassName = cx(className, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--toast-notification__close-button"), notificationType === 'toast'), _defineProperty(_cx, "".concat(prefix, "--inline-notification__close-button"), notificationType === 'inline'), _cx));
  var iconClassName = cx((_cx2 = {}, _defineProperty(_cx2, "".concat(prefix, "--toast-notification__close-icon"), notificationType === 'toast'), _defineProperty(_cx2, "".concat(prefix, "--inline-notification__close-icon"), notificationType === 'inline'), _cx2));
  return React.createElement("button", _extends({}, rest, {
    type: type,
    "aria-label": iconDescription,
    title: iconDescription,
    className: buttonClassName
  }), IconTag && React.createElement(IconTag, {
    "aria-label": ariaLabel,
    className: iconClassName,
    name: name
  }));
}
NotificationButton.propTypes = {
  /**
   * Specify an optional className to be applied to the notification button
   */
  className: PropTypes.string,

  /**
   * Specify a label to be read by screen readers on the notification button
   */
  ariaLabel: PropTypes.string,

  /**
   * Optional prop to specify the type of the Button
   */
  type: PropTypes.string,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Specify an optional icon for the Button through a string,
   * if something but regular "close" icon is desirable
   */
  name: PropTypes.string,

  /**
   * Specify the notification type
   */
  notificationType: PropTypes.oneOf(['toast', 'inline'])
};
NotificationButton.defaultProps = {
  ariaLabel: 'close notification',
  // TODO: deprecate this prop
  notificationType: 'toast',
  type: 'button',
  iconDescription: 'close icon',
  renderIcon: Close20
};
export function NotificationTextDetails(_ref3) {
  var title = _ref3.title,
      subtitle = _ref3.subtitle,
      caption = _ref3.caption,
      notificationType = _ref3.notificationType,
      children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ["title", "subtitle", "caption", "notificationType", "children"]);

  if (notificationType === 'toast') {
    return React.createElement("div", _extends({}, rest, {
      className: "".concat(prefix, "--toast-notification__details")
    }), React.createElement("h3", {
      className: "".concat(prefix, "--toast-notification__title")
    }, title), React.createElement("div", {
      className: "".concat(prefix, "--toast-notification__subtitle")
    }, subtitle), React.createElement("div", {
      className: "".concat(prefix, "--toast-notification__caption")
    }, caption), children);
  }

  if (notificationType === 'inline') {
    return React.createElement("div", _extends({}, rest, {
      className: "".concat(prefix, "--inline-notification__text-wrapper")
    }), React.createElement("p", {
      className: "".concat(prefix, "--inline-notification__title")
    }, title), React.createElement("div", {
      className: "".concat(prefix, "--inline-notification__subtitle")
    }, subtitle), children);
  }
}
NotificationTextDetails.propTypes = {
  /**
   * Pass in the children that will be rendered in NotificationTextDetails
   */
  children: PropTypes.node,

  /**
   * Specify the title
   */
  title: PropTypes.string,

  /**
   * Specify the sub-title
   */
  subtitle: PropTypes.node,

  /**
   * Specify the caption
   */
  caption: PropTypes.node,

  /**
   * Specify the notification type
   */
  notificationType: PropTypes.oneOf(['toast', 'inline'])
};
NotificationTextDetails.defaultProps = {
  title: 'title',
  caption: 'caption',
  notificationType: 'toast'
};
var iconTypes = {
  error: ErrorFilled20,
  success: CheckmarkFilled20,
  warning: WarningFilled20,
  info: InformationFilled20
};

function NotificationIcon(_ref4) {
  var iconDescription = _ref4.iconDescription,
      kind = _ref4.kind,
      notificationType = _ref4.notificationType;
  var IconForKind = iconTypes[kind];

  if (!IconForKind) {
    return null;
  }

  return React.createElement(IconForKind, {
    className: "".concat(prefix, "--").concat(notificationType, "-notification__icon")
  }, React.createElement("title", null, iconDescription));
}

NotificationIcon.propTypes = {
  notificationType: PropTypes.oneOf(['inline', 'toast']).isRequired,
  kind: PropTypes.oneOf(['error', 'success', 'warning', 'info']).isRequired,
  iconDescription: PropTypes.string.isRequired
};
export function ToastNotification(_ref5) {
  var _cx3;

  var role = _ref5.role,
      notificationType = _ref5.notificationType,
      onCloseButtonClick = _ref5.onCloseButtonClick,
      iconDescription = _ref5.iconDescription,
      statusIconDescription = _ref5.statusIconDescription,
      className = _ref5.className,
      caption = _ref5.caption,
      subtitle = _ref5.subtitle,
      title = _ref5.title,
      kind = _ref5.kind,
      lowContrast = _ref5.lowContrast,
      hideCloseButton = _ref5.hideCloseButton,
      children = _ref5.children,
      timeout = _ref5.timeout,
      rest = _objectWithoutProperties(_ref5, ["role", "notificationType", "onCloseButtonClick", "iconDescription", "statusIconDescription", "className", "caption", "subtitle", "title", "kind", "lowContrast", "hideCloseButton", "children", "timeout"]);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var containerClassName = cx(className, (_cx3 = {}, _defineProperty(_cx3, "".concat(prefix, "--toast-notification"), true), _defineProperty(_cx3, "".concat(prefix, "--toast-notification--low-contrast"), lowContrast), _defineProperty(_cx3, "".concat(prefix, "--toast-notification--").concat(kind), kind), _cx3));

  function handleCloseButtonClick(event) {
    setIsOpen(false);
    onCloseButtonClick(event);
  }

  useEffect(function () {
    if (!timeout) {
      return;
    }

    var timeoutId = window.setTimeout(function () {
      setIsOpen(false);
      onCloseButtonClick(event);
    }, timeout);
    return function () {
      window.clearTimeout(timeoutId);
    };
  }, [onCloseButtonClick, timeout]);

  if (!isOpen) {
    return null;
  }

  return React.createElement("div", _extends({}, rest, {
    role: role,
    kind: kind,
    className: containerClassName
  }), React.createElement(NotificationIcon, {
    notificationType: notificationType,
    kind: kind,
    iconDescription: statusIconDescription || "".concat(kind, " icon")
  }), React.createElement(NotificationTextDetails, {
    title: title,
    subtitle: subtitle,
    caption: caption,
    notificationType: notificationType
  }, children), !hideCloseButton && React.createElement(NotificationButton, {
    iconDescription: iconDescription,
    notificationType: notificationType,
    onClick: handleCloseButtonClick
  }));
}
ToastNotification.propTypes = {
  /**
   * Pass in the children that will be rendered within the ToastNotification
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the notification box
   */
  className: PropTypes.string,

  /**
   * Specify what state the notification represents
   */
  kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,

  /**
   * Specify whether you are using the low contrast variant of the ToastNotification.
   */
  lowContrast: PropTypes.bool,

  /**
   * Specify the title
   */
  title: PropTypes.string.isRequired,

  /**
   * Specify the sub-title
   */
  subtitle: PropTypes.node,

  /**
   * By default, this value is "alert". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string.isRequired,

  /**
   * Specify the caption
   */
  caption: PropTypes.node,

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick: PropTypes.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Provide a description for "status" icon that can be read by screen readers
   */
  statusIconDescription: PropTypes.string,

  /**
   * By default, this value is "toast". You can also provide an alternate type
   * if it makes sense for the underlying `<NotificationTextDetails>` and `<NotificationButton>`
   */
  notificationType: PropTypes.string,

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: PropTypes.bool,

  /**
   * Specify an optional duration the notification should be closed in
   */
  timeout: PropTypes.number
};
ToastNotification.defaultProps = {
  kind: 'error',
  title: 'provide a title',
  caption: 'provide a caption',
  role: 'alert',
  notificationType: 'toast',
  iconDescription: 'closes notification',
  onCloseButtonClick: function onCloseButtonClick() {},
  hideCloseButton: false,
  timeout: 0
};
export function InlineNotification(_ref6) {
  var _cx4;

  var actions = _ref6.actions,
      role = _ref6.role,
      notificationType = _ref6.notificationType,
      onCloseButtonClick = _ref6.onCloseButtonClick,
      iconDescription = _ref6.iconDescription,
      statusIconDescription = _ref6.statusIconDescription,
      className = _ref6.className,
      subtitle = _ref6.subtitle,
      title = _ref6.title,
      kind = _ref6.kind,
      lowContrast = _ref6.lowContrast,
      hideCloseButton = _ref6.hideCloseButton,
      children = _ref6.children,
      rest = _objectWithoutProperties(_ref6, ["actions", "role", "notificationType", "onCloseButtonClick", "iconDescription", "statusIconDescription", "className", "subtitle", "title", "kind", "lowContrast", "hideCloseButton", "children"]);

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var containerClassName = cx(className, (_cx4 = {}, _defineProperty(_cx4, "".concat(prefix, "--inline-notification"), true), _defineProperty(_cx4, "".concat(prefix, "--inline-notification--low-contrast"), lowContrast), _defineProperty(_cx4, "".concat(prefix, "--inline-notification--").concat(kind), kind), _defineProperty(_cx4, "".concat(prefix, "--inline-notification--hide-close-button"), hideCloseButton), _cx4));

  function handleCloseButtonClick(event) {
    setIsOpen(false);
    onCloseButtonClick(event);
  }

  if (!isOpen) {
    return null;
  }

  return React.createElement("div", _extends({}, rest, {
    role: role,
    kind: kind,
    className: containerClassName
  }), React.createElement("div", {
    className: "".concat(prefix, "--inline-notification__details")
  }, React.createElement(NotificationIcon, {
    notificationType: notificationType,
    kind: kind,
    iconDescription: statusIconDescription || "".concat(kind, " icon")
  }), React.createElement(NotificationTextDetails, {
    title: title,
    subtitle: subtitle,
    notificationType: notificationType
  }, children)), actions, !hideCloseButton && React.createElement(NotificationButton, {
    iconDescription: iconDescription,
    notificationType: notificationType,
    onClick: handleCloseButtonClick
  }));
}
InlineNotification.propTypes = {
  /**
   * Pass in the action nodes that will be rendered within the InlineNotification
   */
  actions: PropTypes.node,

  /**
   * Pass in the children that will be rendered within the InlineNotification
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the notification box
   */
  className: PropTypes.string,

  /**
   * Specify what state the notification represents
   */
  kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,

  /**
   * Specify whether you are using the low contrast variant of the InlineNotification.
   */
  lowContrast: PropTypes.bool,

  /**
   * Specify the title
   */
  title: PropTypes.string.isRequired,

  /**
   * Specify the sub-title
   */
  subtitle: PropTypes.node,

  /**
   * By default, this value is "alert". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string.isRequired,

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick: PropTypes.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Provide a description for "status" icon that can be read by screen readers
   */
  statusIconDescription: PropTypes.string,

  /**
   * By default, this value is "inline". You can also provide an alternate type
   * if it makes sense for the underlying `<NotificationTextDetails>` and `<NotificationButton>`
   */
  notificationType: PropTypes.string,

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: PropTypes.bool
};
InlineNotification.defaultProps = {
  role: 'alert',
  notificationType: 'inline',
  iconDescription: 'closes notification',
  onCloseButtonClick: function onCloseButtonClick() {},
  hideCloseButton: false
};