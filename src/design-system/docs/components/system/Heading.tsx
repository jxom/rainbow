import React, { ReactNode } from 'react';

import { sprinkles } from '../../styles/sprinkles.css';

const Heading = ({ children }: { children: ReactNode }) => (
  <h2
    className={sprinkles({
      color: 'secondary',
      fontSize: '23px',
      fontWeight: 700,
    })}
  >
    {children}
  </h2>
);

export default Heading;
