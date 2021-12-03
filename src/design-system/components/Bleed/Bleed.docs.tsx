/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import * as Docs from '../../docs/components';
import { Placeholder } from '../../playground/Placeholder';
import { Docs as DocsType } from '../../types';
import { Inset } from '../Inset/Inset';
import { Stack } from '../Stack/Stack';
import { Bleed } from './Bleed';

const docs: DocsType = {
  name: 'Bleed',
  category: 'Layout',
  description: [
    <Docs.Text key="1">
      Renders a <Docs.Strong>container with negative margins</Docs.Strong>{' '}
      allowing content to{' '}
      <Docs.TextLink href="https://en.wikipedia.org/wiki/Bleed_(printing)">
        &quot;bleed&quot;
      </Docs.TextLink>{' '}
      into the surrounding layout. This effectively works as the opposite of{' '}
      <Docs.Strong>Inset</Docs.Strong> and is designed to support visually
      breaking out of a parent container without having to refactor the entire
      component tree.
    </Docs.Text>,
    <Docs.Text key="2">
      If there is only a single child node, no space or separators will be
      rendered.
    </Docs.Text>,
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
