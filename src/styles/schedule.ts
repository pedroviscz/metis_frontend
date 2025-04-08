import { StyleSheet, Dimensions } from "react-native";
import { colors } from "@/src/constants/colors";
import { montserrat } from "../constants/montserrat";
import { width } from "../constants/measures";

const scheduleStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '7%',
        paddingTop: '20%',
    },
    title: {
        textAlign: 'center',
        fontSize: width * 0.09,
        color: colors.pcian,
        fontFamily: montserrat.bold,
    },
    dayContainer: {
        marginBottom: 10,
    },
    dayButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: '#383838',
        borderRadius: 30,
    },
    altDayButton:{
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderColor: colors.pcian,
    },
    dayText: {
        color: '#383838',
        fontSize: 25,
        fontFamily: montserrat.semiBold
    },
    collapsible: {
        borderColor: '#383838',
        paddingHorizontal: 15,
        paddingTop: 13,
        paddingBottom: 13,
    },
    scheduleContainer: {
        padding: '4%',
        backgroundColor: colors.pcian,
        borderRadius: 17
    },
    rows: {
        height: '80%'
    },
    textTable: {
        color: colors.offwhite,
        fontSize: 16,
        fontFamily: montserrat.medium,
        textAlign: 'center',
        flex: 1,
    },
    headerText: {
        fontFamily: montserrat.semiBold,
        color: '#FFFFFF',
    },
    tableContainer: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 8,
        overflow: 'hidden',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: colors.pcian,
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    tableRow: {
        flexDirection: 'row',
        backgroundColor: colors.pcian,
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    firstColumn: {
        borderRightWidth: 1,
        borderRightColor: '#E0E0E0',
        paddingRight: 8,
    },
    dayButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0,
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    tableBorder: {
        borderWidth: 2,
        borderColor: 'white'
    },
    hiddenCollapsible: {
        display: 'none'
    }
});

export { scheduleStyle };