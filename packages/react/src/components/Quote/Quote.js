/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  settings as ddsSettings,
  decodeString,
} from '@carbon/ibmdotcom-utilities';
import ArrowRight20 from '@carbon/icons-react/es/arrow--right/20';
import classnames from 'classnames';
import { HorizontalRule } from '../HorizontalRule';
import Launch20 from '@carbon/icons-react/es/launch/20';
import { LinkWithIcon } from '../LinkWithIcon';
import PropTypes from 'prop-types';
import React from 'react';
import settings from 'carbon-components/es/globals/js/settings';

const { stablePrefix } = ddsSettings;
const { prefix } = settings;

/**
 * Quote Pattern
 *
 * @param {object} props props Object
 * @param {string} props.markType type of the quote marks
 * @param {string} props.copy quote copy
 * @param {object} props.source source object
 * @param {string} props.source.heading name heading for quote source
 * @param {string} props.source.copy title copy for quote source
 * @param {object} props.cta cta props object
 * @param {string} props.cta.copy cta copy
 * @param {string} props.cta.type type 'local' or 'external'
 * @param {string} props.cta.href cta href
 * @param {boolean} props.inverse toggles inverse theme
 * @returns {*} Quote Pattern
 */
const Quote = ({ markType = 'doubleCurved', copy, source, cta, inverse }) => {
  /**
   * Render the Quote copy with the selected quote marks
   *
   * @returns {*} Blockquote with quote marks
   */
  const renderQuote = () => {
    switch (markType) {
      case 'doubleCurved':
        return (
          <>
            <span className={`${prefix}--quote__mark`}>“</span>
            <blockquote className={`${prefix}--quote__copy`}>
              {decodeString(copy)}”
            </blockquote>
          </>
        );
      case 'singleCurved':
        return (
          <>
            <span className={`${prefix}--quote__mark`}>‘</span>
            <blockquote className={`${prefix}--quote__copy`}>
              {decodeString(copy)}’
            </blockquote>
          </>
        );
      case 'doubleAngle':
        return (
          <>
            <span className={`${prefix}--quote__mark`}>«</span>
            <blockquote className={`${prefix}--quote__copy`}>
              {decodeString(copy)}»
            </blockquote>
          </>
        );
      case 'singleAngle':
        return (
          <>
            <span className={`${prefix}--quote__mark`}>‹</span>
            <blockquote className={`${prefix}--quote__copy`}>
              {decodeString(copy)}›
            </blockquote>
          </>
        );
      case 'lowHighReversedDoubleCurved':
        return (
          <>
            <span className={`${prefix}--quote__mark`}>„</span>
            <blockquote className={`${prefix}--quote__copy`}>
              {decodeString(copy)}“
            </blockquote>
          </>
        );
    }
  };
  return (
    <div
      data-autoid={`${stablePrefix}--quote`}
      className={classnames(
        `${prefix}--quote`,
        `${inverse ? `${prefix}--quote__inverse` : ''}`
      )}>
      <div className={`${prefix}--quote__container`}>
        <div
          className={`${prefix}--quote__wrapper`}
          data-autoid={`${stablePrefix}--quote__copy`}>
          {renderQuote()}
        </div>
        {source && source.heading && source.copy ? (
          <div
            className={`${prefix}--quote__source`}
            data-autoid={`${stablePrefix}--quote__source`}>
            <p className={`${prefix}--quote__source-heading`}>
              {decodeString(source.heading)}
            </p>
            <p className={`${prefix}--quote__source-body`}>
              {decodeString(source.copy)}
            </p>
          </div>
        ) : (
          false
        )}
      </div>
      {cta ? (
        <div className={`${prefix}--quote__footer`}>
          <HorizontalRule />
          <LinkWithIcon href={cta.href}>
            {cta.copy}
            {cta.type === 'local' ? <ArrowRight20 /> : false}
            {cta.type === 'external' ? <Launch20 /> : false}
          </LinkWithIcon>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

Quote.propTypes = {
  /**
   * Type of the quote marks. Choose from:
   *
   * | Name                          | Description |
   * | ----------------------------- | ----------- |
   * | `singleCurved`                | ‘ ’         |
   * | `doubleCurved`                | “ ”         |
   * | `singleAngle`                 | ‹ ›         |
   * | `doubleAngle`                 | « »         |
   * | `lowHighReversedDoubleCurved` | „ “         |
   */
  markType: PropTypes.oneOf([
    'doubleCurved',
    'singleCurved',
    'doubleAngle',
    'singleAngle',
    'lowHighReversedDoubleCurved',
  ]),

  /**
   * Main Quote.
   */
  copy: PropTypes.string.isRequired,

  /**
   * Source object. The structure is:
   *
   * | Name      | Required | Data Type | Default Value | Description      |
   * | --------- | -------- | --------- | ------------- | ---------------- |
   * | `heading` | YES      | String    | null          | Source heading   |
   * | `copy`    | YES      | String    | null          | Source body text |
   */
  source: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
  }),

  /**
   * Object with a sub-scheme of CTA data.
   * See the [`<CTA>`'s README](http://ibmdotcom-react.mybluemix.net/?path=/docs/components-cta--default#props) for full usage details.
   */
  cta: PropTypes.shape({
    copy: PropTypes.string,
    type: PropTypes.oneOf(['local', 'external']),
    href: PropTypes.string,
  }),

  /**
   * `true` to use the invese colors.
   */
  inverse: PropTypes.bool,
};

export default Quote;
