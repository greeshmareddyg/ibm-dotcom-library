/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { object, text, withKnobs } from '@storybook/addon-knobs';
import ContentItemHorizontal from '../ContentItemHorizontal';
import React from 'react';
import readme from '../README.stories.mdx';

export default {
  title: 'Components|ContentItemHorizontal',
  decorators: [withKnobs],

  parameters: {
    ...readme.parameters,
  },
};

export const Default = () => {
  const eyebrow = text('Eyebrow', 'Lorem ipsum');
  const heading = text('Heading', 'Aliquam condimentum');
  const copy = text(
    'Copy',
    'Lorem ipsum dolor sit amet, _consectetur_ adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin.'
  );

  const cta = {
    items: object('link list items array', [
      {
        type: 'local',
        copy: 'Learn more',
        cta: {
          href: 'https://ibm.com',
        },
      },
      {
        type: 'external',
        copy: 'Microservices and containers',
        cta: {
          href: 'https://ibm.com',
        },
      },
    ]),
  };

  return (
    <div className="bx--grid bx--content-group-story">
      <div className="bx--row">
        <div className="bx--col-sm-4 bx--col-lg-12 bx--offset-lg-2">
          <ContentItemHorizontal
            eyebrow={eyebrow}
            heading={heading}
            copy={copy}
            cta={cta}
          />
        </div>
      </div>
    </div>
  );
};
