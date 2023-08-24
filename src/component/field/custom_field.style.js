/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';


export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.dark.gray,
        backgroundColor: colors.commonColor.commonWhite,
        marginTop: 30,
        marginHorizontal: 20,
        padding: 15,
        shadowColor: colors.commonColor.commonBlack,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.50,
        shadowRadius: 10,

        elevation: 5,
    },
    errorText: {
        color: colors.commonColor.activeColor,
        // ... any other styling properties you want for the error text
    },
});
