/* eslint-disable sort-keys-fix/sort-keys-fix */
import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { ColorModeProvider } from '../../color/ColorMode';
import { BackgroundDemo } from '../../playground/BackgroundDemo';
import { Docs } from '../../types';
import { Columns } from '../Columns/Columns';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { Box } from './Box';

const docs: Docs = {
  name: 'Box',
  category: 'Layout',
  description: [
    <Text key="1">
      Renders an individual <Text weight="bold">View</Text> element with quick
      access to the standard padding and negative margin scales, as well as
      other common layout properties. Ideally you're not supposed to need this
      component much unless you're building a design system component.
    </Text>,
    <Text key="2">
      If you need to render something other than a{' '}
      <Text weight="bold">View</Text>, you can pass a component to the{' '}
      <Text weight="bold">as </Text>
      prop.
    </Text>,
  ],
  examples: [
    {
      name: 'Backgrounds',
      Example: () => (
        <Columns space="19px">
          <Stack space="10px">
            <Text weight="bold">Light mode</Text>
            <ColorModeProvider value="light">
              <BackgroundDemo />
            </ColorModeProvider>
          </Stack>
          <Stack space="10px">
            <Text weight="bold">Dark mode</Text>
            <ColorModeProvider value="dark">
              <BackgroundDemo />
            </ColorModeProvider>
          </Stack>
        </Columns>
      ),
    },
    {
      name: 'With animation',
      Example: () => {
        const offsetRatio = useSharedValue(0);
        const containerWidth = useSharedValue(0);
        const boxSize = 100;

        const sizeStyles = useMemo(
          () => ({
            width: boxSize,
            height: boxSize,
          }),
          [boxSize]
        );

        const animatedStyles = useAnimatedStyle(() => ({
          transform: [
            {
              translateX: withSpring(
                offsetRatio.value * (containerWidth.value - boxSize)
              ),
            },
          ],
        }));

        return (
          <View
            onLayout={event =>
              (containerWidth.value = event.nativeEvent.layout.width)
            }
          >
            <Stack space="19px">
              <Box
                as={Animated.View}
                background="accent"
                borderRadius={20}
                style={[sizeStyles, animatedStyles]}
              />
              <TouchableOpacity
                onPress={() => (offsetRatio.value = Math.random())}
              >
                <Text align="center" color="action" weight="bold">
                  Move
                </Text>
              </TouchableOpacity>
            </Stack>
          </View>
        );
      },
    },
  ],
};

export default docs;
