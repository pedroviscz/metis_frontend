import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Montserrat_100Thin, Montserrat_200ExtraLight,
  Montserrat_300Light, Montserrat_400Regular,
  Montserrat_500Medium, Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import { View } from "react-native";

// Mantenha a tela de splash visível enquanto carregamos os recursos
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ duration: 500, fade: true });

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin, Montserrat_200ExtraLight,
    Montserrat_300Light, Montserrat_400Regular,
    Montserrat_500Medium, Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pré-carregar outros recursos necessários aqui se precisar
        
        // Aguarde as fontes carregarem
        if (fontsLoaded) {
          // Aguardar um pequeno tempo para garantir que a UI esteja pronta
          await new Promise(resolve => setTimeout(resolve, 50));
          setAppIsReady(true);
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [fontsLoaded]);

  useEffect(() => {
    // Só esconde a tela de splash quando tudo estiver pronto
    if (appIsReady) SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!fontsLoaded || !appIsReady) { return null; }

  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"/>
        {/* <Stack.Screen name="login"/> */}
        <Stack.Screen name="(student)"/>
        {/* <Stack.Screen name="(responsible)"/> */}
      </Stack>
    </View>
  );
}