import React from 'react';
import { Box } from '../components/Box/Box';
import { Text } from '../components/Text/Text';
import * as Docs from '../docs/components';
import { Docs as DocsType } from '../types';
import { AccentColorProvider } from './AccentColorContext';

const docs: DocsType = {
  category: 'Color',
  description: [
    <Docs.Text key="">
      The <Docs.Code>"accent"</Docs.Code> color can be configured for entire
      subtrees of the app. By default, it will resolve to a pale blue color.
    </Docs.Text>,
    <Docs.CodePreview
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
    <Docs.Text key="">
      <Docs.Code>AccentColorProvider</Docs.Code> also detects whether the
      specified accent color is light or dark and sets the appropriate color
      mode for you.
    </Docs.Text>,
    <Docs.CodePreview
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
