import { StyleSheet } from "react-native";
import { colors } from "@/src/constants/colors";
import { montserrat } from "@/src/constants/montserrat";

export const selectUserTypeStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '10%',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.offwhite
    },
    title: {
        marginBottom: '25%',
        textAlign: 'center',
        fontSize: 40,
        color: colors.pcian,
        fontFamily: montserrat.bold
    },
    topSpot:{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1000
    },
    bottomSpot:{
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 1000
    },
    girlSvg: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 1000
    },
    containerButtons: {
        width: '100%',
        flex: 0,
        flexDirection: 'column'
    },
    button: {
        flex: 0,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50,
        paddingVertical: '4%',
        backgroundColor: colors.pcianalt,
        zIndex: 1000
    },
    textButton: {
        width: '100%',
        textAlign: 'center',
        fontSize: 22,
        color: colors.offwhite,
        fontFamily: montserrat.bold
    }
});