/* eslint-disable sort-keys-fix/sort-keys-fix */
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { palettes } from '../../color/palettes';

const space = {
  none: '0', // eslint-disable-line prettier/prettier
  '4px': '4px',
  '8px': '8px',
  '12px': '12px',
  '16px': '16px',
  '24px': '24px',
  '32px': '32px',
  '48px': '48px',
  '64px': '64px',
};

export type Space = keyof typeof space;

const negativeSpace = {
  auto: 'auto', // eslint-disable-line prettier/prettier
  none: '0', // eslint-disable-line prettier/prettier
  '-4px': '-4px',
  '-8px': '-8px',
  '-12px': '-12px',
  '-16px': '-16px',
  '-24px': '-24px',
  '-32px': '-32px',
  '-48px': '-48px',
  '-64px': '-64px',
};

export type NegativeSpace = keyof typeof negativeSpace;

const textColors = {
  white: 'white',
  action: palettes.light.foregroundColors.action,
  primary: palettes.light.foregroundColors.primary,
  secondary: palettes.light.foregroundColors.secondary60,
  secondaryDark: palettes.dark.foregroundColors.secondary80,
};

export type TextColor = keyof typeof textColors;

const backgroundColors = {
  docs: '#e9f2ff',
  actionDark: palettes.dark.backgroundColors.action.color,
  actionLight: palettes.light.backgroundColors.action.color,
  bodyDark: palettes.dark.backgroundColors.body.color,
  bodyLight: palettes.light.backgroundColors.body.color,
};

const fontSize = ['32px', '23px', '18px', '16px'];

export type FontSize = typeof fontSize[number];

const fontWeight = [400, 500, 600, 700, 800];

export type FontWeight = typeof fontWeight[number];

const radii = {
  '16px': '16px',
};

export type Radii = keyof typeof radii;

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
    fontSize,
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
