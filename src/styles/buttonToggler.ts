import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { montserrat } from '../constants/montserrat';

export const buttonTogglerStyle = StyleSheet.create({
    container: {
        width: '92%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 17,
        backgroundColor: colors.gray
    },
    animatedView: {
        top: 5,
        left: 5,
        width: '50%',
        height: 40,
        position: 'absolute',
        borderRadius: 15,
        backgroundColor: colors.pcian,
    },
    text: {
        flex: 1,
        textAlign: 'center',
        color: colors.offwhite,
        fontFamily: montserrat.semiBold
    },
    gestureHandlerRootView: { 
        flex: 0, 
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center' 
    }
});