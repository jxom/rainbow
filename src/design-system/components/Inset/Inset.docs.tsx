/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import DocsText from '../../docs/system/Text';
import { Placeholder } from '../../playground/Placeholder';
import { Docs } from '../../types';
import { Inset } from './Inset';

const docs: Docs = {
  name: 'Inset',
  category: 'Layout',
  description: (
    <DocsText>
      Renders a <DocsText weight="bold">container with equal padding</DocsText>{' '}
      on all sides.
    </DocsText>
  ),
  examples: [
    {
      name: 'Basic usage',
      Example: () => (
        <Inset space="19px">
          <Placeholder height={100} />
        </Inset>
      ),
    },

    {
      name: 'Custom space',
      Example: () => (
        <Inset space={{ custom: 12 }}>
          <Placeholder height={100} />
        </Inset>
      ),
    },

    {
      name: 'Horizontal space',
      description: <DocsText>Space can also be customized per axis.</DocsText>,
      Example: () => (
        <Inset horizontal="19px">
          <Placeholder height={100} />
        </Inset>
      ),
    },

    {
      name: 'Vertical space',
      Example: () => (
        <Inset vertical="19px">
          <Placeholder height={100} />
        </Inset>
      ),
    },
  ],
};

export default docs;
