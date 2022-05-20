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
            justifyContent: 'center'
        },
        logo: {
            width: 40,
            height: 26,
            justifyContent: 'center',
            alignItems: 'center',
        },
        symbol: {
            marginTop: 15,
            color: colors.regularText,
            fontSize: 18,
            lineHeight: 22,
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
