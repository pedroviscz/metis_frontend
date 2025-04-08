import { useState, useRef, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { scheduleStyle as tstyle } from '@/src/styles';
import { Ionicons } from '@expo/vector-icons';
import { diasDaSemana } from '@/src/data/horarios';
import { colors } from '@/src/constants/colors';
import { ScheduleTable } from '@/src/components/ScheduleTable';

export default function ScheduleTab() {
  const [activeDay, setActiveDay] = useState<string | null>(null);
  
  // Objeto para armazenar as animações para cada dia
  const rotationAnimations = useRef<Record<string, Animated.Value>>({});
  
  // Inicializar as animações para cada dia
  useEffect(() => {
    diasDaSemana.forEach(dia => {
      rotationAnimations.current[dia] = new Animated.Value(0);
    });
  }, []);
  
  // Função para alternar o dia ativo com animação
  const toggleDay = (dia: string) => {
    // Se já existe um dia ativo e é diferente do dia clicado
    if (activeDay && activeDay !== dia) {
      // Resetar a animação do dia anterior
      Animated.timing(rotationAnimations.current[activeDay], {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    // Direção da animação baseada no estado atual
    const toValue = activeDay === dia ? 0 : 1;
    
    // Iniciar animação do dia clicado
    Animated.timing(rotationAnimations.current[dia], {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    
    // Atualizar estado
    setActiveDay(activeDay === dia ? null : dia);
  };

  return (
    <View style={tstyle.container}>
      <Text style={tstyle.title}>Horários de aula</Text>
      <ScrollView style={{flex: 1, alignSelf: 'stretch'}}>
        {diasDaSemana.map((dia) => {
          const rotate = rotationAnimations.current[dia]?.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
          }) || '0deg';
          
          return (
            <View key={dia} style={tstyle.dayContainer}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => toggleDay(dia)}
                style={[tstyle.dayButton]}
              >
                <View style={tstyle.dayButtonContent}>
                  <Text style={tstyle.dayText}>{dia}</Text>
                  <Animated.View style={{ transform: [{ rotate }] }}>
                    <Ionicons 
                      name="chevron-down" 
                      size={32} 
                      color="#383838"
                    />
                  </Animated.View>
                </View>
              </TouchableOpacity>
              <Collapsible 
                duration={300} 
                style={tstyle.collapsible}
                collapsed={activeDay !== dia}
              >
                <ScheduleTable dia={dia} />
              </Collapsible>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}