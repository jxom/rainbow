/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import { Heading } from '../components/Heading/Heading';
import { Stack } from '../components/Stack/Stack';
import { Text } from '../components/Text/Text';
import * as Docs from '../docs/components';
import { Docs as DocsType } from '../types';

const docs: DocsType = {
  name: 'Font sizes',
  category: 'Typography',
  description: [
    <Docs.Text key="">
      Font sizes are used to set the font size of text.
    </Docs.Text>,
  ],
  examples: [
    {
      name: 'Heading sizes',
      Example: () => (
        <Stack space="12px">
          <Heading size="23px">Hello world (23px)</Heading>
          <Heading size="20px">Hello world (20px)</Heading>
          <Heading size="18px">Hello world (18px)</Heading>
        </Stack>
      ),
    },
    {
      name: 'Text sizes',
      Example: () => (
        <Stack space="12px">
          <Text size="18px">Hello world (18px)</Text>
          <Text size="16px">Hello world (16px)</Text>
          <Text size="14px">Hello world (14px)</Text>
          <Text size="11px">Hello world (11px)</Text>
        </Stack>
      ),
    },
  ],
};

export default docs;
