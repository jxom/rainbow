import React, { ReactNode } from 'react';

import { sprinkles } from './sprinkles.css';
import { headingSizes } from './typography.css';

const Heading = ({ children }: { children: ReactNode }) => (
  <h2
    className={`${sprinkles({
      color: 'secondary',
      fontWeight: 'bold',
    })} ${headingSizes['23px']}`}
  >
    {children}
  </h2>
);

export default Heading;
