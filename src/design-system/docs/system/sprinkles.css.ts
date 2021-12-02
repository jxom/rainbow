import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import {
  backgroundColors,
  fontWeight,
  negativeSpace,
  radii,
  space,
  textColors,
} from './tokens.css';

const properties = defineProperties({
  properties: {
    backgroundColor: backgroundColors,
    borderBottomLeftRadius: radii,
    borderBottomRightRadius: radii,
    borderTopLeftRadius: radii,
    borderTopRightRadius: radii,
    bottom: [0],
    color: textColors,
    display: ['flex'],
    flexBasis: [0] as const,
    flexDirection: ['row', 'column'],
    flexGrow: [1] as const,
    flexShrink: [1] as const,
    fontWeight,
    gap: space,
    height: ['100%'],
    left: [0],
    letterSpacing: ['0.5px'],
    marginLeft: negativeSpace,
    marginRight: negativeSpace,
    maxWidth: ['768px'],
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,
    position: ['absolute', 'relative', 'sticky'],
    top: [0],
    width: ['100%'],
    wordBreak: ['break-word'],
    zIndex: [1],
  },
  shorthands: {
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    borderRadius: [
      'borderTopLeftRadius',
      'borderBottomLeftRadius',
      'borderTopRightRadius',
      'borderBottomRightRadius',
    ],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    paddingHorizontal: ['paddingLeft', 'paddingRight'],
    paddingVertical: ['paddingTop', 'paddingBottom'],
  },
});

export const sprinkles = createSprinkles(properties);
