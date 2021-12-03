import lzString from 'lz-string';
import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
// @ts-expect-error
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { Inline } from '../../../components/Inline/Inline';
import { Docs, Example } from '../../../types';
import CodePreview from '../CodePreview';
import Heading from '../../system/Heading';
import Stack from '../../system/Stack';
import Text from '../../system/Text';
import { sprinkles } from '../../system/sprinkles.css';
import codeTheme from '../../utils/code-theme';

const DocsAccordion = ({
  name: componentName,
  description,
  examples,
}: Docs) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Stack space="16px">
      <button
        className={sprinkles({
          backgroundColor: 'docs',
          marginLeft: '-32px',
          paddingVertical: '8px',
          position: 'sticky',
          top: 0,
          zIndex: 1,
        })}
        onClick={() => setOpen(open => !open)}
        type="button"
      >
        <div
          className={sprinkles({
            color: 'action',
            display: 'flex',
            fontWeight: 'heavy',
          })}
          style={{ fontSize: '23px' }}
        >
          <div style={{ width: '32px' }}>{open ? '-' : '+'}</div>{' '}
          {componentName}
        </div>
      </button>
      {open && (
        <div className={sprinkles({ paddingBottom: '24px' })}>
          <Stack space="32px">
            {description}
            {examples?.map(
              ({ name, description, playroom, Example }, index) => (
                <ExamplePreview
                  Example={Example}
                  description={description}
                  key={index}
                  name={name}
                  playroom={playroom}
                />
              )
            )}
          </Stack>
        </div>
      )}
    </Stack>
  );
};

export default DocsAccordion;

////////////////////////////////////////////////////////////////////////////////

const ExamplePreview = ({
  name,
  description,
  playroom = true,
  Example,
}: Example) => {
  return (
    <Stack space="24px">
      <Heading color="secondary" weight="bold">
        {name}
      </Heading>
      {description && (
        <div className={sprinkles({ paddingBottom: '8px' })}>{description}</div>
      )}
      <CodePreview Example={Example} showPlayroomButton={playroom} />
    </Stack>
  );
};
