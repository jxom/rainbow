import React from 'react';
import DocsCode from '../docs/system/Code';
import DocsCodeBlock from '../docs/system/CodeBlock';
import DocsText from '../docs/system/Text';
import { Docs } from '../types';

const docs: Docs = {
  category: 'Color',
  description: [
    <DocsText key="">
      Low-level access to the foreground color palette is available via the
      <DocsCode>useForegroundColor</DocsCode> Hook. This ensures that you get
      the correct color palette based on the contextual color mode.
    </DocsText>,
    <DocsCodeBlock
      code={`export default () => {
  const borderColor = useForegroundColor('accent');

  return (
    <Box padding="6px" style={{ borderWidth: 2, borderColor }}>
      <Text color="accent">...</Text>
    </Box>
  );
};`}
      key=""
    />,
    <DocsText key="">
      Custom colors can also be passed to this Hook in an object format.
    </DocsText>,
    <DocsCodeBlock
      code={`export default () => {
  const borderColor = useForegroundColor({
    custom: {
      light: 'black',
      dark: 'white',
    },
  });

  return (
    <Box padding="6px" style={{ borderWidth: 2, borderColor }}>
      <Text color="accent">...</Text>
    </Box>
  );
};`}
      key=""
    />,
  ],
  name: 'useForegroundColor',
};

export default docs;
