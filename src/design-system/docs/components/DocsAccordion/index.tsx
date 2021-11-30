import lzString from 'lz-string';
import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
// @ts-expect-error
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { Inline } from '../../../components/Inline/Inline';
import { Docs } from '../../../types';
import Heading from '../../components/system/Heading';
import Stack from '../../components/system/Stack';
import Text from '../../components/system/Text';
import Title from '../../components/system/Title';
import { sprinkles } from '../../styles/sprinkles.css';
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
        <Stack space="24px">
          {description}
          {examples.map(({ name, description, Example }, index) => (
            <ExamplePreview
              Example={Example}
              description={description}
              key={index}
              name={name}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default DocsAccordion;

////////////////////////////////////////////////////////////////////////////////

const ExamplePreview = ({
  name,
  description,
  Example,
}: Docs['examples'][0]) => {
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
            <a
              href={`http://localhost:9000/?code=${lzString.compressToEncodedURIComponent(
                JSON.stringify({ code: jsxString })
              )}`}
              rel="noreferrer"
              style={{ textAlign: 'right' }}
              target="_blank"
            >
              <Text color="action" fontWeight={600}>
                Playroom
              </Text>
            </a>
            <button
              onClick={() => setShowCode(showCode => !showCode)}
              style={{ textAlign: 'right' }}
              type="button"
            >
              <Text color="action" fontWeight={600}>
                {showCode ? 'Hide' : 'Show'} code
              </Text>
            </button>
          </Inline>
        </>
      )}
    </Stack>
  );
};
