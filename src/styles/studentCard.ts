import { StyleSheet } from 'react-native';
import { colors } from '@/src/constants/colors';
import { montserrat } from '../constants/montserrat';

export const studentCardStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: '3%'
    },
    gradient: {
        flex: 0.9,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        paddingHorizontal: '5%',
        paddingVertical: '4%',
        backgroundColor: colors.pcian
    },
    studentPhoto: {
        flex: 0,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        // height: 200,
        overflow: 'hidden',
        // backgroundColor: 'rgba(13, 102, 235, 1)'
    },
    top: {
        flex: 0.7,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '4%',
        // backgroundColor: 'blue'
    },
    main: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '5%',
        borderRadius: 20,
        borderColor: '#ffffff39',
        backgroundColor: 'rgba(255, 255, 255, 0.144)',
        borderWidth: 1,
    },
    sideInfo: {
        flex: 1,
        height: 200,
        justifyContent: 'center',
        gap: '20%',
        marginLeft: '4%',
        // backgroundColor: 'red'
    },
    normal: {
        color: 'white',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '600',
        textAlignVertical: 'center',
        fontFamily: montserrat.semiBold
    },
    small: {
        color: 'white',
        fontSize: 14,
        textAlignVertical: 'center',
        textTransform: 'uppercase',
        fontFamily: montserrat.regular
    },
    labelText: {
        color: 'white',
        fontSize: 14,
        marginBottom: '0.1%',
        textAlignVertical: 'top',
        textTransform: 'uppercase'
    },
    valueText: {
        color: 'white',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '600',
        textAlignVertical: 'top',
    }
});