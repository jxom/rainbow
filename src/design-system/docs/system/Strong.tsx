import classnames from 'classnames';
import React, { ReactNode } from 'react';

import { sprinkles } from './sprinkles.css';

const Strong = ({ children }: { children: ReactNode }) => (
  <span
    className={classnames([
      sprinkles({
        fontWeight: 'bold',
      }),
    ])}
  >
    {children}
  </span>
);

export default Strong;
