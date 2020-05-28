function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import cx from 'classnames';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import React from 'react';
import settings from 'carbon-components/es/globals/js/settings';
import Checkmark16 from '@carbon/icons-react/es/checkmark/16';import WarningFilled16 from '@carbon/icons-react/es/warning--filled/16';
import ListBox, { PropTypes as ListBoxPropTypes } from '../ListBox';
import { match, keys } from '../../internal/keyboard';
var prefix = settings.prefix;

var defaultItemToString = function defaultItemToString(item) {
  if (typeof item === 'string') {
    return item;
  }

  return item ? item.label : '';
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (selectedItem) {
      if (_this.props.onChange) {
        _this.props.onChange({
          selectedItem: selectedItem
        });
      }
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var _cx4;

      var _this$props = this.props,
          containerClassName = _this$props.className,
          disabled = _this$props.disabled,
          items = _this$props.items,
          label = _this$props.label,
          ariaLabel = _this$props.ariaLabel,
          itemToString = _this$props.itemToString,
          itemToElement = _this$props.itemToElement,
          type = _this$props.type,
          size = _this$props.size,
          initialSelectedItem = _this$props.initialSelectedItem,
          selectedItem = _this$props.selectedItem,
          id = _this$props.id,
          titleText = _this$props.titleText,
          helperText = _this$props.helperText,
          translateWithId = _this$props.translateWithId,
          light = _this$props.light,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          downshiftProps = _this$props.downshiftProps,
          direction = _this$props.direction;
      var inline = type === 'inline';

      var className = function className(_ref) {
        var _cx;

        var isOpen = _ref.isOpen;
        return cx("".concat(prefix, "--dropdown"), containerClassName, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--dropdown--invalid"), invalid), _defineProperty(_cx, "".concat(prefix, "--dropdown--open"), isOpen), _defineProperty(_cx, "".concat(prefix, "--dropdown--inline"), inline), _defineProperty(_cx, "".concat(prefix, "--dropdown--disabled"), disabled), _defineProperty(_cx, "".concat(prefix, "--dropdown--light"), light), _defineProperty(_cx, "".concat(prefix, "--dropdown--").concat(size), size), _defineProperty(_cx, "".concat(prefix, "--list-box--up"), direction === 'top'), _cx));
      };

      var titleClasses = cx("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--label--disabled"), disabled));
      var helperId = !id || !helperText ? undefined : "dropdown-helper-text-".concat(id);
      var labelId = "dropdown-label-".concat(id);
      var fieldLabelId = "dropdown-field-label-".concat(id);
      var title = titleText ? React.createElement("span", {
        className: titleClasses
      }, titleText) : null;
      var helperClasses = cx("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), disabled));
      var helper = helperText ? React.createElement("div", {
        id: helperId,
        className: helperClasses
      }, helperText) : null;
      var wrapperClasses = cx("".concat(prefix, "--dropdown__wrapper"), "".concat(prefix, "--list-box__wrapper"), (_cx4 = {}, _defineProperty(_cx4, "".concat(prefix, "--dropdown__wrapper--inline"), inline), _defineProperty(_cx4, "".concat(prefix, "--list-box__wrapper--inline"), inline), _defineProperty(_cx4, "".concat(prefix, "--dropdown__wrapper--inline--invalid"), inline && invalid), _defineProperty(_cx4, "".concat(prefix, "--list-box__wrapper--inline--invalid"), inline && invalid), _cx4)); // needs to be Capitalized for react to render it correctly

      var ItemToElement = itemToElement;
      return React.createElement("div", {
        className: wrapperClasses
      }, title, !inline && helper, React.createElement(Downshift, _extends({}, downshiftProps, {
        onChange: this.handleOnChange,
        itemToString: itemToString,
        defaultSelectedItem: initialSelectedItem,
        selectedItem: selectedItem
      }), function (_ref2) {
        var isOpen = _ref2.isOpen,
            itemToString = _ref2.itemToString,
            selectedItem = _ref2.selectedItem,
            highlightedIndex = _ref2.highlightedIndex,
            getRootProps = _ref2.getRootProps,
            getButtonProps = _ref2.getButtonProps,
            getItemProps = _ref2.getItemProps,
            getLabelProps = _ref2.getLabelProps,
            toggleMenu = _ref2.toggleMenu;

        var buttonProps = _objectSpread({}, getButtonProps({
          onKeyDown: function onKeyDown(event) {
            if (match(event, keys.Enter)) {
              toggleMenu();
            }
          },
          disabled: disabled
        }), {
          'aria-label': undefined
        });

        return React.createElement(ListBox, _extends({
          type: type,
          size: size,
          id: id,
          "aria-label": ariaLabel,
          className: className({
            isOpen: isOpen
          }),
          disabled: disabled,
          isOpen: isOpen,
          invalid: invalid,
          invalidText: invalidText,
          light: light
        }, getRootProps({
          refKey: 'innerRef'
        })), invalid && React.createElement(WarningFilled16, {
          className: "".concat(prefix, "--list-box__invalid-icon")
        }), React.createElement(ListBox.Field, _extends({
          id: id,
          tabIndex: "0",
          disabled: disabled,
          "aria-disabled": disabled,
          "aria-labelledby": "".concat(labelId, " ").concat(fieldLabelId),
          "aria-describedby": helperId
        }, buttonProps), React.createElement("span", _extends({
          id: fieldLabelId,
          className: "".concat(prefix, "--list-box__label"),
          title: selectedItem ? itemToString(selectedItem) : label
        }, getLabelProps()), selectedItem ? itemToString(selectedItem) : label), React.createElement(ListBox.MenuIcon, {
          isOpen: isOpen,
          translateWithId: translateWithId
        })), React.createElement(ListBox.Menu, {
          "aria-labelledby": id,
          id: id
        }, items.map(function (item, index) {
          var itemProps = getItemProps({
            item: item,
            index: index
          });
          return React.createElement(ListBox.MenuItem, _extends({
            key: itemProps.id,
            isActive: selectedItem === item,
            isHighlighted: highlightedIndex === index || selectedItem === item,
            title: itemToElement ? item.text : itemToString(item)
          }, itemProps), itemToElement ? React.createElement(ItemToElement, _extends({
            key: itemProps.id
          }, item)) : itemToString(item), selectedItem === item && React.createElement(Checkmark16, {
            className: "".concat(prefix, "--list-box__menu-item__selected-icon")
          }));
        })));
      }));
    }
  }]);

  return Dropdown;
}(React.Component);

_defineProperty(Dropdown, "propTypes", {
  /**
   * Disable the control
   */
  disabled: PropTypes.bool,

  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: PropTypes.array.isRequired,

  /**
   * Allow users to pass in an arbitrary item or a string (in case their items are an array of strings)
   * from their collection that are pre-selected
   */
  initialSelectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Specify a custom `id`
   */
  id: PropTypes.string.isRequired,

  /**
   * Specify whether you want the inline version of this control
   */
  inline: PropTypes.bool,

  /**
   * Specify if the currently selected value is invalid.
   */
  invalid: PropTypes.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: PropTypes.string,

  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list.
   */
  itemToString: PropTypes.func,

  /**
   * Function to render items as custom components instead of strings.
   * Defaults to null and is overriden by a getter
   */
  itemToElement: PropTypes.func,

  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component what kind of internal state changes are occuring.
   */
  onChange: PropTypes.func,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: PropTypes.node.isRequired,

  /**
   * Callback function for translating ListBoxMenuIcon SVG title
   */
  translateWithId: PropTypes.func,

  /**
   * 'aria-label' of the ListBox component.
   */
  ariaLabel: PropTypes.string,

  /**
   * The dropdown type, `default` or `inline`
   */
  type: ListBoxPropTypes.ListBoxType,

  /**
   * Specify the size of the ListBox. Currently supports either `sm` or `xl` as an option.
   */
  size: ListBoxPropTypes.ListBoxSize,

  /**
   * In the case you want to control the dropdown selection entirely.
   */
  selectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool,

  /**
   * Provide the title text that will be read by a screen reader when
   * visiting this control
   */
  titleText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Provide helper text that is used alongside the control label for
   * additional help
   */
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Additional props passed to Downshift
   */
  downshiftProps: PropTypes.shape(Downshift.propTypes),

  /**
   * Specify the direction of the dropdown. Can be either top or bottom.
   */
  direction: PropTypes.oneOf(['top', 'bottom'])
});

_defineProperty(Dropdown, "defaultProps", {
  disabled: false,
  type: 'default',
  itemToString: defaultItemToString,
  itemToElement: null,
  light: false,
  titleText: '',
  helperText: '',
  direction: 'bottom'
});

export { Dropdown as default };