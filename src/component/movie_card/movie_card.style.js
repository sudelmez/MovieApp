/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';


export default StyleSheet.create({
    movieItem: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    image: {
        width: 150,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    movieName: {
        marginTop: 5,
        fontSize: 16,
        textAlign: 'center',
        color: colors.commonColor.commonWhite,
    },
});
