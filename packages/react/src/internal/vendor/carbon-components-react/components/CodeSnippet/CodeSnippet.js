function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import useResizeObserver from 'use-resize-observer/polyfilled';
import ChevronDown16 from '@carbon/icons-react/es/chevron--down/16';
import settings from 'carbon-components/es/globals/js/settings';
import Copy from '../Copy';
import Button from '../Button';
import CopyButton from '../CopyButton';
import getUniqueId from '../../tools/uniqueId';
var prefix = settings.prefix;

function CodeSnippet(_ref) {
  var _classNames;

  var className = _ref.className,
      type = _ref.type,
      children = _ref.children,
      feedback = _ref.feedback,
      onClick = _ref.onClick,
      ariaLabel = _ref.ariaLabel,
      copyLabel = _ref.copyLabel,
      copyButtonDescription = _ref.copyButtonDescription,
      light = _ref.light,
      showMoreText = _ref.showMoreText,
      showLessText = _ref.showLessText,
      rest = _objectWithoutProperties(_ref, ["className", "type", "children", "feedback", "onClick", "ariaLabel", "copyLabel", "copyButtonDescription", "light", "showMoreText", "showLessText"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      expandedCode = _useState2[0],
      setExpandedCode = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      shouldShowMoreLessBtn = _useState4[0],
      setShouldShowMoreLessBtn = _useState4[1];

  var _useRef = useRef(getUniqueId()),
      uid = _useRef.current;

  var codeContentRef = useRef();
  useResizeObserver({
    ref: codeContentRef,
    onResize: function onResize() {
      if (codeContentRef.current) {
        var _codeContentRef$curre = codeContentRef.current.getBoundingClientRect(),
            height = _codeContentRef$curre.height;

        setShouldShowMoreLessBtn(type === 'multi' && height > 255);
      }
    }
  });
  var codeSnippetClasses = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--snippet"), true), _defineProperty(_classNames, "".concat(prefix, "--snippet--").concat(type), type), _defineProperty(_classNames, "".concat(prefix, "--snippet--expand"), expandedCode), _defineProperty(_classNames, "".concat(prefix, "--snippet--light"), light), _classNames));
  var expandCodeBtnText = expandedCode ? showLessText : showMoreText;

  if (type === 'inline') {
    return React.createElement(Copy, _extends({}, rest, {
      onClick: onClick,
      "aria-label": copyLabel || ariaLabel,
      "aria-describedby": uid,
      className: codeSnippetClasses,
      feedback: feedback
    }), React.createElement("code", {
      id: uid
    }, children));
  }

  return React.createElement("div", _extends({}, rest, {
    className: codeSnippetClasses
  }), React.createElement("div", {
    role: type === 'single' ? 'textbox' : null,
    tabIndex: type === 'single' ? 0 : null,
    className: "".concat(prefix, "--snippet-container"),
    "aria-label": ariaLabel || copyLabel || 'code-snippet'
  }, React.createElement("code", null, React.createElement("pre", {
    ref: codeContentRef
  }, children))), React.createElement(CopyButton, {
    onClick: onClick,
    feedback: feedback,
    iconDescription: copyButtonDescription
  }), shouldShowMoreLessBtn && React.createElement(Button, {
    kind: "ghost",
    size: "small",
    className: "".concat(prefix, "--snippet-btn--expand"),
    onClick: function onClick() {
      return setExpandedCode(!expandedCode);
    }
  }, React.createElement("span", {
    className: "".concat(prefix, "--snippet-btn--text")
  }, expandCodeBtnText), React.createElement(ChevronDown16, {
    "aria-label": expandCodeBtnText,
    className: "".concat(prefix, "--icon-chevron--down ").concat(prefix, "--snippet__icon"),
    name: "chevron--down",
    role: "img"
  })));
}

CodeSnippet.propTypes = {
  /**
   * Provide the type of Code Snippet
   */
  type: PropTypes.oneOf(['single', 'inline', 'multi']),

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Provide the content of your CodeSnippet as a string
   */
  children: PropTypes.string,

  /**
   * Specify the string displayed when the snippet is copied
   */
  feedback: PropTypes.string,

  /**
   * Specify the description for the Copy Button
   */
  copyButtonDescription: PropTypes.string,

  /**
   * An optional handler to listen to the `onClick` even fired by the Copy
   * Button
   */
  onClick: PropTypes.func,

  /**
   * Specify a label to be read by screen readers on the containing <textbox>
   * node
   */
  copyLabel: PropTypes.string,

  /**
   * Specify a label to be read by screen readers on the containing <textbox>
   * node
   */
  ariaLabel: PropTypes.string,

  /**
   * Specify a string that is displayed when the Code Snippet text is more
   * than 15 lines
   */
  showMoreText: PropTypes.string,

  /**
   * Specify a string that is displayed when the Code Snippet has been
   * interacted with to show more lines
   */
  showLessText: PropTypes.string,

  /**
   * Specify whether you are using the light variant of the Code Snippet,
   * typically used for inline snippet to display an alternate color
   */
  light: PropTypes.bool
};
CodeSnippet.defaultProps = {
  type: 'single',
  showMoreText: 'Show more',
  showLessText: 'Show less'
};
export default CodeSnippet;