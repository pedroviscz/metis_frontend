import React, { useRef, useEffect } from 'react';
import { View, Pressable, BackHandler } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue, clamp } from 'react-native-reanimated';
import { ButtonToggler, StudentCard } from '@/src/components';
import QRCode from 'react-native-qrcode-svg';
import { studentStyle as styles } from '@/src/styles';
import { width, MOVIMENT } from '@/src/constants/measures';
import { colors } from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { handleLogout } from '@/src/functions/logout';
const IndexStudent = () => {
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const translateX = useSharedValue(0);
  const isToggling = useSharedValue(false);
  const scrollPosition = useSharedValue(0);

  useEffect(() => {
    const backAction = () => true;
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove();
  }, []);

  const handleToggle = (direction: 0 | 1) => {
    isToggling.value = true;

    const xOffset = direction === 0 ? 0 : width;

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: xOffset, animated: true });
    }
    // esse é o tempo que o scrollview leva para ir para o lado
    setTimeout(() => { isToggling.value = false }, 300)
  };

  const scrollToPosition = (percentage: number) => {
    if (scrollViewRef.current) {
      const xOffset = percentage * width;
      // Usando scrollTo com animated: true para suavizar o movimento
      scrollViewRef.current.scrollTo({ x: xOffset, animated: true });
      // Atualizamos o valor de scrollPosition para manter o sistema sincronizado
      scrollPosition.value = xOffset;
    }
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (!isToggling.value) {
        translateX.value = clamp(event.contentOffset.x / 4.2, 0, MOVIMENT);
        scrollPosition.value = event.contentOffset.x;
      }
    },
    onBeginDrag: () => { isToggling.value = false },
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={handleLogout} style={styles.menuButton}>
        <Ionicons name="log-out-outline" size={29} color={colors.gray} />
      </Pressable>
      <ButtonToggler
        translateX={translateX}
        handleToggle={handleToggle}
        scrollToPosition={scrollToPosition}
      />
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        style={styles.scrollView}
        onScroll={scrollHandler}
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate="normal"
      >
        <View style={styles.page}>
          <QRCode
            value={'QRCode do aluno'}
            size={300}
            color={colors.gray}
            backgroundColor={colors.offwhite}
          />
        </View>
        <View style={styles.page}>
          <StudentCard />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default IndexStudent;