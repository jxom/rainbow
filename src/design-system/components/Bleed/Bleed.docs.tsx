/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import { Placeholder } from '../../playground/Placeholder';
import { Docs } from '../../types';
import { Inset } from '../Inset/Inset';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { TextLink } from '../TextLink/TextLink';
import { Bleed } from './Bleed';

const docs: Docs = {
  name: 'Bleed',
  category: 'Layout',
  description: [
    <Text key="1">
      Renders a <Text weight="bold">container with negative margins</Text>{' '}
      allowing content to{' '}
      <TextLink url="https://en.wikipedia.org/wiki/Bleed_(printing)">
        "bleed"
      </TextLink>{' '}
      into the surrounding layout. This effectively works as the opposite of{' '}
      <Text weight="bold">Inset</Text> and is designed to support visually
      breaking out of a parent container without having to refactor the entire
      component tree.
    </Text>,
    <Text key="2">
      If there is only a single child node, no space or separators will be
      rendered.
    </Text>,
  ],
  examples: [
    {
      name: 'Basic usage',
      Example: () => (
        <Inset space="19px">
          <Stack space="19px">
            <Placeholder height={100} />
            <Bleed horizontal="19px">
              <Placeholder height={100} />
            </Bleed>
            <Placeholder height={100} />
          </Stack>
        </Inset>
      ),
    },

    {
      name: 'Custom space',
      Example: () => (
        <Inset space={{ custom: 17 }}>
          <Stack space={{ custom: 17 }}>
            <Placeholder height={100} />
            <Bleed horizontal={{ custom: 17 }}>
              <Placeholder height={100} />
            </Bleed>
            <Placeholder height={100} />
          </Stack>
        </Inset>
      ),
    },

    {
      name: 'Right',
      Example: () => (
        <Inset space="19px">
          <Stack space="19px">
            <Placeholder height={100} />
            <Bleed right="19px">
              <Placeholder height={100} />
            </Bleed>
            <Placeholder height={100} />
          </Stack>
        </Inset>
      ),
    },

    {
      name: 'Left',
      Example: () => (
        <Inset space="19px">
          <Stack space="19px">
            <Placeholder height={100} />
            <Bleed left="19px">
              <Placeholder height={100} />
            </Bleed>
            <Placeholder height={100} />
          </Stack>
        </Inset>
      ),
    },

    {
      name: 'Top',
      Example: () => (
        <Inset space="19px">
          <Stack space="19px">
            <Bleed top="19px">
              <Placeholder height={100} />
            </Bleed>
            <Placeholder height={100} />
            <Placeholder height={100} />
          </Stack>
        </Inset>
      ),
    },

    {
      name: 'Bottom',
      Example: () => (
        <Inset space="19px">
          <Stack space="19px">
            <Placeholder height={100} />
            <Placeholder height={100} />
            <Bleed bottom="19px">
              <Placeholder height={100} />
            </Bleed>
          </Stack>
        </Inset>
      ),
    },
  ],
};

export default docs;
