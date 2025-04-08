import { router } from 'expo-router';
import { Alert } from 'react-native';

export const handleLogout = () => {
    Alert.alert(
      "Sair",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sair",
          onPress: () => router.replace('../'),
          style: "destructive"
        }
      ]
    );
  };