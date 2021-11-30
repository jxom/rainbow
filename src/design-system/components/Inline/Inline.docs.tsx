/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import { Placeholder } from '../../playground/Placeholder';
import { Docs } from '../../types';
import { Text } from '../Text/Text';
import { Inline } from './Inline';

const docs: Docs = {
  name: 'Inline',
  category: 'Layout',
  description: [
    <Text key="1">
      Arranges child nodes{' '}
      <Text weight="bold">
        horizontally, wrapping to multiple lines if needed
      </Text>
      , with equal spacing between items.
    </Text>,
    <Text key="2">
      If there is only a single child node, no space will be rendered.
    </Text>,
  ],
  examples: [
    {
      name: 'Basic usage',
      Example: () => (
        <Inline space="12px">
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
        </Inline>
      ),
    },

    {
      name: 'Custom space',
      Example: () => (
        <Inline space={{ custom: 8 }}>
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
        </Inline>
      ),
    },

    {
      name: 'Different space on each axis',
      description: <Text>Space can also be customized per axis.</Text>,
      Example: () => (
        <Inline horizontalSpace="19px" verticalSpace="12px">
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
        </Inline>
      ),
    },

    {
      name: 'Custom space on each axis',
      Example: () => (
        <Inline horizontalSpace={{ custom: 17 }} verticalSpace={{ custom: 8 }}>
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
        </Inline>
      ),
    },

    {
      name: 'Center-aligned horizontally',
      Example: () => (
        <Inline alignHorizontal="center" space="19px">
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
        </Inline>
      ),
    },

    {
      name: 'Right-aligned horizontally',
      Example: () => (
        <Inline alignHorizontal="right" space="19px">
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={40} />
        </Inline>
      ),
    },

    {
      name: 'Center-aligned vertically',
      Example: () => (
        <Inline alignVertical="center" space="19px">
          <Placeholder height={20} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={60} width={40} />
          <Placeholder height={30} width={40} />
          <Placeholder height={50} width={40} />
          <Placeholder height={20} width={40} />
          <Placeholder height={70} width={40} />
          <Placeholder height={10} width={40} />
          <Placeholder height={50} width={40} />
        </Inline>
      ),
    },

    {
      name: 'Bottom-aligned vertically',
      Example: () => (
        <Inline alignVertical="bottom" space="19px">
          <Placeholder height={20} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={60} width={40} />
          <Placeholder height={30} width={40} />
          <Placeholder height={50} width={40} />
          <Placeholder height={20} width={40} />
          <Placeholder height={70} width={40} />
          <Placeholder height={10} width={40} />
          <Placeholder height={50} width={40} />
        </Inline>
      ),
    },

    {
      name: 'Center-aligned horizontally and vertically',
      Example: () => (
        <Inline alignHorizontal="center" alignVertical="center" space="19px">
          <Placeholder height={20} width={40} />
          <Placeholder height={40} width={40} />
          <Placeholder height={60} width={40} />
          <Placeholder height={30} width={40} />
          <Placeholder height={50} width={40} />
          <Placeholder height={20} width={40} />
          <Placeholder height={70} width={40} />
          <Placeholder height={10} width={40} />
          <Placeholder height={50} width={40} />
        </Inline>
      ),
    },
  ],
};

export default docs;
