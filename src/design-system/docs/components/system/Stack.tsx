import React, { ReactNode } from 'react';

import { Space, sprinkles } from '../../styles/sprinkles.css';

const Stack = ({ space, children }: { space: Space; children: ReactNode }) => (
  <div
    className={sprinkles({
      display: 'flex',
      flexDirection: 'column',
      gap: space,
    })}
  >
    {children}
  </div>
);

export default Stack;
