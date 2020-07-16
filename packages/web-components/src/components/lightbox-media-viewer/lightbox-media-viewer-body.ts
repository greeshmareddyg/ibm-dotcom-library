/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, customElement, LitElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import FocusMixin from 'carbon-custom-elements/es/globals/mixins/focus';
import styles from './lightbox-media-viewer.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Media viewer modal body.
 *
 * @element dds-lightbox-media-viewer-body
 */
@customElement(`${ddsPrefix}-lightbox-media-viewer-body`)
class DDSLightboxMediaViewerBody extends FocusMixin(LitElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSLightboxMediaViewerBody;
