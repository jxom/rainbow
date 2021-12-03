import React from 'react';
import { Box } from '../components/Box/Box';
import { Text } from '../components/Text/Text';
import DocsCodePreview from '../docs/components/CodePreview';
import DocsText from '../docs/system/Text';
import { Docs } from '../types';
import { ColorModeProvider } from './ColorMode';

const docs: Docs = {
  category: 'Color',
  description: [
    <DocsText key="">
      If you're rendering a custom background color, you can take control of the
      color mode by manually rendering a ColorModeProvider.
    </DocsText>,
    <DocsText key="">
      Beyond the usual light and dark modes, there are also lightTinted and
      darkTinted modes which are designed for non-neutral background colors
      where foreground colors should be desaturated.
    </DocsText>,
    <DocsCodePreview
      Example={() => (
        <>
          <Box padding="24px" style={{ backgroundColor: 'black' }}>
            <ColorModeProvider value="dark">
              <Text>Hi Mom!</Text>
            </ColorModeProvider>
          </Box>
          <Box padding="24px" style={{ backgroundColor: 'white' }}>
            <ColorModeProvider value="light">
              <Text>Hi Rainbow!</Text>
            </ColorModeProvider>
          </Box>
        </>
      )}
      disableActions
      key=""
      showCode
    />,
  ],
  name: 'ColorModeProvider',
};

export default docs;
