import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { colors } from '@/src/constants/colors';
const { width } = Dimensions.get('window');

export const studentStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    // paddingBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.offwhite,
  },
  scrollView: {
    flex: 1,
    width: width,
  },
  page: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  scheduleButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#00BCD4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  scheduleText: {
    color: colors.offwhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    width: '92%',
    height: 50,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: colors.pcian,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.offwhite,
  },
  menuButton: {
    position: 'absolute',
    top: 30,
    right: 10,
    padding: 8,
  },
});