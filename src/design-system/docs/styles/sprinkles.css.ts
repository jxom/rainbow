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

const textColors = {
  white: 'white',
  action: palettes.light.foregroundColors.action,
  primary: palettes.light.foregroundColors.primary,
  secondary: palettes.light.foregroundColors.secondary60,
  secondaryDark: palettes.dark.foregroundColors.secondary80,
};

export type TextColor = keyof typeof textColors;

const backgroundColors = {
  actionDark: palettes.dark.backgroundColors.action.color,
  actionLight: palettes.light.backgroundColors.action.color,
  bodyDark: palettes.dark.backgroundColors.body.color,
  bodyLight: palettes.light.backgroundColors.body.color,
};

const fontSize = ['32px', '23px', '18px'];

export type FontSize = typeof fontSize[number];

const fontWeight = [400, 500, 600, 700, 800];

export type FontWeight = typeof fontWeight[number];

const radii = {
  '16px': '16px',
};

export type Radii = keyof typeof radii;

const properties = defineProperties({
  properties: {
    display: ['flex'],
    position: ['absolute', 'relative'],
    flexDirection: ['row', 'column'],
    flexBasis: [0] as const,
    flexGrow: [1] as const,
    flexShrink: [1] as const,
    fontSize,
    fontWeight,
    wordBreak: ['break-word'],
    borderTopLeftRadius: radii,
    borderBottomLeftRadius: radii,
    borderTopRightRadius: radii,
    borderBottomRightRadius: radii,
    bottom: [0],
    top: [0],
    left: [0],
    width: ['100%'],
    height: ['100%'],
    maxWidth: ['768px'],
    marginLeft: ['auto'],
    marginRight: ['auto'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    gap: space,
    color: textColors,
    backgroundColor: backgroundColors,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    paddingVertical: ['paddingTop', 'paddingBottom'],
    paddingHorizontal: ['paddingLeft', 'paddingRight'],
    borderRadius: [
      'borderTopLeftRadius',
      'borderBottomLeftRadius',
      'borderTopRightRadius',
      'borderBottomRightRadius',
    ],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  },
});

export const sprinkles = createSprinkles(properties);
