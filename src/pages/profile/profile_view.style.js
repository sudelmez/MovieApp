/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.commonColor.backgroundColor,
        flex: 1,
        alignItems: 'center',
    },
    headline: {
        margin: 30,
        fontSize: 50,
        color: colors.commonColor.commonWhite,
    },
    text: {
        fontSize: 30,
        color: colors.commonColor.commonWhite,
    },
    iconContainer: {
        marginTop: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
}
);
export default styles;
