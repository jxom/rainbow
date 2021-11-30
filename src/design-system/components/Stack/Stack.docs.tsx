/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import { View } from 'react-native';

import { Placeholder } from '../../playground/Placeholder';
import { Docs } from '../../types';
import { Inset } from '../Inset/Inset';
import { Text } from '../Text/Text';
import { Stack } from './Stack';

const MockDivider = () => (
  <View style={{ backgroundColor: '#999', height: 1, width: '50%' }} />
);

const docs: Docs = {
  name: 'Stack',
  category: 'Layout',
  description: (
    <Stack space="24px">
      <Text>
        Arranges children <Text weight="bold">vertically</Text> with equal
        spacing between them, plus an optional `separator` element. Items can be
        aligned with `alignHorizontal`.
      </Text>
      <Text>
        If there is only a single child node, no space or separators will be
        rendered.
      </Text>
    </Stack>
  ),
  examples: [
    {
      name: 'Basic usage',
      Example: () => (
        <Stack space="12px">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      name: 'Custom space',
      Example: () => (
        <Stack space={{ custom: 5 }}>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      name: 'Nested',
      description: (
        <Text>
          Stacks can be nested within each other for layouts with differing
          amounts of space between groups of content.
        </Text>
      ),
      Example: () => (
        <Inset horizontal="19px" vertical="24px">
          <Stack space="42px">
            <Stack space="12px">
              <Placeholder />
              <Placeholder />
              <Placeholder />
            </Stack>
            <Stack space="12px">
              <Placeholder />
              <Placeholder />
              <Placeholder />
            </Stack>
          </Stack>
        </Inset>
      ),
    },
    {
      name: 'With text',
      Example: () => (
        <Stack space="15px">
          <Text>Lorem ipsum</Text>
          <Text>Lorem ipsum</Text>
          <Text>Lorem ipsum</Text>
        </Stack>
      ),
    },
    {
      name: 'With center alignment',
      Example: () => (
        <Stack alignHorizontal="center" space="19px">
          <Placeholder width={30} />
          <Placeholder width={90} />
          <Placeholder width={60} />
        </Stack>
      ),
    },
    {
      name: 'With separators',
      Example: () => (
        <Stack separator={<MockDivider />} space="19px">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      ),
    },
    {
      name: 'With center alignment and dividers',
      Example: () => (
        <Stack
          alignHorizontal="center"
          separator={<MockDivider />}
          space="19px"
        >
          <Placeholder width={30} />
          <Placeholder width={90} />
          <Placeholder width={60} />
        </Stack>
      ),
    },
    {
      name: 'With right alignment and dividers',
      Example: () => (
        <Stack alignHorizontal="right" separator={<MockDivider />} space="19px">
          <Placeholder width={30} />
          <Placeholder width={90} />
          <Placeholder width={60} />
        </Stack>
      ),
    },
    {
      name: 'With no space and separators',
      Example: () => (
        <Stack alignHorizontal="center" separator={<MockDivider />}>
          <Placeholder width={30} />
          <Placeholder width={90} />
          <Placeholder width={60} />
        </Stack>
      ),
    },
  ],
};

export default docs;
