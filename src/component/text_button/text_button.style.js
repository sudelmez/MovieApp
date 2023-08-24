/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';
import device from '../../constants/Layout';

export default StyleSheet.create({
    buttonContainer: {
        height: 50,
        width: device.window.width * 4 / 5,
        borderColor: colors.dark.gray,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    buttonText: {
        color: colors.commonColor.commonWhite,
        textAlign: 'center',
        fontSize: 16,
    },
});
