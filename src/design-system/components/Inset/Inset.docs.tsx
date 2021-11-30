/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import { Placeholder } from '../../playground/Placeholder';
import { Docs } from '../../types';
import { Text } from '../Text/Text';
import { Inset } from './Inset';

const docs: Docs = {
  name: 'Inset',
  category: 'Layout',
  description: (
    <Text>
      Renders a <Text weight="bold">container with equal padding</Text> on all
      sides.
    </Text>
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
      description: <Text>Space can also be customized per axis.</Text>,
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
