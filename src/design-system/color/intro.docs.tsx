import React from 'react';
import { Box } from '../components/Box/Box';
import { Text } from '../components/Text/Text';
import DocsCodePreview from '../docs/components/CodePreview';
import DocsCode from '../docs/system/Code';
import DocsText from '../docs/system/Text';
import { Docs } from '../types';

const docs: Docs = {
  category: 'Color',
  description: [
    <DocsText key="">
      Color is modeled based on why something should be a certain color, defined
      with semantic names that allow them to adjust based on context. This makes
      it trivial to re-use components in different environments without having
      to manually adjust foreground colors.
    </DocsText>,
    <DocsText key="">
      For example, let's assume we have the following piece of text:
    </DocsText>,
    <DocsCodePreview
      Example={() => <Text color="secondary50">Lorem ipsum</Text>}
      disableActions
      key=""
      showCode
    />,
    <DocsText key="">
      By default, this text will either be dark or light based on whether the
      app is in light mode or dark mode.
    </DocsText>,
    <DocsText key="">
      Now, imagine that this text was nested inside of a dark container across
      both light and dark modes:
    </DocsText>,
    <DocsCodePreview
      Example={() => (
        <>
          <Box background="swap" padding="19px">
            <Text color="secondary50">Lorem ipsum</Text>
          </Box>
          <Box background="action" padding="19px">
            <Text color="secondary50">Lorem ipsum</Text>
          </Box>
        </>
      )}
      disableActions
      key=""
      showCode
    />,
    <DocsText key="">
      Typically in this scenario we'd need to alter the text color so that it
      has sufficient contrast against the background. However, when setting a
      background with <DocsCode>Box</DocsCode>, the color mode is automatically
      configured for nested elements based on whether the background is dark or
      light, meaning that foreground colors usually won't need to be changed.
    </DocsText>,
  ],
  name: 'Introduction',
};

export default docs;
