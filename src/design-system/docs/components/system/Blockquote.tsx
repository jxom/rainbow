import React, { ReactNode } from 'react';

import { FontSize, FontWeight, sprinkles } from '../../styles/sprinkles.css';

const Blockquote = ({
  children,
  fontSize = '18px',
  fontWeight = 500,
}: {
  children: ReactNode;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}) => (
  <div
    className={sprinkles({
      color: 'action',
      fontSize,
      fontWeight,
      paddingHorizontal: '24px',
      paddingVertical: '16px',
      position: 'relative',
    })}
  >
    {children}
    <div
      className={sprinkles({
        backgroundColor: 'actionDark',
        bottom: 0,
        left: 0,
        paddingLeft: '4px',
        position: 'absolute',
        top: 0,
      })}
    />
  </div>
);

export default Blockquote;
