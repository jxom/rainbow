/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import * as Docs from '../../docs/components';
import { Placeholder } from '../../playground/Placeholder';
import { Docs as DocsType } from '../../types';
import { Inset } from './Inset';

const docs: DocsType = {
  name: 'Inset',
  category: 'Layout',
  description: (
    <Docs.Text>
      Renders a <Docs.Strong>container with equal padding</Docs.Strong> on all
      sides.
    </Docs.Text>
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
      description: (
        <Docs.Text>Space can also be customized per axis.</Docs.Text>
      ),
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
