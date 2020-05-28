function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import settings from 'carbon-components/es/globals/js/settings';
import Close20 from '@carbon/icons-react/es/close/20';
import toggleClass from '../../tools/toggleClass';
import Button from '../Button';
import deprecate from '../../prop-types/deprecate';
import requiredIfGivenPropExists from '../../prop-types/requiredIfGivenPropExists';
import wrapFocus, { elementOrParentIsFloatingMenu } from '../../internal/wrapFocus';
import setupGetInstanceId from '../../tools/setupGetInstanceId';
var prefix = settings.prefix;
var getInstanceId = setupGetInstanceId();

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "button", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "outerModal", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "innerModal", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "startTrap", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "endTrap", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "modalInstanceId", "modal-".concat(getInstanceId()));

    _defineProperty(_assertThisInitialized(_this), "modalLabelId", "".concat(prefix, "--modal-header__label--").concat(_this.modalInstanceId));

    _defineProperty(_assertThisInitialized(_this), "modalHeadingId", "".concat(prefix, "--modal-header__heading--").concat(_this.modalInstanceId));

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (evt) {
      if (_this.props.open) {
        if (evt.which === 27) {
          _this.props.onRequestClose(evt);
        }

        if (evt.which === 13 && _this.props.shouldSubmitOnEnter) {
          _this.props.onRequestSubmit(evt);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMousedown", function (evt) {
      if (_this.innerModal.current && !_this.innerModal.current.contains(evt.target) && !elementOrParentIsFloatingMenu(evt.target, _this.props.selectorsFloatingMenus)) {
        _this.props.onRequestClose(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (_ref) {
      var oldActiveNode = _ref.target,
          currentActiveNode = _ref.relatedTarget;
      var _this$props = _this.props,
          open = _this$props.open,
          selectorsFloatingMenus = _this$props.selectorsFloatingMenus;

      if (open && currentActiveNode && oldActiveNode) {
        var modalNode = _this.innerModal.current;
        var startTrapNode = _this.startTrap.current;
        var endTrapNode = _this.endTrap.current;
        wrapFocus({
          modalNode: modalNode,
          startTrapNode: startTrapNode,
          endTrapNode: endTrapNode,
          currentActiveNode: currentActiveNode,
          oldActiveNode: oldActiveNode,
          selectorsFloatingMenus: selectorsFloatingMenus
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "initialFocus", function (focusContainerElement) {
      var containerElement = focusContainerElement || _this.innerModal.current;
      var primaryFocusElement = containerElement ? containerElement.querySelector(_this.props.selectorPrimaryFocus) : null;

      if (primaryFocusElement) {
        return primaryFocusElement;
      }

      return _this.button && _this.button.current;
    });

    _defineProperty(_assertThisInitialized(_this), "focusButton", function (focusContainerElement) {
      var target = _this.initialFocus(focusContainerElement);

      if (target) {
        target.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTransitionEnd", function (evt) {
      if (evt.target === evt.currentTarget && // Not to handle `onTransitionEnd` on child DOM nodes
      _this.outerModal.current && _this.outerModal.current.offsetWidth && _this.outerModal.current.offsetHeight && _this.beingOpen) {
        _this.focusButton(evt.currentTarget);

        _this.beingOpen = false;
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.open && this.props.open) {
        this.beingOpen = true;
      } else if (prevProps.open && !this.props.open) {
        this.beingOpen = false;
      }

      toggleClass(document.body, "".concat(prefix, "--body--with-modal-open"), this.props.open);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      toggleClass(document.body, "".concat(prefix, "--body--with-modal-open"), false);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      toggleClass(document.body, "".concat(prefix, "--body--with-modal-open"), this.props.open);

      if (!this.props.open) {
        return;
      }

      this.focusButton(this.innerModal.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames3;

      var _this$props2 = this.props,
          modalHeading = _this$props2.modalHeading,
          modalLabel = _this$props2.modalLabel,
          modalAriaLabel = _this$props2.modalAriaLabel,
          passiveModal = _this$props2.passiveModal,
          hasForm = _this$props2.hasForm,
          secondaryButtonText = _this$props2.secondaryButtonText,
          primaryButtonText = _this$props2.primaryButtonText,
          open = _this$props2.open,
          onRequestClose = _this$props2.onRequestClose,
          onRequestSubmit = _this$props2.onRequestSubmit,
          onSecondarySubmit = _this$props2.onSecondarySubmit,
          iconDescription = _this$props2.iconDescription,
          primaryButtonDisabled = _this$props2.primaryButtonDisabled,
          danger = _this$props2.danger,
          selectorPrimaryFocus = _this$props2.selectorPrimaryFocus,
          selectorsFloatingMenus = _this$props2.selectorsFloatingMenus,
          shouldSubmitOnEnter = _this$props2.shouldSubmitOnEnter,
          size = _this$props2.size,
          hasScrollingContent = _this$props2.hasScrollingContent,
          other = _objectWithoutProperties(_this$props2, ["modalHeading", "modalLabel", "modalAriaLabel", "passiveModal", "hasForm", "secondaryButtonText", "primaryButtonText", "open", "onRequestClose", "onRequestSubmit", "onSecondarySubmit", "iconDescription", "primaryButtonDisabled", "danger", "selectorPrimaryFocus", "selectorsFloatingMenus", "shouldSubmitOnEnter", "size", "hasScrollingContent"]);

      var onSecondaryButtonClick = onSecondarySubmit ? onSecondarySubmit : onRequestClose;
      var modalClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--modal"), true), _defineProperty(_classNames, "".concat(prefix, "--modal-tall"), !passiveModal), _defineProperty(_classNames, 'is-visible', open), _defineProperty(_classNames, "".concat(prefix, "--modal--danger"), this.props.danger), _defineProperty(_classNames, this.props.className, this.props.className), _classNames));
      var containerClasses = classNames("".concat(prefix, "--modal-container"), _defineProperty({}, "".concat(prefix, "--modal-container--").concat(size), size));
      var contentClasses = classNames("".concat(prefix, "--modal-content"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "--modal-content--with-form"), hasForm), _defineProperty(_classNames3, "".concat(prefix, "--modal-scroll-content"), hasScrollingContent), _classNames3));
      var modalButton = React.createElement("button", {
        className: "".concat(prefix, "--modal-close"),
        type: "button",
        onClick: onRequestClose,
        title: iconDescription,
        "aria-label": iconDescription,
        ref: this.button
      }, React.createElement(Close20, {
        "aria-label": iconDescription,
        className: "".concat(prefix, "--modal-close__icon")
      }));
      var ariaLabel = modalLabel || this.props['aria-label'] || modalAriaLabel || modalHeading;
      var getAriaLabelledBy = modalLabel ? this.modalLabelId : this.modalHeadingId;
      var hasScrollingContentProps = hasScrollingContent ? {
        tabIndex: 0,
        role: 'region',
        'aria-label': ariaLabel,
        'aria-labelledby': getAriaLabelledBy
      } : {};
      var modalBody = React.createElement("div", {
        ref: this.innerModal,
        role: "dialog",
        className: containerClasses,
        "aria-label": ariaLabel,
        "aria-modal": "true",
        tabIndex: "-1"
      }, React.createElement("div", {
        className: "".concat(prefix, "--modal-header")
      }, passiveModal && modalButton, modalLabel && React.createElement("h2", {
        id: this.modalLabelId,
        className: "".concat(prefix, "--modal-header__label")
      }, modalLabel), React.createElement("h3", {
        id: this.modalHeadingId,
        className: "".concat(prefix, "--modal-header__heading")
      }, modalHeading), !passiveModal && modalButton), React.createElement("div", _extends({
        className: contentClasses
      }, hasScrollingContentProps, {
        "aria-labelledby": getAriaLabelledBy
      }), this.props.children), hasScrollingContent && React.createElement("div", {
        className: "".concat(prefix, "--modal-content--overflow-indicator")
      }), !passiveModal && React.createElement("div", {
        className: "".concat(prefix, "--modal-footer")
      }, React.createElement(Button, {
        kind: "secondary",
        onClick: onSecondaryButtonClick
      }, secondaryButtonText), React.createElement(Button, {
        kind: danger ? 'danger' : 'primary',
        disabled: primaryButtonDisabled,
        onClick: onRequestSubmit,
        ref: this.button
      }, primaryButtonText)));
      return React.createElement("div", _extends({}, other, {
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMousedown,
        onBlur: this.handleBlur,
        className: modalClasses,
        role: "presentation",
        onTransitionEnd: this.props.open ? this.handleTransitionEnd : undefined,
        ref: this.outerModal
      }), React.createElement("span", {
        ref: this.startTrap,
        tabIndex: "0",
        role: "link",
        className: "".concat(prefix, "--visually-hidden")
      }, "Focus sentinel"), modalBody, React.createElement("span", {
        ref: this.endTrap,
        tabIndex: "0",
        role: "link",
        className: "".concat(prefix, "--visually-hidden")
      }, "Focus sentinel"));
    }
  }]);

  return Modal;
}(Component);

_defineProperty(Modal, "propTypes", _defineProperty({
  /**
   * Provide the contents of your Modal
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: PropTypes.string,

  /**
   * Specify whether the modal should be button-less
   */
  passiveModal: PropTypes.bool,

  /**
   * Provide whether the modal content has a form element.
   * If `true` is used here, non-form child content should have `bx--modal-content__regular-content` class.
   */
  hasForm: PropTypes.bool,

  /**
   * Specify a handler for closing modal.
   * The handler should care of closing modal, e.g. changing `open` prop.
   */
  onRequestClose: PropTypes.func,

  /**
   * Specify the DOM element ID of the top-level node.
   */
  id: PropTypes.string,

  /**
   * Specify the content of the modal header title.
   */
  modalHeading: PropTypes.node,

  /**
   * Specify the content of the modal header label.
   */
  modalLabel: PropTypes.node,

  /**
   * Specify a label to be read by screen readers on the modal root node
   */
  modalAriaLabel: PropTypes.string,

  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes.string,

  /**
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes.string,

  /**
   * Specify whether the Modal is currently open
   */
  open: PropTypes.bool,

  /**
   * Specify a handler for "submitting" modal.
   * The handler should care of closing modal, e.g. changing `open` prop, if necessary.
   */
  onRequestSubmit: PropTypes.func,

  /**
   * Specify a handler for keypresses.
   */
  onKeyDown: PropTypes.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  primaryButtonDisabled: PropTypes.bool,

  /**
   * Specify a handler for the secondary button.
   * Useful if separate handler from `onRequestClose` is desirable
   */
  onSecondarySubmit: PropTypes.func,

  /**
   * Specify whether the Modal is for dangerous actions
   */
  danger: PropTypes.bool,

  /**
   * Specify if Enter key should be used as "submit" action
   */
  shouldSubmitOnEnter: PropTypes.bool,

  /**
   * Specify CSS selectors that match DOM elements working as floating menus.
   * Focusing on those elements won't trigger "focus-wrap" behavior
   */
  selectorsFloatingMenus: PropTypes.arrayOf(PropTypes.string),

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the Modal opens
   */
  selectorPrimaryFocus: PropTypes.string,

  /**
   * Specify the size variant.
   */
  size: PropTypes.oneOf(['xs', 'sm', 'lg']),

  /**
   * Deprecated; Used for advanced focus-wrapping feature using 3rd party library,
   * but it's now achieved without a 3rd party library.
   */
  focusTrap: deprecate(PropTypes.bool, "\nThe prop `focusTrap` for Modal has been deprecated, as the feature of `focusTrap` runs by default."),

  /**
   * Specify whether the modal contains scrolling content
   */
  hasScrollingContent: PropTypes.bool
}, 'aria-label', requiredIfGivenPropExists('hasScrollingContent', PropTypes.string)));

_defineProperty(Modal, "defaultProps", {
  onRequestClose: function onRequestClose() {},
  onRequestSubmit: function onRequestSubmit() {},
  primaryButtonDisabled: false,
  onKeyDown: function onKeyDown() {},
  passiveModal: false,
  iconDescription: 'Close',
  modalHeading: '',
  modalLabel: '',
  selectorPrimaryFocus: '[data-modal-primary-focus]',
  hasScrollingContent: false
});

export { Modal as default };