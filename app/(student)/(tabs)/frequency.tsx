import React from 'react';
import { View, Text } from 'react-native';
import { frequencyStyle as tstyle } from '@/src/styles';
import Chart from '@/src/components/Chart';
import { SliceLabel } from 'react-native-pie-chart';
import { colors } from '@/src/constants/colors';

interface ChartData {
  value: number;
  color: string;
  label?: SliceLabel;
}

const FrequencyTab = () => {
  // Dados fictícios
  const faltas = Array(8).fill({ status: false });
  const presencas = Array(42).fill({ status: true });
  const diasLetivos = faltas.length + presencas.length;
  
  // Cálculo de percentuais
  const faltasPorcentagem = Math.round((faltas.length / diasLetivos) * 100);
  const presencaPorcentagem = Math.round((presencas.length / diasLetivos) * 100);
  
  const charData: ChartData[] = [
    {
      value: faltasPorcentagem,
      color: "#EBAA2C",
    },
    {
      value: presencaPorcentagem,
      color: colors.offwhite ,
    },
  ];

  return (
    <View style={tstyle.container}>
      <View style={{ flex: 0, alignSelf: 'stretch', justifyContent: 'center' }}>
        <Text style={tstyle.title}>Frequência</Text>
      </View>
      <View style={tstyle.chartContainer}>
        <View style={tstyle.chartInfoTop}>
          <View style={tstyle.labelContainer}>
            <View style={[tstyle.colorIndicator, { backgroundColor: "#EBAA2C" }]} />
            <Text style={tstyle.chartLabelBold}>Faltas</Text>
          </View>
          <Text style={tstyle.chartLabel}>{faltasPorcentagem}%</Text>
        </View>
        <View style={tstyle.chartInfoBottom}>
          <View style={tstyle.labelContainer}>
            <View style={[tstyle.colorIndicator, { backgroundColor: colors.offwhite }]} />
            <Text style={tstyle.chartLabelBold}>Presença</Text>
          </View>
          <Text style={tstyle.chartLabel}>{presencaPorcentagem}%</Text>
        </View>
        <Chart data={charData} />
      </View>
      
      <View>
        <View style={tstyle.infoRow}>
          <Text style={tstyle.info}>Faltas permitidas:</Text>
          <Text style={tstyle.info}> 20</Text>
        </View>
        <View style={tstyle.infoRow}>
          <Text style={tstyle.info}>Faltas atuais:</Text>
          <Text style={tstyle.info}> {faltas.length}</Text>
        </View>
        <View style={tstyle.infoRow}>
          <Text style={tstyle.info}>Dias letivos presente:</Text>
          <Text style={tstyle.info}> {presencas.length} / 200</Text>
        </View>
        <View style={tstyle.infoRow}>
          <Text style={tstyle.info}>Aulas até o momento:</Text>
          <Text style={tstyle.info}> {diasLetivos}</Text>
        </View>
      </View>
    </View>
  );
}

export default FrequencyTab;