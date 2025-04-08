import { View, Text } from 'react-native';
import { scheduleStyle as tstyle } from '@/src/styles';
import { cabecalhoTabela, dadosHorarios } from '@/src/data/horarios';

interface ScheduleTableProps { dia: string }

export function ScheduleTable({ dia }: ScheduleTableProps) {
  return (
    <View style={tstyle.scheduleContainer}>
      {dadosHorarios[dia as keyof typeof dadosHorarios] ? (
        <View style={tstyle.tableContainer}>
          {/* Cabeçalho da tabela */}
          <View style={tstyle.tableHeader}>
            {cabecalhoTabela.map((coluna, index) => (
              <Text key={index} style={[tstyle.textTable, tstyle.headerText, index === 0 && tstyle.firstColumn]}>
                {coluna}
              </Text>
            ))}
          </View>
          {/* Linhas da tabela */}
          {dadosHorarios[dia as keyof typeof dadosHorarios].map((linha, index) => (
            <View key={index} style={tstyle.tableRow}>
              {linha.map((celula, cellIndex) => (
                <Text key={cellIndex} style={[tstyle.textTable, cellIndex === 0 && tstyle.firstColumn]}>
                  {celula}
                </Text>
              ))}
            </View>
          ))}
        </View>
      ) : (
        <Text style={tstyle.textTable}>Nenhum horário para mostrar</Text>
      )}
    </View>
  );
}