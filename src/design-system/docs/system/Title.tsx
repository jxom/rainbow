import React, { ReactNode } from 'react';

import { sprinkles } from './sprinkles.css';
import { TextColor } from './tokens.css';
import { headingSizes } from './typography.css';

const Title = ({
  children,
  color = 'primary',
  fontSize = '23px',
}: {
  children: ReactNode;
  color?: TextColor;
  fontSize?: keyof typeof headingSizes;
}) => (
  <h1
    className={`${sprinkles({
      color,
      display: 'flex',
      fontWeight: 'heavy',
    })} ${headingSizes[fontSize]}`}
  >
    {children}
  </h1>
);

export default Title;
