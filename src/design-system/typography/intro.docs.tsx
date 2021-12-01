import React from 'react';
import Blockquote from '../docs/components/system/Blockquote';
import Text from '../docs/components/system/Text';
import { Docs } from '../types';

const docs: Docs = {
  category: 'Typography',
  description: [
    <Text key="1">
      A major problem when trying to build a component system is that [native
      text nodes contain additional space above capital letters and below the
      baseline.](https://medium.com/microsoft-design/leading-trim-the-future-of-digital-typesetting-d082d84b202)
      This is completely different to how designers think about typography and
      ends up creating a lot of extra work during development to fix unbalanced
      spacing.
    </Text>,
    <Text key="2">
      To correct for this, we use a library called
      [Capsize](https://seek-oss.github.io/capsize) (with a thin wrapper
      adapting it to React Native) which applies negative margins above and
      below text nodes, ensuring that their space in the layout is aligned with
      the actual glyphs on screen.
    </Text>,
    <Blockquote key="3">
      <Text>
        Using Capsize in React Native gets us _really_ close, but unfortunately
        we still see some minor vertical alignment issues, so we're also
        applying some magic-number corrections for each font size — usually a
        decimal between 1 and -1. If you have any insight into why we need to do
        this, please let us know 🙏
      </Text>
    </Blockquote>,
    <Text key="4">
      Text is handled by the `Text` and `Heading` components. Both of these
      components optionally support `size`, `weight` and `align` props, while
      `Text` also has props for `color`, `uppercase` and `tabularNumbers`.
    </Text>,
  ],
  name: 'Introduction',
};

export default docs;
