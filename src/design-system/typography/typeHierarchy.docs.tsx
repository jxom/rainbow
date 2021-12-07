/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import { Heading } from '../components/Heading/Heading';
import { Stack } from '../components/Stack/Stack';
import { Text } from '../components/Text/Text';
import * as Docs from '../docs/components';
import { Docs as DocsType } from '../types';
import { typeHierarchy } from './typeHierarchy';

const docs: DocsType = {
  name: 'Font sizes',
  category: 'Typography',
  description: [
    <Docs.Text key="">
      To adjust the size of typography components, the{' '}
      <Docs.Code>size</Docs.Code> prop is made available.
    </Docs.Text>,
  ],
  examples: [
    {
      name: 'Heading sizes',
      Example: () => (
        <Stack space="12px">
          {Object.keys(typeHierarchy.heading).map(size => (
            <Heading
              key={size}
              size={size as keyof typeof typeHierarchy.heading}
            >
              Hello world ({size})
            </Heading>
          ))}
        </Stack>
      ),
    },
    {
      name: 'Text sizes',
      Example: () => (
        <Stack space="12px">
          {Object.keys(typeHierarchy.text).map(size => (
            <Text key={size} size={size as keyof typeof typeHierarchy.text}>
              Hello world ({size})
            </Text>
          ))}
        </Stack>
      ),
    },
  ],
};

export default docs;
