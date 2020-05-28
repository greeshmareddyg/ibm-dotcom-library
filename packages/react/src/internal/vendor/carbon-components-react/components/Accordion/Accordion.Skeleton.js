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
import ChevronRight16 from '@carbon/icons-react/es/chevron--right/16';
import settings from 'carbon-components/es/globals/js/settings';
import SkeletonText from '../SkeletonText';
import deprecate from '../../prop-types/deprecate';
var prefix = settings.prefix;

function AccordionSkeleton(_ref) {
  var align = _ref.align,
      open = _ref.open,
      count = _ref.count,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["align", "open", "count", "className"]);

  var classes = cx("".concat(prefix, "--accordion"), "".concat(prefix, "--skeleton"), className, _defineProperty({}, "".concat(prefix, "--accordion--").concat(align), align));
  var numSkeletonItems = open ? count - 1 : count;
  return React.createElement("ul", _extends({
    className: classes
  }, rest), open && React.createElement("li", {
    className: "".concat(prefix, "--accordion__item ").concat(prefix, "--accordion__item--active")
  }, React.createElement("span", {
    className: "".concat(prefix, "--accordion__heading")
  }, React.createElement(ChevronRight16, {
    className: "".concat(prefix, "--accordion__arrow")
  }), React.createElement(SkeletonText, {
    className: "".concat(prefix, "--accordion__title")
  })), React.createElement("div", {
    className: "".concat(prefix, "--accordion__content")
  }, React.createElement(SkeletonText, {
    width: "90%"
  }), React.createElement(SkeletonText, {
    width: "80%"
  }), React.createElement(SkeletonText, {
    width: "95%"
  }))), Array.from({
    length: numSkeletonItems
  }).map(function (_, i) {
    return React.createElement(AccordionSkeletonItem, {
      key: i
    });
  }));
}

AccordionSkeleton.propTypes = {
  /**
   * `false` to not display the first item opened
   */
  open: PropTypes.bool,

  /**
   * Set number of items to render
   */
  count: PropTypes.number,

  /**
   * Set unique identifier to generate unique item keys
   */
  uid: deprecate(PropTypes.any),

  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string,

  /**
   * Specify the alignment of the accordion heading title and chevron.
   */
  align: PropTypes.oneOf(['start', 'end'])
};
AccordionSkeleton.defaultProps = {
  open: true,
  count: 4,
  align: 'end'
};

function AccordionSkeletonItem() {
  return React.createElement("li", {
    className: "".concat(prefix, "--accordion__item")
  }, React.createElement("span", {
    className: "".concat(prefix, "--accordion__heading")
  }, React.createElement(ChevronRight16, {
    className: "".concat(prefix, "--accordion__arrow")
  }), React.createElement(SkeletonText, {
    className: "".concat(prefix, "--accordion__title")
  })));
}

export default AccordionSkeleton;