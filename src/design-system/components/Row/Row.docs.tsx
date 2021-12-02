/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';
import { View } from 'react-native';
import DocsCode from '../../docs/system/Code';
import DocsText from '../../docs/system/Text';
import { Placeholder } from '../../playground/Placeholder';
import { Docs } from '../../types';
import { Row } from './Row';

const docs: Docs = {
  name: 'Row',
  category: 'Layout',
  description: [
    <DocsText key="1">
      Arranges child nodes{' '}
      <DocsText weight="bold">horizontally without wrapping</DocsText>, with
      equal spacing between them, plus an optional{' '}
      <DocsCode>separator</DocsCode> element. Items can be aligned with{' '}
      <DocsCode>alignHorizontal</DocsCode> and{' '}
      <DocsCode>alignVertical</DocsCode>.
    </DocsText>,
    <DocsText key="2">
      If there is only a single child node, no space or separators will be
      rendered.
    </DocsText>,
  ],
  examples: [
    {
      name: 'Basic usage',
      Example: () => (
        <Row space="19px">
          <Placeholder width={40} />
          <Placeholder width={40} />
          <Placeholder width={40} />
        </Row>
      ),
    },

    {
      name: 'Custom space',
      Example: () => (
        <Row space={{ custom: 9 }}>
          <Placeholder width={40} />
          <Placeholder width={40} />
          <Placeholder width={40} />
        </Row>
      ),
    },

    {
      name: 'Center-aligned horizontally',
      Example: () => (
        <Row alignHorizontal="center" space="19px">
          <Placeholder width={40} />
          <Placeholder width={40} />
          <Placeholder width={40} />
        </Row>
      ),
    },

    {
      name: 'Right-aligned horizontally',
      Example: () => (
        <Row alignHorizontal="right" space="19px">
          <Placeholder width={40} />
          <Placeholder width={40} />
          <Placeholder width={40} />
        </Row>
      ),
    },

    {
      name: 'Justified horizontally',
      Example: () => (
        <Row alignHorizontal="justify" space="19px">
          <Placeholder width={40} />
          <Placeholder width={40} />
          <Placeholder width={40} />
        </Row>
      ),
    },

    {
      name: 'Center-aligned vertically',
      Example: () => (
        <Row alignVertical="center" space="19px">
          <Placeholder height={40} width={40} />
          <Placeholder height={60} width={40} />
          <Placeholder height={20} width={40} />
        </Row>
      ),
    },

    {
      name: 'Bottom-aligned vertically',
      Example: () => (
        <Row alignVertical="bottom" space="19px">
          <Placeholder height={40} width={40} />
          <Placeholder height={60} width={40} />
          <Placeholder height={20} width={40} />
        </Row>
      ),
    },

    {
      name: 'With fixed-height separators',
      Example: () => (
        <Row
          separator={
            <View style={{ backgroundColor: '#999', height: 20, width: 1 }} />
          }
          space="19px"
        >
          <Placeholder width={40} />
          <Placeholder width={40} />
          <Placeholder width={40} />
        </Row>
      ),
    },

    {
      name: 'With fixed-height separators and vertical alignment',
      Example: () => (
        <Row
          alignVertical="center"
          separator={
            <View style={{ backgroundColor: '#999', height: 20, width: 1 }} />
          }
          space="19px"
        >
          <Placeholder height={40} width={40} />
          <Placeholder height={60} width={40} />
          <Placeholder height={20} width={40} />
        </Row>
      ),
    },

    {
      name: 'With fixed-height separators and horizontal alignment',
      Example: () => (
        <Row
          alignHorizontal="center"
          separator={
            <View style={{ backgroundColor: '#999', height: 20, width: 1 }} />
          }
          space="19px"
        >
          <Placeholder width={40} />
          <Placeholder width={40} />
          <Placeholder width={40} />
        </Row>
      ),
    },

    {
      name: 'With full-height separators',
      Example: () => (
        <Row
          alignVertical="center"
          separator={
            <View style={{ backgroundColor: '#999', flexGrow: 1, width: 1 }} />
          }
          space="19px"
        >
          <Placeholder height={40} width={40} />
          <Placeholder height={60} width={40} />
          <Placeholder height={20} width={40} />
        </Row>
      ),
    },

    {
      name: 'With no space and separators',
      Example: () => (
        <Row
          alignVertical="center"
          separator={
            <View style={{ backgroundColor: '#999', height: 20, width: 1 }} />
          }
        >
          <Placeholder width={40} />
          <Placeholder width={40} />
          <Placeholder width={40} />
        </Row>
      ),
    },
  ],
};

export default docs;
