/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import { Stack } from '../components/Stack/Stack';
import { Text } from '../components/Text/Text';
import * as Docs from '../docs/components';
import { Docs as DocsType } from '../types';

const docs: DocsType = {
  name: 'Font weights',
  category: 'Typography',
  description: [
    <Docs.Text key="">
      Font weights are used to change the thickness of text.
    </Docs.Text>,
  ],
  examples: [
    {
      name: 'Weights',
      Example: () => (
        <Stack space="12px">
          <Text weight="regular">Regular</Text>
          <Text weight="medium">Medium</Text>
          <Text weight="semibold">Semibold</Text>
          <Text weight="bold">Bold</Text>
          <Text weight="heavy">Heavy</Text>
        </Stack>
      ),
    },
  ],
};

export default docs;
