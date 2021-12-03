import classnames from 'classnames';
import React, { ReactNode } from 'react';

import { sprinkles } from './sprinkles.css';

const Code = ({ children }: { children: ReactNode }) => (
  <code
    className={classnames([
      sprinkles({
        backgroundColor: 'actionTint',
        borderRadius: '4px',
        color: 'action',
        fontWeight: 'medium',
        paddingHorizontal: '2px',
      }),
    ])}
  >
    {children}
  </code>
);

export default Code;
