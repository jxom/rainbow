import classnames from 'classnames';
import React, { ReactNode } from 'react';

import { sprinkles } from './sprinkles.css';

const TextLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => (
  <a
    className={classnames([
      sprinkles({
        color: 'action',
        textDecoration: { hover: 'underline' },
      }),
    ])}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default TextLink;
