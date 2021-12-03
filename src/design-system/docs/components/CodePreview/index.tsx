import lzString from 'lz-string';
import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import CodeBlock from '../../system/CodeBlock';
import Inline from '../../system/Inline';
import Stack from '../../system/Stack';
import Text from '../../system/Text';
import { sprinkles } from '../../system/sprinkles.css';

const CodePreview = ({
  disableActions = false,
  showCode: defaultShowCode = false,
  showPlayroomButton = true,
  Example,
}: {
  disableActions?: boolean;
  showCode?: boolean;
  showPlayroomButton?: boolean;
  Example: () => JSX.Element;
}) => {
  const [showCode, setShowCode] = React.useState(Boolean(defaultShowCode));

  let jsxString;
  try {
    jsxString = reactElementToJSXString(Example());
  } catch (err) {} // eslint-disable-line no-empty

  return (
    <Stack space="16px">
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
          {showCode && <CodeBlock code={jsxString} />}
          {!disableActions && (
            <Inline alignHorizontal="right" space="24px">
              {showPlayroomButton && (
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
          )}
        </>
      )}
    </Stack>
  );
};

export default CodePreview;
