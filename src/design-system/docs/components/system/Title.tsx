import React, { ReactNode } from 'react';

import { FontSize, sprinkles, TextColor } from '../../styles/sprinkles.css';

const Title = ({
  children,
  color = 'primary',
  fontSize = '23px',
}: {
  children: ReactNode;
  color?: TextColor;
  fontSize?: FontSize;
}) => (
  <h1
    className={sprinkles({
      color,
      display: 'flex',
      fontSize,
      fontWeight: 800,
    })}
  >
    {children}
  </h1>
);

export default Title;
