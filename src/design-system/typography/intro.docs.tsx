import React from 'react';
import DocsBlockquote from '../docs/system/Blockquote';
import DocsCode from '../docs/system/Code';
import DocsText from '../docs/system/Text';
import DocsTextLink from '../docs/system/TextLink';
import { Docs } from '../types';

const docs: Docs = {
  category: 'Typography',
  description: [
    <DocsText key="1">
      A major problem when trying to build a component system is that{' '}
      <DocsTextLink href="https://medium.com/microsoft-design/leading-trim-the-future-of-digital-typesetting-d082d84b202">
        native text nodes contain additional space above capital letters and
        below the baseline.
      </DocsTextLink>{' '}
      This is completely different to how designers think about typography and
      ends up creating a lot of extra work during development to fix unbalanced
      spacing.
    </DocsText>,
    <DocsText key="2">
      To correct for this, we use a library called{' '}
      <DocsTextLink href="https://seek-oss.github.io/capsize">
        Capsize
      </DocsTextLink>{' '}
      (with a thin wrapper adapting it to React Native) which applies negative
      margins above and below text nodes, ensuring that their space in the
      layout is aligned with the actual glyphs on screen.
    </DocsText>,
    <DocsBlockquote key="3">
      <DocsText>
        Using Capsize in React Native gets us really close, but unfortunately we
        still see some minor vertical alignment issues, so we're also applying
        some magic-number corrections for each font size — usually a decimal
        between 1 and -1. If you have any insight into why we need to do this,
        please let us know 🙏
      </DocsText>
    </DocsBlockquote>,
    <DocsText key="4">
      Text is handled by the <DocsCode>Text</DocsCode> and{' '}
      <DocsCode>Heading</DocsCode> components. Both of these components
      optionally support <DocsCode>size</DocsCode>, <DocsCode>weight</DocsCode>{' '}
      and <DocsCode>align</DocsCode> props, while <DocsCode>Text</DocsCode> also
      has props for <DocsCode>color</DocsCode>, <DocsCode>uppercase</DocsCode>{' '}
      and <DocsCode>tabularNumbers</DocsCode>.
    </DocsText>,
  ],
  name: 'Introduction',
};

export default docs;
