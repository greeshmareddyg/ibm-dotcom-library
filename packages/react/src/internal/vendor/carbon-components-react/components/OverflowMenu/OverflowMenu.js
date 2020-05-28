var _triggerButtonPositio, _triggerButtonPositio2;

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
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import settings from 'carbon-components/es/globals/js/settings';
import ClickListener from '../../internal/ClickListener';
import FloatingMenu, { DIRECTION_TOP, DIRECTION_BOTTOM } from '../../internal/FloatingMenu';
import OverflowMenuVertical16 from '@carbon/icons-react/es/overflow-menu--vertical/16';
import { keys, matches as keyCodeMatches } from '../../internal/keyboard';
import mergeRefs from '../../tools/mergeRefs';
var prefix = settings.prefix;

var on = function on(element) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  element.addEventListener.apply(element, args);
  return {
    release: function release() {
      element.removeEventListener.apply(element, args);
      return null;
    }
  };
};
/**
 * The CSS property names of the arrow keyed by the floating menu direction.
 * @type {object<string, string>}
 */


var triggerButtonPositionProps = (_triggerButtonPositio = {}, _defineProperty(_triggerButtonPositio, DIRECTION_TOP, 'bottom'), _defineProperty(_triggerButtonPositio, DIRECTION_BOTTOM, 'top'), _triggerButtonPositio);
/**
 * Determines how the position of arrow should affect the floating menu position.
 * @type {object<string, number>}
 */

var triggerButtonPositionFactors = (_triggerButtonPositio2 = {}, _defineProperty(_triggerButtonPositio2, DIRECTION_TOP, -2), _defineProperty(_triggerButtonPositio2, DIRECTION_BOTTOM, -1), _triggerButtonPositio2);
/**
 * @param {Element} menuBody The menu body with the menu arrow.
 * @param {string} direction The floating menu direction.
 * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
 * @private
 */

export var getMenuOffset = function getMenuOffset(menuBody, direction, trigger, flip) {
  var triggerButtonPositionProp = triggerButtonPositionProps[direction];
  var triggerButtonPositionFactor = triggerButtonPositionFactors[direction];

  if (process.env.NODE_ENV !== "production") {
    !(triggerButtonPositionProp && triggerButtonPositionFactor) ? process.env.NODE_ENV !== "production" ? invariant(false, '[OverflowMenu] wrong floating menu direction: `%s`', direction) : invariant(false) : void 0;
  }

  var menuWidth = menuBody.offsetWidth,
      menuHeight = menuBody.offsetHeight;

  switch (triggerButtonPositionProp) {
    case 'top':
    case 'bottom':
      {
        // TODO: Ensure `trigger` is there for `<OverflowMenu open>`
        var triggerWidth = !trigger ? 0 : trigger.offsetWidth;
        return {
          left: (!flip ? 1 : -1) * (menuWidth / 2 - triggerWidth / 2),
          top: 0
        };
      }

    case 'left':
    case 'right':
      {
        // TODO: Ensure `trigger` is there for `<OverflowMenu open>`
        var triggerHeight = !trigger ? 0 : trigger.offsetHeight;
        return {
          left: 0,
          top: (!flip ? 1 : -1) * (menuHeight / 2 - triggerHeight / 2)
        };
      }

    default:
      break;
  }
};

var OverflowMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(OverflowMenu, _Component);

  function OverflowMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OverflowMenu);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OverflowMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "_hFocusIn", null);

    _defineProperty(_assertThisInitialized(_this), "_hBlurTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "_triggerRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "getPrimaryFocusableElement", function () {
      var triggerEl = _this._triggerRef.current;

      if (triggerEl) {
        var primaryFocusPropEl = triggerEl.querySelector('[data-floating-menu-primary-focus]');

        if (primaryFocusPropEl) {
          return primaryFocusPropEl;
        }
      }

      var firstItem = _this.overflowMenuItem0;

      if (firstItem && firstItem.overflowMenuItem && firstItem.overflowMenuItem.current) {
        return firstItem.overflowMenuItem.current;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (evt) {
      if (!_this._menuBody || !_this._menuBody.contains(evt.target)) {
        _this.setState({
          open: !_this.state.open
        });

        _this.props.onClick(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (evt) {
      if (keyCodeMatches(evt, [keys.ArrowDown])) {
        _this.setState({
          open: !_this.state.open
        });

        _this.props.onClick(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (evt) {
      if (_this.state.open && keyCodeMatches(evt, [keys.ArrowUp, keys.ArrowRight, keys.ArrowDown, keys.ArrowLeft])) {
        evt.preventDefault();
      } // Close the overflow menu on escape


      if (keyCodeMatches(evt, [keys.Escape])) {
        _this.closeMenu(); // Stop the esc keypress from bubbling out and closing something it shouldn't


        evt.stopPropagation();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (evt) {
      if (_this.state.open && (!_this._menuBody || !_this._menuBody.contains(evt.target))) {
        _this.closeMenu();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      var wasOpen = _this.state.open;

      _this.setState({
        open: false
      }, function () {
        if (wasOpen) {
          _this.focusMenuEl();
        }

        _this.props.onClose();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "focusMenuEl", function () {
      var triggerEl = _this._triggerRef.current;

      if (triggerEl) {
        triggerEl.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverflowMenuItemFocus", function (index) {
      var i = function () {
        switch (index) {
          case -1:
            return React.Children.count(_this.props.children) - 1;

          case React.Children.count(_this.props.children):
            return 0;

          default:
            return index;
        }
      }();

      var _ref = _this["overflowMenuItem".concat(i)] || React.Children.toArray(_this.props.children)[i],
          overflowMenuItem = _ref.overflowMenuItem;

      if (overflowMenuItem && overflowMenuItem.current) {
        overflowMenuItem.current.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_bindMenuBody", function (menuBody) {
      if (!menuBody) {
        _this._menuBody = menuBody;
      }

      if (!menuBody && _this._hFocusIn) {
        _this._hFocusIn = _this._hFocusIn.release();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handlePlace", function (menuBody) {
      if (menuBody) {
        _this._menuBody = menuBody;
        var primaryFocus = menuBody.querySelector('[data-floating-menu-primary-focus]') || menuBody;
        primaryFocus.focus();
        var hasFocusin = 'onfocusin' in window;
        var focusinEventName = hasFocusin ? 'focusin' : 'focus';
        _this._hFocusIn = on(menuBody.ownerDocument, focusinEventName, function (event) {
          var target = event.target;
          var triggerEl = _this._triggerRef.current;

          if (!menuBody.contains(target) && triggerEl && !target.matches(".".concat(prefix, "--overflow-menu,.").concat(prefix, "--overflow-menu-options"))) {
            _this.closeMenu();
          }
        }, !hasFocusin);

        _this.props.onOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_getTarget", function () {
      var triggerEl = _this._triggerRef.current;
      return triggerEl && triggerEl.closest('[data-floating-menu-container]') || document.body;
    });

    return _this;
  }

  _createClass(OverflowMenu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var onClose = this.props.onClose;

      if (!this.state.open) {
        onClose();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof this._hBlurTimeout === 'number') {
        clearTimeout(this._hBlurTimeout);
        this._hBlurTimeout = undefined;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _classNames2,
          _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          tabIndex = _this$props.tabIndex,
          ariaLabel = _this$props.ariaLabel,
          children = _this$props.children,
          iconDescription = _this$props.iconDescription,
          direction = _this$props.direction,
          flipped = _this$props.flipped,
          menuOffset = _this$props.menuOffset,
          menuOffsetFlip = _this$props.menuOffsetFlip,
          iconClass = _this$props.iconClass,
          onClick = _this$props.onClick,
          onOpen = _this$props.onOpen,
          IconElement = _this$props.renderIcon,
          ref = _this$props.innerRef,
          menuOptionsClass = _this$props.menuOptionsClass,
          light = _this$props.light,
          other = _objectWithoutProperties(_this$props, ["id", "tabIndex", "ariaLabel", "children", "iconDescription", "direction", "flipped", "menuOffset", "menuOffsetFlip", "iconClass", "onClick", "onOpen", "renderIcon", "innerRef", "menuOptionsClass", "light"]);

      var open = this.state.open;
      var overflowMenuClasses = classNames(this.props.className, "".concat(prefix, "--overflow-menu"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--overflow-menu--open"), open), _defineProperty(_classNames, "".concat(prefix, "--overflow-menu--light"), light), _classNames));
      var overflowMenuOptionsClasses = classNames(menuOptionsClass, "".concat(prefix, "--overflow-menu-options"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--overflow-menu--flip"), this.props.flipped), _defineProperty(_classNames2, "".concat(prefix, "--overflow-menu-options--open"), open), _defineProperty(_classNames2, "".concat(prefix, "--overflow-menu-options--light"), light), _classNames2));
      var overflowMenuIconClasses = classNames("".concat(prefix, "--overflow-menu__icon"), iconClass);
      var childrenWithProps = React.Children.toArray(children).map(function (child, index) {
        return React.cloneElement(child, {
          closeMenu: _this2.closeMenu,
          handleOverflowMenuItemFocus: _this2.handleOverflowMenuItemFocus,
          ref: function ref(e) {
            _this2["overflowMenuItem".concat(index)] = e;
          },
          index: index
        });
      });
      var menuBody = React.createElement("ul", {
        className: overflowMenuOptionsClasses,
        tabIndex: "-1",
        role: "menu",
        "aria-label": ariaLabel
      }, childrenWithProps);
      var wrappedMenuBody = React.createElement(FloatingMenu, {
        triggerRef: this._triggerRef,
        menuDirection: direction,
        menuOffset: flipped ? menuOffsetFlip : menuOffset,
        menuRef: this._bindMenuBody,
        flipped: this.props.flipped,
        target: this._getTarget,
        onPlace: this._handlePlace
      }, React.cloneElement(menuBody, {
        'data-floating-menu-direction': direction
      }));
      var iconProps = {
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        className: overflowMenuIconClasses,
        'aria-label': iconDescription,
        focusable: 'false' // Prevent `<svg>` in trigger icon from getting focus for IE11

      };
      return React.createElement(ClickListener, {
        onClickOutside: this.handleClickOutside
      }, React.createElement("button", _extends({}, other, {
        "aria-haspopup": true,
        "aria-expanded": this.state.open,
        className: overflowMenuClasses,
        onKeyDown: this.handleKeyPress,
        onClick: this.handleClick,
        "aria-label": ariaLabel,
        id: id,
        tabIndex: tabIndex,
        ref: mergeRefs(this._triggerRef, ref)
      }), React.createElement(IconElement, iconProps, iconDescription && React.createElement("title", null, iconDescription)), open && wrappedMenuBody));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var open = _ref2.open;
      var prevOpen = state.prevOpen;
      return prevOpen === open ? null : {
        open: open,
        prevOpen: open
      };
    }
  }]);

  return OverflowMenu;
}(Component);

_defineProperty(OverflowMenu, "propTypes", {
  /**
   * `true` if the menu should be open.
   */
  open: PropTypes.bool,

  /**
   * The menu direction.
   */
  direction: PropTypes.oneOf([DIRECTION_TOP, DIRECTION_BOTTOM]),

  /**
   * `true` if the menu alignment should be flipped.
   */
  flipped: PropTypes.bool,

  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The `tabindex` attribute.
   */
  tabIndex: PropTypes.number,

  /**
   * The element ID.
   */
  id: PropTypes.string,

  /**
   * The ARIA label.
   */
  ariaLabel: PropTypes.string,

  /**
   * The event handler for the `click` event.
   */
  onClick: PropTypes.func,

  /**
   * The event handler for the `focus` event.
   */
  onFocus: PropTypes.func,

  /**
   * The event handler for the `keydown` event.
   */
  onKeyDown: PropTypes.func,

  /**
   * The icon description.
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffset: PropTypes.oneOfType([PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number
  }), PropTypes.func]),

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffsetFlip: PropTypes.oneOfType([PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number
  }), PropTypes.func]),

  /**
   * The CSS class for the icon.
   */
  iconClass: PropTypes.string,

  /**
   * Function called to override icon rendering.
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Function called when menu is closed
   */
  onClose: PropTypes.func,

  /**
   * The class to apply to the menu options
   */
  menuOptionsClass: PropTypes.string,

  /**
   * Function called when menu is closed
   */
  onOpen: PropTypes.func,

  /**
   * `true` to use the light version. For use on $ui-01 backgrounds only.
   * Don't use this to make OverflowMenu background color same as container background color.
   */
  light: PropTypes.bool
});

_defineProperty(OverflowMenu, "defaultProps", {
  ariaLabel: 'Menu',
  iconDescription: 'open and close list of options',
  open: false,
  direction: DIRECTION_BOTTOM,
  flipped: false,
  renderIcon: OverflowMenuVertical16,
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {},
  onClose: function onClose() {},
  onOpen: function onOpen() {},
  tabIndex: 0,
  menuOffset: getMenuOffset,
  menuOffsetFlip: getMenuOffset,
  light: false
});

export default (function () {
  var forwardRef = function forwardRef(props, ref) {
    return React.createElement(OverflowMenu, _extends({}, props, {
      innerRef: ref
    }));
  };

  forwardRef.displayName = 'OverflowMenu';
  return React.forwardRef(forwardRef);
})();