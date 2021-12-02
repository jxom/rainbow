import { createTextStyle } from '@capsizecss/vanilla-extract';
import mapValues from 'lodash/mapValues';

import { typeHierarchy } from '../../typography/typeHierarchy';
import { fontMetrics } from '../../typography/typography';

function createTextSize({
  fontSize,
  lineHeight,
}: {
  fontSize: number;
  lineHeight: number;
}) {
  return createTextStyle({
    fontMetrics,
    fontSize,
    leading: lineHeight,
  });
}

export const textSizes = mapValues(typeHierarchy.text, createTextSize);
export const headingSizes = mapValues(typeHierarchy.heading, createTextSize);
