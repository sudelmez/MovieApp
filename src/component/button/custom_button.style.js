/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';
import device from '../../constants/Layout';


export default StyleSheet.create({
    container: {
        backgroundColor: colors.dark.gray,
        height: 50,
        width: device.window.width * 4 / 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:colors.dark.gray,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 100,
        shadowColor: colors.commonColor.commonBlack,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.50,
        shadowRadius: 10,

        elevation: 5,
    },
    text: {
        color: 'black',
    },
});
