import React from 'react';
import * as Docs from '../docs/components';
import { Docs as DocsType } from '../docs/types';

const docs: DocsType = {
  category: 'Color',
  description: [
    <Docs.Text key="">
      Low-level access to the foreground color palette is available via the
      <Docs.Code>useForegroundColor</Docs.Code> Hook. This ensures that you get
      the correct color palette based on the contextual color mode.
    </Docs.Text>,
    <Docs.CodeBlock
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
    <Docs.Text key="">
      Custom colors can also be passed to this Hook in an object format.
    </Docs.Text>,
    <Docs.CodeBlock
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
