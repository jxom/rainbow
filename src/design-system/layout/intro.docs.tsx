import React from 'react';
import Blockquote from '../docs/components/system/Blockquote';
import Text from '../docs/components/system/Text';
import { Docs } from '../types';

const docs: Docs = {
  category: 'Layout',
  description: [
    <Text key="1">
      In a component system, the role of layout components is to apply space
      within containers and between sibling elements. For this model to work,
      individual components should <Text fontWeight={600}>not</Text> have any
      surrounding space. If components have margins built into them, it becomes
      difficult to compose them into a layout because space will be unbalanced
      by default.
    </Text>,
    <Text key="2">
      To better understand layout, let's step through the available layout
      components and show how they can be composed together.
    </Text>,
    <Blockquote key="3">
      <Text>
        Note that all layout components accept spacing values from our standard
        space scale (e.g. <Text fontWeight={600}>space="19px"</Text>) which
        helps reduce the amount of variation in our layouts. These are modeled
        as strings to make autocompletion easier and to allow for other naming
        conventions in the future. If you need to use a value that doesn't exist
        in the scale, it can be provided in the following format:{' '}
        <Text fontWeight={600}>
          space={'{{'} custom: 17 {'}}'}
        </Text>
        .
      </Text>
      ,
    </Blockquote>,
  ],
  name: 'Introduction',
};

export default docs;
