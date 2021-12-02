import lzString from 'lz-string';
import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
// @ts-expect-error
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { Inline } from '../../../components/Inline/Inline';
import { Docs, Example } from '../../../types';
import Heading from '../../system/Heading';
import Stack from '../../system/Stack';
import Text from '../../system/Text';
import Title from '../../system/Title';
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
        <Title color="action">
          <div style={{ width: '32px' }}>{open ? '-' : '+'}</div>{' '}
          {componentName}
        </Title>
      </button>
      {open && (
        <div className={sprinkles({ paddingBottom: '24px' })}>
          <Stack space="24px">
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
  const [showCode, setShowCode] = React.useState(false);

  let jsxString;
  try {
    jsxString = reactElementToJSXString(Example());
  } catch (err) {} // eslint-disable-line no-empty

  return (
    <Stack space="16px">
      <Heading>{name}</Heading>
      {description && (
        <div className={sprinkles({ paddingBottom: '8px' })}>{description}</div>
      )}
      <div
        className={sprinkles({
          borderRadius: '16px',
          padding: '24px',
        })}
        style={{
          backgroundColor: 'rgba(0,0,0,0.05)',
        }}
      >
        <Example />
      </div>
      {jsxString && (
        <>
          {showCode && (
            <div
              className={sprinkles({
                backgroundColor: 'bodyDark',
                borderRadius: '16px',
                fontSize: '18px',
                padding: '24px',
              })}
              style={{ overflowX: 'scroll' }}
            >
              <SyntaxHighlighter language="tsx" style={codeTheme}>
                {jsxString}
              </SyntaxHighlighter>
            </div>
          )}
          <Inline alignHorizontal="right" space="24px">
            {playroom && (
              <a
                href={`${
                  process.env.NODE_ENV === 'production'
                    ? `${window.location.href}playroom`
                    : 'http://localhost:9000/'
                }?code=${lzString.compressToEncodedURIComponent(
                  JSON.stringify({ code: jsxString })
                )}`}
                rel="noreferrer"
                style={{ textAlign: 'right' }}
                target="_blank"
              >
                <Text color="action" weight="bold">
                  Playroom
                </Text>
              </a>
            )}
            <button
              onClick={() => setShowCode(showCode => !showCode)}
              style={{ textAlign: 'right' }}
              type="button"
            >
              <Text color="action" weight="bold">
                {showCode ? 'Hide' : 'Show'} code
              </Text>
            </button>
          </Inline>
        </>
      )}
    </Stack>
  );
};
