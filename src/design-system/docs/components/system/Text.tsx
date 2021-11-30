import React, { ReactNode } from 'react';

import {
  FontSize,
  FontWeight,
  sprinkles,
  TextColor,
} from '../../styles/sprinkles.css';

const Text = ({
  children,
  color = 'primary',
  fontSize = '18px',
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
    })}
  >
    {children}
  </span>
);

export default Text;
