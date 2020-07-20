/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import 'carbon-custom-elements/es/components/ui-shell/header';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './masthead.scss';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Masthead.
 *
 * @element dds-masthead
 * @slot brand - The left hand area.
 * @slot nav - The nav area.
 * @slot profile - The right hand area.
 */
@customElement(`${ddsPrefix}-masthead`)
class DDSMasthead extends StableSelectorMixin(LitElement) {
  render() {
    return html`
      <div class="${prefix}--masthead__l0">
        <bx-header>
          <slot name="brand"></slot>
          <div class="${prefix}--header__search">
            <div class="${prefix}--header__nav-container">
              <slot></slot>
            </div>
            <slot name="search"></slot>
          </div>
          <slot name="profile"></slot>
        </bx-header>
      </div>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--masthead`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSMasthead;