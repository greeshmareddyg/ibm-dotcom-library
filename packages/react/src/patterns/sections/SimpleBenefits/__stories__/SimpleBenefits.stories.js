/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { object, select, text } from '@storybook/addon-knobs';
import { DDS_SIMPLEBENEFITS } from '../../../../internal/FeatureFlags';
import React from 'react';
import readme from '../README.stories.mdx';
import SimpleBenefits from '../SimpleBenefits';

const defaultContent = [
  {
    title: 'Aliquam condimentum interdum',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.',
  },
  {
    title: 'Aliquam',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.',
    link: {
      href: 'https://www.example.com',
      text: 'Learn more',
      target: '_self',
    },
  },
  {
    title: 'Aliquam condimentum interdum',
    copy:
      'Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Aenean et ultricies est. Aenean et ultricies est.',
    link: {
      href: 'https://www.example.com',
      text: 'Learn more',
      target: '_self',
    },
  },
  {
    title: 'Aliquam condimentum interdum ultricies est',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est.',
    link: {
      href: 'https://www.example.com',
      text: 'Learn more',
      target: '_self',
    },
  },
  {
    title: 'Aliquam condimentum interdum',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.',
  },
  {
    title: 'Aliquam condimentum interdum',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.',
    link: {
      href: 'https://www.example.com',
      text: 'Learn more',
      target: '_self',
    },
  },
];

const themes = {
  white: '',
  g10: 'g10',
  g90: 'g90',
  g100: 'g100',
};

export default !DDS_SIMPLEBENEFITS
  ? undefined
  : {
      title: 'Patterns (Sections)|Simple Benefits',

      parameters: {
        ...readme.parameters,
        knobs: {
          SimpleBenefits: ({ groupId }) => ({
            content: object('Content group', defaultContent, groupId),
            theme: select('Theme', themes, themes.white, groupId),
            title: text(
              'Pattern title (required)',
              'Lorem ipsum dolor sit amet consectetur adipiscing elit',
              groupId
            ),
          }),
        },
      },
    };

export const Default = ({ parameters }) => {
  const { content, theme, title } = parameters?.props?.SimpleBenefits ?? {};
  return <SimpleBenefits content={content} theme={theme} title={title} />;
};
