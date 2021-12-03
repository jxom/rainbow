import React from 'react';

import { Docs, Example } from '../../../types';
import { Heading, Stack } from '../../system';
import { sprinkles } from '../../system/sprinkles.css';
import { CodePreview } from '../CodePreview';

export const DocsAccordion = ({
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
              ({ name, description, playroom, showFrame, Example }, index) => (
                <ExamplePreview
                  Example={Example}
                  description={description}
                  key={index}
                  name={name}
                  playroom={playroom}
                  showFrame={showFrame}
                />
              )
            )}
          </Stack>
        </div>
      )}
    </Stack>
  );
};

////////////////////////////////////////////////////////////////////////////////

const ExamplePreview = ({
  name,
  description,
  showFrame = false,
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
      <CodePreview
        Example={Example}
        showFrame={showFrame}
        showPlayroomButton={playroom}
      />
    </Stack>
  );
};
