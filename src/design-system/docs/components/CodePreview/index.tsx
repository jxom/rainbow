import lzString from 'lz-string';
import babel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { CodeBlock, Inline, Stack, Text } from '../../system';
import { sprinkles } from '../../system/sprinkles.css';

export const CodePreview = ({
  disableActions = false,
  enableCodeSnippet = true,
  enablePlayroom = true,
  showCode: defaultShowCode = false,
  showFrame = false,
  Example,
}: {
  disableActions?: boolean;
  enableCodeSnippet?: boolean;
  showCode?: boolean;
  enablePlayroom?: boolean;
  showFrame?: boolean;
  Example: () => JSX.Element;
}) => {
  const [showCode, setShowCode] = React.useState(Boolean(defaultShowCode));

  let jsxString;
  try {
    jsxString = reactElementToJSXString(Example()).replace(/(\w*)_/g, '');
    jsxString = prettier
      .format(jsxString, {
        parser: 'babel',
        plugins: [babel],
        printWidth: 60,
      })
      .replace(/;\s$/, '');
  } catch (err) {} // eslint-disable-line no-empty

  return (
    <Stack space="16px">
      <div
        className={sprinkles({
          borderRadius: '16px',
          padding: '24px',
        })}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          className={sprinkles({
            borderRadius: '16px',
          })}
          style={
            showFrame ? { backgroundColor: 'rgba(255, 255, 255, 0.5)' } : {}
          }
        >
          <Example />
        </div>
      </div>
      {jsxString && (
        <>
          {showCode && <CodeBlock code={jsxString} />}
          {!disableActions && (
            <Inline alignHorizontal="right" space="24px">
              {enablePlayroom && (
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
              {enableCodeSnippet && (
                <button
                  onClick={() => setShowCode(showCode => !showCode)}
                  style={{ textAlign: 'right' }}
                  type="button"
                >
                  <Text color="action" weight="bold">
                    {showCode ? 'Hide' : 'Show'} code
                  </Text>
                </button>
              )}
            </Inline>
          )}
        </>
      )}
    </Stack>
  );
};
