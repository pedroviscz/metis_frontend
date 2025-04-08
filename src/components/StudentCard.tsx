import React from 'react'
import { View, Text } from 'react-native'
import { studentCardStyle as styles } from '@/src/styles/studentCard';
import { personalInfo, mainInfo, documents } from '@/src/data/studentMockData';
import StudentPhoto from './StudentPhoto';
import examplePhoto from '@/assets/images/perfil_linkedin.jpg';

const StudentCard: React.FC = () => {
  const renderText = (label: string, value: string, fullWidth?: boolean) => (
    <View key={label} style={{
      flexDirection: fullWidth ? 'row' : 'column', 
      alignItems: fullWidth ? 'center' : 'flex-start'
    }}>
      <Text style={[styles.small, !fullWidth && { marginRight: '2%' }]}>{label}:</Text>
      <Text style={styles.normal}>{fullWidth ? ' ' + value : value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        <View style={styles.top}>
          <View style={styles.studentPhoto}>
            <StudentPhoto width={150} height={200} photoUrl={examplePhoto} />
          </View>
          <View style={styles.sideInfo}>
            {personalInfo.map((info, index) => (
              <View key={info.label}>
                {renderText(info.label, info.value, info.fullWidth)}
                {index === 0 && <View style={{ marginBottom: '2%' }} />}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.main}>
          {mainInfo.map(info => renderText(info.label, info.value, info.fullWidth))}
          
          <View>
            <Text style={styles.small}>DOCUMENTOS:</Text>
            {documents.map(doc => renderText(doc.label, doc.value, doc.fullWidth))}
          </View>

          {renderText('Vencimento', 'DD/MM/AAAA')}
        </View>
      </View>
    </View>
  )
}

export default StudentCard; 