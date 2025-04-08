import React from 'react';
import { View, Image, ImageSourcePropType, ImageRequireSource, StyleSheet } from 'react-native';

interface StudentPhotoProps {
  photoUrl?: string | ImageRequireSource;
  width: number;
  height: number;
}

const DEFAULT_PHOTO = 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg';

const StudentPhoto: React.FC<StudentPhotoProps> = ({ 
  photoUrl = DEFAULT_PHOTO,
  width = 300,
  height = 400
}) => {
  const getImageSource = (): ImageSourcePropType => {
    if (typeof photoUrl === 'string') {
      // Se for uma URL remota ou caminho absoluto
      if (photoUrl.startsWith('http') || photoUrl.startsWith('https')) {
        return { uri: photoUrl };
      }
      // Se for um caminho local inválido ou não encontrado, usa a imagem padrão
      return { uri: DEFAULT_PHOTO };
    }
    // Se for um ImageRequireSource (importado via import)
    return photoUrl;
  };

  return (
    <View style={styles.container}>
      <Image 
        source={getImageSource()} 
        style={[styles.image, { width, height }]}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default StudentPhoto; 