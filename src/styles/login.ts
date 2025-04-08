import { StyleSheet } from "react-native";
import { colors } from "@/src/constants/colors";
import { montserrat } from "@/src/constants/montserrat";

export const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.offwhite,
        paddingHorizontal: '7.5%',
        paddingBottom: '15%',
    },
    containerTop: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    conatinerIntro: {
        flex: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '15%',
    },
    containerButtons: {
        flex: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1600
    },
    title: {
        fontSize: 50,
        color: colors.pcian,
        textAlign: 'center',
        fontFamily: montserrat.bold
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        color: colors.babyblue,
        fontFamily: montserrat.bold
    },
    forgotPassLink: {
        textAlign: 'center',
        color: colors.pcian,
        textDecorationLine: 'underline',
        textDecorationColor: colors.pcian,
        fontFamily: montserrat.bold
    },
    button: {
        width: '100%',
        paddingVertical: '4%',
        marginBottom: '10%',
        borderRadius: 50,
        backgroundColor: colors.pcian,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 22,
        color: "#FFFFFF",
        fontFamily: montserrat.semiBold
    },
    changeLink: {
        alignSelf: 'flex-end',
        textAlign: 'center',
        color: colors.pcian,
        textDecorationLine: 'underline',
        textDecorationColor: colors.pcian,
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
});