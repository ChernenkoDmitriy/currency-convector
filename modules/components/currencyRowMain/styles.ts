import { StyleSheet } from 'react-native';
import { colors } from '../../../src/theme/colors';

export const styles = StyleSheet.create({
    container: {
        minHeight: 70,
        flex:1,
        width: '100%',
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    containerLogo: {
        paddingVertical: 4,
        height: '100%',
        width: 70,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logo: {
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    symbol: {
        color: colors.regularText,
        fontSize: 30,
        lineHeight: 34,
    },
    textWrapper: {
        flex: 1,
        alignItems: 'flex-end'
    },
    amountText: {
        color: colors.regularText,
        fontSize: 30,
        lineHeight: 34,
    },
}); 
