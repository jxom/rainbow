import React from 'react';
import { Box } from '../components/Box/Box';
import { Text } from '../components/Text/Text';
import DocsCodePreview from '../docs/components/CodePreview';
import DocsCode from '../docs/system/Code';
import DocsText from '../docs/system/Text';
import { Docs } from '../types';
import { AccentColorProvider } from './AccentColorContext';

const docs: Docs = {
  category: 'Color',
  description: [
    <DocsText key="">
      The <DocsCode>"accent"</DocsCode> color can be configured for entire
      subtrees of the app. By default, it will resolve to a pale blue color.
    </DocsText>,
    <DocsCodePreview
      Example={() => (
        <>
          <AccentColorProvider color="#ff0000">
            <Text color="accent">Hi Mom!</Text>
          </AccentColorProvider>
        </>
      )}
      disableActions
      key=""
      showCode
    />,
    <DocsText key="">
      <DocsCode>AccentColorProvider</DocsCode> also detects whether the
      specified accent color is light or dark and sets the appropriate color
      mode for you.
    </DocsText>,
    <DocsCodePreview
      Example={() => (
        <>
          <AccentColorProvider color="#ff0000">
            <Box background="accent" padding="19px">
              <Text>This text will be inverted automatically.</Text>
            </Box>
          </AccentColorProvider>
        </>
      )}
      disableActions
      key=""
      showCode
    />,
  ],
  name: 'AccentColorProvider',
};

export default docs;
