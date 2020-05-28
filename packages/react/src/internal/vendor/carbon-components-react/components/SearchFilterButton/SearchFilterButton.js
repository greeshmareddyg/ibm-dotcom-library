function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import settings from 'carbon-components/es/globals/js/settings';
import Filter16 from '@carbon/icons-react/es/filter/16';
var prefix = settings.prefix;
var didWarnAboutDeprecation = false;
/**
 * The filter button for `<Search>`.
 */

var SearchFilterButton = function SearchFilterButton(_ref) {
  var labelText = _ref.labelText,
      iconDescription = _ref.iconDescription,
      other = _objectWithoutProperties(_ref, ["labelText", "iconDescription"]);

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'The SearchFilterButton component has been deprecated and will be removed in the next major release of `carbon-components-react`') : void 0;
    didWarnAboutDeprecation = true;
  }

  return React.createElement("button", _extends({
    className: "".concat(prefix, "--search-button"),
    type: "button",
    "aria-label": labelText,
    title: labelText
  }, other), React.createElement(Filter16, {
    className: "".concat(prefix, "--search-filter"),
    "aria-label": iconDescription
  }));
};

SearchFilterButton.propTypes = {
  /**
   * The a11y label text.
   */
  labelText: PropTypes.string,

  /**
   * The icon description.
   */
  iconDescription: PropTypes.string
};
SearchFilterButton.defaultProps = {
  labelText: 'Search',
  iconDescription: 'filter'
};
export default SearchFilterButton;