import React, { ReactNode } from 'react';

import {
  FontSize,
  FontWeight,
  sprinkles,
  TextColor,
} from '../../styles/sprinkles.css';

const Text = ({
  children,
  color,
  fontSize = '16px',
  fontWeight = 400,
}: {
  children: ReactNode;
  color?: TextColor;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}) => (
  <span
    className={sprinkles({
      color,
      fontSize,
      fontWeight,
      letterSpacing: '0.5px',
    })}
  >
    {children}
  </span>
);

export default Text;
