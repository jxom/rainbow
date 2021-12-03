import React from 'react';
import DocsBlockquote from '../docs/system/Blockquote';
import DocsCode from '../docs/system/Code';
import DocsStrong from '../docs/system/Strong';
import DocsText from '../docs/system/Text';
import { Docs } from '../types';

const docs: Docs = {
  category: 'Layout',
  description: [
    <DocsText key="1">
      In a component system, the role of layout components is to apply space
      within containers and between sibling elements. For this model to work,
      individual components should <DocsStrong>not</DocsStrong> have any
      surrounding space. If components have margins built into them, it becomes
      difficult to compose them into a layout because space will be unbalanced
      by default.
    </DocsText>,
    <DocsText key="2">
      To better understand layout, let's step through the available layout
      components and show how they can be composed together.
    </DocsText>,
    <DocsBlockquote key="3">
      <DocsText>
        Note that all layout components accept spacing values from our standard
        space scale (e.g. <DocsCode>space="19px"</DocsCode>) which helps reduce
        the amount of variation in our layouts. These are modeled as strings to
        make autocompletion easier and to allow for other naming conventions in
        the future. If you need to use a value that doesn't exist in the scale,
        it can be provided in the following format:{' '}
        <DocsCode>
          space={'{{'} custom: 17 {'}}'}
        </DocsCode>
        .
      </DocsText>
    </DocsBlockquote>,
  ],
  name: 'Introduction',
};

export default docs;
