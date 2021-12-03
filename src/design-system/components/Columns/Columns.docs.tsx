/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import DocsCode from '../../docs/system/Code';
import DocsStrong from '../../docs/system/Strong';
import DocsText from '../../docs/system/Text';
import { Placeholder } from '../../playground/Placeholder';
import { Docs } from '../../types';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { Column, Columns } from './Columns';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const docs: Docs = {
  name: 'Columns',
  category: 'Layout',
  description: (
    <Stack space="24px">
      <DocsText>
        Renders children <DocsStrong>horizontally</DocsStrong> in equal-width
        columns by default, with consistent spacing between them.
      </DocsText>
      <DocsText>
        If there is only a single column, no space will be rendered.
      </DocsText>
    </Stack>
  ),
  examples: [
    {
      name: 'Basic usage',
      Example: () => (
        <Columns space="19px">
          <Placeholder />
          <Placeholder />
        </Columns>
      ),
    },

    {
      name: 'Custom space',
      Example: () => (
        <Columns space={{ custom: 7 }}>
          <Placeholder />
          <Placeholder />
        </Columns>
      ),
    },

    {
      name: 'Custom widths',
      description: (
        <Stack space="24px">
          <DocsText>
            You can optionally control column widths by manually rendering a{' '}
            <DocsCode>Column</DocsCode> as a direct child of{' '}
            <DocsCode>Columns</DocsCode>, which allows you to set an explicit{' '}
            <DocsCode>width</DocsCode> prop.
          </DocsText>
          <DocsText>
            A common usage of this is to make a column shrink to the width of
            its content. This can be achieved by setting the column{' '}
            <DocsCode>width</DocsCode> prop to <DocsCode>"content"</DocsCode>.
            Any columns without an explicit width will share the remaining space
            equally.
          </DocsText>
          <DocsText>
            The following fractional widths are also available:{' '}
            <DocsCode>1/2</DocsCode>, <DocsCode>1/3</DocsCode>,{' '}
            <DocsCode>2/3</DocsCode>, <DocsCode>1/4</DocsCode>,{' '}
            <DocsCode>3/4</DocsCode>, <DocsCode>1/5</DocsCode>,{' '}
            <DocsCode>2/5</DocsCode>, <DocsCode>3/5</DocsCode>,{' '}
            <DocsCode>4/5</DocsCode>.
          </DocsText>
        </Stack>
      ),
      Example: () => (
        <Stack space="19px">
          <Columns space="19px">
            <Column width="1/2">
              <Placeholder />
            </Column>
            <Column width="1/2">
              <Placeholder />
            </Column>
          </Columns>

          <Columns space="19px">
            <Column width="1/3">
              <Placeholder />
            </Column>
            <Column width="1/3">
              <Placeholder />
            </Column>
            <Column width="1/3">
              <Placeholder />
            </Column>
          </Columns>

          <Columns space="19px">
            <Column width="2/3">
              <Placeholder />
            </Column>
            <Column width="1/3">
              <Placeholder />
            </Column>
          </Columns>

          <Columns space="19px">
            <Column width="1/4">
              <Placeholder />
            </Column>
            <Column width="1/4">
              <Placeholder />
            </Column>
            <Column width="1/4">
              <Placeholder />
            </Column>
            <Column width="1/4">
              <Placeholder />
            </Column>
          </Columns>

          <Columns space="19px">
            <Column width="1/4">
              <Placeholder />
            </Column>
            <Column width="1/2">
              <Placeholder />
            </Column>
            <Column width="1/4">
              <Placeholder />
            </Column>
          </Columns>

          <Columns space="19px">
            <Column width="1/4">
              <Placeholder />
            </Column>
            <Column width="3/4">
              <Placeholder />
            </Column>
          </Columns>

          <Columns space="19px">
            <Column width="1/5">
              <Placeholder />
            </Column>
            <Column width="2/5">
              <Placeholder />
            </Column>
            <Column width="2/5">
              <Placeholder />
            </Column>
          </Columns>

          <Columns space="19px">
            <Column width="1/5">
              <Placeholder />
            </Column>
            <Column width="3/5">
              <Placeholder />
            </Column>
            <Column width="1/5">
              <Placeholder />
            </Column>
          </Columns>

          <Columns space="19px">
            <Column width="1/5">
              <Placeholder />
            </Column>
            <Column width="4/5">
              <Placeholder />
            </Column>
          </Columns>
        </Stack>
      ),
    },

    {
      name: 'Column with content width',
      Example: () => (
        <Columns space="19px">
          <Placeholder />
          <Column width="content">
            <Placeholder width={100} />
          </Column>
        </Columns>
      ),
    },

    {
      name: 'Nested columns',
      Example: () => (
        <Columns space="12px">
          <Placeholder />
          <Columns space="12px">
            <Placeholder />
            <Placeholder />
          </Columns>
        </Columns>
      ),
    },

    {
      name: 'Nested columns with explicit widths',
      Example: () => (
        <Columns space="12px">
          <Placeholder />
          <Columns space="12px">
            <Column width="1/3">
              <Placeholder />
            </Column>
            <Placeholder />
          </Columns>
        </Columns>
      ),
    },

    {
      name: 'Nested columns with explicit widths (content)',
      Example: () => (
        <Columns space="19px">
          <Placeholder />
          <Column width="content">
            <Columns space="6px">
              <Column width="content">
                <Placeholder width={60} />
              </Column>
              <Column width="content">
                <Placeholder width={60} />
              </Column>
            </Columns>
          </Column>
        </Columns>
      ),
    },

    {
      name: 'Center-aligned vertically',
      Example: () => (
        <Columns alignVertical="center" space="19px">
          <Placeholder height={30} />
          <Placeholder height={60} />
          <Placeholder height={20} />
        </Columns>
      ),
    },

    {
      name: 'Bottom-aligned vertically',
      Example: () => (
        <Columns alignVertical="bottom" space="19px">
          <Placeholder height={30} />
          <Placeholder height={60} />
          <Placeholder height={20} />
        </Columns>
      ),
    },

    {
      name: 'Center-aligned horizontally',
      description: (
        <Stack space="24px">
          <Text>
            Columns can optionally be aligned horizontally and/or vertically,
            but note that this only affects the column containers themselves,
            not the content within them.
          </Text>
          <Text>
            To align content within a column, you'll need to nest another layout
            component inside it, such as a <DocsCode>Stack</DocsCode> with{' '}
            <DocsCode>alignHorizontal</DocsCode>.
          </Text>
        </Stack>
      ),
      Example: () => (
        <Columns alignHorizontal="center" space="19px">
          <Column width="1/4">
            <Placeholder height={30} />
          </Column>
          <Column width="1/4">
            <Placeholder height={60} />
          </Column>
        </Columns>
      ),
    },

    {
      name: 'Right-aligned horizontally',
      Example: () => (
        <Columns alignHorizontal="right" space="19px">
          <Column width="1/4">
            <Placeholder height={30} />
          </Column>
          <Column width="1/4">
            <Placeholder height={60} />
          </Column>
        </Columns>
      ),
    },

    {
      name: 'Justified horizontally',
      Example: () => (
        <Columns alignHorizontal="justify" space="19px">
          <Column width="1/4">
            <Placeholder height={30} />
          </Column>
          <Column width="1/4">
            <Placeholder height={60} />
          </Column>
        </Columns>
      ),
    },

    {
      name: 'Full-height column via flexGrow',
      Example: () => (
        <Columns alignVertical="bottom" space="30px">
          <Placeholder flexGrow={1} />
          <Placeholder height={30} />
          <Placeholder height={100} />
          <Placeholder height={60} />
        </Columns>
      ),
    },

    {
      name: 'Dynamic width content',
      Example: () => (
        <Columns space="19px">
          <Text>Lorem</Text>
          <Text>{loremIpsum}</Text>
        </Columns>
      ),
    },
  ],
};

export default docs;
