import React, { ReactNode } from 'react';

import { sprinkles } from '../../styles/sprinkles.css';

const Card = ({
  backgroundColor = 'white',
  height,
  children,
}: {
  backgroundColor?: string;
  height?: 'full';
  children: ReactNode;
}) => (
  <div
    className={sprinkles({
      borderRadius: '16px',
      height: height === 'full' ? '100%' : undefined,
      padding: '32px',
      paddingVertical: '32px',
    })}
    style={{ backgroundColor }}
  >
    {children}
  </div>
);

export default Card;
