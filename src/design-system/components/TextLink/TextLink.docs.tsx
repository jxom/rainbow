/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import { Docs } from '../../types';
import { Text } from '../Text/Text';
import { TextLink } from './TextLink';

const docs: Docs = {
  name: 'TextLink',
  category: 'Typography',
  examples: [
    {
      name: 'Basic usage',
      Example: () => (
        <Text>
          This text contains a{' '}
          <TextLink url="https://rainbow.me">link</TextLink>
        </Text>
      ),
    },
  ],
};

export default docs;
