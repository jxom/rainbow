import React, { Children, ReactNode } from 'react';

import { Space, sprinkles } from '../../styles/sprinkles.css';

const Columns = ({
  space,
  children,
}: {
  space: Space;
  children: ReactNode;
}) => (
  <div
    className={sprinkles({
      display: 'flex',
      flexDirection: 'row',
      gap: space,
      width: '100%',
    })}
  >
    {Children.map(children, child => (
      <div
        className={sprinkles({
          flexBasis: 0,
          flexGrow: 1,
          flexShrink: 1,
        })}
      >
        {child}
      </div>
    ))}
  </div>
);

export default Columns;
