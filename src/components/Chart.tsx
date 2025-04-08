import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PieChart, { SliceLabel } from 'react-native-pie-chart';

interface ChartProps {
  data: {
    value: number;
    color: string;
    label?: SliceLabel;
  }[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
      <PieChart
          widthAndHeight={170}
          series={data}
          cover={0.5}
          padAngle={0.05}
          style={{ transform: [{ rotate: '45deg' }] }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: 180, 
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendContainer: {
    flex: 1,
    marginLeft: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    fontWeight: '500',
  }
});

export default Chart;