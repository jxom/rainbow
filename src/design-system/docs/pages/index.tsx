import type { NextPage } from 'next';
import React from 'react';

import { Text } from '../../components/Text/Text';
import { Docs } from '../../types';
import DocsAccordion from '../components/DocsAccordion';
import Blockquote from '../components/system/Blockquote';
import Stack from '../components/system/Stack';
import Title from '../components/system/Title';
import * as docs from '../docs';
import { sprinkles } from '../styles/sprinkles.css';

// const fontWeightFromString = {
//   '400': 400,
//   '500': 500,
//   '600': 600,
//   '700': 700,
//   '800': 800,
// } as const;

const categoryOrder = ['Layout', 'Typography', 'Content'];

const Home: NextPage = () => {
  const categories = Object.values(docs).reduce(
    (currentCategories: { [key: string]: Docs[] }, { default: doc }) => {
      return {
        ...currentCategories,
        [doc.category]: [...(currentCategories[doc.category] || []), doc],
      };
    },
    {}
  );

  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '768px',
        paddingBottom: '48px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '48px',
      })}
    >
      <Stack space="32px">
        <Title fontSize="32px">
          🌈🎨 Rainbow Design System Cheat Sheet 🎨🌈
        </Title>
        <Stack space="24px">
          <Text>
            The goal of Rainbow Design System is to make it fast and easy to
            build and maintain standard Rainbow designs. As much as possible,
            component APIs at the screen level should be high level, reading the
            way a designer would describe them.
          </Text>
          <Text>
            You ideally shouldn't have to write a bunch of low-level styling or
            manually adjust padding and margins on individual components to
            create visual balance. To achieve this, we need to start at the
            foundations and build up in layers.
          </Text>
          <Blockquote>
            <Stack space="16px">
              <Text color="action">
                This cheat sheet is not currently intended to be exhaustive,
                instead providing an overview of the core parts of the system.
                This is still a work in progress. APIs are incomplete and likely
                to change.
              </Text>
              <Text color="action">
                It's recommended that all code importing from
                <code> @rainbow-me/design-system </code> is written in
                TypeScript so that API changes are picked up.
              </Text>
            </Stack>
          </Blockquote>
        </Stack>
        {categoryOrder.map((categoryName, i) => (
          <Stack key={i} space="16px">
            <Title>{categoryName}</Title>
            <div>
              {categories[categoryName].map((docs, i) => {
                return <DocsAccordion key={i} {...docs} />;
              })}
            </div>
          </Stack>
        ))}
        {/* <Stack space="24px">
            <Stack space="12px">
              <Title>Typography</Title>
              <Columns space="16px">
                <Heading>Heading Sizes</Heading>
                <Heading>Text Sizes</Heading>
                <Heading>Font Weights</Heading>
              </Columns>
            </Stack>
            <Columns space="16px">
              <Card height="full">
                <Stack space="32px">
                  {Object.entries(typeHierarchy.heading).map(
                    (
                      [sizeName, { fontSize, lineHeight, letterSpacing }],
                      index
                    ) => (
                      <div key={index} style={{ fontSize }}>
                        <div
                          className={sprinkles({
                            color: 'primary',
                            fontWeight: 800,
                          })}
                        >
                          {sizeName} heading
                        </div>
                        <div
                          className={sprinkles({
                            color: 'secondary',
                            fontWeight: 500,
                          })}
                        >
                          {lineHeight}
                          px line height
                          <br />
                          {letterSpacing}px spacing
                        </div>
                      </div>
                    )
                  )}
                </Stack>
              </Card>

              <Card height="full">
                <Stack space="32px">
                  {Object.entries(typeHierarchy.text).map(
                    (
                      [sizeName, { fontSize, lineHeight, letterSpacing }],
                      index
                    ) => (
                      <div key={index} style={{ fontSize }}>
                        <div
                          className={sprinkles({
                            color: 'primary',
                            fontWeight: 800,
                          })}
                        >
                          {sizeName} text
                        </div>
                        <div
                          className={sprinkles({
                            color: 'secondary',
                            fontWeight: 600,
                          })}
                        >
                          {lineHeight}
                          px line height
                          <br />
                          {letterSpacing}px spacing
                        </div>
                      </div>
                    )
                  )}
                </Stack>
              </Card>

              <Card height="full">
                <Stack space="12px">
                  {Object.entries(fontWeights).map(
                    ([fontWeightName, fontWeight], index) => (
                      <div
                        className={sprinkles({
                          color: 'primary',
                          fontSize: '18px',
                          fontWeight: fontWeightFromString[fontWeight],
                        })}
                        key={index}
                      >
                        {fontWeightName} ({fontWeight})
                      </div>
                    )
                  )}
                </Stack>
              </Card>
            </Columns>
          </Stack>

          <Stack space="24px">
            <Stack space="12px">
              <Title>Background Colors</Title>
              <Columns space="16px">
                <Heading>Light Mode</Heading>
                <Heading>Dark Mode</Heading>
              </Columns>
            </Stack>
            <Stack space="16px">
              {Object.entries(backgroundColors).map(
                ([backgroundName, background], i) => (
                  <Columns key={i} space="16px">
                    {('color' in background
                      ? [background, background]
                      : [background.light, background.dark]
                    ).map(({ color: backgroundColor, mode }, index) => (
                      <div
                        className={sprinkles({
                          borderRadius: '16px',
                          color: mode === 'light' ? 'primary' : 'white',
                          padding: '32px',
                        })}
                        key={index}
                        style={{ backgroundColor }}
                      >
                        <Stack space="8px">
                          <div
                            className={sprinkles({
                              fontSize: '18px',
                              fontWeight: 800,
                              wordBreak: 'break-word',
                            })}
                          >
                            {backgroundName}
                          </div>
                          <div
                            className={sprinkles({
                              color:
                                mode === 'light'
                                  ? 'secondary'
                                  : 'secondaryDark',
                              fontSize: '18px',
                              fontWeight: 500,
                              wordBreak: 'break-word',
                            })}
                          >
                            {backgroundColor}
                          </div>
                        </Stack>
                      </div>
                    ))}
                  </Columns>
                )
              )}
            </Stack>
          </Stack>

          <Stack space="24px">
            <Stack space="12px">
              <Title>Foreground Colors</Title>
              <Columns space="16px">
                <Heading>Light Mode</Heading>
                <Heading>Light Tinted Mode</Heading>
                <Heading>Dark Mode</Heading>
                <Heading>Dark Tinted Mode</Heading>
              </Columns>
            </Stack>
            <Stack space="none">
              {Object.entries(foregroundColors).map(
                ([foregroundName, foreground], colorIndex, arr) => (
                  <Columns key={colorIndex} space="16px">
                    {(typeof foreground === 'string'
                      ? ([
                          [foreground, 'bodyLight'],
                          [foreground, { custom: '#dee2ff' }],
                          [foreground, 'bodyDark'],
                          [foreground, { custom: '#141938' }],
                        ] as const)
                      : ([
                          [foreground.light, 'bodyLight'],
                          [
                            foreground.lightTinted ?? foreground.light,
                            { custom: '#dee2ff' },
                          ],
                          [foreground.dark, 'bodyDark'],
                          [
                            foreground.darkTinted ?? foreground.dark,
                            { custom: '#141938' },
                          ],
                        ] as const)
                    ).map(([color, backgroundColor], index) => (
                      <div
                        className={sprinkles({
                          backgroundColor:
                            typeof backgroundColor === 'string'
                              ? backgroundColor
                              : undefined,
                          borderBottomRadius:
                            colorIndex === arr.length - 1 ? '16px' : undefined,
                          borderTopRadius:
                            colorIndex === 0 ? '16px' : undefined,
                          height: '100%',
                          padding: '32px',
                          paddingTop: colorIndex === 0 ? '32px' : 'none',
                        })}
                        key={index}
                        style={
                          typeof backgroundColor === 'object'
                            ? { backgroundColor: backgroundColor.custom }
                            : undefined
                        }
                      >
                        <Stack space="8px">
                          <div
                            className={sprinkles({
                              fontSize: '18px',
                              fontWeight: 800,
                              wordBreak: 'break-word',
                            })}
                            style={{ color }}
                          >
                            {foregroundName}
                          </div>
                          <div
                            className={sprinkles({
                              fontSize: '18px',
                              fontWeight: 500,
                              wordBreak: 'break-word',
                            })}
                            style={{ color }}
                          >
                            {color}
                          </div>
                        </Stack>
                      </div>
                    ))}
                  </Columns>
                )
              )}
            </Stack>
          </Stack> */}
      </Stack>
    </div>
  );
};

export default Home;
