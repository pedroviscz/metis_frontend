import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  withTiming, 
  Easing, 
  runOnJS, 
  clamp,
  useDerivedValue
} from 'react-native-reanimated';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';
import { buttonTogglerStyle as tstyle } from '@/src/styles';
import { CONTAINER_WIDTH, MOVIMENT } from '@/src/constants/measures';

interface ButtonTogglerProps {
  translateX: Animated.SharedValue<number>;
  handleToggle: (direction: 0 | 1) => void;
  scrollToPosition?: (percentage: number) => void;
}

const ButtonToggler: React.FC<ButtonTogglerProps> = ({ translateX, handleToggle, scrollToPosition }) => {
  // 0 para esquerda e 1 para direita
  const [selectedButton, setSelectedButton] = useState<0 | 1>(0);
  const [isDragging, setIsDragging] = useState(false);

  // Usa useDerivedValue para reagir suavemente às mudanças no translateX
  const smoothPosition = useDerivedValue(() => {
    return translateX.value;
  });

  const moveButton = (direction: 0 | 1) => {
    setSelectedButton(direction);
    direction === 0 ? translateX.value = 0 : translateX.value = MOVIMENT;
    handleToggle(direction);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{
      translateX: withTiming(smoothPosition.value * 2, {
        duration: 150,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    }],
  }));

  const tap = Gesture.Tap()
    .maxDuration(250)
    .onEnd((e) => {
      const direction = e.x > (CONTAINER_WIDTH / 2) ? 1 : 0;
      runOnJS(moveButton)(direction);
    });

  const pan = Gesture.Pan()
    .onBegin(() => {
      runOnJS(setIsDragging)(true);
    })
    .onChange((e) => {
      if (selectedButton === 0) {
        translateX.value = clamp(e.translationX, 0, MOVIMENT);
        if (scrollToPosition) {
          // Calcula a porcentagem de progresso do movimento para atualizar o ScrollView
          const percentage = translateX.value / MOVIMENT;
          runOnJS(scrollToPosition)(percentage);
        }
      } else {
        translateX.value = clamp(e.translationX + MOVIMENT, 0, MOVIMENT);
        if (scrollToPosition) {
          const percentage = translateX.value / MOVIMENT;
          runOnJS(scrollToPosition)(percentage);
        }
      }
    })
    .onEnd((e) => {
      runOnJS(setIsDragging)(false);
      const direction = translateX.value > MOVIMENT / 2 ? 1 : 0;
      runOnJS(moveButton)(direction);
    });

  const compose = Gesture.Race(tap, pan);

  return (
    <GestureHandlerRootView style={tstyle.gestureHandlerRootView}>
      <GestureDetector gesture={compose}>
        <View style={[tstyle.container]}>
          <Animated.View style={[tstyle.animatedView, animatedStyles]} />
          <Text style={tstyle.text}>QRCode</Text>
          <Text style={tstyle.text}>Carteirinha</Text>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default ButtonToggler;