/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import { Stack } from '../components/Stack/Stack';
import { Text } from '../components/Text/Text';
import * as Docs from '../docs/components';
import { FontWeight } from '../docs/system/tokens.css';
import { Docs as DocsType } from '../docs/types';
import source from '../docs/utils/source.macro';
import { fontWeights } from './fontWeights';

const docs: DocsType = {
  name: 'Font weights',
  category: 'Typography',
  description: [
    <Docs.Text key="">
      To adjust the thickness of typography components, the{' '}
      <Docs.Code>weight</Docs.Code> prop is made available.
    </Docs.Text>,
  ],
  examples: [
    {
      name: 'Weights',
      Example: () =>
        source(
          <Stack space="12px">
            {Object.keys(fontWeights).map(weight => (
              <Text key={weight} weight={weight as FontWeight}>
                {weight}
              </Text>
            ))}
          </Stack>
        ),
    },
  ],
};

export default docs;
