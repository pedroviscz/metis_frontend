import { StyleSheet } from "react-native";
import { colors } from "@/src/constants/colors";
import { montserrat } from "@/src/constants/montserrat";

export const loginInputStyle = StyleSheet.create({
    containerInput: {
        flex: 0,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.pcian,
        backgroundColor: 'transparent'
    },
    textInput: {
        flex: 6,
        alignSelf: 'stretch',
        zIndex: 1,
        fontSize: 16,
        paddingVertical: '4%',
        paddingRight: '4%',
        color: colors.gray,
        fontFamily: montserrat.bold
    }
})