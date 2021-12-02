import React, { ReactNode } from 'react';

import { sprinkles } from './sprinkles.css';
import { FontWeight } from './tokens.css';
import { textSizes } from './typography.css';

const TextLink = ({
  children,
  href,
  size = '18px',
  weight = 'regular',
}: {
  children: ReactNode;
  href: string;
  size?: keyof typeof textSizes;
  weight?: FontWeight;
}) => (
  <a
    className={`${sprinkles({
      color: 'action',
      fontWeight: weight,
      letterSpacing: '0.5px',
    })} ${textSizes[size]}`}
    href={href}
  >
    {children}
  </a>
);

export default TextLink;
