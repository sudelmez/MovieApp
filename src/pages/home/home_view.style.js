/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.commonColor.backgroundColor,
        flex:1,
    },
    headline:{
        fontSize:30,
        color:colors.commonColor.commonWhite,
        margin:20,
    },
}
);
export default styles;
