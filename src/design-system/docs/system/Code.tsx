import React, { ReactNode } from 'react';

import { sprinkles } from './sprinkles.css';
import { textSizes } from './typography.css';

const Code = ({
  children,
  fontSize = '18px',
}: {
  children: ReactNode;
  fontSize?: keyof typeof textSizes;
}) => (
  <code
    className={`${sprinkles({
      backgroundColor: 'actionTint',
      borderRadius: '4px',
      color: 'action',
      fontWeight: 'medium',
      letterSpacing: '0.5px',
      paddingHorizontal: '2px',
    })}`}
    style={{ fontSize }}
  >
    {children}
  </code>
);

export default Code;
