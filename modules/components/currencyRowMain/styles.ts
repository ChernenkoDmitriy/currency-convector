import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            minHeight: 70,
            flex: 1,
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
            borderColor: colors.borderCurrency,
            borderWidth: 1,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
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
    return styles;
}
