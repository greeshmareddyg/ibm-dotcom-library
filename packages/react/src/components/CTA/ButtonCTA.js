/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import { ButtonGroup } from '../ButtonGroup';
import CTALogic from './CTALogic';
import PropTypes from 'prop-types';

/**
 * Button subcomponent for CTA.
 */
const ButtonCTA = ({
  type,
  openLightBox,
  renderLightBox,
  videoTitle,
  ...otherProps
}) => {
  const [mediaData, setMediaData] = useState({});

  return type.includes('video') ? (
    <div>
      {CTALogic.launchLightBox(renderLightBox, openLightBox, mediaData)}
      {!renderLightBox && (
        <ButtonGroup
          buttons={_renderButtons({
            videoTitle,
            openLightBox,
            setMediaData,
            ...otherProps,
          })}
        />
      )}
    </div>
  ) : (
    <ButtonGroup buttons={_renderButtons({ ...otherProps })} />
  );
};

/**
 * sets button
 *
 * @param {object} param param object
 * @param {Function} param.openLightBox func to set renderLightBox state
 * @param {Array} param.videoTitle array of video titles
 * @param {Function} param.setMediaData func to set media data state
 * @param {object} param.buttons object with buttons array
 * @private
 * @returns {*} object
 */
const _renderButtons = ({
  openLightBox,
  videoTitle,
  setMediaData,
  buttons,
}) => {
  return buttons.map((button, key) => {
    if (button.type === 'video') {
      button.onClick = e => {
        e.preventDefault();
        setMediaData(button.media);
        return CTALogic.setLightBox(e, openLightBox);
      };
      let title = videoTitle.filter(name => {
        return name.key === key;
      });
      button.copy = !title[0] ? button.copy : title[0].title;
      button.href = '#';
    } else {
      button.onClick = e => CTALogic.jump(e, button.type);
      button.target = CTALogic.external(button.type);
    }
    button.renderIcon = CTALogic.iconSelector(button.type);
    button.iconDescription = _renderIconDesc(button.type);
    return button;
  });
};

/**
 * render the icon description for screen reader
 *
 * @param {string} type type of cta
 *
 * @private
 * @returns {string} icon description
 */
const _renderIconDesc = type => {
  switch (type) {
    case 'external':
      return 'external launch icon';
    case 'jump':
      return 'down arrow icon';
    case 'video':
      return 'play button icon';
    default:
      return 'right arrow icon';
  }
};

ButtonCTA.propTypes = {
  /**
   * CTA type. Choose from:
   *
   * | Type       | SVG element Name | Description                                                      |
   * | ---------- | ---------------- | ---------------------------------------------------------------- |
   * | `local`    | ArrowRight20     | Describes right arrow onClick which loads in self page.          |
   * | `jump`     | ArrowDown20      | Describes down arrow onClick which scrollToView of target.       |
   * | `external` | Launch20         | Describes launch arrow onClick which loads in new tab.           |
   * | `download` | Download20       | Describes download arrow onClick for downloading files.          |
   * | `video`    | PlayOutline20    | Describes play icon onClick which loads the video in a lightbox. |
   *
   * For more details of icons, refer to:
   *
   * - [Icons library](https://www.carbondesignsystem.com/guidelines/icons/library/)!👀
   * - [@carbon/icons-react](https://github.com/carbon-design-system/carbon/tree/master/packages/icons-react)!👀
   * - [carbon-icons](https://www.npmjs.com/package/carbon-icons)!👀
   */
  type: PropTypes.oneOfType([
    PropTypes.oneOf(['jump', 'local', 'external', 'download', 'video']),
    PropTypes.arrayOf(
      PropTypes.oneOf(['jump', 'local', 'external', 'download', 'video'])
    ),
  ]),

  /**
   * Func to set renderLightBox state.
   */
  openLightBox: PropTypes.func,

  /**
   * Bool to determine whether to open lightbox.
   */
  renderLightBox: PropTypes.bool,

  /**
   * Array of video titles.
   */
  videoTitle: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ),

  /**
   * The function to set media data.
   */
  setMediaData: PropTypes.func,
};

export default ButtonCTA;
