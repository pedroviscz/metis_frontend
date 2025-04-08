import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { montserrat } from '../constants/montserrat';
import { height, width } from '../constants/measures';

export const frequencyStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingVertical: '20%',
        paddingHorizontal: '5%'
    },
    goBackButton: {
        position: 'absolute',
        zIndex: 1000,
        padding: 10
    },
    chartContainer: {
        flex: 0,
        position: 'relative',
        height: 250,
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: colors.pcian,
        borderRadius: 40,
        padding: 20
    },
    chartGraphic: {
        height: 20,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden'
    },
    chartSegment: {
        height: '100%'
    },
    chartInfoTop: {
        position: 'absolute',
        top: 25,
        right: 20
    },
    chartInfoBottom: {
        position: 'absolute',
        bottom: 20,
        left: 20
    },
    title: {
        fontSize: 40,
        color: colors.pcian,
        fontFamily: montserrat.bold,
        textAlign: 'center',
    },
    info: {
        fontSize: height * 0.02,
        color: '#383838',
        fontFamily: montserrat.semiBold
    },
    infoRow: {
        flex: 0,
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        paddingHorizontal: '6%'
    },
    chartLabelBold: {
        textAlign: 'center',
        color: 'white',
        fontFamily: montserrat.semiBold,
        fontSize: 16
    },
    chartLabel: {
        textAlign: 'center',
        color: 'white',
        fontFamily: montserrat.medium,
        fontSize: 16,
        paddingLeft: 20
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    colorIndicator: {
        width: 16,
        height: 16,
        borderRadius: 8
    }
});