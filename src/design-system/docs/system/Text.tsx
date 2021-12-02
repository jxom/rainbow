import React, { ReactNode } from 'react';

import { sprinkles } from './sprinkles.css';
import { FontWeight, TextColor } from './tokens.css';
import { textSizes } from './typography.css';

const Text = ({
  children,
  color,
  size = '18px',
  weight = 'regular',
}: {
  children: ReactNode;
  color?: TextColor;
  size?: keyof typeof textSizes;
  weight?: FontWeight;
}) => (
  <span
    className={`${sprinkles({
      color,
      fontWeight: weight,
      letterSpacing: '0.5px',
    })} ${textSizes[size]}`}
  >
    {children}
  </span>
);

export default Text;
